import { ShopConfig } from "@/types/shop";
import { velvetCrumbConfig } from "./presets/velvet-crumb";
import { mumbaiCremeConfig } from "./presets/mumbai-creme";

/**
 * All available shop presets in the multi-tenant repository.
 * Each shop deployment on Vercel simply sets:
 * NEXT_PUBLIC_SHOP_ID="velvet-crumb" or "mumbai-creme"
 * or you can edit defaultShopId below!
 */
export const availableShops: Record<string, ShopConfig> = {
  "velvet-crumb": velvetCrumbConfig,
  "mumbai-creme": mumbaiCremeConfig,
};

// Default fallback shop if env variable is not set
export const defaultShopId = "velvet-crumb";

/**
 * Retrieves the currently active shop configuration.
 * For static SSG / Tier 1, this runs at build & client time.
 */
export function getActiveShopConfig(shopId?: string): ShopConfig {
  const targetId = shopId || process.env.NEXT_PUBLIC_SHOP_ID || defaultShopId;
  return availableShops[targetId] || velvetCrumbConfig;
}

// Convenient direct export of default active shop
export const shopConfig: ShopConfig = getActiveShopConfig();
