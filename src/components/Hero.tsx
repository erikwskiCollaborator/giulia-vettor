'use client';

import { useEffect, useRef, useState } from 'react';

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

// Animated gradient background with continuous rotation and hover overlay
export default function Hero({
  title = 'Allena mente e corpo',
  subtitle = 'Coaching personalizzato per raggiungere i tuoi obiettivi',
  ctaLabel = 'Inizia ora',
  onCtaClick,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const strengthRef = useRef(0.7); // gradient intensity

  useEffect(() => {
    let raf = 0;
    let x = 50;
    let y = 50;

    const animate = () => {
      // Looping idle motion that always runs
      const now = Date.now();
      // Angular position: full 360° in 5 seconds
      const secondsPerRevolution = 5;
      const omega = (Math.PI * 2) / secondsPerRevolution; // rad/s
      const t = now * 0.001; // seconds
      const theta = t * omega;

      // Ellipse radii to let blobs sweep and divide horizontally
      const radiusX = 35; // reach near left/right thirds
      const radiusY = 22;
      const rotX = 50 + Math.cos(theta) * radiusX;
      const rotY = 50 + Math.sin(theta) * radiusY;

      // Ease current blob center towards rotation position
      x += (rotX - x) * 0.07;
      y += (rotY - y) * 0.07;

      const el = containerRef.current;
      if (el) {
        // Secondary blob rotates opposite (180° phase)
        const x2 = 50 + Math.cos(theta + Math.PI) * radiusX;
        const y2 = 50 + Math.sin(theta + Math.PI) * radiusY;

        el.style.setProperty('--gx1', `${x}%`);
        el.style.setProperty('--gy1', `${y}%`);
        el.style.setProperty('--gx2', `${x2}%`);
        el.style.setProperty('--gy2', `${y2}%`);
        el.style.setProperty('--gstrength', `${strengthRef.current}`);
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (ev: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      setMousePosition({ x, y });
      setIsHovered(true);
      strengthRef.current = 0.9;
    };
    const onLeave = () => {
      setIsHovered(false);
      strengthRef.current = 0.7;
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden min-h-[100vh] cursor-none"
      style={{
        // CSS variables used by the gradient background
        // Defaults provide a nice initial look before interaction
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        '--gx1': '35%','--gy1': '30%', '--gx2': '70%', '--gy2': '65%', '--gstrength': 0.7,
        background:
          // brand colors: #543585 (primary viola) dominant, #BE418C (magenta) accent
          'radial-gradient(42% 54% at var(--gx1) var(--gy1), rgba(84, 53, 133, calc(0.60*var(--gstrength))) 0%, rgba(84, 53, 133, 0) 60%), ' +
          'radial-gradient(46% 60% at var(--gx2) var(--gy2), rgba(190, 65, 140, calc(0.35*var(--gstrength))) 0%, rgba(190, 65, 140, 0) 62%), ' +
          'linear-gradient(180deg, #543585 0%, #5c3a90 40%, #BE418C 100%)',
      } as React.CSSProperties}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 opacity-90">{subtitle}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                type="button"
                onClick={onCtaClick}
                className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 backdrop-blur hover:bg-white/20"
              >
                {ctaLabel}
              </button>
            </div>
          </div>

          {/* Transparent photo placeholder (no src set yet) */}
          <div className="relative flex items-center justify-center">
            <div
              aria-label="Foto atleta"
              role="img"
              className="h-[420px] w-[300px] rounded-[28px] border border-white/30 bg-transparent shadow-2xl shadow-black/30 ring-1 ring-white/20"
              style={{
                background: 'transparent',
                backdropFilter: 'saturate(120%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Hover overlay: 64x64 circle following cursor */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-10"
          style={{ left: mousePosition.x, top: mousePosition.y, transform: 'translate(-50%, -50%)' }}
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-black font-bold shadow-lg">
            GO !
          </div>
        </div>
      )}
    </section>
  );
}


