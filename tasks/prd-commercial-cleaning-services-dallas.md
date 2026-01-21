# PRD: Commercial Cleaning Services of Dallas Website

## 1. Introduction / Overview

This PRD defines the requirements for building an SEO-first, rank & rent local services website for commercial cleaning services in Dallas, Texas.

**Domain:** commercialcleaningservicesdallas.com
**Business Name:** Commercial Cleaning Services of Dallas
**Market:** Dallas, TX and surrounding suburbs
**Project Type:** Rank & Rent lead generation site

The website will target commercial cleaning service keywords in Dallas and its suburbs (Plano, Irving, Garland, Frisco, Richardson, etc.), capturing organic search traffic and converting visitors into leads via phone calls and contact form submissions.

**Note:** This site focuses on Dallas and Dallas suburbs only. Fort Worth is a separate major city and is NOT included in this project scope.

**Reference Sites (structure only):**
- https://www.commercialpaintersdallas.com/
- https://www.commercialpaintingfortworth.com/

---

## 2. Goals and Success Metrics

### Primary Goals

- Rank on page 1 of Google for "commercial cleaning dallas" and related P0 keywords within 6-12 months
- Generate 20+ qualified leads per month via phone and contact form
- Achieve Core Web Vitals "Good" scores on all pages
- Build topical authority for commercial cleaning services in Dallas area

### Success Metrics

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Organic traffic (homepage) | 500+ monthly sessions | 12 months |
| Organic traffic (core service pages) | 200-500 monthly sessions each | 12 months |
| Form submission rate | 3-5% | Ongoing |
| Phone call rate | 2-4% | Ongoing |
| Overall conversion rate | 5-9% | Ongoing |
| Core Web Vitals | All "Good" | Launch |
| Page load time | < 2 seconds | Launch |

---

## 3. Problem Statement

Dallas area businesses searching for commercial cleaning services encounter:
- Low-quality, outdated competitor websites
- Generic national directories that don't serve local needs
- Difficulty finding specialized cleaning services (medical, restaurant, post-construction)

This website solves these problems by providing:
- Comprehensive, locally-focused content for every commercial cleaning service type
- Easy-to-navigate service pages matching specific search intent
- Clear conversion paths (phone, form) for immediate lead capture
- Trust signals (licensed, bonded, insured messaging) that competitors lack

---

## 4. Target Users and Search Intent Narrative

### Primary Users

1. **Office Managers / Facilities Managers**
   - Search: "office cleaning dallas", "janitorial services near me"
   - Need: Recurring cleaning contracts, after-hours service
   - Decision factors: Reliability, references, insurance

2. **Property Managers**
   - Search: "move out cleaning dallas", "post construction cleaning"
   - Need: One-time or turnover cleaning services
   - Decision factors: Speed, availability, quality

3. **Healthcare Administrators**
   - Search: "medical facility cleaning dallas", "dental office cleaning"
   - Need: Compliance-focused, specialized sanitization
   - Decision factors: Certifications, protocols, experience

4. **Restaurant Owners**
   - Search: "restaurant cleaning dallas", "hood cleaning dallas"
   - Need: Health code compliance, kitchen deep cleaning
   - Decision factors: Expertise, scheduling flexibility

5. **General Contractors**
   - Search: "post construction cleaning dallas", "construction cleanup"
   - Need: Final clean before handoff
   - Decision factors: Turnaround time, thoroughness

### Search Intent Breakdown

| Intent Type | Percentage | Example Keywords | Page Target |
|-------------|------------|------------------|-------------|
| Commercial (ready to hire) | 80% | "commercial cleaning dallas", "janitorial services dallas" | Service pages |
| Navigational (comparing) | 20% | "best commercial cleaning dallas", "top rated janitorial" | Homepage, About |

---

## 5. Information Architecture and Page Inventory

### Site Structure Overview

