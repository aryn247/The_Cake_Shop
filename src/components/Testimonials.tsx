"use client";

import React, { useState } from "react";
import { ShopConfig } from "@/types/shop";
import { Star, ExternalLink, PlusCircle, CheckCircle } from "lucide-react";
import { WriteReviewModal } from "./WriteReviewModal";

interface TestimonialsProps {
  shop: ShopConfig;
}

export function Testimonials({ shop }: TestimonialsProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Avatar pastel background colors like Google Maps
  const avatarColors = [
    "bg-blue-600",
    "bg-emerald-600",
    "bg-purple-600",
    "bg-amber-600",
    "bg-rose-600",
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F9F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Google Badge Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DDD1] shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            {/* Google Multi-Color G Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E5] flex items-center justify-center p-3 shadow-xs shrink-0">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#331C14]">
                  4.9
                </span>
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#66544C] mt-0.5">
                Google Rating • 850+ Verified Reviews in {shop.contact.city}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write a Review</span>
            </button>

            <a
              href={shop.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#F5EDE4] hover:bg-[#EBDFD3] text-[#4A2E2B] text-xs font-bold transition-all border border-[#DFCEBD]"
            >
              <span>View on Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A8583B] mb-2 block">
            Real Customer Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#331C14]">
            Recent Reviews on Google Maps
          </h2>
          <p className="text-sm text-[#6B564E] mt-2">
            Read what celebration hosts and cake lovers across {shop.contact.city} are saying about us.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {shop.testimonials.map((review, idx) => {
            const avatarColor = avatarColors[idx % avatarColors.length];
            const initial = review.customerName.charAt(0).toUpperCase();

            return (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EBE0D4] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top: Reviewer Info + Google Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar Circle */}
                      <div
                        className={`w-10 h-10 rounded-full ${avatarColor} text-white font-bold text-sm flex items-center justify-center shadow-xs`}
                      >
                        {initial}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-serif text-sm font-bold text-[#331C14]">
                            {review.customerName}
                          </h4>
                          <span title="Verified Google Reviewer">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8C766C]">
                          {review.isLocalGuide ? "Local Guide" : "Verified Customer"} • {review.cityOrArea}
                        </p>
                      </div>
                    </div>

                    {/* Small Google G Badge */}
                    <div className="w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center p-1 shrink-0" title="Google Maps Review">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Rating Stars & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#A8968E]">{review.dateAgo}</span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-[#4A3932] leading-relaxed italic mb-4">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Cake Ordered Badge */}
                <div className="pt-3 border-t border-[#F2EAE0] flex items-center justify-between text-[11px]">
                  <span className="text-[#8C6D60]">Ordered:</span>
                  <span className="font-semibold text-[#A8583B] bg-[#F9F1EA] px-2.5 py-0.5 rounded-md">
                    {review.cakeOrdered}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Write Review Modal */}
      <WriteReviewModal
        shop={shop}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
