'use client';

import Image from "next/image";
import Button from "./Button";

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
              <div className="border-2 border-primary rounded-lg p-4 bg-white shadow-lg max-w-[200px]">
                <p className="text-xs font-semibold text-primary mb-3 text-center">
                  Riconoscimenti
                </p>
                <div className="flex items-center justify-center gap-3 mb-3">
                  {/* Tripla Laurea */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <span className="text-4xl">🎓</span>
                      <span className="absolute -top-2 -right-2 bg-secondary text-white border-white border font-bold rounded-full px-2 py-1 text-xs">
                        x3
                      </span>
                    </div>
                  </div>
                  {/* Logo FIDAL */}
                  <div className="w-20 h-14 border-2 border-primary border-opacity-40 p-1 rounded flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/fidal.svg"
                      alt="FIDAL"
                      width={100}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-[0.65rem] text-gray-700 text-start leading-tight space-y-1">
                  <p className="font-semibold text-primary text-right">
                    Coach FIDAL
                  </p>
                  <div>
                    <span className="font-semibold text-secondary">
                      Laurea in:{" "}
                    </span>
                    <ul className="list-disc list-inside">
                      <li>Scienze motorie</li>
                      <li>Scienze pedagogiche</li>
                      <li>Scienze dell&apos;educazione</li>
                    </ul>
                  </div>
                </div>
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

              <p className="text-base sm:text-lg leading-relaxed opacity-90 font-medium">
                Sono <strong>Coach FIDAL</strong> con <strong>oltre 10 anni di esperienza</strong>, con tre lauree in Scienze Motorie, Scienze Pedagogiche e Scienze dell&apos;Educazione. Corro e gareggio sia su pista che su strada, vivendo in prima persona ogni aspetto della corsa.
              </p>

              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                La mia missione è diffondere uno <strong>stile di vita sano con lo sport al centro</strong>. Per me, la corsa non è solo performance: è <strong>benessere globale</strong>, un percorso di miglioramento delle proprie abilità e risorse, sia mentali che fisiche.
              </p>

              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                Educo a uno <strong>stile di corsa</strong> che non punta solo ai record, ma a migliorare la <strong>qualità della tua vita</strong>. Perché correre bene significa vivere meglio.
              </p>

              <div className="pt-4">
                <Button onClick={onCtaClick} size="l" variant="outline">
                  RICOMINCIA DA TE
                </Button>
              </div>

              {/* Citazione in basso */}
              <div className="pt-8">
                <p className="text-xs sm:text-sm italic opacity-70 leading-relaxed">
                  &ldquo;La corsa è libertà, è scoperta, è miglioramento continuo. È il viaggio verso la versione migliore di te stessə.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

