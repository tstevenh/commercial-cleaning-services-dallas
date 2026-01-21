# Schema Markup Strategy
## Commercial Cleaning Services of Dallas

**Domain:** commercialcleaningservicesdallas.com
**Primary Schema Type:** LocalBusiness → CleaningService
**Testing Tool:** https://validator.schema.org/
**Rich Results Target:** Local business panel, FAQ rich snippets, Service listings

---

## Schema Overview

### Primary Schema Types Used

| Schema Type | Purpose | Implementation |
|-------------|---------|----------------|
| LocalBusiness | Local SEO, business info panel | All pages |
| CleaningService | Service-specific markup | Service pages |
| Service | Individual service offerings | Service pages |
| FAQPage | FAQ rich snippets | Pages with FAQs |
| BreadcrumbList | Breadcrumb rich results | All subpages |
| Organization | Brand knowledge panel | Homepage |
| AreaServed | Geographic targeting | All pages |
| PriceSpecification | Pricing signals | Service pages (optional) |
| AggregateRating | Review stars | When reviews available |

---

## Global Schema: LocalBusiness

### Implementation: Homepage + All Pages

```json
{
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "@id": "https://commercialcleaningservicesdallas.com/#organization",
  "name": "Commercial Cleaning Services of Dallas",
  "alternateName": "Commercial Cleaning Services of Dallas",
  "url": "https://commercialcleaningservicesdallas.com",
  "logo": "https://commercialcleaningservicesdallas.com/logo.png",
  "description": "Professional commercial cleaning services in Dallas, TX. Janitorial, office cleaning, and specialty facility maintenance for Dallas-Fort Worth businesses.",
  "telephone": "+1-214-XXX-XXXX",
  "email": "info@commercialcleaningservicesdallas.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.7767",
    "longitude": "-96.7970"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Dallas"
    },
    {
      "@type": "City",
      "name": "Highland Park"
    },
    {
      "@type": "City",
      "name": "University Park"
    },
    {
      "@type": "City",
      "name": "Farmers Branch"
    },
    {
      "@type": "City",
      "name": "Irving"
    },
    {
      "@type": "City",
      "name": "Garland"
    },
    {
      "@type": "City",
      "name": "Richardson"
    },
    {
      "@type": "City",
      "name": "Mesquite"
    },
    {
      "@type": "City",
      "name": "Carrollton"
    },
    {
      "@type": "City",
      "name": "Addison"
    },
    {
      "@type": "City",
      "name": "Plano"
    },
    {
      "@type": "City",
      "name": "The Colony"
    },
    {
      "@type": "City",
      "name": "Frisco"
    }
  ],
  "location": {
    "@type": "Place",
    "name": "Dallas-Fort Worth Metroplex"
  },
  "hasMap": "https://maps.google.com/?q=Commercial+Cleaning+Services+of+Dallas",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$-$$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Invoice"],
  "currenciesAccepted": "USD",
  "sameAs": [
    "https://www.facebook.com/commercialcleaningservicesdallas",
    "https://www.linkedin.com/company/commercialcleaningservicesdallas"
  ]
}
```

### Notes
- Add actual business address when known
- Add social media profiles as they're created
- `openingHoursSpecification` shows admin hours, not service hours (cleaning happens after hours)

---

## Service Page Schema

