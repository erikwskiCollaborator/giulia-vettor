'use client';

import Image from "next/image";
import Button from "./Button";

type CallToActionProps = {
  onCtaClick?: () => void;
};

export default function CallToAction({ onCtaClick }: CallToActionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-primary/95 to-gray-900 py-16 sm:py-24 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-white">ANCORA </span>
              <span className="text-secondary">INDECISA?</span>
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed opacity-90 mb-8">
              Nessun problema. Non devi essere un&apos;esperta in tutto questo — è il nostro lavoro! Ci piace chattare con te e aiutarti a capire le tue migliori opzioni. Le nostre consulenze gratuite sono veloci e completamente senza pressioni.
            </p>

            <Button 
              size="xl" 
              variant="secondary"
              className="bg-secondary border-secondary hover:bg-secondary/90 hover:border-secondary/90"
              onClick={onCtaClick}
            >
              PRENOTA UNA CONSULENZA GRATUITA
            </Button>

            <p className="text-sm text-white/60 mt-4 italic">
              * Consulenza gratuita di 15 minuti per rispondere alle tue domande
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-primary blur-2xl opacity-30 scale-110"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl backdrop-blur">
                <Image
                  src="/images/cta.jpg"
                  alt="Coach Giulia Vettor"
                  width={450}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-primary px-6 py-3 rounded-full shadow-xl border-4 border-secondary/20">
                <p className="text-sm font-bold">Consulenza gratuita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

