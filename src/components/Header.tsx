"use client";

import React, { useState } from "react";
import { ShopConfig } from "@/types/shop";
import { MessageCircle, Phone, Menu, X, Clock, MapPin, Store } from "lucide-react";
import { getCustomInquiryWhatsAppUrl } from "@/lib/whatsapp";

interface HeaderProps {
  shop: ShopConfig;
  availableShops?: Record<string, ShopConfig>;
  activeShopId?: string;
  onSelectShop?: (shopId: string) => void;
}

export function Header({
  shop,
  availableShops = {},
  activeShopId,
  onSelectShop,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Our Menu", href: "#menu" },
    { label: "Why Choose Us", href: "#features" },
    { label: "Our Story", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact & Location", href: "#contact" },
  ];

  const whatsappInquiryUrl = getCustomInquiryWhatsAppUrl(shop);

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFE7DE] shadow-xs">
      {/* Top Announcement Bar */}
      {shop.announcement.enabled && (
        <div className="bg-[#4A2E2B] text-[#F5EBE6] text-xs py-2 px-4 transition-colors">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              {shop.announcement.badge && (
                <span className="bg-[#D4A373] text-[#2D1B19] font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                  {shop.announcement.badge}
                </span>
              )}
              <span className="text-center sm:text-left font-medium">
                {shop.announcement.text}
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-[11px] text-[#E5D4CE]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
                {shop.hours.regular.split("(")[0]}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4A373]" />
                {shop.contact.city}
              </span>

              {/* Multi-Shop Client Switcher (for demo & SaaS sales) */}
              {availableShops && Object.keys(availableShops).length > 1 && onSelectShop && (
                <div className="flex items-center gap-1 bg-[#37201D] px-2 py-0.5 rounded-md border border-[#5E3B37]">
                  <Store className="w-3 h-3 text-[#D4A373]" />
                  <span className="text-[10px] text-zinc-300">Shop Preset:</span>
                  <select
                    value={activeShopId}
                    onChange={(e) => onSelectShop(e.target.value)}
                    aria-label="Select shop brand preset"
                    className="bg-transparent text-amber-200 text-[11px] font-semibold border-none focus:outline-hidden cursor-pointer"
                  >
                    {Object.entries(availableShops).map(([id, s]) => (
                      <option key={id} value={id} className="text-zinc-900 bg-white">
                        {s.shopName} ({s.contact.city})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-[#3B2219] group-hover:text-[#A8583B] transition-colors">
              {shop.shopName}
            </span>
            <span className="text-[11px] font-medium text-[#7D6B63] tracking-wider uppercase">
              {shop.badge || "Artisan Cake Studio"}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#5C4942] hover:text-[#A8583B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${shop.contact.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#5C4942] hover:bg-[#F3EAE0] transition-colors"
              title="Call Bakery directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8583B]" />
              <span>{shop.contact.displayPhone}</span>
            </a>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-white"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#3B2219] hover:bg-[#F3EAE0] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EFE7DE] bg-[#FDFBF7] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          {/* Mobile Shop Switcher */}
          {availableShops && Object.keys(availableShops).length > 1 && onSelectShop && (
            <div className="mb-4 p-3 bg-[#F4EDE5] rounded-xl flex items-center justify-between">
              <span className="text-xs font-semibold text-[#4A2E2B] flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5" />
                Preview Shop:
              </span>
              <select
                value={activeShopId}
                onChange={(e) => {
                  onSelectShop(e.target.value);
                  setMobileMenuOpen(false);
                }}
                aria-label="Select preview shop"
                className="bg-white text-xs font-bold text-[#3B2219] rounded-lg px-2 py-1 border border-[#D9C8BA]"
              >
                {Object.entries(availableShops).map(([id, s]) => (
                  <option key={id} value={id}>
                    {s.shopName} ({s.contact.city})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#4A2E2B] hover:bg-[#F3EAE0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#EFE7DE] flex flex-col gap-2.5">
            <a
              href={`tel:${shop.contact.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#D4C4B5] text-xs font-bold text-[#4A2E2B]"
            >
              <Phone className="w-4 h-4 text-[#A8583B]" />
              <span>Call Bakery: {shop.contact.displayPhone}</span>
            </a>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