### Template: Individual Service Pages

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CleaningService",
      "@id": "https://commercialcleaningservicesdallas.com/janitorial-services/#service",
      "name": "Janitorial Services Dallas",
      "description": "Recurring janitorial and office cleaning services for Dallas businesses. Daily, weekly, or monthly cleaning schedules customized to your needs.",
      "url": "https://commercialcleaningservicesdallas.com/janitorial-services/",
      "provider": {
        "@id": "https://commercialcleaningservicesdallas.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dallas"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Janitorial Service Options",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Daily Janitorial Service"
            },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Weekly Office Cleaning"
            },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Monthly Commercial Cleaning"
            },
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should I have janitorial services for my Dallas office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Dallas offices benefit from daily or weekly janitorial services. High-traffic offices may need daily cleaning, while smaller offices with fewer employees may only need weekly service. We can customize a schedule based on your specific needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide cleaning supplies and equipment for janitorial services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we bring all necessary cleaning supplies, equipment, and materials. We use commercial-grade products and can accommodate eco-friendly or product preferences upon request."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in your Dallas janitorial services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our janitorial services include trash removal, dusting, surface disinfecting, restroom cleaning and restocking, floor care (vacuuming/mopping), and kitchen/breakroom cleaning. We customize based on your facility's specific needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer after-hours janitorial services in Dallas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most of our janitorial services are performed after business hours to avoid disrupting your operations. We can schedule cleaning for evenings, nights, or weekends based on your preference."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://commercialcleaningservicesdallas.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://commercialcleaningservicesdallas.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Janitorial Services",
          "item": "https://commercialcleaningservicesdallas.com/janitorial-services/"
        }
      ]
    }
  ]
}
```

### Service-Specific Variations

**Medical Facility Cleaning:**
```json
{
  "@type": "CleaningService",
  "name": "Medical Facility Cleaning Dallas",
  "description": "Healthcare-grade cleaning for medical facilities, clinics, and dental offices in Dallas. Following CDC and OSHA guidelines for infection control.",
  "serviceType": ["Medical Cleaning", "Healthcare Cleaning", "Infection Control"],
  "audience": {
    "@type": "Audience",
    "audienceType": ["Medical Facilities", "Clinics", "Dental Offices", "Healthcare Providers"]
  }
}
```

**Restaurant & Kitchen Cleaning:**
```json
{
  "@type": "CleaningService",
  "name": "Restaurant Cleaning Services Dallas",
  "description": "Commercial kitchen and restaurant cleaning in Dallas. Hood cleaning, grease trap maintenance, and full kitchen sanitation.",
  "serviceType": ["Restaurant Cleaning", "Kitchen Cleaning", "Hood Cleaning"],
  "audience": {
    "@type": "Audience",
    "audienceType": ["Restaurants", "Commercial Kitchens", "Food Service"]
  }
}
```

**Post-Construction Cleaning:**
```json
{
  "@type": "CleaningService",
  "name": "Post-Construction Cleaning Dallas",
  "description": "Construction cleanup and post-build cleaning services in Dallas. Remove dust, debris, and prepare new spaces for occupancy.",
  "serviceType": ["Post-Construction Cleaning", "Construction Cleanup", "Rough Cleaning", "Final Cleaning"],
  "audience": {
    "@type": "Audience",
    "audienceType": ["Contractors", "Property Managers", "Builders", "Developers"]
  }
}
```

---

## Location Page Schema (Dallas - Main Location)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CleaningService",
      "@id": "https://commercialcleaningservicesdallas.com/locations/dallas-tx/#service",
      "name": "Commercial Cleaning Dallas TX",
      "description": "Commercial cleaning services in Dallas, TX. Full facility maintenance, janitorial services, and specialty cleaning for Dallas businesses.",
      "url": "https://commercialcleaningservicesdallas.com/locations/dallas-tx/",
      "provider": {
        "@id": "https://commercialcleaningservicesdallas.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dallas"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve Dallas businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide commercial cleaning services throughout Dallas proper and surrounding Dallas County areas including Highland Park, University Park, and Farmers Branch."
          }
        },
        {
          "@type": "Question",
          "name": "What areas of Dallas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve the entire city of Dallas including downtown, Uptown, Deep Ellum, Design District, and all Dallas neighborhoods. We also serve nearby suburbs in the Dallas-Fort Worth metroplex."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://commercialcleaningservicesdallas.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://commercialcleaningservicesdallas.com/locations/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dallas TX",
          "item": "https://commercialcleaningservicesdallas.com/locations/dallas-tx/"
        }
      ]
    }
  ]
}
```

---

## Blog Post Schema

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://commercialcleaningservicesdallas.com/blog/how-choose-janitorial-service/#article",
      "headline": "How to Choose a Janitorial Service: A Dallas Business Guide",
      "description": "Learn what to look for when choosing a janitorial service in Dallas. Includes checklist, questions to ask, and red flags to avoid.",
      "image": "https://commercialcleaningservicesdallas.com/blog/how-choose-janitorial-service/featured.jpg",
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15",
      "author": {
        "@type": "Organization",
        "name": "Commercial Cleaning Services of Dallas",
        "url": "https://commercialcleaningservicesdallas.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Commercial Cleaning Services of Dallas",
        "logo": {
          "@type": "ImageObject",
          "url": "https://commercialcleaningservicesdallas.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://commercialcleaningservicesdallas.com/blog/how-choose-janitorial-service/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://commercialcleaningservicesdallas.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://commercialcleaningservicesdallas.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How to Choose a Janitorial Service",
          "item": "https://commercialcleaningservicesdallas.com/blog/how-choose-janitorial-service/"
        }
      ]
    }
  ]
}
```

---

## Organization Schema (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://commercialcleaningservicesdallas.com/#organization",
  "name": "Commercial Cleaning Services of Dallas",
  "url": "https://commercialcleaningservicesdallas.com",
  "logo": "https://commercialcleaningservicesdallas.com/logo.png",
  "description": "Professional commercial cleaning services serving Dallas-Fort Worth businesses since 2010. Licensed, bonded, and insured.",
  "foundingDate": "2010",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "32.7767",
      "longitude": "-96.7970"
    },
    "geoRadius": "50"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-214-XXX-XXXX",
    "contactType": "sales",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/commercialcleaningservicesdallas",
    "https://www.linkedin.com/company/commercialcleaningservicesdallas",
    "https://twitter.com/cleaningdallas"
  ]
}
```

---

## AggregateRating Schema (When Reviews Available)

```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "47",
  "bestRating": "5",
  "worstRating": "1",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Commercial Cleaning Services of Dallas"
  }
}
```

**Note:** Only include when you have legitimate reviews. Fabricated ratings violate Google guidelines.

