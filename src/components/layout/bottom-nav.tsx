"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Home, CreditCard, Building2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/data/site-content";
import { useNav } from "@/lib/nav-config";

/**
 * Bottom navigation bar — mobile/tablet only.
 * Premium tab bar with central WhatsApp CTA.
 * Always visible for consistent UX.
 * Theme toggle integrated (no duplicate WhatsApp — that lives here, not in float).
 */
export function BottomNav() {
  const { activePage, goToPage, scrollTo } = useNav();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.21, 0.5, 0.27, 0.99], delay: 0.2 }}
      className={cn(
        "lg:hidden fixed bottom-0 inset-x-0 z-50",
        "bg-background/95 backdrop-blur-2xl border-t border-border",
        "pb-[env(safe-area-inset-bottom)]",
        "shadow-[0_-8px_32px_-8px_rgba(10,10,10,0.10)] dark:shadow-[0_-8px_32px_-8px_rgba(0,0,0,0.5)]"
      )}
      style={{ WebkitBackdropFilter: "blur(20px) saturate(180%)" }}
      aria-label="Navegación inferior"
    >
      <div className="grid grid-cols-5 items-center h-16 max-w-md mx-auto px-2">
        {/* Tab 1: Inicio */}
        <TabButton
          label="Inicio"
          icon={Home}
          active={activePage === "/"}
          onClick={() => {
            if (activePage === "/") {
              scrollTo("inicio");
            } else {
              goToPage("/", "inicio");
            }
          }}
        />

        {/* Tab 2: Planes */}
        <TabButton
          label="Planes"
          icon={CreditCard}
          active={activePage === "/plataforma"}
          onClick={() => {
            if (activePage === "/plataforma") {
              scrollTo("planes");
            } else {
              goToPage("/plataforma", "planes");
            }
          }}
        />

        {/* Center CTA: WhatsApp — official FAB */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="relative flex flex-col items-center justify-center"
        >
          <motion.span
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute -top-6 size-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_14px_-2px_rgba(37,211,102,0.50),0_8px_28px_-4px_rgba(37,211,102,0.30)] ring-[3px] ring-background hover:shadow-[0_6px_20px_-2px_rgba(37,211,102,0.60),0_12px_36px_-6px_rgba(37,211,102,0.35)]"
          >
            <WhatsAppIcon className="size-7" />
          </motion.span>
          <span className="mt-8 text-[9px] font-semibold text-[#25D366]">WhatsApp</span>
        </a>

        {/* Tab 4: Empresa */}
        <TabButton
          label="Empresa"
          icon={Building2}
          active={activePage === "/empresa"}
          onClick={() => {
            if (activePage === "/empresa") {
              scrollTo("nosotros");
            } else {
              goToPage("/empresa", "nosotros");
            }
          }}
        />

        {/* Tab 5: Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className={cn(
            "flex flex-col items-center justify-center gap-0.5 py-2 rounded-md transition-colors",
            "text-foreground/60 hover:text-foreground active:scale-95"
          )}
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun className="size-5" strokeWidth={1.75} />
            ) : (
              <Moon className="size-5" strokeWidth={1.75} />
            )
          ) : (
            <Moon className="size-5" strokeWidth={1.75} />
          )}
          <span className="text-[10px] font-medium">
            {mounted ? (theme === "dark" ? "Claro" : "Oscuro") : "Tema"}
          </span>
        </button>
      </div>
    </motion.nav>
  );
}

function TabButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: typeof Home;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-0.5 py-2 rounded-md transition-colors active:scale-95",
        active ? "text-brand-orange" : "text-foreground/60 hover:text-foreground"
      )}
      aria-current={active ? "page" : undefined}
    >
      <Icon className="size-5" strokeWidth={1.75} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

/** Official WhatsApp logo icon (exact SVG path) */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
