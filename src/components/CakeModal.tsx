"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Cake, ShopConfig } from "@/types/shop";
import { X, MessageCircle, Users, CheckCircle2, Sparkles } from "lucide-react";
import { VegBadge } from "./VegBadge";
import { getCakeOrderWhatsAppUrl } from "@/lib/whatsapp";
import { calculateCakePrice, calculateCakeOriginalPrice } from "@/lib/pricing";

interface CakeModalProps {
  cake: Cake | null;
  shop: ShopConfig;
  onClose: () => void;
}

interface CakeModalContentProps {
  cake: Cake;
  shop: ShopConfig;
  onClose: () => void;
}

function CakeModalContent({ cake, shop, onClose }: CakeModalContentProps) {
  const [selectedWeight, setSelectedWeight] = useState<string>(
    cake.defaultWeight || cake.weightOptions[0] || "500g"
  );
  const [customMessage, setCustomMessage] = useState<string>("");

  const currentPrice = calculateCakePrice(cake, selectedWeight);
  const currentOriginalPrice = calculateCakeOriginalPrice(cake, selectedWeight);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const orderUrl = getCakeOrderWhatsAppUrl(
    shop,
    cake,
    selectedWeight,
    customMessage
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-[#FDFBF7] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EDE2D5] z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#3B2219] shadow-md transition-all hover:scale-105"
          aria-label="Close cake modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Cake Image Column */}
          <div className="sm:col-span-5 relative aspect-square sm:aspect-auto min-h-[260px] bg-zinc-100">
            <Image
              src={cake.image}
              alt={cake.name}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              <VegBadge isEggless={cake.isEggless} />
              {cake.badgeText && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#A8583B] text-white shadow-xs">
                  {cake.badgeText}
                </span>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C6D60]">
                {cake.category}
              </span>
              <h2 className="font-serif text-2xl font-extrabold text-[#331C14] mt-0.5">
                {cake.name}
              </h2>
            </div>

            {/* Price & Serves */}
            <div className="flex items-center gap-3 my-3 pb-3 border-b border-[#EFE5DB]">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-black text-[#A8583B]">
                  {shop.currencySymbol}
                  {currentPrice.toLocaleString("en-IN")}
                </span>
                {currentOriginalPrice && (
                  <span className="text-sm line-through text-zinc-400">
                    {shop.currencySymbol}
                    {currentOriginalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              {cake.servesPeople && (
                <div className="flex items-center gap-1 text-xs text-[#7A645B] bg-[#F4EDE5] px-2.5 py-1 rounded-md ml-auto">
                  <Users className="w-3.5 h-3.5 text-[#A8583B]" />
                  <span>{cake.servesPeople}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#5E4B43] leading-relaxed mb-4">
              {cake.description}
            </p>

            {/* Flavor Profile Tags */}
            {cake.flavorProfile && cake.flavorProfile.length > 0 && (
              <div className="mb-4">
                <span className="text-[11px] font-bold text-[#8C6D60] uppercase tracking-wider block mb-1.5">
                  Flavor Notes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cake.flavorProfile.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-[#F4ECE3] text-[#4A3229] border border-[#E5D7CA] font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Weight / Size Selection */}
            <div className="mb-4">
              <label className="text-xs font-bold text-[#3B2219] block mb-1.5">
                Choose Cake Weight / Portion:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {cake.weightOptions.map((weight) => {
                  const optionPrice = calculateCakePrice(cake, weight);
                  const isSelected = selectedWeight === weight;

                  return (
                    <button
                      key={weight}
                      type="button"
                      onClick={() => setSelectedWeight(weight)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border flex flex-col items-center justify-center gap-0.5 ${
                        isSelected
                          ? "bg-[#3B2219] text-[#FAF5EF] border-[#3B2219] shadow-xs"
                          : "bg-white text-[#5C4942] border-[#DFCFC2] hover:bg-[#F9F4EE]"
                      }`}
                    >
                      <span>{weight}</span>
                      <span
                        className={`text-[10px] font-semibold ${
                          isSelected ? "text-[#E8C2B0]" : "text-[#8C6D60]"
                        }`}
                      >
                        {shop.currencySymbol}
                        {optionPrice.toLocaleString("en-IN")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Personalized Message on Cake */}
            <div className="mb-5">
              <label className="text-xs font-bold text-[#3B2219] flex items-center justify-between mb-1.5">
                <span>Message on Cake (Optional):</span>
                <span className="text-[10px] text-[#8C6D60] font-normal">
                  e.g. Happy Birthday Aarav!
                </span>
              </label>
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Piped chocolate message (included free)"
                maxLength={45}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFCFC2] bg-white focus:outline-hidden focus:border-[#A8583B] focus:ring-1 focus:ring-[#A8583B] transition-all"
              />
            </div>

            {/* Dietary Notice */}
            {cake.ingredientsNotice && (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F0E8] border border-[#EBE0D4] text-[11px] text-[#69544C] mb-5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{cake.ingredientsNotice}</span>
              </div>
            )}

            {/* WhatsApp Direct Action Button */}
            <div className="mt-auto pt-3 border-t border-[#EFE5DB]">
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BE5A] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>
                  Order on WhatsApp ({selectedWeight} • {shop.currencySymbol}
                  {currentPrice.toLocaleString("en-IN")})
                </span>
              </a>

              <p className="text-[11px] text-center text-[#8C6D60] mt-2 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-[#B76E4B]" />
                Opens WhatsApp with prefilled order details for instant confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CakeModal({ cake, shop, onClose }: CakeModalProps) {
  if (!cake) return null;
  return <CakeModalContent key={cake.id} cake={cake} shop={shop} onClose={onClose} />;
}
