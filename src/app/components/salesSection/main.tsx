"use client";
import Sales from "./sales";
import SellCreate from "./sell_create_nft";
import LowerPricenft from "./lower_pricenft";

// the main component for sales section
export default function Salesection() {
  return (
    <div className="flex lg:flex-row w-full mt-24 gap-6 h-auto">
      <Sales />
      <SellCreate />
      <LowerPricenft />
    </div>
  );
}
