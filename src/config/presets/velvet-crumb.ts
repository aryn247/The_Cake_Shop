import { ShopConfig } from "@/types/shop";

export const velvetCrumbConfig: ShopConfig = {
  id: "velvet-crumb",
  tier: 1,
  shopName: "The Velvet Crumb",
  tagline: "Artisanal Cakes & Handcrafted Patisserie in Delhi NCR",
  logoText: "The Velvet Crumb",
  badge: "Artisanal Pâtisserie & Cake Studio",
  currencySymbol: "₹",
  currencyCode: "INR",
  announcement: {
    enabled: true,
    badge: "Fresh Baked Daily",
    text: "✨ Accepting pre-orders for celebrations! 100% Pure Veg (Eggless) options available across our entire menu.",
  },
  hero: {
    badge: "Handcrafted in South Delhi • 100% Pure Butter & Couverture Chocolate",
    title: "Cakes Crafted for Life's Most Delicious",
    highlightWord: "Celebrations",
    subtitle:
      "Baked fresh each morning using single-origin Belgian chocolate, Madagascar vanilla, and real dairy cream. Order directly on WhatsApp with customized weights and messages.",
    primaryCtaText: "Browse Menu & Order",
    secondaryCtaText: "Custom Cake Inquiry",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    stats: [
      { value: "4.9 ★", label: "850+ Google Reviews" },
      { value: "10,000+", label: "Celebrations Sweetened" },
      { value: "100%", label: "Eggless Options on All Cakes" },
      { value: "4 Hours", label: "Express Same-Day Delivery" },
    ],
  },
  about: {
    badge: "Our Philosophy",
    title: "No Shortcuts. Pure Ingredients.",
    highlightWord: "Zero Artificial Preservatives.",
    description: [
      "Founded in 2021 by Chef Ananya Verma after training at Le Cordon Bleu Paris, The Velvet Crumb started as a boutique micro-bakery dedicated to redefining celebrations in Delhi NCR.",
      "Every single sponge is baked fresh on the day of delivery — never frozen. We exclusively use real French butter, 54% dark Callebaut chocolate, and seasonal farm-fresh fruits. Whether it is a midnight surprise or a grand wedding, we treat every cake as an edible piece of art.",
    ],
    highlights: [
      "100% Eggless alternatives available for all recipes without compromising texture",
      "Real Callebaut Belgian chocolate ganache — no cheap compound slabs",
      "Food-grade temperature-controlled express doorstep delivery across Delhi NCR",
      "Handwritten personalized edible message plaque included complimentary",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
    chefName: "Chef Ananya Verma",
    chefTitle: "Pastry Chef & Founder (Dip. Pâtisserie, Paris)",
  },
  contact: {
    phone: "+91 12345 67891",
    displayPhone: "+91 12345 67891",
    whatsappNumber: "911234567891",
    email: "orders@thevelvetcrumb.in",
    address: "Shop 14, Ground Floor, M-Block Market, Greater Kailash 2",
    landmark: "Opposite Savitri Cinema Complex",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110048",
    googleMapsUrl: "https://maps.google.com/?q=Greater+Kailash+2+New+Delhi",
    googleReviewUrl: "https://maps.google.com/?q=Greater+Kailash+2+New+Delhi",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.86603173775!2d77.2343992!3d28.5355161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d9a19d268d%3A0xe54b9d0339d107a6!2sGreater%20Kailash%20II%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    instagramHandle: "@thevelvetcrumb.delhi",
    instagramUrl: "https://instagram.com",
    facebookUrl: "https://facebook.com",
  },
  hours: {
    regular: "10:00 AM – 11:00 PM (Monday to Sunday)",
    deliveryTiming: "11:00 AM – 10:30 PM across Delhi, Gurgaon & Noida",
    noticeRequired:
      "Standard menu cakes require 3-4 hours prior notice. Bespoke theme and tier cakes require 24-48 hours.",
  },
  categories: [
    { id: "all", name: "All Creations" },
    { id: "signature-chocolate", name: "Signature Chocolate", description: "Rich Belgian chocolate, truffles & fudge" },
    { id: "cheesecakes", name: "Baked Cheesecakes", description: "Cream cheese, Lotus Biscoff & berries" },
    { id: "fruit-floral", name: "Fruit & Floral", description: "Seasonal berries, mango & rose pistachios" },
    { id: "vintage-bento", name: "Bento & Korean Cakes", description: "Cute mini cakes serving 1-2 people" },
    { id: "tea-travel", name: "Tea Cakes & Cupcakes", description: "Loaf cakes, brownies & tea-time delights" },
  ],
  cakes: [
    {
      id: "belgian-truffle-noir",
      name: "Belgian Dark Truffle Noir",
      category: "Signature Chocolate",
      price: 850,
      originalPrice: 950,
      weightOptions: ["500g", "1kg", "1.5kg", "2kg"],
      defaultWeight: "500g",
      isEggless: true,
      isBestseller: true,
      isChefSpecial: true,
      badgeText: "Bestseller",
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      description:
        "Layers of moist Valrhona dark chocolate sponge cushioned with silky 54% Callebaut dark ganache. Finished with chocolate curls and gold luster dust.",
      flavorProfile: ["54% Callebaut Dark Ganache", "Moist Cocoa Sponge", "Dark Chocolate Shavings"],
      ingredientsNotice: "100% Pure Veg (Eggless). Made with pure dairy cream and butter.",
    },
    {
      id: "lotus-biscoff-baked-cheesecake",
      name: "Lotus Biscoff Dream Cheesecake",
      category: "Cheesecakes",
      price: 950,
      originalPrice: 1100,
      weightOptions: ["500g", "1kg", "1.5kg"],
      defaultWeight: "500g",
      isEggless: true,
      isBestseller: true,
      badgeText: "Most Loved",
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
      description:
        "New York style slow-baked cheesecake on a crunchy speculoos biscuit crust, smothered in melted warm Lotus Biscoff spread and biscuit crumbs.",
      flavorProfile: ["Caramelized Speculoos", "Philadelphia Style Cream Cheese", "Cinnamon Crunch"],
      ingredientsNotice: "100% Pure Veg (Eggless). Contains dairy and gluten.",
    },
    {
      id: "royal-red-velvet-cream-cheese",
      name: "Royal Red Velvet with Cream Cheese",
      category: "Signature Chocolate",
      price: 790,
      weightOptions: ["500g", "1kg", "1.5kg", "2kg"],
      defaultWeight: "500g",
      isEggless: true,
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
      description:
        "Ruby-red velvety cocoa sponge layered with our signature tangy whipped cream cheese frosting and dusted with red velvet crumbs.",
      flavorProfile: ["Madagascar Vanilla", "Subtle Cocoa", "Tangy Cream Cheese Frosting"],
      ingredientsNotice: "100% Pure Veg (Eggless).",
    },
    {
      id: "persian-pistachio-rose",
      name: "Persian Pistachio & Damask Rose",
      category: "Fruit & Floral",
      price: 890,
      weightOptions: ["500g", "1kg", "1.5kg"],
      defaultWeight: "500g",
      isEggless: true,
      isChefSpecial: true,
      badgeText: "Chef's Signature",
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      description:
        "An aromatic tribute to royal Indian flavors: roasted Iranian pistachio sponge infused with organic damask rose water and cardamom mousse, topped with dried rose petals.",
      flavorProfile: ["Iranian Pistachio", "Damask Rose Water", "Kashmiri Cardamom"],
      ingredientsNotice: "100% Pure Veg (Eggless). Contains tree nuts.",
    },
    {
      id: "fresh-blueberry-almond-cheesecake",
      name: "Wild Blueberry Swirl Cheesecake",
      category: "Cheesecakes",
      price: 920,
      weightOptions: ["500g", "1kg"],
      defaultWeight: "500g",
      isEggless: true,
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
      description:
        "Smooth cream cheese infused with whole wild blueberry compote simmered in-house. Set atop a fragrant crushed butter cracker base.",
      flavorProfile: ["Wild Blueberries", "Velvety Cream Cheese", "Golden Graham Crust"],
      ingredientsNotice: "100% Pure Veg (Eggless).",
    },
    {
      id: "korean-vintage-bento-cake",
      name: "Pastel Vintage Korean Bento Cake",
      category: "Vintage Bento",
      price: 490,
      weightOptions: ["250g (Bento 4-inch)"],
      defaultWeight: "250g (Bento 4-inch)",
      isEggless: true,
      isBestseller: true,
      badgeText: "Trending",
      servesPeople: "1-2 people",
      image:
        "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80",
      description:
        "Aesthetic mini celebration cake in a bio-degradable sugarcane bento box with wooden spoon & candle. Choose your custom short piping text on WhatsApp!",
      flavorProfile: ["Swiss Buttercream", "Vanilla Bean Sponge", "Custom Piped Lettering"],
      ingredientsNotice: "100% Pure Veg (Eggless). Perfect for birthdays & sweet surprises.",
    },
    {
      id: "classic-german-black-forest",
      name: "Classic German Black Forest Noir",
      category: "Signature Chocolate",
      price: 750,
      weightOptions: ["500g", "1kg", "1.5kg", "2kg"],
      defaultWeight: "500g",
      isEggless: true,
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
      description:
        "Traditional dark chocolate sponge soaked with cherry nectar, loaded with imported sour cherries, fresh dairy Chantilly cream and shaved 70% chocolate.",
      flavorProfile: ["Sour Morello Cherries", "Whipped Dairy Cream", "Dark Cocoa Shavings"],
      ingredientsNotice: "100% Pure Veg (Eggless). Completely non-alcoholic.",
    },
    {
      id: "fresh-seasonal-mango-opera",
      name: "Alphonso Mango & Vanilla Cloud",
      category: "Fruit & Floral",
      price: 850,
      weightOptions: ["500g", "1kg"],
      defaultWeight: "500g",
      isEggless: true,
      badgeText: "Seasonal Treat",
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
      description:
        "Spongy vanilla genoise generously layered with real Ratnagiri Alphonso mango chunks, mango mousse, and glazed with fresh fruit gelée.",
      flavorProfile: ["Ratnagiri Alphonso Puree", "Vanilla Genoise", "Fresh Fruit Medley"],
      ingredientsNotice: "100% Pure Veg (Eggless). Limited seasonal batch.",
    },
    {
      id: "assorted-luxury-cupcake-box",
      name: "Luxury Cupcake Hamper (Box of 6)",
      category: "Tea Cakes & Cupcakes",
      price: 550,
      weightOptions: ["Box of 6", "Box of 12"],
      defaultWeight: "Box of 6",
      isEggless: true,
      servesPeople: "6 pieces",
      image:
        "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80",
      description:
        "An exquisite collection of 6 gourmet cupcakes: 2 Belgian Fudge, 2 Red Velvet Cream Cheese, and 2 Salted Caramel Biscoff.",
      flavorProfile: ["Assorted Belgian Fudge", "Red Velvet Cream Cheese", "Salted Caramel"],
      ingredientsNotice: "100% Pure Veg (Eggless). Comes in a luxury gift box with ribbon.",
    },
    {
      id: "traditional-italian-tiramisu-cake",
      name: "Caffè Tiramisu Gateau",
      category: "Signature Chocolate",
      price: 890,
      weightOptions: ["500g", "1kg"],
      defaultWeight: "500g",
      isEggless: false,
      servesPeople: "4-6 people (500g)",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
      description:
        "Authentic Italian espresso-soaked sponge layered with whipped mascarpone cream cheese and dusted with Dutch cocoa powder.",
      flavorProfile: ["Arabica Espresso", "Italian Mascarpone", "Dutch Cocoa"],
      ingredientsNotice: "Contains Egg. Authentic Italian recipe. Alcohol-free espresso soak.",
    },
  ],
  features: [
    {
      iconName: "ShieldCheck",
      title: "100% Pure Butter & Couverture",
      description:
        "No margarine, compound chocolate, or synthetic stabilizers. Clean ingredients you can taste in every bite.",
    },
    {
      iconName: "Sparkles",
      title: "100% Pure Veg (Eggless) Range",
      description:
        "Certified eggless options baked in a dedicated preparation space with feather-light texture and rich flavour.",
    },
    {
      iconName: "Truck",
      title: "Temperature-Controlled Delivery",
      description:
        "Hand-carried in chilled bakery vans across Delhi NCR so your cake arrives pristine, cool, and celebration-ready.",
    },
    {
      iconName: "HeartHandshake",
      title: "Direct WhatsApp Ordering",
      description:
        "No complicated checkout or third-party commission. Talk directly to our chef to customize your cake and delivery timing.",
    },
  ],
  testimonials: [
    {
      id: "t1",
      customerName: "Rohan Malhotra",
      cityOrArea: "Defence Colony, New Delhi",
      rating: 5,
      comment:
        "Ordered the Belgian Dark Truffle for my mother's 60th birthday. The richness was unmatched, and it was so refreshing to find an eggless cake that doesn't feel heavy or dry. WhatsApp order was super quick!",
      cakeOrdered: "Belgian Dark Truffle Noir (1kg)",
      dateAgo: "2 days ago",
      source: "google",
      isLocalGuide: true,
      reviewsCount: 24,
    },
    {
      id: "t2",
      customerName: "Pooja Aggarwal",
      cityOrArea: "Golf Course Road, Gurgaon",
      rating: 5,
      comment:
        "The Lotus Biscoff cheesecake is out of this world! Delivered right on time for our midnight celebration in Gurgaon. Packaging was ultra-secure with dry ice and cute complimentary candles.",
      cakeOrdered: "Lotus Biscoff Dream Cheesecake",
      dateAgo: "Last week",
      source: "google",
      isLocalGuide: true,
      reviewsCount: 18,
    },
    {
      id: "t3",
      customerName: "Sanya Mathur",
      cityOrArea: "Noida Sector 50",
      rating: 5,
      comment:
        "I ordered the Korean Bento Cake for our anniversary. The piped design was identical to the reference picture I shared on WhatsApp. 10/10 service and taste!",
      cakeOrdered: "Pastel Vintage Korean Bento Cake",
      dateAgo: "3 weeks ago",
      source: "google",
      isLocalGuide: false,
    },
  ],
  faqs: [
    {
      question: "How do I place an order through WhatsApp?",
      answer:
        "Simply browse our menu below, select your favorite cake and desired weight (e.g., 500g, 1kg), and click 'Order via WhatsApp'. A pre-filled message with your cake details will open in your WhatsApp app. Our bakery team will reply immediately to confirm your delivery address and send UPI/payment details.",
    },
    {
      question: "Are your cakes 100% eggless?",
      answer:
        "Yes! Most of our cakes are 100% eggless (Pure Veg), indicated by the green leaf icon 🌱 on the menu. For items containing egg (like our authentic Italian Tiramisu), dietary badges are clearly stated so you can order with complete peace of mind.",
    },
    {
      question: "How much advance notice is needed for cake delivery?",
      answer:
        "Standard menu cakes require 3 to 4 hours prior notice for same-day delivery across Delhi NCR. For custom tiered designs, fondant sculptures, or weekend celebrations, we recommend booking 24 to 48 hours in advance.",
    },
    {
      question: "Can I add a custom message on the cake?",
      answer:
        "Yes! Every cake includes a complimentary chocolate plaque with your custom message (e.g., 'Happy Birthday Rahul! 🎂'). You can enter your message when ordering on WhatsApp.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, and all major Credit/Debit cards. Payment links are shared directly over WhatsApp once your order slot is reserved.",
    },
    {
      question: "Do you offer home delivery across Delhi NCR?",
      answer:
        "Yes, we deliver across South Delhi, Central Delhi, West Delhi, East Delhi, Gurgaon, and Noida using dedicated four-wheeler cake courier delivery to ensure zero transit damage.",
    },
  ],
  customOrderBanner: {
    title: "Need a Bespoke Wedding or Theme Cake?",
    subtitle:
      "Share your reference sketch or Pinterest moodboard directly with Chef Ananya Verma. We create custom multi-tier fondant & floral masterpieces.",
    buttonText: "Discuss Custom Cake on WhatsApp",
    whatsappMessage:
      "*Hello The Velvet Crumb!* 🎂✨\n\nI want to discuss a *bespoke custom cake* for an upcoming celebration.\n- Occasion (Birthday/Wedding/Anniversary):\n- Date of event:\n- Approx weight / guests:\n- Flavor preference:\n\nLooking forward to hearing from you!",
  },
};