```
/                                    # Homepage
├── /about                           # About page
├── /contact                         # Contact page
├── /services                        # Services index
│   ├── /services/janitorial-services
│   ├── /services/comprehensive-cleaning
│   ├── /services/project-based-cleaning
│   ├── /services/disinfection-cleaning
│   ├── /services/specialty-cleaning
│   ├── /services/construction-cleanup
│   ├── /services/healthcare-environmental
│   ├── /services/office-building-cleaning
│   ├── /services/industrial-cleaning
│   ├── /services/hospitality-cleaning
│   ├── /services/education-cleaning
│   ├── /services/religious-building-cleaning
│   ├── /services/government-building-cleaning
│   ├── /services/event-center-cleaning
│   ├── /services/recreation-shopping-cleaning
│   ├── /services/banks-financial-cleaning
│   ├── /services/residential-floor-cleaning
│   └── /services/car-dealership-cleaning
├── /locations                       # Locations index (Dallas + 12 nearest suburbs)
│   ├── /locations/dallas-tx
│   ├── /locations/highland-park-tx
│   ├── /locations/university-park-tx
│   ├── /locations/farmers-branch-tx
│   ├── /locations/irving-tx
│   ├── /locations/garland-tx
│   ├── /locations/richardson-tx
│   ├── /locations/mesquite-tx
│   ├── /locations/carrollton-tx
│   ├── /locations/addison-tx
│   ├── /locations/plano-tx
│   ├── /locations/the-colony-tx
│   └── /locations/frisco-tx
└── /thank-you                       # Form submission confirmation (noindex)
```

### Page Count Summary

| Page Type | Count | Priority |
|-----------|-------|----------|
| Core Pages | 5 | P0-P1 |
| Service Pages | 18 | P0-P2 |
| Location Pages | 13 | P1-P2 |
| Utility Pages | 1 | N/A |
| **Total** | **37** | |

**Core Pages:** Homepage, About, Contact, Services Index, Locations Index

**Location Pages (Dallas + 12 nearest suburbs):**
- Dallas, Highland Park, University Park, Farmers Branch, Irving, Garland, Richardson, Mesquite, Carrollton, Addison, Plano, The Colony, Frisco

### Complete Page Inventory

See `./data-for-website/seo-content-plan/page_inventory.csv` for full details including:
- URL slugs
- Target keywords
- Word count targets
- Content format
- Parent page relationships

---

## 6. User Stories

### US-001: Project Setup and Configuration ✅
**Description:** As a developer, I need to set up the Astro project with proper configuration so that the site builds correctly and deploys to Vercel.

**Acceptance Criteria:**
- [x] Astro project initialized with latest stable version
- [x] TypeScript configured
- [x] Tailwind CSS installed and configured
- [x] Vercel adapter installed for static deployment
- [x] Project builds without errors (`npm run build`)
- [x] `npm run typecheck` passes

---

### US-002: Global Layout and Navigation ✅
**Description:** As a user, I want consistent navigation across all pages so I can easily find services and contact information.

**Acceptance Criteria:**
- [x] Header component with logo (links to homepage)
- [x] Main navigation: Services (dropdown), Locations (dropdown), About, Contact
- [x] Phone number displayed in header (clickable on mobile)
- [x] "Request an Estimate" CTA button in header
- [x] Sticky navigation on scroll
- [x] Mobile hamburger menu with full navigation
- [x] Footer with service links, location links, contact info, legal links
- [x] `npm run typecheck` passes
- [x] **Verify in browser using frontend-design skill**

---

### US-003: Homepage Build ✅
**Description:** As a user landing on the homepage, I want to immediately understand what services are offered and how to contact the business.

**Acceptance Criteria:**
- [x] Hero section with H1: "Commercial Cleaning Services in Dallas, Texas"
- [x] Subheadline with value proposition
- [x] Primary CTA button and phone number in hero
- [x] Trust signals section (licensed, bonded, insured badges)
- [x] Service overview grid (8-12 services with links)
- [x] "Why Choose Us" section with 4-6 benefit blocks (text-based, no icons)
- [x] Service areas section listing Dallas and 8 suburbs
- [x] Final CTA section with form embed or contact link
- [x] FAQ section with 4-6 questions (FAQ schema ready)
- [x] **NO testimonials section** (client requirement: no fake testimonials anywhere)
- [x] Word count: 1,500-2,000 words
- [x] `npm run typecheck` passes
- [x] **Verify in browser using frontend-design skill**

---

### US-004: Service Page Template ✅
**Description:** As a developer, I need a reusable service page template so all 29 service pages are consistent and SEO-optimized.

