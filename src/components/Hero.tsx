'use client';

import Image from "next/image";
import Button from "./Button";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export default function Hero({
  onCtaClick,
}: HeroProps) {
  return (
    <section className="relative bg-white overflow-hidden min-h-[90vh]">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative mx-auto min-h-[90vh] flex items-center max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 w-full">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Coach certificata FIDAL</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-gray-900">Corri al </span>
              <span className="text-primary">massimo</span>
              <br />
              <span className="text-gray-900">Vivi </span>
              <span className="text-secondary">appieno</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Allenamenti personalizzati con il <strong className="text-primary">ME-TODO</strong>: 
              scientifico, efficace e che si adatta alla tua vita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Button 
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  onCtaClick?.();
                }} 
                size="xl" 
                variant="primary"
                className="bg-primary border-primary hover:bg-primary/90"
              >
                Inizia ora
              </Button>
              
              <button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 font-semibold hover:text-primary transition-colors flex items-center gap-2"
              >
                Scopri i programmi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-600 mt-1">Anni esperienza</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-gray-600 mt-1">Lauree</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600 mt-1">Personalizzato</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl scale-110"></div>
              
              {/* Main image */}
              <div className="relative w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] lg:w-[400px] lg:h-[550px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2rem] opacity-10"></div>
                <Image
                  src="/images/hero-image.png"
                  alt="Coach Giulia Vettor"
                  width={400}
                  height={550}
                  className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 right-2 bg-white rounded-2xl shadow-xl p-4 border-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Risultati garantiti</p>
                    <p className="text-xs text-gray-600">Metodo scientifico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
