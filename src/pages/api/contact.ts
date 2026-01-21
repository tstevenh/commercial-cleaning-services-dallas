import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';
import { getBrand } from '../../lib/brand';

export const prerender = false;

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  projectType: string;
  timeline?: string;
  details?: string;
  turnstileToken: string;
}

/**
 * Verify Cloudflare Turnstile token server-side
 */
async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = import.meta.env.TURNSTILE_SECRET || import.meta.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error('Turnstile secret not configured');
    return false;
  }

  try {
    const formData = new FormData();
    formData.append('secret', secret);
    formData.append('response', token);

    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const outcome = await result.json();
    return outcome.success;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

/**
 * Send lead data to Zapier webhook with retry logic
 */
async function sendToZapier(leadData: any): Promise<boolean> {
  const webhookUrl = import.meta.env.ZAPIER_WEBHOOK;

  if (!webhookUrl) {
    console.warn('Zapier webhook not configured, skipping');
    return false;
  }

  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 second timeout

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        console.log('Zapier webhook successful on attempt', attempt);
        return true;
      }

      console.warn(`Zapier attempt ${attempt} failed with status ${response.status}`);
    } catch (error) {
      console.error(`Zapier attempt ${attempt} error:`, error);

      if (attempt < maxAttempts) {
        // Exponential backoff: 1s, 2s, 4s
        const delay = Math.pow(2, attempt - 1) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error('Zapier webhook failed after all attempts');
  return false;
}

/**
 * Send emails via SendGrid
 */
async function sendEmails(leadData: any, brand: any) {
  const apiKey = import.meta.env.SENDGRID_API_KEY;

  if (!apiKey) {
    console.error('SendGrid API key not configured');
    return;
  }

  sgMail.setApiKey(apiKey);

  const templateConfirmation = import.meta.env.SENDGRID_TEMPLATE_CONFIRMATION;
  const templateNotification = import.meta.env.SENDGRID_TEMPLATE_ID;
  const fromEmail = import.meta.env.SENDGRID_FROM_EMAIL || brand.email;
  const fromName = import.meta.env.SENDGRID_FROM_NAME || brand.company_name;
  const businessEmail = import.meta.env.BUSINESS_EMAIL;
  const contractorEmail = import.meta.env.CONTRACTOR_EMAIL;

  const templateData = {
    // Top-level fields
    name: leadData.name,
    company: leadData.company || 'N/A',
    email: leadData.email,
    phone: leadData.phone,
    projectType: leadData.projectType,
    timeline: leadData.timeline || 'N/A',
    details: leadData.details || 'N/A',
    submitted_date: leadData.submitted_date,

    // Nested under lead
    lead: {
      name: leadData.name,
      company: leadData.company || 'N/A',
      email: leadData.email,
      phone: leadData.phone,
      projectType: leadData.projectType,
      timeline: leadData.timeline || 'N/A',
      details: leadData.details || 'N/A',
    },

    // Brand data
    ...brand,
  };

  const emails = [];

  // Customer confirmation email
  if (templateConfirmation) {
    emails.push(
      sgMail.send({
        to: leadData.email,
        from: { email: fromEmail, name: fromName },
        templateId: templateConfirmation,
        dynamicTemplateData: templateData,
        subject: brand.subject || 'Thank you for contacting us',
      })
    );

    // Send same confirmation to rankhoundseo@gmail.com
    emails.push(
      sgMail.send({
        to: 'rankhoundseo@gmail.com',
        from: { email: fromEmail, name: fromName },
        templateId: templateConfirmation,
        dynamicTemplateData: templateData,
        subject: brand.subject || 'Thank you for contacting us',
      })
    );
  }

  // Notification emails to business and contractor
  if (templateNotification) {
    if (businessEmail) {
      emails.push(
        sgMail.send({
          to: businessEmail,
          from: { email: fromEmail, name: fromName },
          templateId: templateNotification,
          dynamicTemplateData: templateData,
          subject: `New Contact Form Submission from ${leadData.name}`,
        })
      );
    }

    if (contractorEmail) {
      emails.push(
        sgMail.send({
          to: contractorEmail,
          from: { email: fromEmail, name: fromName },
          templateId: templateNotification,
          dynamicTemplateData: templateData,
          subject: `New Contact Form Submission from ${leadData.name}`,
        })
      );
    }
  }

  // Send all emails, don't fail if some fail
  const results = await Promise.allSettled(emails);

  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      console.error(`Email ${index + 1} failed:`, result.reason);
    } else {
      console.log(`Email ${index + 1} sent successfully`);
    }
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.projectType || !body.turnstileToken) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields',
          success: false
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify Turnstile token
    const isValidToken = await verifyTurnstile(body.turnstileToken);
    if (!isValidToken) {
      return new Response(
        JSON.stringify({
          error: 'Invalid CAPTCHA token. Please try again.',
          success: false
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Format phone by stripping non-digits
    const phonePlain = body.phone.replace(/\D/g, '');

    // Get brand configuration
    const brand = getBrand();

    // Format submitted date
    const submittedDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    // Create lead data object
    const leadData = {
      name: body.name,
      company: body.company || '',
      email: body.email,
      phone: body.phone,
      phonePlain,
      projectType: body.projectType,
      timeline: body.timeline || '',
      details: body.details || '',
      submitted_date: submittedDate,
    };

    // Send to Zapier first (with retry logic, but don't fail request if it fails)
    await sendToZapier(leadData);

    // Send emails via SendGrid
    await sendEmails(leadData, brand);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        error: 'An error occurred processing your request. Please try again.',
        success: false
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
