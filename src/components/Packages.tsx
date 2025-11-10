'use client';

import { useRouter } from 'next/navigation';
import Button from "./Button";
import { COACHING_PACKAGES } from "@/lib/packages";

export default function Packages() {
  const router = useRouter();

  const handlePackageClick = (packageId: string) => {
    router.push(`/checkout?packageId=${packageId}`);
  };
  return (
    <section id="packages" className="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-primary">SCEGLI IL TUO </span>
            <span className="text-secondary">PERCORSO</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Programmi personalizzati per ogni obiettivo. Dalla corsa alla forza, dal supporto mensile al percorso completo.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {COACHING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`
                relative flex flex-col rounded-2xl overflow-hidden shadow-lg
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                ${pkg.highlight 
                  ? 'bg-gradient-to-br from-primary to-primary/90 text-white ring-4 ring-secondary ring-offset-4' 
                  : 'bg-white text-gray-900'
                }
              `}
            >
              {/* Highlight Badge */}
              {pkg.highlight && (
                <div className="absolute overflow-visible top-2 left-[50%] -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  <span className="absolute top-0 left-0 w-full h-full bg-secondary rounded-full"></span>
                  <span className="relative z-10">CONSIGLIATO</span>
                </div>
              )}

              {/* Header */}
              <div className={`px-6 pt-8 pb-6 ${pkg.highlight ? 'bg-white/10' : 'bg-gradient-to-br from-primary/5 to-secondary/5'}`}>
                <h3 className={`text-xl font-extrabold mb-1 ${pkg.highlight ? 'text-white' : 'text-primary'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm font-semibold ${pkg.highlight ? 'text-gray-200' : 'text-secondary'}`}>
                  {pkg.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="px-6 py-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-primary'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-2xl font-semibold ${pkg.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                    €
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="px-6 pb-6 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-secondary' : 'text-primary'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={`text-sm leading-relaxed ${pkg.highlight ? 'text-white/90' : 'text-gray-700'}`}>
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
                  variant={pkg.highlight ? 'outline' : 'primary'}
                  className="w-full"
                  onClick={() => handlePackageClick(pkg.id)}
                >
                  INIZIA ORA
                </Button>
              </div>

              {/* Note */}
              {pkg.note && (
                <div className={`px-6 py-3 text-xs ${pkg.highlight ? 'bg-white/5 text-white/70' : 'bg-gray-50 text-gray-600'}`}>
                  {pkg.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 italic max-w-4xl mx-auto">
            Tutti i pacchetti includono supporto personalizzato. I feedback sono personalizzati in base al tuo livello e ai tuoi obiettivi.
          </p>
        </div>
      </div>
    </section>
  );
}