**Acceptance Criteria:**
- [x] Template accepts frontmatter: title, description, targetKeyword, wordCount, parentPage
- [x] H1 follows pattern: "[Service Name] in Dallas, Texas"
- [x] Sections: Overview, What's Included, Process, Industries Served, Why Choose Us, Pricing Factors, Service Area, FAQ, CTA, Related Services
- [x] Breadcrumb navigation component
- [x] Related services sidebar/section with 3-4 links
- [x] CTA buttons throughout (minimum 2 per page)
- [x] FAQ section supports schema markup
- [x] `npm run typecheck` passes

---

### US-005: Core Service Pages (P0) ✅
**Description:** As a user searching for commercial cleaning in Dallas, I want detailed service pages that answer my questions and help me request a quote.

**Acceptance Criteria:**
- [x] `/services/janitorial-services` - 1,800-2,200 words (P0 hub service)
- [x] Each page has unique content (no duplication)
- [x] Primary keyword in H1, first 100 words, meta title, URL
- [x] Internal links to related services (2-4 per page)
- [x] FAQ section with 6-10 questions
- [x] `npm run typecheck` passes
- [x] **Verify in browser using frontend-design skill**

---

### US-006: Specialized Service Pages (P1) ✅
**Description:** As a user with specific cleaning needs, I want dedicated pages for my industry so I can see relevant expertise.

**Acceptance Criteria:**
- [x] All 17 P1 service pages built per page_inventory.csv
- [x] Services include: comprehensive-cleaning, project-based-cleaning, disinfection-cleaning, specialty-cleaning, construction-cleanup, healthcare-environmental, office-building-cleaning, industrial-cleaning, hospitality-cleaning, education-cleaning, religious-building-cleaning, government-building-cleaning, event-center-cleaning, recreation-shopping-cleaning, banks-financial-cleaning, residential-floor-cleaning, car-dealership-cleaning
- [x] Parent-child relationships reflected in breadcrumbs
- [x] Cross-linking between related services per internal_linking_rules.md
- [x] Word counts per page_inventory.csv specifications
- [x] `npm run typecheck` passes
- [x] **Verify in browser using frontend-design skill**

---

### US-007: Location Page Template ✅
**Description:** As a developer, I need a location page template to generate city-specific landing pages for Dallas suburbs.

**Acceptance Criteria:**
- [x] Template accepts frontmatter: city, county, targetKeyword, nearbyAreas
- [x] H1 follows pattern: "Commercial Cleaning Services in [City], Texas"
- [x] Sections: Overview, Services Offered, Why Choose Us, Local Areas Served, CTA
- [x] Links to main service pages (3-5 key services)
- [x] Links to nearby location pages (1-2)
- [x] County-specific messaging (Collin, Dallas, Denton)
- [x] Word count: 1,200-1,500 words
- [x] `npm run typecheck` passes

---

### US-008: All Location Pages ✅
**Description:** As a user in a Dallas suburb, I want to find a local commercial cleaning service page for my city.

**Acceptance Criteria:**
- [x] `/locations` index page listing all 13 service areas
- [x] All 13 location pages built (Dallas + 12 nearest suburbs):
  - /locations/dallas-tx, /locations/highland-park-tx, /locations/university-park-tx
  - /locations/farmers-branch-tx, /locations/irving-tx, /locations/garland-tx
  - /locations/richardson-tx, /locations/mesquite-tx, /locations/carrollton-tx
  - /locations/addison-tx, /locations/plano-tx, /locations/the-colony-tx, /locations/frisco-tx
- [x] Each location page has unique, deep, rich content (non-boilerplate)
- [x] Word count: 1,200-1,500 words per location page
- [x] `npm run typecheck` passes
- [x] **Verify in browser using frontend-design skill**

---

### US-009: About Page ✅
**Description:** As a user evaluating the business, I want to learn about the company to build trust before contacting them.

