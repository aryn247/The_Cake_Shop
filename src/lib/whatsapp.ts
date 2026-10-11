import { Cake, ShopConfig } from "@/types/shop";
import { calculateCakePrice } from "./pricing";

/**
 * Normalizes phone numbers for wa.me links
 * Handles 10-digit Indian numbers by prefixing 91
 */
export function formatWhatsAppNumber(phone: string): string {
  const clean = phone.replace(/[^0-9]/g, "");
  if (clean.length === 10) {
    return `91${clean}`;
  }
  return clean;
}

/**
 * Builds direct WhatsApp URL with prefilled order request
 */
export function getCakeOrderWhatsAppUrl(
  shop: ShopConfig,
  cake: Cake,
  selectedWeight?: string,
  specialNotes?: string
): string {
  const number = formatWhatsAppNumber(shop.contact.whatsappNumber);
  const weight = selectedWeight || cake.defaultWeight;
  const dietaryNotice = cake.isEggless ? "🌱 100% Eggless (Pure Veg)" : "🥚 Contains Egg";
  const dynamicPrice = calculateCakePrice(cake, weight);

  const lines = [
    `*Hello ${shop.shopName}!* 👋`,
    `I would like to order a fresh cake from your menu:`,
    ``,
    `🎂 *Item:* ${cake.name}`,
    `🏷️ *Category:* ${cake.category}`,
    `⚖️ *Weight:* ${weight}`,
    `💰 *Price:* ${shop.currencySymbol}${dynamicPrice.toLocaleString("en-IN")}`,
    `✨ *Dietary:* ${dietaryNotice}`,
  ];

  if (specialNotes && specialNotes.trim()) {
    lines.push(`📝 *Message / Notes on Cake:* ${specialNotes.trim()}`);
  }

  lines.push(
    ``,
    `Please confirm availability, delivery slot/pickup timing, and payment details. Thank you! 🙏`
  );

  const text = lines.join("\n");
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds direct WhatsApp URL for general inquiry or custom celebration cake
 */
export function getCustomInquiryWhatsAppUrl(
  shop: ShopConfig,
  customPrompt?: string
): string {
  const number = formatWhatsAppNumber(shop.contact.whatsappNumber);
  const text =
    customPrompt ||
    `*Hello ${shop.shopName}!* 👋\n\nI visited your website and would like to inquire about ordering a *customized celebration cake* (Birthday / Anniversary / Wedding).\n\nPlease let me know your flavor options, design catalog, and advance booking slots. Thanks! 🎂✨`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
