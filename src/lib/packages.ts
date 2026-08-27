// ============ ENVIRONMENT-BASED STRIPE PRICE IDS ============
const IS_PRODUCTION = process.env.NODE_ENV === "production";

// TEST Price IDs (Stripe Test Mode)
const TEST_PRICE_IDS = {
  // Forza
  "forza-standard-mensile": "price_1U8evoQwBkdrwsKruQmh8gRp",
  "forza-standard-quadrimestrale": "price_1U8ew2QwBkdrwsKrXTSUrGdz",
  "forza-personalizzato-mensile": "price_1U8ewLQwBkdrwsKrpwJSVmmo",
  "forza-personalizzato-quadrimestrale": "price_1U8fAdQwBkdrwsKrPnIMPame",
  // Corsa + Forza
  "corsa-forza-standard-mensile": "price_1U8fAVQwBkdrwsKrdpcODyUd",
  "corsa-forza-standard-quadrimestrale": "price_1U8fAXQwBkdrwsKrASNLIvhC",
  "corsa-forza-personalizzato-quadrimestrale": "price_1U8fAgQwBkdrwsKrvrQWxMlB",
  // Return to Run
  "return-to-run": "price_1U8fAnQwBkdrwsKrvjy5ZuW5",
};

// LIVE Price IDs (Stripe Live Mode)
const LIVE_PRICE_IDS = {
  // Forza
  "forza-standard-mensile": "price_1U8gRSQr5fjk3ZxjzuRiZ0rr",
  "forza-standard-quadrimestrale": "price_1U8gRZQr5fjk3ZxjKWM4H0r3",
  "forza-personalizzato-mensile": "price_1U8gRiQr5fjk3ZxjyiBZJFxd",
  "forza-personalizzato-quadrimestrale": "price_1U8gRnQr5fjk3ZxjuTs9KAUR",
  // Corsa + Forza
  "corsa-forza-standard-mensile": "price_1U8gRxQr5fjk3Zxj8QNlQGCT",
  "corsa-forza-standard-quadrimestrale": "price_1U8gS2Qr5fjk3ZxjwWyx2JsL",
  "corsa-forza-personalizzato-quadrimestrale": "price_1U8gSBQr5fjk3ZxjeeIe58Pr",
  // Return to Run
  "return-to-run": "price_1U8gSKQr5fjk3Zxjn40cObAu",
};

// Get the correct price ID based on environment
function getPriceId(packageId: string): string | undefined {
  const priceIds = IS_PRODUCTION ? LIVE_PRICE_IDS : TEST_PRICE_IDS;
  return priceIds[packageId as keyof typeof priceIds];
}

// ============ TYPES ============
export type BillingPeriod = "mensile" | "quadrimestrale";
export type Tier = "standard" | "personalizzato";

export type CoachingPackage = {
  id: string;
  name: string;
  subtitle: string;
  price: number; // Euro price displayed to users
  stripePriceId?: string; // Stripe Price ID (e.g., price_xxxxx) - required for coupons to work
  features: string[];
  highlight?: boolean;
  note?: string;
  billingPeriod?: BillingPeriod; // Periodo di fatturazione (mensile/quadrimestrale)
  tier?: Tier; // Standard o Personalizzato
  crossSellId?: string; // ID del pacchetto da proporre come upsell
};

// ============ PACCHETTI FORZA ============
export const FORZA_PACKAGES: Record<
  Tier,
  Record<BillingPeriod, CoachingPackage>
