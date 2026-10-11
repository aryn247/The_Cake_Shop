"use client";

import React from "react";
import Image from "next/image";
import { ShopConfig } from "@/types/shop";
import { CheckCircle2, Award, Heart } from "lucide-react";

interface AboutSectionProps {
  shop: ShopConfig;
}

export function AboutSection({ shop }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-4/5 max-w-md mx-auto lg:max-w-none">
              <Image
                src={shop.about.imageUrl}
                alt={`${shop.shopName} baking craft`}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              {/* Chef Name Pill */}
              {shop.about.chefName && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#EDE2D5]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#A8583B]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#331C14]">
                        {shop.about.chefName}
                      </h4>
                      <p className="text-[11px] text-[#7A645B]">
                        {shop.about.chefTitle}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#5C382F] text-xs font-semibold mb-4">
              <Heart className="w-3.5 h-3.5 text-[#B76E4B]" />
              <span>{shop.about.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#331C14] leading-tight mb-6">
              {shop.about.title}{" "}
              <span className="italic font-normal text-[#A8583B]">
                {shop.about.highlightWord}
              </span>
            </h2>

            <div className="space-y-4 mb-8">
              {shop.about.description.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#5E4B43] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quality checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-4 border-t border-[#EDE2D5]">
              {shop.about.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#4A3932]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
