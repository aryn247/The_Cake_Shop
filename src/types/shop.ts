export interface Cake {
  id: string;
  name: string;
  category: string;
  price: number; // Base price in INR (₹)
  originalPrice?: number; // Optional strikethrough price
  weightPrices?: Record<string, number>; // Explicit price per weight e.g. { "500g": 850, "1kg": 1600 }
  weightOptions: string[]; // e.g. ["500g", "1kg", "1.5kg", "2kg"]
  defaultWeight: string; // e.g. "500g"
  isEggless: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  image: string;
  description: string;
  flavorProfile?: string[]; // e.g. ["Rich Cocoa", "Dark Ganache", "Belgium Truffle"]
  servesPeople?: string; // e.g. "4-6 people"
  badgeText?: string; // e.g. "Most Loved", "New Launch"
  ingredientsNotice?: string; // e.g. "Contains dairy, 100% alcohol-free"
}

export interface ShopContact {
  phone: string;
  displayPhone: string;
  whatsappNumber: string; // Format: country code without + or spaces, e.g. "919876543210"
  email: string;
  address: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl?: string;
  googleReviewUrl?: string; // e.g. "https://search.google.com/local/writereview?placeid=..."
  instagramHandle?: string;
  instagramUrl?: string;
  facebookUrl?: string;
}

export interface ShopHours {
  regular: string; // e.g. "10:00 AM – 10:30 PM (Mon - Sun)"
  deliveryTiming: string; // e.g. "Same-day delivery until 9:00 PM"
  noticeRequired: string; // e.g. "Please order standard cakes 4 hrs in advance; custom cakes 24-48 hrs"
}

export interface ShopFeature {
  iconName: "ShieldCheck" | "Truck" | "HeartHandshake" | "Sparkles" | "Clock" | "CakeSlice";
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  cityOrArea: string;
  rating: number; // 1 to 5
  comment: string;
  cakeOrdered: string;
  dateAgo: string;
  source?: "google" | "whatsapp" | "website";
  isLocalGuide?: boolean;
  reviewsCount?: number;
  reviewerPhoto?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ShopCategory {
  id: string;
  name: string;
  icon?: string;
  description?: string;
}

export interface ShopConfig {
  id: string;
  tier: 1 | 2;
  shopName: string;
  tagline: string;
  logoText?: string;
  badge?: string; // e.g. "Artisanal Bakery & Patisserie"
  currencySymbol: string; // "₹"
  currencyCode: string; // "INR"
  announcement: {
    enabled: boolean;
    text: string;
    badge?: string;
  };
  hero: {
    badge: string;
    title: string;
    highlightWord: string;
    subtitle: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    imageUrl: string;
    stats: { value: string; label: string }[];
  };
  about: {
    badge: string;
    title: string;
    highlightWord: string;
    description: string[];
    highlights: string[];
    imageUrl: string;
    chefName?: string;
    chefTitle?: string;
  };
  contact: ShopContact;
  hours: ShopHours;
  categories: ShopCategory[];
  cakes: Cake[];
  features: ShopFeature[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  customOrderBanner: {
    title: string;
    subtitle: string;
    buttonText: string;
    whatsappMessage: string;
  };
}