> = {
  standard: {
    mensile: {
      id: "forza-standard-mensile",
      name: "FORZA",
      subtitle: "STANDARD MENSILE",
      price: 49,
      stripePriceId: getPriceId("forza-standard-mensile"),
      billingPeriod: "mensile",
      tier: "standard",
      features: [
        "Esercizi di mobilità fondamentali per la corsa",
        "Andature di tecnica di corsa",
        "Esercizi di core",
        "Esercizi di forza",
        "Esercizi di stretching e rilassamento",
        "Schede progressive in complessità e carico",
        "1 call iniziale di 40'",
        "Feedback e correzioni degli esercizi (su richiesta)",
      ],
    },
    quadrimestrale: {
      id: "forza-standard-quadrimestrale",
      name: "FORZA",
      subtitle: "STANDARD QUADRIMESTRALE",
      price: 169,
      stripePriceId: getPriceId("forza-standard-quadrimestrale"),
      billingPeriod: "quadrimestrale",
      tier: "standard",
      highlight: true,
      features: [
        "Esercizi di mobilità fondamentali per la corsa",
        "Andature di tecnica di corsa",
        "Esercizi di core",
        "Esercizi di forza",
        "Esercizi di stretching e rilassamento",
        "Schede progressive in complessità e carico",
        "1 call iniziale di 40'",
        "1 call di 20' prima di ogni nuovo mesociclo",
        "Feedback e correzioni degli esercizi (su richiesta)",
      ],
    },
  },
  personalizzato: {
    mensile: {
      id: "forza-personalizzato-mensile",
      name: "FORZA",
      subtitle: "PERSONALIZZATO MENSILE",
      price: 89,
      stripePriceId: getPriceId("forza-personalizzato-mensile"),
      billingPeriod: "mensile",
      tier: "personalizzato",
      features: [
        "4 settimane di allenamenti di forza",
        "Mobilità e stretching personalizzati",
        "1 circuito di pliometria personalizzato",
        "1 circuito di core personalizzato",
        "1 circuito di forza personalizzato",
        "1 call iniziale di 40'",
        "Feedback e correzioni degli esercizi (su richiesta)",
      ],
    },
    quadrimestrale: {
      id: "forza-personalizzato-quadrimestrale",
      name: "FORZA",
      subtitle: "PERSONALIZZATO QUADRIMESTRALE",
      price: 299,
      stripePriceId: getPriceId("forza-personalizzato-quadrimestrale"),
      billingPeriod: "quadrimestrale",
      tier: "personalizzato",
      highlight: true,
      features: [
        "16 settimane di allenamenti di forza",
        "Mobilità e stretching personalizzati",
        "4 circuiti di pliometria personalizzati",
        "4 circuiti di core personalizzati",
        "4 circuiti di forza personalizzati",
        "1 call iniziale di 40'",
        "1 call di 20' prima di ogni nuovo mesociclo",
        "Feedback e correzioni degli esercizi (su richiesta)",
      ],
    },
  },
};

// ============ PACCHETTI CORSA + FORZA ============
export const CORSA_FORZA_PACKAGES: Record<
  Tier,
  Partial<Record<BillingPeriod, CoachingPackage>>
> = {
  standard: {
    mensile: {
      id: "corsa-forza-standard-mensile",
      name: "CORSA + FORZA",
      subtitle: "STANDARD MENSILE",
      price: 99,
      stripePriceId: getPriceId("corsa-forza-standard-mensile"),
      billingPeriod: "mensile",
      tier: "standard",
      features: [
        "4 settimane di allenamenti di corsa personalizzati",
        "1 circuito di mobilità progressiva",
        "1 circuito di stretching progressivo",
        "1 circuito di core progressivo",
        "1 circuito di forza progressivo",
        "1 call iniziale",
        "1 feedback a settimana sugli allenamenti",
      ],
    },
    quadrimestrale: {
      id: "corsa-forza-standard-quadrimestrale",
      name: "CORSA + FORZA",
      subtitle: "STANDARD QUADRIMESTRALE",
      price: 329,
      stripePriceId: getPriceId("corsa-forza-standard-quadrimestrale"),
      billingPeriod: "quadrimestrale",
      tier: "standard",
      highlight: true,
      features: [
        "16 settimane di allenamenti di corsa personalizzati",
        "4 circuiti di mobilità progressiva",
        "4 circuiti di stretching progressivo",
        "4 circuiti di core progressivi",
        "4 circuiti di forza progressivi",
        "1 call iniziale di 40'",
        "1 call intermedia di 20'",
        "1 feedback a settimana sugli allenamenti",
      ],
    },
  },
  personalizzato: {
    // Personalizzato disponibile SOLO quadrimestrale
    quadrimestrale: {
      id: "corsa-forza-personalizzato-quadrimestrale",
      name: "CORSA + FORZA",
      subtitle: "PERSONALIZZATO QUADRIMESTRALE",
      price: 499,
      stripePriceId: getPriceId("corsa-forza-personalizzato-quadrimestrale"),
      billingPeriod: "quadrimestrale",
      tier: "personalizzato",
      features: [
        "16 settimane di allenamenti di corsa personalizzati",
        "Mobilità personalizzata",
        "Stretching personalizzato",
        "4 circuiti di pliometria personalizzati",
        "4 circuiti di core personalizzati",
        "4 circuiti di forza personalizzati",
        "1 call iniziale di 40'",
        "1 call di 20' ogni nuovo mesociclo",
        "1 feedback a settimana sugli allenamenti",
      ],
    },
  },
};

