'use client';

import Image from "next/image";

type AboutProps = {
  onCtaClick?: () => void;
};

export default function About({ onCtaClick }: AboutProps) {
  return (
    <section className="relative isolate overflow-visible">
      {/* Prima sezione - Sfondo bianco */}
      <div className="bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr,auto] items-start">
            {/* Titolo a sinistra */}
            <div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold"
                style={{ lineHeight: "0.8" }}
              >
                <span className="text-primary">CORRI DA </span>
                <span className="text-secondary">PRO</span>
                <br />
                <span className="text-primary">VIVI DA </span>
                <span className="text-secondary">AMATORE</span>
              </h2>
            </div>

            {/* Filosofia al centro */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                Vuoi una preparazione da PRO, ma la tua vita non è solo su
                Strava? Con il mio{" "}
                <span className="text-primary font-bold">ME-TODO</span>, ottieni
                un allenamento scientifico ed efficace. Corri al massimo, senza
                sacrificare lavoro e famiglia.{" "}
                <span className="text-primary font-bold">
                  Corri da <span className="text-secondary">Pro</span>, Vivi da{" "}
                  <span className="text-secondary">Amatore</span>.
                </span>
              </p>
              <p className="text-base sm:text-lg">
                Non devi rinunciare alla passione per la corsa per i tuoi
                impegni. Ti offro un metodo che applica l&apos;efficacia della
                <span className="text-primary font-bold">
                  {" "}
                  tecnica della corsa
                </span>{" "}
                su pista alla strada. Massima performance, minima interferenza.
                Migliora i tuoi tempi come un{" "}
                <span className="text-secondary font-bold">PRO</span>. Goditi la
                tua vita da{" "}
                <span className="text-secondary font-bold">AMATORE</span>.
              </p>
            </div>

            {/* Badge certificazioni a destra */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="border-2 border-primary rounded-lg p-4 bg-white shadow-lg">
                <p className="text-xs font-semibold text-primary mb-2 text-center">
                  Riconoscimento
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">ASI</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                    <span className="text-2xl">🇮🇹</span>
                  </div>
                </div>
                <p className="text-[0.6rem] text-gray-600 mt-2 text-center leading-tight">
                  QUALIFICA PROMOZIONE
                  <br />
                  SPORTIVA
                  <br />
                  DISCIPLINE ASSOCIATE
                  <br />
                  CONI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seconda sezione - Sfondo viola */}
      <div className="bg-primary relative pb-16 sm:pb-24 overflow-visible">
        <div className="mx-auto max-w-7xl pt-[100px] lg:pt-[150px] px-6 lg:px-8">
          <div className="absolute top-0 left-0 w-full h-[100px] bg-white"></div>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* Foto circolare che fuoriesce */}
            <div className="relative flex justify-center lg:justify-start pt-16 lg:pt-0">
              <div className="relative -mt-[100px]">
                <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-[450px] lg:h-[700px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/images/about.jpg"
                    alt="Giulia Vettor"
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contenuto a destra */}
            <div className="text-white space-y-6 pt-8 lg:pt-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-secondary">PIACERE DI</span>
                <br />
                <span className="text-secondary">CONOSCERTI</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed opacity-90">
                I&apos;M A COACH, TRAINER, AND RUNNER—BUT MORE THAN THAT, I
                CREATE SOLUTIONS FOR RUNNERS THAT ALLOW THEM TO FEEL BETTER IN
                THEIR BODIES, INCREASE THEIR PERFORMANCE, RECOVER FASTER AND RUN
                HAPPIER.
              </p>

              <p className="text-sm sm:text-base leading-relaxed opacity-80">
                I love my running community and my highest priority is making
                sure that training is sustainable and enjoyable—not just another
                burden or stressor in your already hectic life. I can&apos;t
                wait to bring my diverse education and movement background to
                help you succeed in training on your own terms.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  RICOMINCIA DA TE
                </button>
              </div>

              {/* Citazione in basso */}
              <div className="pt-8">
                <p className="text-xs sm:text-sm italic opacity-70 leading-relaxed">
                  CITAZIONE CHE TI PIACE CITAZIONE CHE TI PIACE CITAZIONE CHE TI
                  PIACE CITAZIONE CHE TI PIACE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

