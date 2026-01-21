# Schema Markup Implementation Status

**User Story:** US-014
**Last Updated:** 2026-01-21

## ✅ Completed Schema Markup

### 1. Global Schema (Site-wide)
- **Type:** `CleaningService` (LocalBusiness)
- **Location:** All pages via `Schema` component default
- **Status:** ✅ Complete
- **File:** `src/components/Schema.astro`

### 2. Organization Schema
- **Type:** `Organization`
- **Location:**
  - ✅ Homepage (`src/pages/index.astro`)
  - ✅ About page (`src/pages/about.astro`)
- **Status:** ✅ Complete

### 3. Service Schema
- **Type:** `Service`
- **Location:** All service pages via `ServiceLayout`
- **Status:** ✅ Complete
- **File:** `src/layouts/ServiceLayout.astro`

### 4. FAQPage Schema
- **Type:** `FAQPage`
- **Location:** Pages with FAQ sections via `FAQ` component
- **Status:** ✅ Complete
- **File:** `src/components/FAQ.astro`

### 5. BreadcrumbList Schema
- **Type:** `BreadcrumbList`
- **Location:** All subpages via `Breadcrumbs` component
- **Status:** ✅ Complete
- **File:** `src/components/Breadcrumbs.astro`

---

## ⚠️ Missing Information (Required from Client)

### Priority: HIGH - Affects Rich Results

#### 1. **Business Address**
**Current Status:** Placeholder value
**Location:** `src/data/site.json`

```json
"address": {
  "street": "[Street Address]",  // ❌ NEEDS UPDATE
  "city": "Dallas",
  "state": "TX",
  "zip": "75201"
}
```

**Required from client:**
- [ ] Complete street address
- [ ] Verify zip code is correct (currently 75201 - Downtown Dallas)

**Impact:** Without complete address, LocalBusiness schema cannot appear in Google's Knowledge Panel.

---

#### 2. **Business Phone Number**
**Current Status:** Placeholder value
**Location:** `src/data/site.json`

```json
"phone": "(214) 555-5555"  // ❌ NEEDS UPDATE
```

**Required from client:**
- [ ] Actual business phone number

**Impact:** Critical for local SEO and click-to-call functionality.

---

### Priority: MEDIUM - Nice to Have

#### 3. **Business Hours**
**Current Status:** Not included
**Location:** `src/components/Schema.astro` (localBusinessSchema object)

**Recommended addition:**
```json
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
]
```

**Required from client:**
- [ ] Business operating hours for each day
- [ ] Any special holiday hours

**Impact:** Can appear in Google rich results showing "Open Now" status.

---

#### 4. **SameAs Links (Social Media)**
**Current Status:** Empty values
**Location:** `src/data/site.json`

```json
"social": {
  "facebook": "",  // ❌ NEEDS UPDATE
  "twitter": "",   // ❌ NEEDS UPDATE
  "linkedin": ""   // ❌ NEEDS UPDATE
}
```

**Recommended schema enhancement:**
```json
"sameAs": [
  "https://www.facebook.com/commercialcleaningsdallas",
  "https://www.linkedin.com/company/commercialcleaningsdallas"
]
```

**Required from client:**
- [ ] Facebook business page URL
- [ ] LinkedIn company page URL
- [ ] Twitter/X business profile URL (if applicable)
- [ ] Instagram business profile URL (if applicable)
- [ ] Any other social media profiles

---

### Priority: LOW - Optional Enhancements

#### 5. **GeoCoordinates**
**Current Status:** Hardcoded in About page only
**Location:** `src/pages/about.astro`

**Note:** Currently using Dallas downtown coordinates:
```json
"latitude": "32.7767",
"longitude": "-96.7970"
```

**Required from client:**
- [ ] Verify business location (if different from downtown Dallas)
- [ ] Consider removing if exact location is sensitive

---

#### 6. **Service Radius**
**Current Status:** 50 miles hardcoded
**Location:** `src/pages/about.astro`

**Required from client:**
- [ ] Confirm service area radius (currently 50 miles)

---

## 🎯 Implementation Notes

### What Was NOT Added (Per Requirements)
- ❌ Fake reviews
- ❌ Fake ratings
- ❌ Fake testimonials
- ❌ Unverifiable claims
- ❌ Payment methods (client declined)

### Logo
**Status:** ✅ Installed
**Location:** `/public/logo.png`
**Used in:** Organization schema

---

## 📋 Action Items for Client

Please provide the following information to complete schema markup:

### Essential (Affects Local SEO)
1. ✅ **Logo** - PROVIDED
2. ⏳ **Complete street address** - NEED FROM CLIENT
3. ⏳ **Actual business phone number** - NEED FROM CLIENT
4. ⏳ **Verify zip code** - CONFIRM IF 75201 IS CORRECT

### Important (Enhances Rich Results)
5. ⏳ **Business operating hours** - NEED FROM CLIENT
6. ⏳ **Social media URLs** - NEED FROM CLIENT

### Optional
7. ⏳ **Service area radius confirmation** - 50 miles currently used
8. ⏳ **Exact coordinates** - if different from downtown Dallas

---

## 🔧 How to Update Schema

Once client provides information, update these files:

### 1. Update Business Info
**File:** `src/data/site.json`

```json
{
  "phone": "(214) XXX-XXXX",  // Update with real phone
  "address": {
    "street": "123 Main Street",  // Update with real address
    "city": "Dallas",
    "state": "TX",
    "zip": "75201"  // Verify zip code
  }
}
```

### 2. Add Social Media (when available)
**File:** `src/data/site.json`

```json
{
  "social": {
    "facebook": "https://facebook.com/your-page",
    "linkedin": "https://linkedin.com/company/your-company"
  }
}
```

### 3. Add Business Hours (if provided)
**File:** `src/components/Schema.astro`

Add to `localBusinessSchema` object around line 16-32.

---

## ✅ Validation

Once all information is provided:
1. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test with [Schema Markup Validator](https://validator.schema.org/)
3. Run `npm run typecheck` to ensure no TypeScript errors

---

## 📚 References

- [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data)
- [Schema.org CleaningService](https://schema.org/CleaningService)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Schema.org Organization](https://schema.org/Organization)
