"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BlendColor = "bg" | "ink" | "gray" | "white" | "transparent";

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
 * Wraps a section with ultra-subtle external edge blending.
 * Uses mask-image on the container so the section itself fades at its edges —
 * no internal overlay divs, no visible lines between sections.
 *
 * 0.3cm (~11px) fade on each edge.
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
  const hasFrom = from !== "transparent";
  const hasTo = to !== "transparent";

  // Build a single combined mask-image with all stops
  const maskStyle = React.useMemo(() => {
    const stops: string[] = [];

    if (hasFrom) {
      // Top 11px: transparent → opaque
      stops.push("transparent 0px", "black 11px");
    } else {
      stops.push("black 0px");
    }

    if (hasTo) {
      // Bottom 11px: opaque → transparent
      stops.push("black calc(100% - 11px)", "transparent 100%");
    } else {
      stops.push("black 100%");
    }

    return {
      WebkitMaskImage: `linear-gradient(to bottom, ${stops.join(", ")})`,
      maskImage: `linear-gradient(to bottom, ${stops.join(", ")})`,
    };
  }, [hasFrom, hasTo]);

  return (
    <div
      className={cn(noise && "bg-noise", className)}
      style={{ ...style, ...maskStyle }}
    >
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[20px] pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, rgba(255,104,1,0.06) 0%, transparent 100%)",
          }}
        />
      )}

      {children}
    </div>
  );
}