**Acceptance Criteria:**
- [x] H1: "About Commercial Cleaning Services of Dallas"
- [x] Sections: Mission & Values, What Sets Us Apart, Service Areas, Quality Guarantee, CTA
- [x] **NO fake history** (no "serving since 1996" or similar made-up claims)
- [x] **NO fake team members** (no team section with made-up people/photos)
- [x] Trust elements: certifications, insurance, service commitment
- [x] Word count: 1,200-1,500 words
- [x] `npm run typecheck` passes
- [x] **Verify in browser using frontend-design skill**

---

### US-010: Contact Page with Form ✅
**Description:** As a user ready to request a quote, I want a simple contact form that sends my information to the business.

**Acceptance Criteria:**
- [x] H1: "Get Your Free Commercial Cleaning Quote"
- [x] Contact form with fields: Name*, Business Name*, Email*, Phone*, Timeline*, Additional Information
- [x] Form submission via Formspree (or similar service)
- [x] Form validation (required fields, email format)
- [x] Success redirect to /thank-you page
- [x] Direct contact options: phone number, email address
- [x] Business hours displayed
- [x] Service area list (Dallas + 8 suburbs)
- [x] "What to Expect" section (response time, process)
- [x] Word count: 500-800 words
- [x] `npm run typecheck` passes
- [x] **Verify in browser using frontend-design skill**

---

### US-011: Thank You Page ✅
**Description:** As a user who submitted a form, I want confirmation that my request was received.

**Acceptance Criteria:**
- [x] `/thank-you` page with confirmation message
- [x] Response time expectation ("We'll contact you within 24 hours")
- [x] Link back to homepage
- [x] `noindex` meta tag (exclude from search)
- [x] `npm run typecheck` passes

---

### US-012: Services Index Page ✅
**Description:** As a user exploring all services, I want a complete list of services organized by category.

**Acceptance Criteria:**
- [x] H1: "All Commercial Cleaning Services Dallas"
- [x] Services organized by category (Medical, Restaurant, Floor Care, etc.)
- [x] Each service links to its dedicated page
- [x] Brief description for each service
- [x] Word count: 800-1,000 words
- [x] `npm run typecheck` passes
- [x] **Verify in browser using frontend-design skill**

---

### US-013: Schema Markup Implementation ✅
**Description:** As a search engine, I need structured data to understand and display rich results for this business.

**Acceptance Criteria:**
- [x] Global LocalBusiness/CleaningService schema on all pages
- [x] Organization schema on homepage
- [x] Service schema on each service page
- [x] FAQPage schema on pages with FAQ sections
- [x] BreadcrumbList schema on all subpages
- [x] Schema validates in Google Rich Results Test
- [x] `npm run typecheck` passes

---

### US-014: SEO Meta Tags and Technical SEO ✅
**Description:** As a search engine crawler, I need proper meta tags and technical SEO elements to index pages correctly.

**Acceptance Criteria:**
- [x] Unique title tag per page (50-60 characters)
- [x] Unique meta description per page (150-160 characters)
- [x] Canonical URL on every page (self-referencing)
- [x] Open Graph tags (og:title, og:description, og:image, og:url)
- [x] Twitter Card tags
- [x] XML sitemap generated at `/sitemap.xml`
- [x] `robots.txt` file
- [x] Favicon and apple-touch-icon
- [x] 404 page
- [x] `npm run typecheck` passes

---

### US-015: Performance Optimization ✅
**Description:** As a user on any device, I want the site to load quickly and score well on Core Web Vitals.

**Acceptance Criteria:**
- [x] All images optimized (WebP format, lazy loading)
- [x] CSS and JS minimized
- [x] No render-blocking resources
- [x] Fonts optimized (preload, font-display: swap)
- [x] Lighthouse Performance score > 90
- [x] LCP < 2.5s, FID < 100ms, CLS < 0.1
- [x] Mobile-first responsive design
- [x] `npm run typecheck` passes

---

### US-016: Internal Linking Implementation ✅
**Description:** As a search engine, I need proper internal linking to understand site structure and pass authority between pages.

**Acceptance Criteria:**
- [x] Hub-and-spoke linking per `internal_linking_rules.md`
- [x] Homepage links to all P0 service pages
- [x] Service hub pages link to all sub-services
- [x] Every page has 2+ inbound internal links (no orphans)
- [x] Related services component on service pages
- [x] Breadcrumb navigation on all subpages
- [x] Footer navigation with categorized service links
- [x] Anchor text uses descriptive keywords (not "click here")
- [x] `npm run typecheck` passes

