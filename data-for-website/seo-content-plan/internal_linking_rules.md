# Internal Linking Rules & Silo Structure
## Commercial Cleaning Services of Dallas

**Domain:** commercialcleaningservicesdallas.com
**Architecture:** Hub-and-Spoke with Silo Categories

---

## Linking Philosophy

**Purpose-Driven Links:** Every internal link serves a user need or SEO purpose. No links "just because."

**Link Equity Distribution:** Strategic links pass authority from high-authority pages (homepage, core services) to supporting pages.

**Topical Authority:** Related content clusters link together to reinforce topic relevance signals.

**User Journey:** Links guide users from broad topics to specific services based on search intent.

---

## Site Architecture Overview

```
                    HOMEPAGE (/)
                        |
        +---------------+---------------+---------------+
        |               |               |               |
    /services/      /locations/       ABOUT          CONTACT
        |               |
    +---+---+---+   +---+---+---+---+
    |   |   |   |   |   |   |   |   |
   P0  P1  P1  P1  Dallas Suburbs (12)
    |   |   |   |
  Hub Services  All 18 Services
```

**URL Structure:**
- **Services:** `/services/slug` (all service pages)
- **Locations:** `/locations/city-tx` (Dallas + 12 suburbs)
- **Core:** `/about`, `/contact`, `/services`, `/locations`

**Hierarchy Levels:**
- **Level 0:** Homepage (/)
- **Level 1:** Core pages (About, Contact, Services Index, Locations Index)
- **Level 2:** P0 Service pages (main hubs)
- **Level 3:** P1 Service pages (specialized services)
- **Level 4:** Location pages (under /locations/)

---

## Service Silo Structure

### Core Services Hub

```
Homepage (/)
    |
    +-- Janitorial Services (P0)
    +-- Comprehensive Cleaning (P1)
    +-- Project-Based Cleaning (P1)
    +-- Disinfection Cleaning (P1)
    +-- Specialty Cleaning (P1)
    +-- Construction Cleanup (P1)
    +-- Healthcare Environmental Services (P1)
    +-- Office Building Cleaning (P1)
    +-- Industrial Cleaning (P1)
    +-- Hospitality Cleaning (P1)
    +-- Education Cleaning (P1)
    +-- Religious Building Cleaning (P1)
    +-- Government Building Cleaning (P1)
    +-- Event Center Cleaning (P1)
    +-- Recreation & Shopping Cleaning (P1)
    +-- Banks & Financial Institutions Cleaning (P1)
    +-- Residential Floor Cleaning (P1)
    +-- Car Dealership Cleaning (P1)
```

### Service Category Groupings

**Group 1: Recurring & Core Services**
- Janitorial Services (hub)
- Comprehensive Cleaning
- Office Building Cleaning

**Group 2: Specialized Cleaning**
- Healthcare Environmental Services
- Disinfection Cleaning
- Specialty Cleaning

**Group 3: Project-Based Services**
- Project-Based Cleaning
- Construction Cleanup
- Event Center Cleaning

**Group 4: Industry-Specific Services**
- Hospitality Cleaning
- Education Cleaning
- Religious Building Cleaning
- Government Building Cleaning
- Banks & Financial Institutions Cleaning
- Car Dealership Cleaning

**Group 5: Facility Types**
- Industrial Cleaning
- Recreation & Shopping Cleaning
- Residential Floor Cleaning

---

## Location Pages Structure

```
/locations (location index)
    |
    +-- /locations/dallas-tx (P0 - main city)
    +-- /locations/highland-park-tx (P1)
    +-- /locations/university-park-tx (P1)
    +-- /locations/farmers-branch-tx (P1)
    +-- /locations/irving-tx (P1)
    +-- /locations/garland-tx (P1)
    +-- /locations/richardson-tx (P1)
    +-- /locations/mesquite-tx (P1)
    +-- /locations/carrollton-tx (P1)
    +-- /locations/addison-tx (P1)
    +-- /locations/plano-tx (P1)
    +-- /locations/the-colony-tx (P1)
    +-- /locations/frisco-tx (P1)
```

**Linking Rules - Location Silo:**
- `/locations` index page links TO all 13 location pages
- Each location page links BACK to `/locations` index
- Each location page links TO main service pages
- Homepage links TO `/locations` index and Dallas location
- Service pages link TO relevant location pages contextually

