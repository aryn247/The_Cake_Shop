"use client";

import React from "react";
import Image from "next/image";
import { ShopConfig } from "@/types/shop";
import { Sparkles, ArrowRight, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { getCustomInquiryWhatsAppUrl } from "@/lib/whatsapp";

interface HeroProps {
  shop: ShopConfig;
}

export function Hero({ shop }: HeroProps) {
  const whatsappUrl = getCustomInquiryWhatsAppUrl(shop);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-linear-to-b from-[#FDFBF7] via-[#F9F4EE] to-[#FDFBF7]">
      {/* Decorative background glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#F1D7C6]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8DDD1]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE3D5] text-[#4A2E2B] text-xs font-semibold mb-6 border border-[#DFCEBD]">
              <Sparkles className="w-3.5 h-3.5 text-[#B76E4B]" />
              <span>{shop.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#331C14] leading-[1.15] mb-6">
              {shop.hero.title}{" "}
              <span className="italic font-normal text-[#A8583B] relative inline-block underline decoration-[#E8BFA8]/60 decoration-wavy decoration-2">
                {shop.hero.highlightWord}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5E4B43] leading-relaxed max-w-2xl mb-8">
              {shop.hero.subtitle}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#3B2219] hover:bg-[#523328] text-[#FAF5EF] text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <span>{shop.hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-[#D8A783]" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{shop.hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E8DDD1] w-full">
              {shop.hero.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#3B2219]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#7B675E] font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Showcase Image with floating badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src={shop.hero.imageUrl}
                    alt={`${shop.shopName} signature cake`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating Card: Pure Butter Promise */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-[#EDE2D5] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#9E5336]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-[#331C14]">
                      100% Pure Butter
                    </span>
                    <span className="text-[10px] text-[#7A645B]">
                      Zero Margarine / Compound
                    </span>
                  </div>
                </div>

                {/* Floating Card: Rating badge */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#EDE2D5] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#331C14]">
                      Google Rating 4.9★
                    </div>
                    <div className="text-[10px] text-[#7A645B]">
                      Trusted in {shop.contact.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