---

## 7. Functional Requirements

### Navigation & Layout
- **FR-1:** Header must display logo, main navigation, phone number, and "Request an Estimate" CTA
- **FR-2:** Navigation must be sticky on scroll
- **FR-3:** Mobile navigation must use hamburger menu with full service/location dropdowns
- **FR-4:** Footer must include service links, location links, contact info, and legal pages
- **FR-5:** Breadcrumb navigation must appear on all pages except homepage

### Service Pages
- **FR-6:** Each service page must have a unique H1 containing the target keyword
- **FR-7:** Each service page must display at least 2 CTA buttons (hero and before footer)
- **FR-8:** Related services section must show 3-4 contextually relevant service links
- **FR-9:** FAQ section must use collapsible accordions with schema-ready markup

### Location Pages
- **FR-10:** Location pages must link to 3-5 main service pages
- **FR-11:** Location pages must reference the specific county (Collin, Dallas, Denton)
- **FR-12:** Locations index must organize cities by county

### Contact & Lead Capture
- **FR-13:** Contact form must submit to Formspree (or equivalent) and forward to email
- **FR-14:** Form must validate required fields before submission
- **FR-15:** Successful form submission must redirect to /thank-you page
- **FR-16:** Phone number must be clickable (tel: link) on all devices
- **FR-17:** Phone number must appear in header on all pages

### SEO & Schema
- **FR-18:** Every page must have unique title tag and meta description
- **FR-19:** Every page must have self-referencing canonical URL
- **FR-20:** LocalBusiness schema must appear on every page
- **FR-21:** FAQPage schema must appear on pages with FAQ sections
- **FR-22:** BreadcrumbList schema must appear on all subpages
- **FR-23:** XML sitemap must be auto-generated and include all indexable pages
- **FR-24:** /thank-you page must have `noindex` meta tag

### Performance
- **FR-25:** All images must use modern formats (WebP) with lazy loading
- **FR-26:** Site must achieve Lighthouse Performance score > 90
- **FR-27:** All pages must load in under 2 seconds on 4G connection

### Content
- **FR-28:** All content must follow word count specifications in page_inventory.csv
- **FR-29:** Primary keyword must appear in H1, first 100 words, and URL slug
- **FR-30:** No placeholder content (lorem ipsum) in production build

---

## 8. Non-Goals / Out of Scope

The following are explicitly **NOT** included in this project:

- **No Fort Worth** - Fort Worth is a separate city, not a Dallas suburb. This site focuses on Dallas and Dallas suburbs only.
- **No blog content** - Blog can be added in a future phase
- **No fake testimonials** - No testimonials anywhere on the site (client requirement)
- **No fake team members** - No team section with made-up people/photos
- **No fake history** - No "serving since 1996" or similar made-up claims
- **No icons** - No icon libraries (especially no lucide-react), use text-based design
- **No CRM integration** - Leads go directly to email
- **No call tracking** - Use standard phone number with placeholder
- **No online booking/scheduling** - Contact form and phone only
- **No chat widget** - Keep site lightweight
- **No WordPress or page builders** - Astro only
- **No client portal or login** - Public-facing site only
- **No e-commerce or payments** - Lead generation only
- **No multi-language support** - English only
- **No Google Maps embed** - Keep lightweight, use text addresses
- **No custom photography** - Stock images allowed
- **No video content** - Static content only (for now)
- **No A/B testing infrastructure** - Ship and iterate manually
- **No analytics implementation** - Owner will add separately
- **No Google Business Profile integration** - Separate from website

---

## 9. Design and Layout Requirements

### Design Philosophy
- Clean, professional appearance matching reference sites
- Mobile-first responsive design
- Minimal visual clutter - focus on content and CTAs
- Trust-building aesthetic (professional, not flashy)

### Reference Sites (Structure Only)
- https://www.commercialpaintersdallas.com/
- https://www.commercialpaintingfortworth.com/

### Layout Components

**Header:**
- Logo (left)
- Main navigation (center or right)
- Phone number (prominent)
- CTA button: "Request an Estimate"
- Sticky on scroll
- Mobile: hamburger menu

