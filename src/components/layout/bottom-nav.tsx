"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Home, CreditCard, Building2, MessageCircle, Sun, Moon } from "lucide-react";
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

        {/* Center CTA: WhatsApp */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="relative flex flex-col items-center justify-center"
        >
          <motion.span
            whileTap={{ scale: 0.92 }}
            className="absolute -top-6 size-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(37,211,102,0.5)] ring-4 ring-background"
          >
            <MessageCircle className="size-6 fill-white" />
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
