import { useState, useRef, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import servicesData from '../data/services.json';

interface ContactFormProps {
  prefillProjectType?: string;
  endpoint?: string;
}

export default function ContactForm({
  prefillProjectType = '',
  endpoint = '/api/contact'
}: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<any>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    details: '',
  });

  const [turnstileToken, setTurnstileToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [filteredServices, setFilteredServices] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Extract service names (remove "Dallas" suffix for cleaner display)
  const serviceOptions = servicesData
    .map(service => service.title.replace(' Dallas', '').trim())
    .sort();

  // Handle prefill from query string or prop
  useEffect(() => {
    if (prefillProjectType) {
      setFormData(prev => ({ ...prev, projectType: prefillProjectType }));
    } else {
      // Check URL query params
      const urlParams = new URLSearchParams(window.location.search);
      const subject = urlParams.get('subject');
      if (subject) {
        setFormData(prev => ({ ...prev, projectType: subject }));
      }
    }
  }, [prefillProjectType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Phone input validation - only allow digits and formatting characters
    if (name === 'phone') {
      const cleanValue = value.replace(/[^0-9\s\(\)\-\+]/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    // Project Type typeahead
    if (name === 'projectType') {
      if (value.length > 0) {
        const filtered = serviceOptions.filter(service =>
          service.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredServices(filtered);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    }
  };

  const handleSuggestionClick = (service: string) => {
    setFormData(prev => ({ ...prev, projectType: service }));
    setShowSuggestions(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setSubmitStatus({ type: 'error', message: 'Please complete the CAPTCHA verification.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });

        // Reset form
        formRef.current?.reset();
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          timeline: '',
          details: '',
        });

        // Reset Turnstile
        setTurnstileToken('');
        turnstileRef.current?.reset();

        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = '/thank-you';
        }, 2000);
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.projectType && turnstileToken;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Name - Required */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Company - Optional */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Email - Required */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Phone - Required */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Project Type - Required with Typeahead */}
      <div className="relative">
        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
          Project Type <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          onFocus={() => formData.projectType && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          required
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-accent"
          autoComplete="off"
        />
        {showSuggestions && filteredServices.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border-2 border-black max-h-60 overflow-y-auto">
            {filteredServices.map((service, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(service)}
                className="px-4 py-2 hover:bg-cream cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Timeline - Optional */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select a timeline</option>
          <option value="Immediate">Immediate</option>
          <option value="45 days">45 days</option>
          <option value="180 days">180 days</option>
          <option value="Planning phase">Planning phase</option>
        </select>
      </div>

      {/* Details - Optional */}
      <div>
        <label htmlFor="details" className="block text-sm font-medium mb-2">
          Additional Details
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Turnstile CAPTCHA */}
      <div className="flex justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey={import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => setTurnstileToken('')}
          onExpire={() => setTurnstileToken('')}
          options={{
            theme: 'light',
          }}
        />
      </div>

      {/* Submit Status */}
      {submitStatus && (
        <div className={`p-4 border-2 ${
          submitStatus.type === 'success'
            ? 'bg-green-50 border-green-500 text-green-800'
            : 'bg-red-50 border-red-500 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className="w-full bg-accent text-white px-8 py-4 border-2 border-black font-bold hover:bg-accent-light disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
      </button>
    </form>
  );
}
