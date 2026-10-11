"use client";

import React from "react";
import { ShopConfig } from "@/types/shop";
import { MessageCircle, Sparkles, CakeSlice, Palette, Gift } from "lucide-react";
import { getCustomInquiryWhatsAppUrl } from "@/lib/whatsapp";

interface CustomCakeBannerProps {
  shop: ShopConfig;
}

export function CustomCakeBanner({ shop }: CustomCakeBannerProps) {
  const whatsappUrl = getCustomInquiryWhatsAppUrl(
    shop,
    shop.customOrderBanner.whatsappMessage
  );

  return (
    <section className="py-12 bg-[#F9F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-linear-to-r from-[#3B2219] via-[#4A2E2B] to-[#2E1A14] text-white p-8 sm:p-12 lg:p-16 shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A373]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Copy */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5E3B37] text-[#F3D7C5] text-xs font-semibold mb-4 border border-[#7D4D47]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Bespoke Theme & Wedding Creations</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF5EF] mb-4">
                {shop.customOrderBanner.title}
              </h2>

              <p className="text-sm sm:text-base text-[#DBC5BB] leading-relaxed max-w-2xl mb-8">
                {shop.customOrderBanner.subtitle}
              </p>

              {/* 3 Step Custom Order Process */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
                <div className="bg-[#4E302C]/80 border border-[#66403B] rounded-2xl p-4 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#613A35] text-[#E8C2B0] shrink-0">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FAF5EF]">1. Share Reference</h4>
                    <p className="text-[11px] text-[#C9B3A9] mt-0.5">
                      Send a Pinterest photo, sketch, or color theme.
                    </p>
                  </div>
                </div>

                <div className="bg-[#4E302C]/80 border border-[#66403B] rounded-2xl p-4 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#613A35] text-[#E8C2B0] shrink-0">
                    <CakeSlice className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FAF5EF]">2. Choose Flavors</h4>
                    <p className="text-[11px] text-[#C9B3A9] mt-0.5">
                      Belgian ganache, Biscoff, red velvet, fresh fruit & eggless.
                    </p>
                  </div>
                </div>

                <div className="bg-[#4E302C]/80 border border-[#66403B] rounded-2xl p-4 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#613A35] text-[#E8C2B0] shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FAF5EF]">3. Doorstep Delivery</h4>
                    <p className="text-[11px] text-[#C9B3A9] mt-0.5">
                      Temperature-controlled chilled delivery at your venue.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{shop.customOrderBanner.buttonText}</span>
              </a>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center p-6 bg-[#452724]/60 border border-[#633A35] rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-[#593430] flex items-center justify-center text-3xl mb-3 shadow-inner">
                🎂
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAF5EF] mb-1">
                Custom Cake Consultation
              </h3>
              <p className="text-xs text-[#D1BBB0] mb-4">
                Chat directly with our pastry chefs to discuss tier weights, fondants, and guest servings.
              </p>
              <div className="text-[11px] font-semibold text-[#E8C2B0] bg-[#54302C] px-3 py-1.5 rounded-full border border-[#6E3F39]">
                ⚡ Response within 15 mins on WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
