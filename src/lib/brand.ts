import siteData from '../data/site.json';

export interface BrandConfig {
  site_url: string;
  company_name: string;
  logo_url: string;
  call_phone: string;
  city_state: string;
  address: string;
  email: string;
  subject: string;
}

/**
 * Get brand configuration for SendGrid email templates
 * Returns standardized brand data with safe defaults
 */
export function getBrand(): BrandConfig {
  return {
    site_url: siteData.url || 'https://commercialcleaningservicesdallas.com',
    company_name: siteData.name || 'Commercial Cleaning Services of Dallas',
    logo_url: 'https://commercialcleaningservicesdallas.com/logo.png',
    call_phone: siteData.phone || '(214) 555-5555',
    city_state: `${siteData.address.city || 'Dallas'}, ${siteData.address.state || 'TX'}`,
    address: '123 Main St.',
    email: siteData.email || 'info@commercialcleaningservicesdallas.com',
    subject: 'New Contact Form Submission',
  };
}
