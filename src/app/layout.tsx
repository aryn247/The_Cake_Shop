import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { shopConfig } from "@/config/shop.config";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${shopConfig.shopName} | ${shopConfig.tagline}`,
  description: `${shopConfig.shopName} - ${shopConfig.badge}. Fresh artisanal cakes, pure veg & eggless cakes, custom celebration cakes. Order directly on WhatsApp in ${shopConfig.contact.city}.`,
  keywords: [
    shopConfig.shopName,
    "cake shop",
    `cake delivery in ${shopConfig.contact.city}`,
    "eggless cakes",
    "birthday cake delivery",
    "custom cakes WhatsApp",
    "cheesecake delivery",
    "bakery",
  ],
  openGraph: {
    title: `${shopConfig.shopName} | Handcrafted Cakes`,
    description: shopConfig.hero.subtitle,
    images: [shopConfig.hero.imageUrl],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C2420] selection:bg-[#E8C2B0] selection:text-[#3B2219]">
        {children}
      </body>
    </html>
  );
}
