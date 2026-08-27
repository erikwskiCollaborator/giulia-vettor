"use client";

import { FormEvent, useMemo, useState, Suspense } from "react";
import Button from "@/components/Button";
import {
  FORZA_PACKAGES,
  BillingPeriod,
  Tier,
  calculateSavings,
} from "@/lib/packages";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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

function ReferralContent() {
  const searchParams = useSearchParams();
  const referralName = searchParams.get("name") || "";
  const fallbackUrl = searchParams.get("fallbackUrl") || "/";

  const [selectedTier, setSelectedTier] = useState<Tier>("personalizzato");
  const [selectedPeriod, setSelectedPeriod] =
    useState<BillingPeriod>("mensile");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showBankTransfer, setShowBankTransfer] = useState(false);
  const [ibanCopied, setIbanCopied] = useState(false);

  const iban = "IT22 B053 8766 6900 0000 2913 240";

  const copyIban = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, ""));
    setIbanCopied(true);
    setTimeout(() => setIbanCopied(false), 2000);
  };

  const selectedPackage = useMemo(
    () => FORZA_PACKAGES[selectedTier][selectedPeriod],
    [selectedTier, selectedPeriod],
  );

  const monthlyPrice = FORZA_PACKAGES[selectedTier].mensile.price;
  const savings =
    selectedPeriod === "quadrimestrale"
      ? calculateSavings(monthlyPrice, selectedPackage.price)
      : 0;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedPackage) {
      setError("Seleziona un pacchetto per proseguire.");
      return;
    }
    if (!customerEmail) {
      setError("Inserisci un indirizzo email valido.");
      return;
    }
    if (!acceptTerms) {
      setError("Devi accettare i termini e condizioni per continuare.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packageIds: [selectedPackage.id],
          customer: {
            name: customerName,
            email: customerEmail,
          },
          referralName: referralName,
          fallbackUrl: fallbackUrl,
          source: "referral",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Impossibile avviare il pagamento.");
      }

      if (data?.url) {
        window.location.href = data.url as string;
      } else {
        throw new Error("Risposta non valida dal server Stripe.");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Errore sconosciuto.";
      setError(message);
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="checkout"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24 min-h-[100vh]"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary">
            Programma di Forza
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Completa il checkout sicuro con Stripe e inizia il tuo percorso di
            forza personalizzato.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-2xl shadow-primary/5"
        >
          <div className="space-y-8">
            {/* Tier Selection */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 mb-4">
                Scegli il tipo di programma
              </legend>
              <div className="flex justify-center">
                <Toggle
                  options={[
                    { value: "standard", label: "Standard" },
                    { value: "personalizzato", label: "Personalizzato" },
                  ]}
                  selected={selectedTier}
                  onChange={(value) => setSelectedTier(value as Tier)}
                />
              </div>
            </fieldset>

            {/* Period Selection */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 mb-4">
                Scegli la durata
              </legend>
              <div className="flex flex-col items-center gap-2">
                <Toggle
                  options={[
                    { value: "mensile", label: "Mensile" },
                    { value: "quadrimestrale", label: "Quadrimestrale" },
                  ]}
                  selected={selectedPeriod}
                  onChange={(value) =>
                    setSelectedPeriod(value as BillingPeriod)
                  }
                />
                {selectedPeriod === "quadrimestrale" && savings > 0 && (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mt-2">
                    RISPARMI {savings}€
                  </span>
                )}
              </div>
            </fieldset>

            {/* Package Details */}
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {selectedPackage.name}
                  </h3>
                  <p className="text-sm text-secondary font-semibold">
                    {selectedPackage.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-primary">
                    €{selectedPackage.price}
                  </span>
                  <p className="text-xs text-gray-500">
                    {selectedPeriod === "mensile" ? "al mese" : "per 4 mesi"}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {selectedPackage.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Details */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900">
                I tuoi dati
              </legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="mario@esempio.it"
                    required
                  />
                </div>
              </div>
            </fieldset>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Accetto i{" "}
                <Link
                  href="/terms"
                  className="text-primary underline hover:text-primary/80"
                >
                  Termini e Condizioni
                </Link>{" "}
                e la{" "}
                <Link
                  href="/privacy"
                  className="text-primary underline hover:text-primary/80"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Summary & Submit */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  Totale
                </span>
                <span className="text-3xl font-extrabold text-primary">
                  €
                  {selectedPackage.price.toLocaleString("it-IT", {
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="xl"
                variant="secondary"
                className="w-full mt-4 justify-center bg-secondary hover:bg-secondary/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Elaborazione..." : "Procedi al Pagamento"}
              </Button>
            </div>

            {/* Bank Transfer Alternative */}
            <div className="border-t border-gray-200 pt-6">
              <button
                type="button"
                onClick={() => setShowBankTransfer(!showBankTransfer)}
                className="flex w-full items-center justify-between text-left text-sm text-gray-600 hover:text-gray-900"
              >
                <span>Preferisci pagare con bonifico bancario?</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    showBankTransfer ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showBankTransfer && (
                <div className="mt-4 rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
                  <p className="font-semibold">Coordinate bancarie:</p>
                  <p className="mt-2">
                    <span className="text-gray-500">IBAN:</span>{" "}
                    <span className="font-mono">{iban}</span>
                    <button
                      type="button"
                      onClick={copyIban}
                      className="ml-2 text-primary hover:underline"
                    >
                      {ibanCopied ? "✓ Copiato!" : "Copia"}
                    </button>
                  </p>
                  <p className="mt-2">
                    <span className="text-gray-500">Causale:</span>{" "}
                    {selectedPackage.name} - {selectedPackage.subtitle}
                    {referralName && ` - Referral: ${referralName}`}
                  </p>
                  <p className="mt-3 text-xs text-gray-500">
                    Invia la ricevuta a info@giuliavettor.it per attivare il
                    servizio.
                  </p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ReferralCheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-gray-600">Caricamento...</p>
        </div>
      }
    >
      <ReferralContent />
    </Suspense>
  );
}
