"use client";

import Image from "next/image";
import Link from "next/link";

export default function RadunoBanner() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="raduno"
      className="relative bg-gradient-to-tr from-gray-900 via-primary/95 to-gray-900  py-10 sm:py-14 overflow-hidden mt-1"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                Estate {currentYear} • Passo Oclini
              </span>
            </div>

            {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">
              Raduno Estivo in Altura
            </h2> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              RADUNO ESTIVO IN ALTURA
            </h2>

            <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-2">
              Dal 17 al 23 Agosto con i coach{" "}
              <span className="font-semibold">
                Giulia Vettor e Alexander Serra
              </span>
            </p>

            <p className="text-sm leading-relaxed opacity-80 mb-5">
              Corsa, tecnica, mobilità e forza funzionale a 2000m di altitudine.
            </p>

            <Link
              href="https://www.alexrunningcoach.it/raduno/"
              target="_blank"
              className="inline-flex items-center gap-2 bg-secondary border-2 border-secondary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-secondary/90 hover:border-secondary/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span>MAGGIORI INFORMAZIONI</span>
              <svg
                className="w-4 h-4 rotate-[-45deg]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <p className="text-xs text-white/50 mt-3 italic">
              * Adatto a tutti i Runner appassionati che vogliono scoprire tutti
              i segreti per Correre al meglio.
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-30 scale-110"></div>

              {/* Image container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur">
                <Image
                  src="/images/raduno.jpg"
                  alt="Raduno Estivo"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -left-2 bg-white text-secondary px-4 py-2 rounded-full shadow-xl border-2 border-primary/20">
                <p className="text-xs font-bold">17-23 Agosto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