---

## Link Distribution Matrix

### From Homepage (/)

**Link TO:**
- P0 service pages (Janitorial Services)
- About page → `/about`
- Contact page → `/contact`
- Services index → `/services`
- Locations index → `/locations`
- Dallas location → `/locations/dallas-tx`

**Anchor Text:**
- Use exact or partial match keywords
- "Janitorial Services"
- "Office Building Cleaning"
- "Commercial Cleaning Dallas"
- "Dallas Service Areas"

**Link Count:** 8-12 total internal links from homepage

### From Services Index Page (/services)

**Link TO:**
- All 18 service pages
- Homepage
- Contact page

**Anchor Text:**
- "Janitorial Services Dallas"
- "Healthcare Environmental Services"
- "Industrial Cleaning Dallas"
- Service names with location modifiers

**Link Count:** 20-22 internal links

### From Individual Service Pages

**Standard Service Page Links TO:**
- Services index (required)
- 2-4 related service pages
- 2-3 relevant location pages
- Contact page (CTA)

**Example - Healthcare Environmental Services Page:**
```
Links TO:
1. /services (anchor: "view all commercial cleaning services")
2. /services/disinfection-cleaning (anchor: "disinfection cleaning services")
3. /services/specialty-cleaning (anchor: "specialty cleaning options")
4. /locations/dallas-tx (anchor: "Dallas healthcare cleaning")
5. /locations/plano-tx (anchor: "Plano medical facility cleaning")
6. /contact (anchor: "request healthcare cleaning quote")
```

**Example - Janitorial Services Page (P0):**
```
Links TO:
1. /services (anchor: "all commercial cleaning services")
2. /services/comprehensive-cleaning (anchor: "comprehensive cleaning services")
3. /services/office-building-cleaning (anchor: "office building cleaning")
4. /services/project-based-cleaning (anchor: "one-time project cleaning")
5. /locations/dallas-tx (anchor: "Dallas janitorial services")
6. /locations/irving-tx (anchor: "Irving commercial cleaning")
7. /contact (anchor: "get janitorial service quote")
```

### From Location Pages

**Standard Location Page Links TO:**
- Locations index (required)
- Dallas location (if not Dallas itself)
- 4-6 key service pages
- Contact page (location-specific CTA)

**Example - Plano Location Page:**
```
Links TO:
1. /locations (anchor: "all Dallas area service locations")
2. /locations/dallas-tx (anchor: "Dallas commercial cleaning")
3. /services/janitorial-services (anchor: "Plano janitorial services")
4. /services/office-building-cleaning (anchor: "Plano office cleaning")
5. /services/industrial-cleaning (anchor: "Plano industrial cleaning")
6. /contact (anchor: "get Plano cleaning quote")
```

---

## Anchor Text Guidelines

### Do's

```
[Descriptive + Keyword]
"healthcare environmental services dallas"
"industrial cleaning dallas"
"construction cleanup services"
"hospitality cleaning options"

[Partial Match + Natural]
"learn about our janitorial services"
"explore office building cleaning"
"view education cleaning options"

[Branded + Local]
"Commercial Cleaning Services of Dallas"
"Dallas area commercial cleaning"
"Plano facility cleaning services"
```

### Don'ts

```
[Generic - AVOID]
"click here"
"learn more"
"read more"
"this page"
"our services" (too vague)

[Exact Match Over-optimization - AVOID]
Every link using exact same anchor
Unnatural keyword repetition
Link stuffing
```

### Anchor Text Distribution (Per Page)

| Anchor Type | Percentage | Example |
|-------------|------------|---------|
| Exact match keyword | 20% | "commercial cleaning dallas" |
| Partial match keyword | 40% | "professional commercial cleaning" |
| Branded | 15% | "Commercial Cleaning Services of Dallas" |
| Natural language | 20% | "learn about our services" |
| Naked URL | 5% | "https://..." (rare) |

---

## Contextual Linking Rules

### In-Content Links (Body Copy)

**Where to place:**
- Within relevant paragraphs
- After making a claim that another page supports
- When mentioning a related service naturally

**Example:**
```
"Our healthcare environmental services follow strict medical
cleaning protocols. For facilities requiring periodic deep
sanitization, we also offer specialized disinfection cleaning
with hospital-grade products."
```

### Navigational Links (Header/Footer)

