"use client";

import React from "react";
import { ShopConfig } from "@/types/shop";
import { Heart, MessageCircle, Phone, ArrowUp } from "lucide-react";
import { getCustomInquiryWhatsAppUrl } from "@/lib/whatsapp";

interface FooterProps {
  shop: ShopConfig;
}

export function Footer({ shop }: FooterProps) {
  const whatsappUrl = getCustomInquiryWhatsAppUrl(shop);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2D1B17] text-[#EDE4DC] pt-16 pb-12 border-t border-[#452A24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4A2E27]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#FAF5EF] mb-2">
              {shop.shopName}
            </span>
            <p className="text-xs font-semibold text-[#D4A373] uppercase tracking-wider mb-4">
              {shop.badge || "Artisan Pâtisserie"}
            </p>
            <p className="text-xs sm:text-sm text-[#C9B7AD] leading-relaxed max-w-sm mb-6">
              {shop.tagline}. Baked fresh every morning with 100% pure dairy butter, Callebaut couverture chocolate, and zero synthetic preservatives.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={`tel:${shop.contact.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#3E2520] hover:bg-[#4E302A] text-[#FAF5EF] text-xs font-semibold transition-all border border-[#5A3831]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Call Bakery</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF5EF] uppercase tracking-wider mb-4">
              Explore Menu
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C9B7AD]">
              {shop.categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <a href="#menu" className="hover:text-[#E8BFA8] transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#about" className="hover:text-[#E8BFA8] transition-colors">
                  Our Baking Story
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#E8BFA8] transition-colors">
                  Ordering FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Timings */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-sm font-bold text-[#FAF5EF] uppercase tracking-wider mb-4">
              Bakery Studio
            </h4>
            <div className="space-y-2 text-xs text-[#C9B7AD]">
              <p className="font-medium text-[#FAF5EF]">{shop.contact.address}</p>
              <p>{shop.contact.city}, {shop.contact.state} — {shop.contact.pincode}</p>
              <p className="pt-2 text-[#D4A373] font-semibold">
                Daily Hours: {shop.hours.regular}
              </p>
              <p className="text-[11px] text-[#A8968E]">
                {shop.hours.deliveryTiming}
              </p>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-[#3E2520] border border-[#52332B] text-[11px] text-[#C9B7AD]">
              🌱 <strong>100% Pure Veg (Eggless)</strong> certified kitchen station available for every cake flavor.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8968E]">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© 2026 {shop.shopName}. All rights reserved. Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>in India.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#8C766C]">
              Platform: CakeCommerce Tier 1 Static Edition
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#3E2520] hover:bg-[#4E302A] text-[#FAF5EF] transition-all"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
