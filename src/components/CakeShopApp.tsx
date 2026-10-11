"use client";

import React, { useState } from "react";
import { ShopConfig } from "@/types/shop";
import { availableShops, defaultShopId } from "@/config/shop.config";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { CakeGallery } from "./CakeGallery";
import { CustomCakeBanner } from "./CustomCakeBanner";
import { Features } from "./Features";
import { AboutSection } from "./AboutSection";
import { Testimonials } from "./Testimonials";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

interface CakeShopAppProps {
  initialShop: ShopConfig;
}

export function CakeShopApp({ initialShop }: CakeShopAppProps) {
  const [activeShopId, setActiveShopId] = useState<string>(
    initialShop.id || defaultShopId
  );

  const activeShop = availableShops[activeShopId] || initialShop;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] selection:bg-[#E8C2B0] selection:text-[#3B2219]">
      {/* Header with shop switcher & navigation */}
      <Header
        shop={activeShop}
        availableShops={availableShops}
        activeShopId={activeShopId}
        onSelectShop={(id) => setActiveShopId(id)}
      />

      {/* Hero Showcase */}
      <main className="flex-1">
        <Hero shop={activeShop} />

        {/* Dynamic Cake Gallery with WhatsApp Ordering */}
        <CakeGallery shop={activeShop} />

        {/* Custom Cake Order WhatsApp CTA Banner */}
        <CustomCakeBanner shop={activeShop} />

        {/* Key Features & Promises */}
        <Features shop={activeShop} />

        {/* Bakery Story & Chef */}
        <AboutSection shop={activeShop} />

        {/* Customer Reviews */}
        <Testimonials shop={activeShop} />

        {/* Ordering & Delivery FAQs */}
        <FaqSection shop={activeShop} />

        {/* Studio Location, Timings & Google Maps */}
        <ContactSection shop={activeShop} />
      </main>

      {/* Footer */}
      <Footer shop={activeShop} />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp shop={activeShop} />
    </div>
  );
}
