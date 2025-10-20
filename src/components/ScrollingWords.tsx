"use client";
import React from "react";

export type ScrollingWordsProps = {
  words: string[];
  direction?: "left" | "right";
  className?: string;
  speedSeconds?: number; // duration of one half loop
};

/*
  ScrollingWords renders an infinite horizontal marquee.
  Implementation detail: We duplicate the words sequence twice so that the track
  width is ~200% and translate by 50% creating seamless loop.
*/
export const ScrollingWords: React.FC<ScrollingWordsProps> = ({
  words,
  direction = "left",
  className = "",
  speedSeconds = 30,
}) => {
  const trackClass = `marquee-track ${direction === "right" ? "reverse" : ""}`;
  return (
    <div className={`marquee-wrapper ${className}`} style={{
      // Expose custom prop for speed control
      // 30s by default, can be overridden via prop
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      "--marquee-duration": `${speedSeconds}s`,
    }}>
      <div className={trackClass}>
        {/* First sequence */}
        {words.map((w, i) => (
          <span
            key={`a-${i}`}
            className="px-8 font-bold tracking-tight select-none"
            aria-hidden="true"
          >
            {w.toUpperCase()}
          </span>
        ))}
        {/* Duplicate sequence for seamless looping */}
        {words.map((w, i) => (
          <span
            key={`b-${i}`}
            className="px-8 font-bold tracking-tight select-none"
            aria-hidden="true"
          >
            {w.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingWords;
