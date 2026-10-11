import { ShopConfig } from "@/types/shop";

export const mumbaiCremeConfig: ShopConfig = {
  id: "mumbai-creme",
  tier: 1,
  shopName: "Crème & Cocoa",
  tagline: "European Patisserie & Handcrafted Bakes in Bandra, Mumbai",
  logoText: "Crème & Cocoa",
  badge: "Boutique Artisan Patisserie",
  currencySymbol: "₹",
  currencyCode: "INR",
  announcement: {
    enabled: true,
    badge: "Bandra Studio",
    text: "🍰 Fresh batches coming out of our oven every morning! Doorstep deliveries across South Bombay & Western Suburbs.",
  },
  hero: {
    badge: "Bandra West, Mumbai • Single Origin Cocoa & French Butter",
    title: "Artisanal Celebrations Delivered Across",
    highlightWord: "Mumbai",
    subtitle:
      "Crafting decadent French gateaux, slow-baked cheesecakes, and custom aesthetic cakes for Mumbai's sweetest celebrations. Order smoothly via WhatsApp.",
    primaryCtaText: "Explore Mumbai Menu",
    secondaryCtaText: "Custom Cake Request",
    imageUrl:
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=1200&q=85",
    stats: [
      { value: "4.9 ★", label: "1,200+ Mumbai Foodies" },
      { value: "15,000+", label: "Cakes Delivered" },
      { value: "100%", label: "Eggless Options" },
      { value: "2 Hours", label: "Express Bandra / Juhu Delivery" },
    ],
  },
  about: {
    badge: "The Bakehouse Story",
    title: "Bringing French Pâtisserie Precision to",
    highlightWord: "Mumbai Coastline.",
    description: [
      "Nestled in the vibrant bylanes of Pali Hill, Bandra, Crème & Cocoa began with a single promise: uncompromised ingredients and contemporary dessert aesthetics.",
      "We strictly ban vegetable fats and artificial coloring. Instead, we use cultured dairy butter, 70% dark Belgian chocolate, and pure Madagascar Bourbon vanilla beans.",
    ],
    highlights: [
      "Dedicated 100% vegetarian / eggless confectionery kitchen line",
      "Signature French entremets and multi-textured celebration cakes",
      "Express 2-hour delivery across Bandra, Khar, Santacruz & Juhu",
      "Eco-friendly luxury cake packaging with insulated chiller pads",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
    chefName: "Chef Kabir Sen",
    chefTitle: "Executive Pâtissier",
  },
  contact: {
    phone: "+91 12345 67891",
    displayPhone: "+91 12345 67891",
    whatsappNumber: "911234567891",
    email: "bonjour@cremeandcocoa.com",
    address: "Bungalow 3, Pali Hill Road, Near Candies, Bandra West",
    landmark: "Behind Union Park",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400050",
    googleMapsUrl: "https://maps.google.com/?q=Bandra+West+Mumbai",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.905663715206!2d72.825838!3d19.057771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123fa3b45%3A0x4dfc4be788229b0a!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    instagramHandle: "@cremeandcocoa.mumbai",
    instagramUrl: "https://instagram.com",
    facebookUrl: "https://facebook.com",
  },
  hours: {
    regular: "9:30 AM – Midnight 12:00 AM (Daily)",
    deliveryTiming: "10:00 AM – 11:30 PM (Colaba to Borivali)",
    noticeRequired: "3 hours for standard cakes; 24 hours for bespoke wedding tiers.",
  },
  categories: [
    { id: "all", name: "All Cakes" },
    { id: "chocolate", name: "Chocolate Entremets" },
    { id: "cheesecakes", name: "Gourmet Cheesecakes" },
    { id: "berry-fruit", name: "Fresh Berry & Fruit" },
    { id: "bento", name: "Celebration Bento Cakes" },
  ],
  cakes: [
    {
      id: "mumbai-dark-chocolate-hazelnut",
      name: "Ferrero Hazelnut Crunch Gateau",
      category: "chocolate",
      price: 890,
      originalPrice: 990,
      weightOptions: ["500g", "1kg", "1.5kg"],
      defaultWeight: "500g",
      isEggless: true,
      isBestseller: true,
      isChefSpecial: true,
      badgeText: "Mumbai's Favorite",
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      description:
        "Layers of rich dark cocoa sponge, crispy French feuilletine hazelnut praline, and 54% dark chocolate silk mousse.",
      flavorProfile: ["Roasted Piedmont Hazelnut", "Crispy Feuilletine", "Callebaut Silk Mousse"],
      ingredientsNotice: "100% Pure Veg (Eggless). Contains nuts.",
    },
    {
      id: "mumbai-biscoff-cheesecake",
      name: "Salted Caramel Lotus Cheesecake",
      category: "cheesecakes",
      price: 980,
      weightOptions: ["500g", "1kg"],
      defaultWeight: "500g",
      isEggless: true,
      isBestseller: true,
      badgeText: "Bestseller",
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
      description:
        "Rich Philadelphia cream cheese baked to golden perfection, laced with homemade Maldon salted caramel and speculoos crunch.",
      flavorProfile: ["Maldon Sea Salt", "Golden Lotus Spread", "Buttery Crust"],
      ingredientsNotice: "100% Pure Veg (Eggless).",
    },
    {
      id: "mumbai-strawberry-shortcake",
      name: "Mahabaleshwar Strawberry Gateau",
      category: "berry-fruit",
      price: 820,
      weightOptions: ["500g", "1kg"],
      defaultWeight: "500g",
      isEggless: true,
      badgeText: "Fresh Farm Fruit",
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
      description:
        "Made with handpicked Mahabaleshwar strawberries, light vanilla sponge and whipped dairy mascarpone cream.",
      flavorProfile: ["Fresh Mahabaleshwar Strawberries", "Vanilla Genoise", "Mascarpone Chantilly"],
      ingredientsNotice: "100% Pure Veg (Eggless). Seasonal.",
    },
    {
      id: "mumbai-bento-pastel",
      name: "Bandra Aesthetic Bento Mini Cake",
      category: "bento",
      price: 499,
      weightOptions: ["300g (Mini Bento)"],
      defaultWeight: "300g (Mini Bento)",
      isEggless: true,
      isBestseller: true,
      servesPeople: "1-2 people",
      image:
        "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80",
      description:
        "Adorable 4-inch lunchbox cake with customized vintage piping text. Includes candles and wooden spoon.",
      flavorProfile: ["Madagascar Vanilla", "Swiss Meringue Buttercream"],
      ingredientsNotice: "100% Pure Veg (Eggless).",
    },
  ],
  features: [
    {
      iconName: "ShieldCheck",
      title: "Pure Couverture Chocolate",
      description: "Crafted exclusively with real Belgian chocolate, no vegetable shortening.",
    },
    {
      iconName: "Truck",
      title: "Chilled Car Delivery",
      description: "Safely delivered in climate-controlled vehicles across Mumbai.",
    },
    {
      iconName: "Sparkles",
      title: "100% Eggless Patisserie",
      description: "All recipes meticulously engineered for light, airy vegetarian enjoyment.",
    },
    {
      iconName: "HeartHandshake",
      title: "Direct WhatsApp Line",
      description: "Connect instantly with our pastry chefs for bespoke customizations.",
    },
  ],
  testimonials: [
    {
      id: "m-t1",
      customerName: "Aarav Merchant",
      cityOrArea: "Pali Hill, Bandra West",
      rating: 5,
      comment: "Crème & Cocoa is our family's go-to bakery in Bandra. The hazelnut crunch cake was phenomenal!",
      cakeOrdered: "Ferrero Hazelnut Crunch Gateau",
      dateAgo: "Yesterday",
    },
    {
      id: "m-t2",
      customerName: "Zoya Kapoor",
      cityOrArea: "Juhu, Mumbai",
      rating: 5,
      comment: "Placed the order via WhatsApp in under 2 minutes. Arrived in a lovely pink box with cold packs.",
      cakeOrdered: "Salted Caramel Lotus Cheesecake",
      dateAgo: "4 days ago",
    },
  ],
  faqs: [
    {
      question: "Which areas in Mumbai do you deliver to?",
      answer: "We deliver across South Mumbai, Bandra, Khar, Santa Cruz, Juhu, Andheri, and Powai.",
    },
    {
      question: "How do I pay?",
      answer: "We accept UPI (GPay/PhonePe), Razorpay and credit/debit cards via WhatsApp link.",
    },
  ],
  customOrderBanner: {
    title: "Planning a Grand Mumbai Wedding or Event?",
    subtitle: "Custom designer multi-tier cakes crafted to your exact specifications.",
    buttonText: "Consult Our Bandra Chefs on WhatsApp",
    whatsappMessage:
      "*Hello Crème & Cocoa!* 🍰\nI would like to inquire about a custom designer celebration cake in Mumbai.",
  },
};
