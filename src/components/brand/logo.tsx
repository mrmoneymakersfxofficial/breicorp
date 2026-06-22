import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
  showWordmark?: boolean;
  size?: number;
}

/**
 * BREICORP logo — orange rounded square with a stylized "B" mark
 * + integrated monogram. Inspired by the official brand reference.
 */
export function LogoMark({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="breicorp-orange" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FF6801" />
        </linearGradient>
        <linearGradient id="breicorp-inner" x1="14" y1="14" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#breicorp-orange)" />
      <rect x="2" y="2" width="60" height="60" rx="16" fill="black" fillOpacity="0.06" />
      <path
        d="M22 18h12.5c5.8 0 9.5 2.6 9.5 7.2 0 3.1-1.7 5.1-4.4 6.1 3.4.9 5.4 3.1 5.4 6.7 0 5-4 7.9-10.3 7.9H22V18Zm6.2 10.6h5.4c2.3 0 3.7-.9 3.7-2.6 0-1.7-1.4-2.5-3.7-2.5h-5.4v5.1Zm0 11.1h5.9c2.5 0 4-1 4-2.9 0-1.9-1.5-2.9-4-2.9h-5.9v5.8Z"
        fill="url(#breicorp-inner)"
      />
      <circle cx="44.5" cy="20.5" r="2.2" fill="#ffffff" fillOpacity="0.9" />
    </svg>
  );
}

export function Logo({
  className,
  showWordmark = true,
  size = 36,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {showWordmark && (
        <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-foreground leading-none">
          BREI<span className="text-primary">CORP</span>
        </span>
      )}
    </span>
  );
}
