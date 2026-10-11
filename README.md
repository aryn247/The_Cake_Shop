# 🍰 CakeCommerce — Multi-Shop Bakery Platform (India Edition)

A high-converting, reusable website product built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS 4**, designed to be sold and deployed for multiple cake shops and artisanal bakeries across India.

---

## 🌟 Architecture & Two-Tier Strategy

This codebase is architected with a shared core supporting two commercial tiers:

- **Tier 1 — Basic Website (Implemented & Ready)**:
  - 100% static, lightning-fast SSG build (`npm run build`).
  - No database, no backend server, zero recurring subscription or maintenance fees.
  - Hosts entirely on free-tier platforms like **Vercel Hobby** or **Cloudflare Pages**.
  - All shop branding, contact info, Google Maps, and product catalogue configured via TypeScript/JSON files (`src/config/shop.config.ts`).
  - Direct **WhatsApp ordering** with pre-filled cake details, portion weights, and custom messages.
  - Tailored for the Indian market: **₹ (INR)** currency, **🌱 100% Eggless (Pure Veg)** FSSAI-style indicators, landmark support, and WhatsApp deep links (+91).

- **Tier 2 — Advanced Cake Store (Architecture Ready / Future Expansion)**:
  - Ready to layer on top of the shared component base.
  - Cart, checkout with WhatsApp summary order, custom cake builder, and admin CMS dashboard with cloud database (e.g. Supabase / Neon / Cloudflare D1) and authentication.

---

## 🚀 Live Features in Tier 1

1. **Artisanal Bakery Aesthetic**:
   - Styled with a warm, pastry-inspired palette (cream `#FDFBF7`, warm mocha `#3B2219`, rose gold `#A8583B`).
   - Luxury serif typography (`Playfair Display`) paired with clean modern sans (`Plus Jakarta Sans`).
2. **Interactive Cake Gallery**:
   - Live search by cake name, category, or flavor (e.g., Truffle, Biscoff, Hazelnut).
   - Category filtering (Signature Chocolate, Cheesecakes, Bento Cakes, Fruit & Floral, Cupcakes).
   - Dietary filter toggles: *All*, *🌱 100% Eggless Only*, and *⭐ Bestsellers*.
   - Cake cards showing price in ₹, strikethrough original price, portion tags, and weight selectors.
3. **Interactive Quick-View Modal**:
   - High-resolution imagery, flavor profile tags, serving size guidance.
   - Portion / weight selection (`500g`, `1kg`, `1.5kg`, `2kg`).
   - Free custom piped message on cake (e.g., "Happy 25th Anniversary Mom & Dad!").
   - 1-click **Order on WhatsApp** button.
4. **Direct WhatsApp Integration**:
   - Normalized phone numbers (auto-handles 10-digit Indian mobile numbers or standard international formats).
   - Richly formatted WhatsApp messages with emojis, bold Markdown, cake item, portion, ₹ price, dietary label, and custom message notes.
   - General consultation link for custom tiered/wedding theme cakes.
5. **Bakery Business Essentials**:
   - Notice time badges (e.g., 3-4 hours for standard cakes, 24-48 hours for bespoke tiers).
   - Verified customer reviews with Google Rating 4.9★ badge.
   - Operating hours and temperature-controlled delivery details.
   - Studio address with landmark and embedded **Google Maps**.
   - Expandable FAQ accordion addressing common Indian bakery questions.
   - Sticky floating WhatsApp button with live status ping.
   - Multi-tenant client switcher widget in header to test multiple presets.

---

## 📁 Project Structure

