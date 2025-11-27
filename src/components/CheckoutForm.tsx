"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Button from "./Button";
import { COACHING_PACKAGES, packagesById } from "@/lib/packages";

type CheckoutFormProps = {
  preselectedPackageId?: string | null;
};

export default function CheckoutForm({
  preselectedPackageId = null,
}: CheckoutFormProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(
    preselectedPackageId ?? COACHING_PACKAGES[0]?.id ?? null
  );

  // Update selected package when preselectedPackageId changes
  useEffect(() => {
    if (preselectedPackageId) {
      setSelectedPackageId(preselectedPackageId);
    }
  }, [preselectedPackageId]);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showBankTransfer, setShowBankTransfer] = useState(false);
  const [ibanCopied, setIbanCopied] = useState(false);

  const iban = "IT00 X000 0000 0000 0000 0000 000";

  const copyIban = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, ""));
    setIbanCopied(true);
    setTimeout(() => setIbanCopied(false), 2000);
  };

  const selectedPackage = useMemo(
    () => (selectedPackageId ? packagesById[selectedPackageId] : undefined),
    [selectedPackageId]
  );

  const totalAmount = selectedPackage?.price ?? 0;

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
          packageId: selectedPackage.id,
          customer: {
            name: customerName,
            email: customerEmail,
          },
          metadata: {
            notes: notes.trim() || undefined,
          },
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
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary">
            Prenota il tuo percorso
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Seleziona il programma che preferisci, aggiungi qualche nota se lo
            ritieni opportuno e completa il checkout sicuro con Stripe.
            Riceverai subito la conferma d&apos;ordine.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-2xl shadow-primary/5"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <fieldset>
                <legend className="text-lg font-semibold text-gray-900">
                  Scegli il pacchetto
                </legend>
                <div className="mt-4 grid gap-4">
                  {COACHING_PACKAGES.map((pkg) => {
                    const isSelected = selectedPackageId === pkg.id;
                    return (
                      <label
                        key={pkg.id}
                        className={`relative flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition-all ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="package"
                          value={pkg.id}
                          checked={isSelected}
                          onChange={() => setSelectedPackageId(pkg.id)}
                          className="mt-1 h-5 w-5 accent-primary"
                          required
                        />
                        <span>
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="text-base font-bold text-gray-900">
                              {pkg.name}
                            </span>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              {pkg.subtitle}
                            </span>
                          </span>
                          <span className="mt-1 block text-sm text-gray-600">
                            {pkg.features[0]}
                            {pkg.highlight ? " • Programma consigliato" : ""}
                          </span>
                          <span className="mt-2 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                            €
                            {pkg.price.toLocaleString("it-IT", {
                              minimumFractionDigits: 0,
                            })}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-semibold text-gray-900">
                    Note opzionali
                  </span>
                  <textarea
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    rows={3}
                    placeholder="Dimmi qualcosa su di te, sui tuoi obiettivi o eventuali limitazioni."
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>
            </div>

            <div className="space-y-8 rounded-3xl border border-gray-200 bg-gray-50/60 p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  I tuoi dati
                </h3>
                <label className="block">
                  <span className="text-sm font-semibold text-gray-900">
                    Nome
                  </span>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    placeholder="Es. Giulia"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-gray-900">
                    Email <span className="text-secondary">*</span>
                  </span>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(event) => setCustomerEmail(event.target.value)}
                    placeholder="tu@esempio.com"
                    required
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>Totale</span>
                  <span className="text-xl font-extrabold text-primary">
                    €
                    {totalAmount.toLocaleString("it-IT", {
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Il pagamento avviene in modo sicuro su Stripe. Riceverai la
                  fattura via email.
                </p>
              </div>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(event) => setAcceptTerms(event.target.checked)}
                  className="mt-1 h-5 w-5 accent-primary"
                  required
                />
                <span className="text-sm text-gray-600">
                  Accetto i{" "}
                  <a
                    href="/terms"
                    className="font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    Termini e Condizioni
                  </a>{" "}
                  e l&apos;
                  <a
                    href="/privacy"
                    className="font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    Informativa Privacy
                  </a>
                  .
                </span>
              </label>

              {error && (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="xl"
                variant="secondary"
                disabled={isSubmitting}
                className="w-full justify-center bg-secondary hover:bg-secondary/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Reindirizzamento in corso…"
                  : "Procedi al pagamento"}
              </Button>

              <p className="text-xs text-gray-400">
                * Pagamento sicuro con Stripe. I dati delle carte non transitano
                sui nostri server.
              </p>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-50/60 px-2 text-gray-500">
                    oppure
                  </span>
                </div>
              </div>

              <Button
                type="button"
                size="xl"
                variant="primaryOutline"
                onClick={() => setShowBankTransfer(!showBankTransfer)}
                className="w-full justify-center"
              >
                Istruzioni Bonifico
              </Button>

              {showBankTransfer && (
                <div className="rounded-2xl border-2 border-primary/20 bg-white p-6 shadow-md space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <h4 className="text-base font-bold text-primary flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    Istruzioni per Bonifico Bancario
                  </h4>
                  <p className="text-sm text-gray-600">
                    Effettua il bonifico con i seguenti dati. Una volta ricevuto
                    il pagamento, <strong>contattami su Whatsapp</strong> per
                    pianificare il primo incontro.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start p-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-gray-700">
                        Beneficiario:
                      </span>
                      <span className="text-right text-gray-900">
                        Giulia Vettor
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-gray-700">IBAN:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-right text-gray-900 font-mono text-xs sm:text-sm">
                          {iban}
                        </span>
                        <button
                          type="button"
                          onClick={copyIban}
                          className="p-1.5 rounded-md hover:bg-primary/10 transition-colors text-primary"
                          title="Copia IBAN"
                        >
                          {ibanCopied ? (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start p-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-gray-700">
                        Importo:
                      </span>
                      <span className="text-right text-primary font-bold">
                        €
                        {totalAmount.toLocaleString("it-IT", {
                          minimumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                      <span className="font-semibold text-gray-700">
                        Causale:
                      </span>
                      <span className="text-right text-gray-900 font-medium">
                        {selectedPackage?.name} - {selectedPackage?.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <strong className="text-secondary">Importante:</strong>{" "}
                      Inserisci la causale esattamente come indicata sopra. Dopo
                      aver effettuato il bonifico, invia una copia della
                      ricevuta su Whatsapp{" "}
                      <a
                        href="https://wa.me/393897952996?text=Ciao%20Giulia,%20vorrei%20inviarti%20la%20ricevuta%20del%20bonifico"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold underline"
                      >
                        +39 389 795 2996
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
