"use client";

import React, { useState } from "react";
import { ShopConfig } from "@/types/shop";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqSectionProps {
  shop: ShopConfig;
}

export function FaqSection({ shop }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#5C382F] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B76E4B]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#331C14]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#6B564E] mt-2">
            Everything you need to know about ordering, delivery, and ingredients.
          </p>
        </div>

        <div className="space-y-3.5">
          {shop.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EDE2D5] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#331C14]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#4A2E2B] text-white rotate-180"
                        : "bg-[#F5ECE2] text-[#5C4942]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5E4B43] leading-relaxed border-t border-[#F7EFE7] animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