**Header Navigation:**
- Keep minimal (6-8 links max)
- Core pages only
- Consider mobile view

**Footer Navigation:**
- All 18 service pages
- All 13 location pages
- Legal pages (Privacy, Terms)

---

## Cross-Service Linking

### When to Cross-Link

**Appropriate Cross-Service Links:**
- Healthcare Environmental ↔ Disinfection Cleaning
- Janitorial ↔ Office Building Cleaning
- Construction Cleanup ↔ Project-Based Cleaning
- Hospitality ↔ Recreation & Shopping Cleaning
- Industrial ↔ Specialty Cleaning
- Education ↔ Religious Building Cleaning

**Inappropriate Cross-Service Links:**
- Random connections just for links
- Unrelated service categories

### Cross-Link Format

```
[In Healthcare Environmental Services page]
"For facilities requiring specialized one-time deep cleaning,
our project-based cleaning services can complement your
recurring healthcare environmental services schedule."
```

---

## Orphan Page Prevention

### What Is an Orphan Page?
A page that no other page links to (except sitemap). Search engines may not index or rank these properly.

### Prevention Rules

**Every Page MUST:**
1. Have at least 2 internal links pointing TO it
2. Link back to at least its parent/index page
3. Be included in the HTML sitemap

**Link Allocation:**
- Homepage: Links to Services Index, Locations Index, Contact, About
- Services Index: Links to all 18 service pages
- Locations Index: Links to all 13 location pages
- Service pages: Link back to Services Index + related services
- Location pages: Link back to Locations Index + Dallas

---

## Link Equity Flow

### High Authority Pages (Link From These)

1. **Homepage** - Highest authority, link sparingly and strategically
2. **Janitorial Services** - P0 service, strong authority
3. **Services Index** - Hub for all services
4. **Dallas Location** - Main location page

### Authority Distribution Strategy

```
Homepage (High Authority)
    ↓
Services Index (Medium-High Authority)
    ↓
P0 Service Pages (Medium Authority)
    ↓
P1 Service Pages (Growing Authority)
```

---

## Link Placement Best Practices

### Above the Fold
- 1-2 critical links max
- Don't overcrowst hero section
- Primary CTA + phone number

### Within Content
- Links appear naturally within paragraphs
- 2-4 links per 1,000 words
- Don't interrupt reading flow

### CTAs and Buttons
- Every page needs at least 2 conversion CTAs
- Mix of form links and phone number links
- Placement: Hero, mid-content, before footer

### Footer
- Organize links by category
- Service categories
- Location list
- Company info
- Legal pages

---

## Internal Link Audit Checklist

### Quarterly Review

```
[ ] No orphan pages (every page has 2+ inbound links)
[ ] No broken internal links (404s)
[ ] Anchor text variety (not all exact match)
[ ] Logical link flow (user journey makes sense)
[ ] No over-optimized pages (50+ internal links)
[ ] Mobile link check (all links tappable)
[ ] Footer links organized by category
[ ] No spammy link sections
[ ] Service pages link to services index
[ ] Location pages link to locations index
```

---

## Common Linking Mistakes to Avoid

### Don't Do This

```
Link Wheels
A → B → C → D → A (unnatural pattern)

Excessive Homepage Links
50+ links from homepage (dilutes equity)

Sitewide Footer Links
100 links in every footer (looks spammy)

Generic Anchor Text Only
All links using "click here" or "learn more"

No Context Links
Links shoved in unrelated content

Ignoring Mobile
Links too small or close together on mobile
```

### Do This Instead

```
Strategic Hub Distribution
Homepage → Key indices → Related pages

Focused Homepage Links
8-10 carefully chosen internal links

Organized Footer Links
Categorized, relevant links only

Descriptive Anchor Text
Mix of exact, partial, and natural language

Contextual Links
Links flow naturally within content

Mobile-First Links
Tappable, well-spaced links
```

---

## Internal Link KPIs

### Metrics to Track

- **Orphan Pages:** Should be zero
- **Average Internal Links per Page:** 5-15 (varies by page type)
- **Click-Through Rate:** Navigation links performance
- **Pages Per Session:** 2-4+ indicates good internal linking
- **Bounce Rate:** <60% for service pages

---

*These linking rules support the overall SEO content architecture and should be implemented alongside the on-page templates and schema markup strategy.*
