"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BlendColor = "bg" | "ink" | "gray" | "transparent";

/**
 * Resolve blend color to the CSS variable that responds to theme.
 */
const colorMap: Record<BlendColor, string> = {
  bg: "var(--background)",
  ink: "var(--brand-ink)",
  gray: "var(--brand-gray)",
  transparent: "transparent",
};

interface SectionBlendProps {
  from?: BlendColor;
  to?: BlendColor;
  glow?: boolean;
  noise?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps a section with cinematic blended transitions.
 * Ultra-smooth 0.2cm (~8px) difuminado on each side.
 * The fade overlays use theme-aware CSS variables so they work in both light and dark mode.
 *
 * Inspired by Apple / Stripe / Linear / Vercel / Arc.
 */
export function SectionBlend({
  from = "transparent",
  to = "transparent",
  glow = false,
  noise = false,
  children,
  className,
  style,
}: SectionBlendProps) {
  return (
    <div
      className={cn("relative", noise && "bg-noise", className)}
      style={style}
    >
      {/* Top fade — blends into the section above (ultra-smooth ~120px) */}
      {from !== "transparent" && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[120px] pointer-events-none z-[2]"
          style={{
            background: `linear-gradient(to bottom, ${colorMap[from]} 0%, transparent 100%)`,
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 30%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 30%, transparent 100%)",
          }}
        />
      )}

      {/* Ambient orange glow diffusion (for dark → light transitions) */}
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[220px] pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, rgba(255,104,1,0.14) 0%, rgba(255,104,1,0.04) 40%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />
      )}

      <div className="relative z-[3]">{children}</div>

      {/* Bottom fade — blends into the section below (ultra-smooth ~120px) */}
      {to !== "transparent" && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[120px] pointer-events-none z-[2]"
          style={{
            background: `linear-gradient(to top, ${colorMap[to]} 0%, transparent 100%)`,
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 30%, transparent 100%)",
            maskImage:
              "linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 30%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
}
