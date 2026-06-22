"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BlendColor = "white" | "ink" | "gray" | "transparent";

const colorMap: Record<BlendColor, string> = {
  white: "#ffffff",
  ink: "#0a0a0a",
  gray: "#f7f7f7",
  transparent: "transparent",
};

interface SectionBlendProps {
  /** color of the section ABOVE this one (for top fade) */
  from?: BlendColor;
  /** color of the section BELOW this one (for bottom fade) */
  to?: BlendColor;
  /** show ambient orange glow at top (for dark → light transitions) */
  glow?: boolean;
  /** add subtle noise texture for depth */
  noise?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps a section with cinematic blended transitions.
 * Renders two absolutely-positioned gradient overlays (top + bottom)
 * that softly fade the section's edges into the adjacent sections' colors.
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
      style={
        {
          "--blend-from": colorMap[from],
          "--blend-to": colorMap[to],
          ...style,
        } as React.CSSProperties
      }
    >
      {/* Top fade — blends into the section above */}
      {from !== "transparent" && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[140px] pointer-events-none z-[2]"
          style={{
            background: `linear-gradient(to bottom, ${colorMap[from]} 0%, transparent 100%)`,
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
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

      {/* Content */}
      <div className="relative z-[3]">{children}</div>

      {/* Bottom fade — blends into the section below */}
      {to !== "transparent" && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[140px] pointer-events-none z-[2]"
          style={{
            background: `linear-gradient(to top, ${colorMap[to]} 0%, transparent 100%)`,
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
}
