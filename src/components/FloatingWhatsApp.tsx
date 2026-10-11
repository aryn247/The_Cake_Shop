"use client";

import React, { useState } from "react";
import { ShopConfig } from "@/types/shop";
import { MessageCircle, X } from "lucide-react";
import { getCustomInquiryWhatsAppUrl } from "@/lib/whatsapp";

interface FloatingWhatsAppProps {
  shop: ShopConfig;
}

export function FloatingWhatsApp({ shop }: FloatingWhatsAppProps) {
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const whatsappUrl = getCustomInquiryWhatsAppUrl(shop);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 animate-fadeIn">
      {/* Friendly Chat Tooltip */}
      {tooltipVisible && (
        <div className="relative bg-white text-[#331C14] px-4 py-2.5 rounded-2xl shadow-xl border border-[#EDE2D5] text-xs font-semibold flex items-center gap-2 max-w-xs animate-bounce-subtle">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need help choosing a cake? Chat with us!</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-zinc-400 hover:text-zinc-700 ml-1 p-0.5"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95"
        title="Direct WhatsApp Chat with Bakery"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-xs font-bold tracking-wide">
          Order on WhatsApp
        </span>
      </a>
    </div>
  );
}
