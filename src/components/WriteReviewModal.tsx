"use client";

import React, { useState } from "react";
import { ShopConfig } from "@/types/shop";
import { X, Star, MessageCircle, ExternalLink, Check, Copy } from "lucide-react";
import { formatWhatsAppNumber } from "@/lib/whatsapp";

interface WriteReviewModalProps {
  shop: ShopConfig;
  isOpen: boolean;
  onClose: () => void;
}

export function WriteReviewModal({ shop, isOpen, onClose }: WriteReviewModalProps) {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [reviewerName, setReviewerName] = useState("");
  const [cakeTried, setCakeTried] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const googleReviewLink =
    shop.contact.googleReviewUrl ||
    shop.contact.googleMapsUrl ||
    `https://maps.google.com/?q=${encodeURIComponent(
      shop.shopName + " " + shop.contact.city
    )}`;

  const handlePostToGoogle = () => {
    // Copy the review text to clipboard so customer can easily paste on Google
    const textToCopy = reviewComment.trim()
      ? `${reviewComment.trim()} (Cake tried: ${cakeTried || "Signature cake"})`
      : `Loved the cakes from ${shop.shopName}! Amazing freshness and taste.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }

    // Open Google Maps review page in new tab
    window.open(googleReviewLink, "_blank", "noopener,noreferrer");
  };

  const handleSendViaWhatsApp = () => {
    const number = formatWhatsAppNumber(shop.contact.whatsappNumber);
    const starEmojis = "⭐".repeat(rating);
    const lines = [
      `*New Customer Feedback for ${shop.shopName}!* ${starEmojis}`,
      ``,
      `👤 *Customer:* ${reviewerName.trim() || "A Cake Lover"}`,
      `⭐ *Rating:* ${rating}/5 Stars`,
    ];

    if (cakeTried.trim()) {
      lines.push(`🎂 *Cake Tried:* ${cakeTried.trim()}`);
    }

    if (reviewComment.trim()) {
      lines.push(`💬 *Review:* "${reviewComment.trim()}"`);
    }

    lines.push(
      ``,
      `Shared directly via ${shop.shopName} official website.`
    );

    const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-[#FDFBF7] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EDE2D5] z-10 p-6 sm:p-8 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white text-zinc-500 hover:text-zinc-900 shadow-xs transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
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
            <span>Google Maps Verified Reviews</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#331C14]">
            Share Your Experience
          </h3>
          <p className="text-xs text-[#7A645B] mt-1">
            Your honest review helps our artisan bakers and local foodies in {shop.contact.city}!
          </p>
        </div>

        {/* Rating Stars Picker */}
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="text-xs font-semibold text-[#8C6D60] mb-2">
            Tap to Rate:
          </span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                className="p-1 focus:outline-hidden transition-transform hover:scale-115"
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  className={`w-7 h-7 ${
                    (hoverRating || rating) >= star
                      ? "text-amber-400 fill-amber-400"
                      : "text-zinc-300"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-[11px] font-bold text-[#A8583B] mt-1">
            {rating === 5 && "Outstanding! 5 Stars ⭐⭐⭐⭐⭐"}
            {rating === 4 && "Very Good! 4 Stars ⭐⭐⭐⭐"}
            {rating === 3 && "Good 3 Stars ⭐⭐⭐"}
            {rating <= 2 && "Could be better"}
          </span>
        </div>

        {/* Review Form Fields */}
        <div className="space-y-3.5 mb-6">
          <div>
            <label className="text-xs font-bold text-[#3B2219] block mb-1">
              Your Name:
            </label>
            <input
              type="text"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFCFC2] bg-white focus:outline-hidden focus:border-[#A8583B]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#3B2219] block mb-1">
              Cake Ordered / Tried:
            </label>
            <input
              type="text"
              value={cakeTried}
              onChange={(e) => setCakeTried(e.target.value)}
              placeholder="e.g. Belgian Dark Truffle / Biscoff Cheesecake"
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFCFC2] bg-white focus:outline-hidden focus:border-[#A8583B]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#3B2219] block mb-1">
              Your Feedback / Review:
            </label>
            <textarea
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              rows={3}
              placeholder="How was the taste, freshness, delivery, or decoration?"
              className="w-full text-xs p-3 rounded-xl border border-[#DFCFC2] bg-white focus:outline-hidden focus:border-[#A8583B]"
            />
          </div>
        </div>

        {/* Notification pill if copied */}
        {copied && (
          <div className="mb-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Review text copied! Opening Google Maps...</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={handlePostToGoogle}
            className="w-full py-3 px-4 rounded-2xl bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <Copy className="w-4 h-4" />
            <span>Post on Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 ml-auto" />
          </button>

          <button
            type="button"
            onClick={handleSendViaWhatsApp}
            className="w-full py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold shadow-xs flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send Feedback to Baker on WhatsApp</span>
          </button>
        </div>

        <p className="text-[10px] text-center text-[#8C6D60] mt-4">
          Google reviews appear directly on Google Maps and our verified website showcase.
        </p>
      </div>
    </div>
  );
}