// ============ RETURN TO RUN (Pacchetto Speciale) ============
export const RETURN_TO_RUN: CoachingPackage = {
  id: "return-to-run",
  name: "RETURN TO RUN",
  subtitle: "QUADRIMESTRALE",
  price: 499,
  stripePriceId: getPriceId("return-to-run"),
  billingPeriod: "quadrimestrale",
  features: [
    "4 programmazioni progressive di bici e nuoto per mantenere il condizionamento aerobico",
    "Scheda di forza e mobilità funzionale specifica per il tuo infortunio",
    "Test di carico progressivo per il rientro graduale (Run/Walk protocol)",
    "Supporto chat prioritario: risposta entro 72h",
    "1 call iniziale di 45'",
    "3 call intermedie di 25' prima di ogni nuovo mesociclo",
  ],
};

// ============ LEGACY EXPORTS (per compatibilità) ============
// Pacchetti di Corsa (legacy - ora usa CORSA_FORZA_PACKAGES)
export const CORSA_PACKAGES: Record<BillingPeriod, CoachingPackage> = {
  mensile: CORSA_FORZA_PACKAGES.standard.mensile!,
  quadrimestrale: CORSA_FORZA_PACKAGES.standard.quadrimestrale!,
};

// Array completo per compatibilità con CheckoutForm
export const COACHING_PACKAGES: CoachingPackage[] = [
  // Forza
  FORZA_PACKAGES.standard.mensile,
  FORZA_PACKAGES.standard.quadrimestrale,
  FORZA_PACKAGES.personalizzato.mensile,
  FORZA_PACKAGES.personalizzato.quadrimestrale,
  // Corsa + Forza
  CORSA_FORZA_PACKAGES.standard.mensile!,
  CORSA_FORZA_PACKAGES.standard.quadrimestrale!,
  CORSA_FORZA_PACKAGES.personalizzato.quadrimestrale!,
  // Return to Run
  RETURN_TO_RUN,
];

export const packagesById = COACHING_PACKAGES.reduce<
  Record<string, CoachingPackage>
>((acc, pkg) => {
  acc[pkg.id] = pkg;
  return acc;
}, {});

// ============ HELPER FUNCTIONS ============

// Calcola il risparmio quadrimestrale rispetto a 4 mesi di mensile
export function calculateSavings(
  monthlyPrice: number,
  quarterlyPrice: number,
): number {
  return monthlyPrice * 4 - quarterlyPrice;
}

// Ottieni forza package per tier e period
export function getForzaPackage(
  tier: Tier,
  period: BillingPeriod,
): CoachingPackage {
  return FORZA_PACKAGES[tier][period];
}

// Ottieni corsa+forza package per tier e period
export function getCorsaForzaPackage(
  tier: Tier,
  period: BillingPeriod,
): CoachingPackage | null {
  return CORSA_FORZA_PACKAGES[tier][period] || null;
}
