"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent-v1";

type ConsentValue = "accepted" | "rejected";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(
      STORAGE_KEY
    ) as ConsentValue | null;
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: ConsentValue) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 sm:pb-6 animate-in">
      <div className="w-full max-w-4xl rounded-2xl bg-gray-900/95 text-white shadow-2xl border border-white/10 px-4 py-4 sm:px-6 sm:py-5 backdrop-blur">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1 text-sm sm:text-base">
            <p className="font-semibold">Questo sito utilizza cookie.</p>
            <p className="text-white/80 text-xs sm:text-sm">
              Usiamo cookie tecnici per il funzionamento del sito e cookie di
              terze parti (Stripe, Microsoft Clarity) per gestire i pagamenti e
              analizzare in forma aggregata l&apos;uso del sito. Puoi leggere i
              dettagli nella nostra{" "}
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleChoice("rejected")}
              className="text-xs sm:text-sm px-4 py-2 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
            >
              Rifiuta non essenziali
            </button>
            <button
              type="button"
              onClick={() => handleChoice("accepted")}
              className="text-xs sm:text-sm px-5 py-2 rounded-full bg-secondary text-white font-semibold shadow-lg hover:bg-secondary/90 transition"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
