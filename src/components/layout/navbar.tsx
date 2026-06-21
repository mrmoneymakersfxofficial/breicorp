"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/data/site-content";

const navLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#modulos", label: "Módulos" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#planes", label: "Planes" },
  { href: "#testimonios", label: "Clientes" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300",
            scrolled
              ? "glass border border-black/5 shadow-premium"
              : "bg-transparent border border-transparent"
          )}
        >
          <Link href="/" className="flex items-center" aria-label="BREICORP inicio">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex text-foreground/80 hover:text-foreground"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white shadow-glow-orange"
            >
              <Link href="#planes">Solicitar demo</Link>
            </Button>

            {/* Mobile trigger */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-xl border border-black/10 bg-background hover:bg-black/5 transition-colors"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-background shadow-2xl p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <Logo size={32} />
                <button
                  type="button"
                  className="inline-flex items-center justify-center size-10 rounded-xl border border-black/10 hover:bg-black/5"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Móvil">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-center"
                >
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    WhatsApp directo
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full justify-center bg-primary hover:bg-primary/90 text-white"
                >
                  <Link href="#planes" onClick={() => setOpen(false)}>
                    Solicitar demo
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
