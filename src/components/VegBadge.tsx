import React from "react";

interface VegBadgeProps {
  isEggless: boolean;
  showText?: boolean;
  className?: string;
}

export function VegBadge({ isEggless, showText = true, className = "" }: VegBadgeProps) {
  if (isEggless) {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 ${className}`}
        title="100% Pure Veg / Eggless"
      >
        <span className="w-3.5 h-3.5 border-2 border-emerald-600 flex items-center justify-center rounded-[3px] bg-white">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
        </span>
        {showText && <span>100% Eggless</span>}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 ${className}`}
      title="Contains Egg"
    >
      <span className="w-3.5 h-3.5 border-2 border-amber-800 flex items-center justify-center rounded-[3px] bg-white">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-800"></span>
      </span>
      {showText && <span>Contains Egg</span>}
    </div>
  );
}