**Hero Section (Homepage):**
- Full-width background (stock image or solid color)
- H1 headline
- Subheadline (value proposition)
- CTA button + phone number
- Trust badges below

**Service Cards:**
- Icon or image
- Service name (H3)
- 2-3 sentence description
- "Learn More" link

**CTA Sections:**
- Contrasting background color
- Headline
- Brief text
- Button + phone number

**Footer:**
- 4-column layout (desktop)
- Logo and brief description
- Service links (categorized)
- Location links
- Contact info
- Legal links (Privacy, Terms)
- Copyright

### Typography
- Clean sans-serif font (system fonts or Google Fonts)
- H1: 36-48px
- H2: 28-36px
- H3: 20-24px
- Body: 16-18px
- Line height: 1.5-1.7

### Colors
- Primary: Professional blue or green (cleaning industry standard)
- Secondary: Complementary accent color
- Text: Dark gray (#333 or similar)
- Background: White and light gray sections
- CTA buttons: High contrast (orange, green, or blue)

### Spacing
- Consistent padding/margins using spacing scale
- Generous whitespace between sections
- Mobile-friendly tap targets (44px minimum)

### Icons
- **NO icons** in design (especially no lucide-react)
- Use text/typography-based layouts
- Simple CSS shapes or clean text instead of icons

**Note:** Use the **frontend-design** skill for all UI/design implementation tasks.

---

## 10. Technical Requirements (Astro-Specific)

### Framework & Stack
- **Framework:** Astro (latest stable version)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (static)
- **Form handling:** Formspree
- **Language:** TypeScript

### Project Structure
```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Navigation.astro
│   ├── MobileMenu.astro
│   ├── ServiceCard.astro
│   ├── CTASection.astro
│   ├── FAQ.astro
│   ├── Breadcrumbs.astro
│   ├── RelatedServices.astro
│   ├── ContactForm.astro
│   └── Schema.astro
├── layouts/
│   ├── BaseLayout.astro
│   ├── ServiceLayout.astro
│   └── LocationLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── thank-you.astro
│   ├── services/
│   │   ├── index.astro
│   │   └── [slug].astro (or individual files)
│   └── locations/
│       ├── index.astro
│       └── [slug].astro (or individual files)
├── content/
│   ├── services/
│   └── locations/
├── data/
│   ├── services.json
│   ├── locations.json
│   └── navigation.json
└── styles/
    └── global.css
```

### Routing
- Static routes for all pages (no SSR needed)
- Content collections or JSON data for service/location pages
- Clean URLs without trailing slashes (configure in Astro)

### Performance Requirements
- Static HTML output (no client-side JS required for core functionality)
- Minimal JavaScript (only for mobile menu toggle, form validation)
- Image optimization via Astro's built-in image handling
- CSS purging via Tailwind

### Build & Deploy
- `npm run build` generates static site
- Deploy to Vercel via Git integration
- Environment variables for Formspree endpoint

---

## 11. On-Page SEO Requirements

### Title Tags
**Format:** `[Primary Keyword]: [Benefit] | Commercial Cleaning Services of Dallas`

**Examples:**
- Homepage: `Commercial Cleaning Dallas: Reliable Facility Cleaning | Commercial Cleaning Services of Dallas`
- Service: `Janitorial Services Dallas: Recurring Office Cleaning | Commercial Cleaning Services of Dallas`
- Location: `Commercial Cleaning Plano TX: Collin County Services | Commercial Cleaning Services of Dallas`

**Rules:**
- 50-60 characters maximum
- Primary keyword front-loaded
- Unique per page

### Meta Descriptions
**Format:** `[Service description]. [Trust signal]. [CTA].`

**Example:** `Professional commercial cleaning services in Dallas, TX. Licensed, bonded, and insured. Get a free quote today.`

**Rules:**
- 150-160 characters
- Include primary keyword
- Include call-to-action
- Unique per page

### Heading Structure
```
H1: [Primary Keyword - Value Prop] (one per page)
  H2: [Service/Feature Section]
    H3: [Detail/Sub-point]
  H2: [Another Section]
    H3: [Sub-point]
  H2: Frequently Asked Questions
    H3: [Question 1]
    H3: [Question 2]
```

### Keyword Placement
- Primary keyword in H1 (once)
- Primary keyword in first 100 words
- Primary keyword in at least one H2
- Secondary keywords in H2s naturally
- Primary keyword in URL slug
- Primary keyword in meta description
- Primary keyword in image alt text (where relevant)

### Content Quality Standards
- Minimum word counts per page_inventory.csv
- No AI-isms: delve, comprehensive, leverage, landscape, navigate, crucial, vital
- Specific examples and numbers
- Dallas and suburbs local context throughout
- Honest limitations acknowledged
- Varied sentence structure

### Canonical URLs
- Self-referencing canonical on every page
- Format: `https://commercialcleaningservicesdallas.com/[path]/`

### Image Optimization
- Descriptive file names (e.g., `commercial-office-cleaning-dallas.webp`)
- Alt text with keyword where relevant
- Lazy loading for below-fold images
- WebP format with fallbacks

---

## 12. Schema Requirements

Based on `./data-for-website/seo-content-plan/schema_plan.md`:

### Global Schema (All Pages)
```json
{
  "@type": "CleaningService",
  "name": "Commercial Cleaning Services of Dallas",
  "url": "https://commercialcleaningservicesdallas.com",
  "telephone": "+1-214-XXX-XXXX",
  "address": { "addressLocality": "Dallas", "addressRegion": "TX" },
  "areaServed": [
    "Dallas", "Highland Park", "University Park", "Farmers Branch", "Irving",
    "Garland", "Richardson", "Mesquite", "Carrollton", "Addison", "Plano",
    "The Colony", "Frisco"
  ],
  "priceRange": "$$-$$$"
}
```

### Page-Specific Schema

| Page Type | Schema Types Required |
|-----------|----------------------|
| Homepage | LocalBusiness, Organization |
| Service Pages | CleaningService, FAQPage, BreadcrumbList |
| Location Pages | CleaningService, FAQPage, BreadcrumbList |
| About Page | Organization |
| Contact Page | LocalBusiness |
| Services Index | OfferCatalog |

### Implementation
- Use `<script type="application/ld+json">` in document head
- Create reusable Schema.astro component
- Validate with Google Rich Results Test before launch

---

## 13. Lead Capture Requirements

### Contact Form Fields
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | text | Yes | |
| Company | text | Yes | |
| Email | email | Yes | Validated format |
| Phone | tel | Yes | |
| Service Needed | select | No | Dropdown with service options |
| Square Footage | text | No | |
| Message | textarea | No | |

### Form Behavior
- Client-side validation before submit
- Submit to Formspree endpoint
- Redirect to /thank-you on success
- Error handling for failed submissions

### Formspree Setup
- Create Formspree account and form
- Add form endpoint to environment variable
- Configure email notifications

### Phone Number
- Placeholder: `(214) XXX-XXXX` (to be replaced)
- Format as clickable tel: link
- Display in header, hero, footer, contact page

### Email Address
- Placeholder: `info@commercialcleaningservicesdallas.com`
- Display on contact page

### Physical Address
- Placeholder: `[Street Address], Dallas, TX 75201`
- Display on contact page and in schema

---

## 14. Risks, Assumptions, and Constraints

### Assumptions
- Domain `commercialcleaningservicesdallas.com` is available/acquired
- Formspree free tier sufficient for initial lead volume
- Stock images acceptable for launch
- Content will be reviewed by human editor before final publish
- Phone/email/address placeholders will be replaced before launch

### Constraints
- **No backend** - Static site only, form handling via third-party
- **No CRM** - Leads forwarded directly to email
- **Budget-conscious** - Free/low-cost tools preferred (Formspree, Vercel free tier)
- **Single language** - English only
- **No user accounts** - Public-facing content only

### Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Content quality issues from AI generation | Medium | Medium | Human review before publish |
| Formspree rate limits | Low | Medium | Upgrade plan if needed |
| Stock images look generic | Medium | Low | Select industry-specific images |
| Competitor outranking | Medium | High | Follow SEO best practices, iterate |
| Core Web Vitals failures | Low | Medium | Performance testing during build |

---

## 15. QA Checklist

### Pre-Launch Checklist

**Content:**
- [ ] All 37 pages have content (no lorem ipsum)
- [ ] All content reviewed for AI-isms
- [ ] Word counts meet specifications
- [ ] Primary keywords placed correctly
- [ ] No broken internal links
- [ ] No spelling/grammar errors

**SEO:**
- [ ] Unique title tags on all pages
- [ ] Unique meta descriptions on all pages
- [ ] Canonical URLs set correctly
- [ ] XML sitemap generated and valid
- [ ] robots.txt file present
- [ ] Schema markup validates (Rich Results Test)
- [ ] No orphan pages (all pages have 2+ inbound links)
- [ ] 404 page works

**Functionality:**
- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] Thank you page displays after submission
- [ ] Phone links work on mobile
- [ ] Email links work
- [ ] All navigation links work
- [ ] Mobile menu functions correctly
- [ ] Sticky header works

