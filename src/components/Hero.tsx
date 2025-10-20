'use client';

import { useEffect, useRef, useState } from 'react';

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

// Animated gradient background that reacts to mouse move and click
export default function Hero({
  title = 'Allena mente e corpo',
  subtitle = 'Coaching personalizzato per raggiungere i tuoi obiettivi',
  ctaLabel = 'Inizia ora',
  onCtaClick,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [target, setTarget] = useState({ x: 50, y: 50 }); // percentage coords
  const strengthRef = useRef(0.7); // gradient intensity
  const clickPulseRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    let x = target.x;
    let y = target.y;

    const animate = () => {
      // Ease current blob center towards target
      x += (target.x - x) * 0.08;
      y += (target.y - y) * 0.08;

      const el = containerRef.current;
      if (el) {
        // Subtle time based drift
        const t = Date.now() * 0.0002;
        const x2 = 100 - x + Math.sin(t) * 10;
        const y2 = 100 - y + Math.cos(t * 1.2) * 8;

        // Click pulse decay
        clickPulseRef.current = Math.max(0, clickPulseRef.current - 0.02);
        const pulse = clickPulseRef.current;

        el.style.setProperty('--gx1', `${x}%`);
        el.style.setProperty('--gy1', `${y}%`);
        el.style.setProperty('--gx2', `${x2}%`);
        el.style.setProperty('--gy2', `${y2}%`);
        el.style.setProperty('--gstrength', `${strengthRef.current + pulse}`);
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target.x, target.y]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (ev: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const xPerc = ((ev.clientX - rect.left) / rect.width) * 100;
      const yPerc = ((ev.clientY - rect.top) / rect.height) * 100;
      setTarget({ x: Math.max(0, Math.min(100, xPerc)), y: Math.max(0, Math.min(100, yPerc)) });
      strengthRef.current = 0.85;
    };
    const onLeave = () => {
      strengthRef.current = 0.7;
    };
    const onClick = () => {
      clickPulseRef.current = 0.5; // brief highlight on click
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('click', onClick);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden"
      style={{
        // CSS variables used by the gradient background
        // Defaults provide a nice initial look before interaction
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        '--gx1': '35%','--gy1': '30%', '--gx2': '70%', '--gy2': '65%', '--gstrength': 0.7,
        background:
          'radial-gradient(40% 50% at var(--gx1) var(--gy1), rgba(255, 0, 153, calc(0.45*var(--gstrength))) 0%, rgba(255, 0, 153, 0) 60%), ' +
          'radial-gradient(45% 60% at var(--gx2) var(--gy2), rgba(120, 76, 255, calc(0.45*var(--gstrength))) 0%, rgba(120, 76, 255, 0) 60%), ' +
          'linear-gradient(180deg, #3b0764 0%, #6d28d9 55%, #ef2a8a 100%)',
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
    </section>
  );
}