```
CakeShop-Temp/
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme tokens, font variables, scrollbar styling
│   │   ├── layout.tsx          # Root layout, Google fonts, dynamic metadata
│   │   └── page.tsx            # Main page loading active shop configuration
│   ├── components/
│   │   ├── CakeShopApp.tsx     # Shop shell with demo switcher
│   │   ├── Header.tsx          # Announcement bar, nav, branding, shop switcher
│   │   ├── Hero.tsx            # Hero showcase, trust metrics, CTAs
│   │   ├── CakeGallery.tsx     # Search, dietary filters, category tabs, grid
│   │   ├── CakeCard.tsx        # Cake card with weight selector & WhatsApp order
│   │   ├── CakeModal.tsx       # Quick view popup with personalized message input
│   │   ├── CustomCakeBanner.tsx# Bespoke wedding & theme cake WhatsApp banner
│   │   ├── Features.tsx        # Pure butter, eggless, chilled delivery promises
│   │   ├── AboutSection.tsx    # Baker story, chef credentials & ingredients
│   │   ├── Testimonials.tsx    # Google-style verified customer reviews
│   │   ├── FaqSection.tsx      # Accordion FAQs for bakery orders
│   │   ├── ContactSection.tsx  # Address, timings, Google Maps & social links
│   │   ├── Footer.tsx          # Footer links, attribution, copyright
│   │   ├── VegBadge.tsx        # Indian FSSAI-style pure veg / eggless indicator
│   │   └── FloatingWhatsApp.tsx# Sticky bottom-right WhatsApp quick chat button
│   ├── config/
│   │   ├── shop.config.ts      # Active shop resolver & preset registry
│   │   └── presets/
│   │       ├── velvet-crumb.ts # Sample Shop 1: Delhi NCR Boutique Patisserie
│   │       └── mumbai-creme.ts # Sample Shop 2: Bandra Mumbai European Bakehouse
│   ├── lib/
│   │   └── whatsapp.ts         # WhatsApp deep-link & message formatter
│   └── types/
│       └── shop.ts             # Strict TypeScript definitions for shop & products
├── next.config.ts              # Remote image domains & Turbopack config
└── package.json
```

---

## 🛠️ How to Add or Rebrand for a New Cake Shop

You can deploy this codebase for multiple clients in 3 simple steps:

### Step 1: Create a New Preset File
Create `src/config/presets/my-shop.ts` conforming to `ShopConfig`:

```typescript
import { ShopConfig } from "@/types/shop";

export const myShopConfig: ShopConfig = {
  id: "my-shop",
  tier: 1,
  shopName: "Sweet Whisk Bakery",
  tagline: "Custom Eggless Cakes in Indiranagar, Bengaluru",
  currencySymbol: "₹",
  currencyCode: "INR",
  contact: {
    phone: "+91 98765 43210",
    displayPhone: "+91 98765 43210",
    whatsappNumber: "919876543210", // No spaces, 10-12 digits
    email: "hello@sweetwhisk.in",
    address: "100 Feet Road, Indiranagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560038",
    googleMapsUrl: "https://maps.google.com/...",
  },
  // Add cakes, categories, testimonials, timings...
};
```

### Step 2: Register in `src/config/shop.config.ts`
Import and register `myShopConfig` in `availableShops`:

```typescript
export const availableShops: Record<string, ShopConfig> = {
  "velvet-crumb": velvetCrumbConfig,
  "mumbai-creme": mumbaiCremeConfig,
  "my-shop": myShopConfig,
};
```

### Step 3: Deploy to Vercel
Set the environment variable on Vercel:
```env
NEXT_PUBLIC_SHOP_ID=my-shop
```
The entire website will rebrand automatically during the build!

---

## 🚢 Vercel Deployment Instructions

1. Push your code to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. In **Environment Variables**, set:
   - `NEXT_PUBLIC_SHOP_ID` = `velvet-crumb` (or your client's shop ID)
5. Click **Deploy**.
6. In **Project Settings > Domains**, assign the cake shop's custom domain (e.g. `www.thevelvetcrumb.in`).
7. Update DNS on the domain registrar (GoDaddy, Namecheap, Hostinger):
   - `CNAME` `@` / `www` -> `cname.vercel-dns.com`

---

## 💰 Free-Tier Feasibility & Commercial Terms

| Service | Free Tier Limits | Commercial Use Terms | Notes |
| :--- | :--- | :--- | :--- |
| **Vercel** | 100 GB bandwidth / month, 1M edge requests | Hobby plan is non-commercial by strict terms. For selling to commercial clients, clients can either host on their own free Vercel account or upgrade to Vercel Pro (\$20/mo), or deploy as a static export (`output: 'export'`) on **Cloudflare Pages** which has **unlimited free commercial bandwidth**. | Tier 1 compiles to pure static HTML/JS/CSS, making it 100% portable to Cloudflare Pages, Netlify, or GitHub Pages with zero vendor lock-in. |
| **WhatsApp Direct (`wa.me`)** | Unlimited | Fully free, uses standard web intent protocol. | No WhatsApp Business API fees needed for direct click-to-chat links. |
| **Unsplash Images** | Free for commercial websites | Unsplash License allows free commercial use without attribution (though attribution is appreciated). | Replace with client's actual photography for production client deliveries. |
| **Google Fonts** | Unlimited | Open-source SIL Open Font License, 100% free for commercial websites. | Cached automatically at build time via Next.js Font optimization. |

---

## 🧪 Local Development & Verification

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run ESLint validation
npm run lint

# Build production static bundle
npm run build
```
