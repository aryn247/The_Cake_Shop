"use client";

import React, { useState, useMemo } from "react";
import { Cake, ShopConfig } from "@/types/shop";
import { CakeCard } from "./CakeCard";
import { CakeModal } from "./CakeModal";
import { Search, Sparkles, Filter, X } from "lucide-react";

interface CakeGalleryProps {
  shop: ShopConfig;
}

export function CakeGallery({ shop }: CakeGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "eggless" | "bestseller">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalCake, setActiveModalCake] = useState<Cake | null>(null);

  // Filter cakes based on category, search term, and dietary toggle
  const filteredCakes = useMemo(() => {
    return shop.cakes.filter((cake) => {
      // Category filter
      if (selectedCategory !== "all") {
        const catObj = shop.categories.find((c) => c.id === selectedCategory);
        if (catObj && cake.category.toLowerCase() !== catObj.name.toLowerCase() && cake.category.toLowerCase() !== catObj.id.toLowerCase()) {
          return false;
        }
      }

      // Dietary filter
      if (dietaryFilter === "eggless" && !cake.isEggless) {
        return false;
      }
      if (dietaryFilter === "bestseller" && !cake.isBestseller) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = cake.name.toLowerCase().includes(query);
        const matchDesc = cake.description.toLowerCase().includes(query);
        const matchCat = cake.category.toLowerCase().includes(query);
        const matchFlavors = cake.flavorProfile?.some((f) =>
          f.toLowerCase().includes(query)
        );
        if (!matchName && !matchDesc && !matchCat && !matchFlavors) {
          return false;
        }
      }

      return true;
    });
  }, [shop.cakes, shop.categories, selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#5C382F] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B76E4B]" />
            <span>Baked Fresh Daily</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#331C14] mb-3">
            Explore Our Cake Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#6B564E]">
            Pick your favorite creation, choose your portion size, and send your order straight to our kitchen on WhatsApp.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#F8F2EB] p-4 sm:p-5 rounded-3xl border border-[#EDE2D5] mb-10 shadow-xs flex flex-col gap-4">
          {/* Top row: Search and Dietary filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Live Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C6D60]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cakes by flavor, name (e.g. Truffle, Biscoff)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white border border-[#E0D1C4] text-xs sm:text-sm text-[#331C14] focus:outline-hidden focus:border-[#A8583B] focus:ring-1 focus:ring-[#A8583B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary & Bestseller toggle pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-semibold text-[#8C6D60] flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                Filter:
              </span>

              <button
                type="button"
                onClick={() => setDietaryFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  dietaryFilter === "all"
                    ? "bg-[#3B2219] text-white shadow-xs"
                    : "bg-white text-[#5C4942] border border-[#DFCFC2] hover:bg-[#FDFBF7]"
                }`}
              >
                All Flavors
              </button>

              <button
                type="button"
                onClick={() => setDietaryFilter("eggless")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                  dietaryFilter === "eggless"
                    ? "bg-emerald-800 text-white shadow-xs"
                    : "bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-50"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                🌱 100% Eggless Only
              </button>

              <button
                type="button"
                onClick={() => setDietaryFilter("bestseller")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  dietaryFilter === "bestseller"
                    ? "bg-[#A8583B] text-white shadow-xs"
                    : "bg-white text-[#8A4A33] border border-[#E8C2B0] hover:bg-[#FDF3EE]"
                }`}
              >
                ⭐ Bestsellers
              </button>
            </div>
          </div>

          {/* Bottom row: Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#EAE0D4] no-scrollbar">
            {shop.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-tight whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#4A2E2B] text-[#FAF5EF] shadow-sm"
                    : "bg-white/80 text-[#635149] hover:bg-white border border-[#E2D5C8]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs sm:text-sm text-[#7A645B] font-medium">
            Showing <strong className="text-[#331C14]">{filteredCakes.length}</strong> creations
            {selectedCategory !== "all" && ` in ${shop.categories.find(c => c.id === selectedCategory)?.name}`}
            {dietaryFilter === "eggless" && ` (Eggless)`}
          </p>

          {(selectedCategory !== "all" || dietaryFilter !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="text-xs font-semibold text-[#A8583B] hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Cake Grid */}
        {filteredCakes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCakes.map((cake) => (
              <CakeCard
                key={cake.id}
                cake={cake}
                shop={shop}
                onOpenModal={(c) => setActiveModalCake(c)}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#EDE2D5] max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#FAF2EB] text-[#A8583B] flex items-center justify-center mx-auto mb-4 text-2xl">
              🎂
            </div>
            <h3 className="font-serif text-xl font-bold text-[#331C14] mb-2">
              No matching cakes found
            </h3>
            <p className="text-xs text-[#7A645B] mb-6">
              We couldn&apos;t find cakes matching your exact search or dietary filter. Try clearing your filters or message us on WhatsApp for a custom order.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl bg-[#3B2219] text-white text-xs font-bold shadow-sm"
            >
              View Full Cake Menu
            </button>
          </div>
        )}
      </div>

      {/* Cake Quick Details Modal */}
      <CakeModal
        cake={activeModalCake}
        shop={shop}
        onClose={() => setActiveModalCake(null)}
      />
    </section>
  );
}