---

## Service Catalog Schema (Services Index Page)

```json
{
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "name": "Commercial Cleaning Services Dallas - Complete Service List",
  "description": "Full range of commercial cleaning services available in Dallas, including janitorial services, comprehensive cleaning, project-based cleaning, disinfection, specialty cleaning, construction cleanup, healthcare environmental services, office building cleaning, industrial cleaning, and more.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Janitorial Services",
          "url": "https://commercialcleaningservicesdallas.com/services/janitorial-services/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Comprehensive Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/comprehensive-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Project-Based Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/project-based-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Disinfection Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/disinfection-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Specialty Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/specialty-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Construction Cleanup",
          "url": "https://commercialcleaningservicesdallas.com/services/construction-cleanup/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare Environmental Services",
          "url": "https://commercialcleaningservicesdallas.com/services/healthcare-environmental/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Office Building Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/office-building-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/industrial-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hospitality Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/hospitality-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Education Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/education-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Religious Building Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/religious-building-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Government Building Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/government-building-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Center Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/event-center-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Recreation and Shopping Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/recreation-shopping-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Banks and Financial Institutions Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/banks-financial-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Floor Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/residential-floor-cleaning/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Dealership Cleaning",
          "url": "https://commercialcleaningservicesdallas.com/services/car-dealership-cleaning/"
        }
      }
    ]
  }
}
```

---

## Implementation in Astro

### Component-Based Schema

```astro
---
// src/components/Schema.astro
interface Props {
  type: 'localBusiness' | 'service' | 'faq' | 'article' | 'breadcrumb';
  data?: Record<string, any>;
}

const { type, data = {} } = Astro.props;

const schemas = {
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    // ... global business schema
  },
  service: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CleaningService',
        ...data
      },
      {
        '@type': 'FAQPage',
        ...data.faq
      }
    ]
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.questions
  },
  article: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    ...data
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items
  }
};

const schema = schemas[type];
---
<script set:html={JSON.stringify(schema)} type="application/ld+json" />
```

### Usage in Pages

```astro
---
import Layout from '../layouts/Layout.astro';
import Schema from '../components/Schema.astro';

const frontmatter = {
  title: 'Janitorial Services Dallas',
  description: 'Professional janitorial services...',
  schema: {
    type: 'service',
    data: {
      name: 'Janitorial Services Dallas',
      description: '...',
      faq: {
        mainEntity: [
          // FAQ questions
        ]
      }
    }
  }
};
---

<Layout {...frontmatter}>
  <Schema {...frontmatter.schema} />
  <h1>{frontmatter.title}</h1>
  <!-- Page content -->
</Layout>
```

---

## Testing & Validation

### Before Publishing

1. **Use Google's Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test each page type

2. **Use Schema.org Validator**
   - https://validator.schema.org/
   - More comprehensive validation

3. **Check for Warnings**
   - Missing required fields
   - Invalid formats
   - Wrong data types

4. **Manual Search Console**
   - Submit for indexing
   - Check Enhancement reports

### Common Errors to Avoid

```
❌ Missing @context
❌ Wrong @type value (e.g., "Service" instead of "CleaningService")
❌ Missing required fields for the type
❌ Invalid date formats
❌ URLs without protocol (http:// or https://)
❌ Phone numbers without country code
❌ Mismatched NAP data (name/address/phone)
❌ Fake reviews or ratings
```

---

## Schema Priority by Page Type

| Page Type | Required Schema | Optional Schema |
|-----------|-----------------|-----------------|
| Homepage | LocalBusiness, Organization | AggregateRating |
| Service Page | CleaningService, FAQPage | BreadcrumbList |
| Blog Post | Article | BreadcrumbList |
| Location Page | CleaningService, FAQPage | BreadcrumbList |
| About Page | Organization | - |
| Contact Page | LocalBusiness | - |
| Services Index | CleaningService (catalog) | - |

---

## Rich Results Targets

### Primary Goals

1. **Local Business Panel**
   - Schema: LocalBusiness
   - Trigger: Business name + location searches
   - Shows: Address, phone, hours, reviews, map

2. **FAQ Rich Snippets**
   - Schema: FAQPage
   - Trigger: Question-based queries
   - Shows: Question + answer dropdown

3. **Breadcrumbs**
   - Schema: BreadcrumbList
   - Trigger: Category-style queries
   - Shows: Page hierarchy in results

4. **Sitelinks**
   - Trigger: Brand searches + site structure
   - Enhanced by: Clear site hierarchy, internal linking

---

## Maintenance & Updates

### Quarterly Schema Review

```
[ ] Add new services to hasOfferCatalog
[ ] Update hours if changed
[ ] Add new service area pages
[ ] Remove discontinued services
[ ] Update ratings/reviews schema
[ ] Check for schema.org updates
[ ] Validate with Google tools
[ ] Fix any Search Console warnings
```

---

*This schema strategy aligns with Google's structured data guidelines and supports the overall SEO content architecture. Implement via Astro components for consistency and maintainability.*
