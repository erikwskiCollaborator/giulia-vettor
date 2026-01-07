"use client";
import React, { useEffect, useState } from "react";

/*
  LoadingOverlay
  - Shows a fullscreen overlay with a spinner while initial critical resources load.
  - Preloads listed images; hides once all loaded OR timeout reached (fail-safe).
  - Fades out smoothly.
*/
export interface LoadingOverlayProps {
  images?: string[]; // image paths to preload (public/ relative starting with / )
  minimumMs?: number; // minimum time to show (avoid flash) default 600ms
  timeoutMs?: number; // max wait before forcing hide (default 5000ms)
  onDone?: () => void; // callback when overlay finishes
}

const defaultImages = ["/images/white-logo.png", "/images/hero.png"];

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  images = defaultImages,
  minimumMs = 0,
  timeoutMs = 5000,
  onDone,
}) => {
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    const start = performance.now();
    let finishedCount = 0;
    const total = images.length;

    const finishIfReady = () => {
      if (!mounted) return;
      const elapsed = performance.now() - start;
      const remain = Math.max(0, minimumMs - elapsed);
      // Wait at least minimumMs, then signal done
      setTimeout(() => {
        if (!mounted) return;
        setDone(true);
        setTimeout(() => {
          // allow opacity transition to run
          setVisible(false);
          onDone?.();
        }, 400); // matches CSS transition
      }, remain);
    };

    if (total === 0) finishIfReady();

    images.forEach((src) => {
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // ignore errors
        img.src = src;
      }).then(() => {
        finishedCount += 1;
        if (finishedCount === total) {
          finishIfReady();
        }
      });
    });

    const timeout = setTimeout(() => {
      finishIfReady();
    }, timeoutMs);

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, [images, minimumMs, timeoutMs, onDone]);

  if (!visible) return null;

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-white transition-opacity duration-400 ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      <Spinner />
      <p className="mt-6 text-sm tracking-wide uppercase opacity-70">
        Caricamento...
      </p>
    </div>
  );
};

const Spinner: React.FC = () => (
  <svg
    className="animate-spin h-12 w-12 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-20"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-90"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

export default LoadingOverlay;
