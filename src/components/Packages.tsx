"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import {
  BillingPeriod,
  Tier,
  FORZA_PACKAGES,
  CORSA_FORZA_PACKAGES,
  RETURN_TO_RUN,
  CoachingPackage,
  calculateSavings,
} from "@/lib/packages";

// Toggle Component
function Toggle({
  options,
  selected,
  onChange,
  size = "normal",
}: {
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
  size?: "normal" | "small";
}) {
  return (
    <div
      className={`inline-flex rounded-full bg-gray-100 p-1 ${size === "small" ? "text-xs" : "text-sm"}`}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`
            ${size === "small" ? "px-3 py-1" : "px-4 py-2"} rounded-full font-semibold transition-all duration-200
            ${
              selected === option.value
                ? "bg-primary text-white shadow-md"
                : "text-gray-600 hover:text-primary"
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

type PackageCardProps = {
  pkg: CoachingPackage;
  tier: Tier;
  billingPeriod: BillingPeriod;
  onTierChange: (tier: Tier) => void;
  onSelect: (packageId: string) => void;
  monthlyPrice?: number;
  proMonthlyAvailable?: boolean;
};

function PackageCard({
  pkg,
  tier,
  billingPeriod,
  onTierChange,
  onSelect,
  monthlyPrice,
  proMonthlyAvailable = true,
}: PackageCardProps) {
  // Highlight only for standard + quadrimestrale
  const isHighlight =
    pkg.highlight && tier === "standard" && billingPeriod === "quadrimestrale";

  // If Pro monthly is not available, force quarterly display
  const effectivePeriod =
    tier === "personalizzato" &&
    billingPeriod === "mensile" &&
    !proMonthlyAvailable
      ? "quadrimestrale"
      : billingPeriod;

  // Calculate savings for quarterly
  const savings =
    monthlyPrice && pkg.billingPeriod === "quadrimestrale"
      ? calculateSavings(monthlyPrice, pkg.price)
      : 0;

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl overflow-hidden shadow-lg
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
        ${
          isHighlight
            ? "bg-gradient-to-br from-primary to-primary/90 text-white ring-4 ring-secondary ring-offset-4"
            : "bg-white text-gray-900"
        }
      `}
    >
      {/* Highlight Badge */}
      {isHighlight && (
        <div className="absolute overflow-visible top-2 left-[50%] -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          <span className="relative">CONSIGLIATO</span>
        </div>
      )}

      {/* Header */}
      <div
        className={`px-6 pt-8 pb-4 ${
          isHighlight
            ? "bg-white/10"
            : "bg-gradient-to-br from-primary/5 to-secondary/5"
        }`}
      >
        <h3
          className={`text-xl font-extrabold mb-1 ${
            isHighlight ? "text-white" : "text-primary"
          }`}
        >
          {pkg.name}
        </h3>
        <p
          className={`text-sm font-semibold mb-4 ${
            isHighlight ? "text-gray-200" : "text-secondary"
          }`}
        >
          {pkg.name.includes("CORSA") ? "ALLENAMENTO A 360°" : "PER LA CORSA"}
        </p>

        {/* Tier Toggle - hide personalizzato if not available for this period */}
        <div className="flex justify-center">
          {proMonthlyAvailable || billingPeriod !== "mensile" ? (
            <Toggle
              options={[
                { value: "standard", label: "Standard" },
                { value: "personalizzato", label: "Personalizzato" },
              ]}
              selected={tier}
              onChange={(value) => onTierChange(value as Tier)}
              size="small"
            />
          ) : null}
        </div>
      </div>

      {/* Price */}
      <div className="px-6 py-4">
        <div className="flex items-baseline gap-2 justify-center">
          <span
            className={`text-5xl font-extrabold ${
              isHighlight ? "text-white" : "text-primary"
            }`}
          >
            {pkg.price}
          </span>
          <span
            className={`text-2xl font-semibold ${
              isHighlight ? "text-white/80" : "text-gray-600"
            }`}
          >
            €
          </span>
        </div>

        {/* Period indicator */}
        <p
          className={`text-center text-sm mt-1 ${isHighlight ? "text-white/70" : "text-gray-500"}`}
        >
          {effectivePeriod === "mensile" ? "al mese" : "per 4 mesi"}
        </p>

        {/* Savings badge */}
        {effectivePeriod === "quadrimestrale" && savings > 0 && (
          <div className="flex justify-center mt-2">
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
              RISPARMI {savings}€
            </span>
          </div>
        )}

        {/* Pro monthly not available notice */}
        {tier === "personalizzato" &&
          billingPeriod === "mensile" &&
          !proMonthlyAvailable && (
            <p
              className={`text-center text-xs mt-2 ${isHighlight ? "text-white/60" : "text-gray-400"}`}
            >
              Personalizzato disponibile solo quadrimestrale
            </p>
          )}
      </div>

      {/* Features */}
      <div className="px-6 pb-4 flex-grow">
        <ul className="space-y-2">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <svg
                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                  isHighlight ? "text-secondary" : "text-primary"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`text-sm leading-relaxed ${
                  isHighlight ? "text-white/90" : "text-gray-700"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-8">
        <Button
          size="m"
          variant={isHighlight ? "outline" : "primary"}
          className="w-full"
          onClick={() => onSelect(pkg.id)}
        >
          INIZIA ORA
        </Button>
      </div>
    </div>
  );
}

// Return to Run Special Card
function ReturnToRunCard({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary via-secondary/95 to-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Catchy text */}
          <div className="text-white space-y-4">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
              🏃‍♂️ RETURN TO RUN
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
              SEI INFORTUNATO E VUOI RIPARTIRE A CORRERE AL PIÙ PRESTO?
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-white/90">
              NON PERDERE TEMPO: PREPARIAMO IL TUO RIENTRO ALLA CORSA
            </p>
          </div>

          {/* Right - Features and CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6">
            <ul className="space-y-3">
              {RETURN_TO_RUN.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed text-white/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">
                    {RETURN_TO_RUN.price}
                  </span>
                  <span className="text-xl font-semibold text-white/80">€</span>
                </div>
                <p className="text-sm text-white/70">per 4 mesi</p>
              </div>
              <Button
                size="m"
                variant="outline"
                className="!bg-white !text-secondary hover:!bg-white/90"
                onClick={() => onSelect(RETURN_TO_RUN.id)}
              >
                INIZIA ORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Packages() {
  const router = useRouter();
  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriod>("quadrimestrale");
  const [forzaTier, setForzaTier] = useState<Tier>("standard");
  const [corsaForzaTier, setCorsaForzaTier] = useState<Tier>("standard");

  const handlePackageClick = (packageId: string) => {
    router.push(`/checkout?packageId=${packageId}`);
  };

  // Get current packages based on tier and period
  const forzaPackage = FORZA_PACKAGES[forzaTier][billingPeriod];
  const corsaForzaPackage =
    CORSA_FORZA_PACKAGES[corsaForzaTier][billingPeriod] ||
    CORSA_FORZA_PACKAGES[corsaForzaTier].quadrimestrale!;

  // Monthly prices for savings calculation
  const forzaMonthlyPrice = FORZA_PACKAGES[forzaTier].mensile.price;
  const corsaForzaMonthlyPrice =
    CORSA_FORZA_PACKAGES[corsaForzaTier].mensile?.price;

  return (
    <section
      id="pacchetti"
      className="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-primary">SCEGLI IL TUO </span>
            <span className="text-secondary">PERCORSO</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Un programma personalizzato per raggiungere il tuo obiettivo. <br />
            Fissa il tuo obiettivo, scegli il tuo percorso.
          </p>

          {/* Billing Period Toggle */}
          <div className="flex flex-col items-center gap-2">
            <Toggle
              options={[
                { value: "mensile", label: "Mensile" },
                { value: "quadrimestrale", label: "Quadrimestrale" },
              ]}
              selected={billingPeriod}
              onChange={(value) => setBillingPeriod(value as BillingPeriod)}
            />
            {billingPeriod === "quadrimestrale" && (
              <p className="text-sm text-green-600 font-medium">
                💰 Risparmia scegliendo il quadrimestrale!
              </p>
            )}
          </div>
        </div>

        {/* Main Packages Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
          {/* Forza */}
          <PackageCard
            pkg={forzaPackage}
            tier={forzaTier}
            billingPeriod={billingPeriod}
            onTierChange={setForzaTier}
            onSelect={handlePackageClick}
            monthlyPrice={forzaMonthlyPrice}
          />

          {/* Corsa + Forza */}
          <PackageCard
            pkg={corsaForzaPackage}
            tier={corsaForzaTier}
            billingPeriod={billingPeriod}
            onTierChange={setCorsaForzaTier}
            onSelect={handlePackageClick}
            monthlyPrice={corsaForzaMonthlyPrice}
            proMonthlyAvailable={!!CORSA_FORZA_PACKAGES.personalizzato.mensile}
          />
        </div>

        {/* Return to Run Special Section */}
        <div className="mt-16">
          <ReturnToRunCard onSelect={handlePackageClick} />
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 italic max-w-4xl mx-auto">
            Tutti i pacchetti includono supporto personalizzato. I feedback sono
            personalizzati in base al tuo livello e ai tuoi obiettivi.
          </p>
        </div>
      </div>
    </section>
  );
}
