"use client";

import { BillingPeriod } from "@/lib/packages";

type PeriodToggleProps = {
  value: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
  variant?: "light" | "dark";
};

export default function PeriodToggle({
  value,
  onChange,
  variant = "light",
}: PeriodToggleProps) {
  const isQuadrimestrale = value === "quadrimestrale";

  const bgClass = variant === "dark" ? "bg-white/20" : "bg-gray-100";

  const activeClass =
    variant === "dark" ? "bg-white text-primary" : "bg-primary text-white";

  const inactiveClass =
    variant === "dark"
      ? "text-white/80 hover:text-white"
      : "text-gray-600 hover:text-gray-900";

  return (
    <div className={`inline-flex rounded-full p-1 ${bgClass}`}>
      <button
        type="button"
        onClick={() => onChange("mensile")}
        className={`
          px-4 py-2 text-xs font-bold rounded-full transition-all duration-300
          ${!isQuadrimestrale ? activeClass : inactiveClass}
        `}
      >
        MENSILE
      </button>
      <button
        type="button"
        onClick={() => onChange("quadrimestrale")}
        className={`
          px-4 py-2 text-xs font-bold rounded-full transition-all duration-300
          ${isQuadrimestrale ? activeClass : inactiveClass}
        `}
      >
        QUADRIMESTRALE
      </button>
    </div>
  );
}