**Performance:**
- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] All images optimized
- [ ] No console errors

**Cross-Browser/Device:**
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + mobile)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)
- [ ] Responsive at all breakpoints

**Accessibility:**
- [ ] All images have alt text
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus states visible

---

## 16. Launch Checklist

### Pre-Launch (1-2 days before)
- [ ] Final content review complete
- [ ] All placeholder content replaced (phone, email, address)
- [ ] Formspree endpoint configured in production
- [ ] Domain DNS configured for Vercel
- [ ] SSL certificate active
- [ ] Final build passes all tests

### Launch Day
- [ ] Deploy to production
- [ ] Verify all pages load correctly
- [ ] Test contact form in production
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify schema in production (Rich Results Test)
- [ ] Check robots.txt accessibility

### Post-Launch (First Week)
- [ ] Monitor Search Console for crawl errors
- [ ] Monitor Formspree for lead submissions
- [ ] Check Core Web Vitals in field data
- [ ] Fix any reported issues
- [ ] Begin content iteration based on performance

---

## 17. Deployment and Handoff Plan

### Repository Setup
- Git repository (GitHub recommended)
- Main branch protection
- README with setup instructions

### Environment Variables
```
FORMSPREE_ENDPOINT=https://formspree.io/f/[form-id]
SITE_URL=https://commercialcleaningservicesdallas.com
```

