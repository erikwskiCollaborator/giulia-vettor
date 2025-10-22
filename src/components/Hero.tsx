'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import ScrollingWords from "./ScrollingWords";
import Button from "./Button";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

// Animated gradient background with continuous rotation and hover overlay
export default function Hero({
  onCtaClick,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const strengthRef = useRef(0.7); // gradient intensity

  useEffect(() => {
    let raf = 0;
    let x = 50;
    let y = 50;

    const animate = () => {
      // Looping idle motion that always runs - FASTER animation
      const now = Date.now();
      // Angular position: full 360° in 3 seconds (was 5)
      const secondsPerRevolution = 3;
      const omega = (Math.PI * 2) / secondsPerRevolution; // rad/s
      const t = now * 0.001; // seconds
      const theta = t * omega;

      // Ellipse radii to let blobs sweep and divide horizontally - LARGER movement
      const radiusX = 45; // increased from 35
      const radiusY = 30; // increased from 22
      const rotX = 50 + Math.cos(theta) * radiusX;
      const rotY = 50 + Math.sin(theta) * radiusY;

      // Ease current blob center towards rotation position - FASTER easing
      x += (rotX - x) * 0.12; // increased from 0.07
      y += (rotY - y) * 0.12;

      const el = containerRef.current;
      if (el) {
        // Secondary blob rotates opposite (180° phase)
        const x2 = 50 + Math.cos(theta + Math.PI) * radiusX;
        const y2 = 50 + Math.sin(theta + Math.PI) * radiusY;
        
        // Third blob with different phase for more complexity
        const x3 = 50 + Math.cos(theta + Math.PI * 0.5) * radiusX * 0.8;
        const y3 = 50 + Math.sin(theta + Math.PI * 0.5) * radiusY * 0.8;

        el.style.setProperty('--gx1', `${x}%`);
        el.style.setProperty('--gy1', `${y}%`);
        el.style.setProperty('--gx2', `${x2}%`);
        el.style.setProperty('--gy2', `${y2}%`);
        el.style.setProperty('--gx3', `${x3}%`);
        el.style.setProperty('--gy3', `${y3}%`);
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
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden min-h-[100vh] cursor-none"
      style={
        {
          // CSS variables used by the gradient background
          // Defaults provide a nice initial look before interaction
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          "--gx1": "35%",
          "--gy1": "30%",
          "--gx2": "70%",
          "--gy2": "65%",
          "--gx3": "50%",
          "--gy3": "50%",
          "--gstrength": 0.7,
          background:
            // brand colors: #543585 (primary viola) dominant, #BE418C (magenta) accent
            "radial-gradient(42% 54% at var(--gx1) var(--gy1), rgba(84, 53, 133, calc(0.60*var(--gstrength))) 0%, rgba(84, 53, 133, 0) 60%), " +
            "radial-gradient(46% 60% at var(--gx2) var(--gy2), rgba(190, 65, 140, calc(0.35*var(--gstrength))) 0%, rgba(190, 65, 140, 0) 62%), " +
            "radial-gradient(40% 50% at var(--gx3) var(--gy3), rgba(155, 89, 182, calc(0.30*var(--gstrength))) 0%, rgba(155, 89, 182, 0) 65%), " +
            "linear-gradient(180deg, #543585 0%, #5c3a90 40%, #BE418C 100%)",
        } as React.CSSProperties
      }
    >
      {/* Top marquee */}
      <ScrollingWords
        words={[
          "corsa",
          "running",
          "respiro",
          "energia",
          "forza",
          "benessere",
          "focus",
          "ritmo",
          "movimento",
          "equilibrio",
          "performance",
        ]}
        direction="left"
        speedSeconds={25}
        className="absolute top-0 left-0 h-24 flex items-center text-white/10 text-[4rem] md:text-[5.5rem] font-extrabold"
      />
      <div className="mx-auto min-h-[100vh] flex items-center max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative grid items-center gap-12 lg:grid-cols-2 pb-32">
          {/* Content */}
          <div className="text-center lg:text-left text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/white-logo.png"
              alt="White Logo"
              width={200} // fallback for SSR
              height={100} // fallback for SSR
              className="w-32 md:w-52 lg:w-60 xl:w-64 h-auto mb-6 mx-auto lg:mx-0"
              priority
            />
            <h2 className="opacity-80 text-2xl font-bold tracking-tight sm:text-4xl">
              Run your way,
            </h2>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Allenati con <br />
              <span className="text-white relative">
                <span className="absolute left-[2px] top-[4px] sm:left-[5px] sm:top-[10px] text-primary z-[-1]">
                  ME
                </span>
                ME
              </span>
              <span className="text-white relative ml-1">
                <span className="absolute left-[2px] top-[4px] sm:left-[4px] sm:top-[8px] text-secondary z-[-1]">
                  TODO
                </span>
                TODO
              </span>
            </h1>
            <span className="block mt-10 md:text-lg">
              È proprio quando hai paura di iniziare che è il momento di
              alzarsi, ritrovare te stessə e riprendere in mano la tua vita.
            </span>
            <div className="mt-4 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  onCtaClick?.();
                }}
                size="xl"
                variant="outline"
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
              >
                Inizia ora
              </Button>
            </div>

            {/* Mini stats - visible only on desktop */}
            <div className="hidden lg:flex gap-8 mt-12 opacity-80">
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm mt-1">Anni esperienza</p>
              </div>
              <div>
                <p className="text-3xl font-bold">FIDAL</p>
                <p className="text-sm mt-1">Istruttrice</p>
              </div>
            </div>
          </div>

          {/* Transparent photo placeholder (no src set yet) */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <div
              aria-label="Foto atleta"
              role="img"
              className="h-[300px] w-[250px] lg:h-[420px] lg:w-[300px] rounded-[28px] border border-white/30 bg-transparent shadow-2xl shadow-black/30 ring-1 ring-white/20"
              style={{
                background: "transparent",
                backdropFilter: "saturate(120%)",
              }}
            />
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={200} // fallback for SSR
              height={100} // fallback for SSR
              className="absolute top-[-25%] h-[150%]  w-auto mb-6"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hover overlay: 64x64 circle following cursor */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-10 transition-transform duration-200 "
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: `translate(-50%, -50%) scale(${
              isHoveringButton ? 0 : 1
            })`,
          }}
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-black font-bold shadow-lg">
            GO !
          </div>
        </div>
      )}

      {/* Bottom marquee */}
      <ScrollingWords
        words={[
          "grinta",
          "passi",
          "resistenza",
          "motivazione",
          "endurance",
          "velocità",
          "core",
          "fiducia",
          "sorriso",
          "sfida",
          "crescita",
        ]}
        direction="right"
        speedSeconds={22}
        className="absolute bottom-0 left-0 h-24 flex items-center text-white/10 text-[4rem] md:text-[5.5rem] font-extrabold"
      />
    </section>
  );
}


