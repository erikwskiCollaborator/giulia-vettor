export type CoachingPackage = {
  id: string;
  name: string;
  subtitle: string;
  price: number; // Euro price displayed to users
  features: string[];
  highlight?: boolean;
  note?: string;
  crossSellForza?: boolean; // Se true, proponi l'add-on del programma di forza
};

export const COACHING_PACKAGES: CoachingPackage[] = [
  {
    id: "mensile",
    name: "COACHING DI CORSA",
    subtitle: "MENSILE",
    price: 69,
    crossSellForza: true,
    features: [
      "4 settimane di allenamenti di corsa personalizzati",
      "1 call iniziale e 1 feedback settimanale",
    ],
  },
  {
    id: "quadrimestrale",
    name: "COACHING DI CORSA",
    subtitle: "QUADRIMESTRALE",
    price: 239,
    crossSellForza: true,
    features: [
      "16 settimane di allenamenti di corsa personalizzati",
      "Mobilità e stretching progressivi",
      "4 circuiti di core progressivi",
      "4 circuiti di forza progressivi",
      "1 call iniziale + 1 call intermedia con supporto pedagogico + 16 feedback (1v./settimana)",
    ],
    highlight: true,
  },
  {
    id: "forza",
    name: "PROGRAMMA",
    subtitle: "DI FORZA",
    price: 59,
    features: [
      "4 settimane di allenamenti di forza",
      "Mobilità e stretching personalizzati",
      "1 circuito di core personalizzato",
      "1 circuito di forza personalizzato",
      "1 call iniziale + 4 feedback su richiesta*",
    ],
    note: "* I feedback su richiesta offrono assistenza e conferma quando vengono richiesti esplicitamente.",
  },
  {
    id: "consulenza",
    name: "CONSULENZA PEDAGOGICA",
    subtitle: "SPORTIVA",
    price: 69,
    features: [
      "1 colloquio di 50'",
      "Disposizione di strategie funzionali",
      "1 feedback di supporto",
    ],
  },
];

export const packagesById = COACHING_PACKAGES.reduce<
  Record<string, CoachingPackage>
>((acc, pkg) => {
  acc[pkg.id] = pkg;
  return acc;
}, {});
