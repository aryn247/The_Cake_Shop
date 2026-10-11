import { Cake } from "@/types/shop";

/**
 * Calculates the dynamic price for a cake based on the chosen weight/portion.
 * Uses explicit weightPrices map if provided, otherwise calculates proportionally
 * using standard Indian bakery weight ratios.
 */
export function calculateCakePrice(cake: Cake, weight?: string): number {
  const chosenWeight = weight || cake.defaultWeight || "500g";

  // Check if explicit price is defined for this weight
  if (cake.weightPrices && cake.weightPrices[chosenWeight]) {
    return cake.weightPrices[chosenWeight];
  }

  // Base price is assumed to be for the default weight (usually 500g or 1 piece/box)
  const basePrice = cake.price;
  const normalized = chosenWeight.toLowerCase().trim();

  // 1kg = 2x or 1.9x base 500g
  if (normalized === "1kg" || normalized === "1 kg") {
    return Math.round((basePrice * 1.9) / 10) * 10;
  }

  // 1.5kg
  if (normalized === "1.5kg" || normalized === "1.5 kg") {
    return Math.round((basePrice * 2.8) / 10) * 10;
  }

  // 2kg
  if (normalized === "2kg" || normalized === "2 kg") {
    return Math.round((basePrice * 3.6) / 10) * 10;
  }

  // 500g
  if (normalized === "500g" || normalized === "500 g" || normalized === "0.5kg") {
    return basePrice;
  }

  // 250g / Bento
  if (normalized.includes("250g") || normalized.includes("bento")) {
    return Math.round((basePrice * 0.6) / 10) * 10;
  }

  // Box of 12 vs Box of 6
  if (normalized.includes("12") && cake.defaultWeight.includes("6")) {
    return Math.round((basePrice * 1.85) / 10) * 10;
  }

  return basePrice;
}

/**
 * Calculates original strikethrough price if cake has originalPrice
 */
export function calculateCakeOriginalPrice(
  cake: Cake,
  weight?: string
): number | undefined {
  if (!cake.originalPrice) return undefined;

  const currentPrice = calculateCakePrice(cake, weight);
  const ratio = currentPrice / cake.price;
  return Math.round((cake.originalPrice * ratio) / 10) * 10;
}