### Vercel Deployment
1. Connect repository to Vercel
2. Configure build command: `npm run build`
3. Configure output directory: `dist`
4. Add environment variables
5. Configure custom domain
6. Enable automatic deployments from main branch

### Handoff Documentation
- [ ] README with local development instructions
- [ ] Environment variable documentation
- [ ] Content editing guide (how to update pages)
- [ ] Formspree account credentials/access
- [ ] Vercel project access
- [ ] Domain registrar access (for DNS)

### Maintenance Notes
- Content updates: Edit markdown/Astro files, push to main
- Form changes: Update Formspree configuration
- New pages: Follow existing templates
- Schema updates: Modify Schema.astro component

---

## 18. Open Questions

1. **Phone number format:** Should it display as (214) XXX-XXXX or 214-XXX-XXXX?
2. **Logo:** Will a logo be provided, or should we use text-only branding initially?
3. **Stock images:** Any specific image style preferences (people vs. facilities vs. abstract)?
4. **Testimonials:** Use placeholder testimonials or leave section empty until real ones available?
5. **Business hours:** What hours should be displayed (actual service hours vs. office hours)?
6. **Privacy Policy / Terms:** Generate placeholder legal pages or wait for actual policy documents?

---

## Appendix: Source Files Reference

All inputs for this PRD are located in:

```
./data-for-website/
├── keyword-research/
│   ├── master_keywords.csv      # 131 target keywords
│   ├── keyword_clusters.json    # 22 keyword clusters
│   └── notes.md                 # Research strategy notes
└── seo-content-plan/
    ├── content_plan.md          # Content architecture
    ├── page_inventory.csv       # Complete page list with specs
    ├── url_map.csv              # URL structure and canonicals
    ├── internal_linking_rules.md # Hub-spoke linking strategy
    ├── onpage_templates.md      # Content templates by page type
    └── schema_plan.md           # Schema markup specifications
```

---

*PRD Generated: January 2026*
*Version: 1.0*
