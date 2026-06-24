"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionBlendProps {
  glow?: boolean;
  noise?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Clean section wrapper. No mask-image, no transparency, no white lines.
 * Provides optional glow accent at the top edge.
 */
export function SectionBlend({
  glow = false,
  noise = false,
  children,
  className,
  style,
}: SectionBlendProps) {
  return (
    <div className={cn(noise && "bg-noise", "relative", className)} style={style}>
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, rgba(255,104,1,0.35) 0%, transparent 100%)",
          }}
        />
      )}
      {children}
    </div>
  );
}