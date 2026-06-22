"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * GSAP-powered subtle parallax on hero dashboard mockup.
 * Only activates on desktop (pointer: fine) to keep mobile smooth.
 */
export function useHeroParallax<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip on touch devices / small screens for performance
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle vertical parallax on the mockup
      gsap.to(el, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
