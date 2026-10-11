"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cake, ShopConfig } from "@/types/shop";
import { MessageCircle, Eye, Users } from "lucide-react";
import { VegBadge } from "./VegBadge";
import { getCakeOrderWhatsAppUrl } from "@/lib/whatsapp";
import { calculateCakePrice, calculateCakeOriginalPrice } from "@/lib/pricing";

interface CakeCardProps {
  cake: Cake;
  shop: ShopConfig;
  onOpenModal: (cake: Cake) => void;
}

export function CakeCard({ cake, shop, onOpenModal }: CakeCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(
    cake.defaultWeight || cake.weightOptions[0] || "500g"
  );

  const currentPrice = calculateCakePrice(cake, selectedWeight);
  const currentOriginalPrice = calculateCakeOriginalPrice(cake, selectedWeight);

  const directWhatsAppUrl = getCakeOrderWhatsAppUrl(
    shop,
    cake,
    selectedWeight
  );

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EDE2D5] shadow-xs hover:shadow-xl hover:border-[#D6BEAE] transition-all duration-300">
      {/* Image Container with Badges */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <VegBadge isEggless={cake.isEggless} />
          {cake.badgeText && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#A8583B] text-white shadow-xs">
              {cake.badgeText}
            </span>
          )}
        </div>

        {/* Quick View Button on Image */}
        <button
          onClick={() => onOpenModal(cake)}
          className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-[#3B2219] text-xs font-bold shadow-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-all hover:scale-105"
        >
          <Eye className="w-3.5 h-3.5 text-[#A8583B]" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category & Serves */}
        <div className="flex items-center justify-between text-xs text-[#8C6D60] mb-1.5">
          <span className="font-semibold uppercase tracking-wider text-[11px]">
            {cake.category}
          </span>
          {cake.servesPeople && (
            <span className="flex items-center gap-1 text-[11px] text-[#7A645B]">
              <Users className="w-3 h-3 text-[#A8583B]" />
              {cake.servesPeople.split("(")[0]}
            </span>
          )}
        </div>

        {/* Cake Name */}
        <h3
          onClick={() => onOpenModal(cake)}
          className="font-serif text-lg font-bold text-[#331C14] group-hover:text-[#A8583B] transition-colors cursor-pointer line-clamp-1 mb-2"
        >
          {cake.name}
        </h3>

        {/* Description snippet */}
        <p className="text-xs text-[#635149] line-clamp-2 leading-relaxed mb-4">
          {cake.description}
        </p>

        {/* Weight / Portion selector */}
        {cake.weightOptions.length > 1 && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] font-medium text-[#7A645B] mb-1">
              <span>Portion:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cake.weightOptions.map((weight) => (
                <button
                  key={weight}
                  type="button"
                  onClick={() => setSelectedWeight(weight)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                    selectedWeight === weight
                      ? "bg-[#4A2E2B] text-white shadow-xs"
                      : "bg-[#F5EDE4] text-[#5C4942] hover:bg-[#EBDFD3]"
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price & WhatsApp CTA in Footer */}
        <div className="mt-auto pt-3 border-t border-[#F0E6DC] flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#8C6D60] font-semibold uppercase tracking-wider">
              Price
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-xl font-black text-[#A8583B]">
                {shop.currencySymbol}
                {currentPrice.toLocaleString("en-IN")}
              </span>
              {currentOriginalPrice && (
                <span className="text-xs line-through text-zinc-400">
                  {shop.currencySymbol}
                  {currentOriginalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
            title={`Order ${cake.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
