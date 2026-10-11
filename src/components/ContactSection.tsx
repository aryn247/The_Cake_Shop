"use client";

import React from "react";
import { ShopConfig } from "@/types/shop";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Mail,
  Truck,
} from "lucide-react";
import { getCustomInquiryWhatsAppUrl } from "@/lib/whatsapp";

interface ContactSectionProps {
  shop: ShopConfig;
}

export function ContactSection({ shop }: ContactSectionProps) {
  const whatsappUrl = getCustomInquiryWhatsAppUrl(shop);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F9F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A8583B] mb-2 block">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#331C14]">
            Bakery Studio & Order Pickup
          </h2>
          <p className="text-sm sm:text-base text-[#6B564E] mt-3">
            Drop by our studio for freshly baked treats or order online for chilled doorstep delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE0D4] shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#331C14] mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#F6ECE2] text-[#A8583B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D60] block">
                      Our Location
                    </span>
                    <p className="text-sm font-semibold text-[#331C14] mt-0.5">
                      {shop.contact.address}
                    </p>
                    {shop.contact.landmark && (
                      <p className="text-xs text-[#7A645B] mt-0.5">
                        Landmark: {shop.contact.landmark}
                      </p>
                    )}
                    <p className="text-xs text-[#7A645B]">
                      {shop.contact.city}, {shop.contact.state} — {shop.contact.pincode}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#F6ECE2] text-[#A8583B] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D60] block">
                      Opening Hours
                    </span>
                    <p className="text-sm font-semibold text-[#331C14] mt-0.5">
                      {shop.hours.regular}
                    </p>
                    <p className="text-xs text-[#7A645B] mt-0.5">
                      {shop.hours.deliveryTiming}
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#F6ECE2] text-[#A8583B] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D60] block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${shop.contact.phone}`}
                      className="text-sm font-bold text-[#A8583B] hover:underline mt-0.5 block"
                    >
                      {shop.contact.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                {shop.contact.email && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#F6ECE2] text-[#A8583B] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D60] block">
                        Email Inquiries
                      </span>
                      <a
                        href={`mailto:${shop.contact.email}`}
                        className="text-xs font-semibold text-[#5E4B43] hover:underline mt-0.5 block"
                      >
                        {shop.contact.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Advance notice alert */}
              <div className="mt-8 p-4 rounded-2xl bg-[#F8F2EB] border border-[#E5D7CA] flex items-start gap-3">
                <Truck className="w-4 h-4 text-[#A8583B] shrink-0 mt-0.5" />
                <p className="text-xs text-[#635047] leading-relaxed">
                  <strong>Notice:</strong> {shop.hours.noticeRequired}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-8 mt-6 border-t border-[#F2EAE0] flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Kitchen</span>
              </a>

              <a
                href={shop.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#3B2219] hover:bg-[#523328] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-98"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Google Maps Embed / Interactive Location Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-[#EBE0D4] shadow-xs flex flex-col min-h-[420px]">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden bg-zinc-100">
              {shop.contact.googleMapsEmbedUrl ? (
                <iframe
                  title={`${shop.shopName} Map Location`}
                  src={shop.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F7F0E8]">
                  <MapPin className="w-12 h-12 text-[#A8583B] mb-3" />
                  <h4 className="font-serif text-lg font-bold text-[#331C14] mb-2">
                    {shop.shopName}
                  </h4>
                  <p className="text-xs text-[#7A645B] max-w-sm mb-4">
                    {shop.contact.address}, {shop.contact.city}
                  </p>
                  <a
                    href={shop.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3B2219] text-white text-xs font-bold"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Social handles bar */}
            <div className="p-3 flex items-center justify-between text-xs text-[#7A645B]">
              <span className="font-medium">
                Follow our daily baking stories:
              </span>
              <div className="flex items-center gap-3">
                {shop.contact.instagramUrl && (
                  <a
                    href={shop.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#A8583B] hover:underline font-semibold"
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>{shop.contact.instagramHandle || "Instagram"}</span>
                  </a>
                )}
                {shop.contact.facebookUrl && (
                  <a
                    href={shop.contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#5E4B43] hover:underline font-semibold"
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
