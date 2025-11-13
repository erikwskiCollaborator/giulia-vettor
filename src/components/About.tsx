"use client";

import Image from "next/image";
import Button from "./Button";

type AboutProps = {
  onCtaClick?: () => void;
};

export default function About({ onCtaClick }: AboutProps) {
  return (
    <section id="about" className="relative isolate overflow-visible">
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
                <span className="text-primary">ALLENA </span>
                <span className="text-gray-300"> IL TUO </span>
                <span className="text-secondary">CORPO.</span>
                <br />
                <span className="text-gray-300">FAI </span>
                <span className="text-secondary">CORRERE </span>
                <span className="text-gray-300">LA </span>
                <span className="text-primary">MENTE</span>
              </h2>
            </div>

            {/* Filosofia al centro */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                Vuoi
                <span className="text-primary font-bold"> STARE BENE </span>
                <span className="text-secondary font-bold">CORRENDO </span>e
                migliorarti? <br />
                Smettila di affidarti al caso e segui il
                <span className="text-secondary font-bold"> ME</span>
                <span className="text-primary font-bold">TO</span>
                <span className="text-secondary font-bold">DO </span>
                giusto per <span className="text-secondary font-bold">TE</span>,
                con una programmazione scientifica e{" "}
                <span className="text-primary font-bold">PERSONALIZZATA.</span>
                <br />
                Puoi raggiungere i tuoi{" "}
                <span className="text-secondary font-bold">OBIETTIVI</span>{" "}
                sportivi conciliando l’allenamento con impegni, relazioni e
                VITA.
              </p>
              <p className="text-base sm:text-lg">
                Allena il tuo ritmo, supera le tue barriere, raggiungi i tuoi
                traguardi. Migliora la costanza e la{" "}
                <span className="text-secondary font-bold">FORZA</span> che ti
                porteranno ad esplorare{" "}
                <span className="text-primary font-bold">STRADE NUOVE.</span>
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
                    Istruttrice FIDAL
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
                <span className="text-white">PIACERE DI</span>
                <br />
                <span className="text-white">CONOSCER</span>
                <span className="text-secondary">TI</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-medium">
                Sono{" "}
                <strong className="text-white">
                  Atleta, Scienziata motoria e Istruttrice FIDAL
                </strong>{" "}
                con oltre{" "}
                <strong className="text-white">10 anni di esperienza.</strong>
                <br />
                Sono anche laureata in Scienze Pedagogiche e in Scienze
                dell&apos;Educazione.
                <br />
                Amo la sana competizione e vivo in prima persona ogni aspetto
                della corsa.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                La mia missione è diffondere uno{" "}
                <strong className="bg-white px-2 rounded-xl text-primary whitespace-nowrap">
                  stile di vita sano
                </strong>{" "}
                che metta lo{" "}
                <strong className="bg-white px-2 rounded-xl text-secondary whitespace-nowrap">
                  sport nella tua quotidianità.
                </strong>{" "}
                La corsa non è solo performance ma{" "}
                <strong className="bg-white px-2 rounded-xl text-primary whitespace-nowrap">
                  benessere globale
                </strong>{" "}
                e un percorso di{" "}
                <strong className="bg-white px-2 rounded-xl text-secondary whitespace-nowrap">
                  miglioramento
                </strong>{" "}
                delle proprie abilità e risorse, sia mentali che fisiche.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                Educo a uno{" "}
                <strong className="bg-white px-2 rounded-xl text-secondary whitespace-nowrap">
                  stile di corsa
                </strong>{" "}
                che non punta solo ai record ma a migliorare{" "}
                <strong className="bg-white px-2 rounded-xl text-primary whitespace-nowrap">
                  la qualità della tua intera vita.
                </strong>{" "}
                Perché correre bene significa vivere meglio.
              </p>

              <div className="pt-4">
                <Button
                  onClick={() => {
                    document
                      .getElementById("packages")
                      ?.scrollIntoView({ behavior: "smooth" });
                    onCtaClick?.();
                  }}
                  size="l"
                  variant="outline"
                >
                  RICOMINCIA DA TE
                </Button>
              </div>

              {/* Citazione in basso */}
              <div className="pt-8">
                <p className="text-xs sm:text-sm italic opacity-70 leading-relaxed">
                  &ldquo;La corsa è libertà, è scoperta, è miglioramento
                  continuo. È il viaggio verso la versione migliore di te
                  stessə.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
