import { shopConfig } from "@/config/shop.config";
import { CakeShopApp } from "@/components/CakeShopApp";

export default function Home() {
  return <CakeShopApp initialShop={shopConfig} />;
}
