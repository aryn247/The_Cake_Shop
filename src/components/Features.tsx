"use client";

import React from "react";
import { ShopConfig } from "@/types/shop";
import {
  ShieldCheck,
  Truck,
  HeartHandshake,
  Sparkles,
  Clock,
  CakeSlice,
} from "lucide-react";

interface FeaturesProps {
  shop: ShopConfig;
}

const iconMap = {
  ShieldCheck,
  Truck,
  HeartHandshake,
  Sparkles,
  Clock,
  CakeSlice,
};

export function Features({ shop }: FeaturesProps) {
  return (
    <section id="features" className="py-16 sm:py-24 bg-[#F9F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A8583B] mb-2 block">
            The Bakery Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#331C14]">
            Why Delhi Celebrates With {shop.shopName}
          </h2>
          <p className="text-sm sm:text-base text-[#6B564E] mt-3">
            Handcrafted luxury cakes baked with passion, hygiene, and the finest natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {shop.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EBE0D4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F6ECE2] text-[#A8583B] flex items-center justify-center mb-5 shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#331C14] mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#66544C] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
