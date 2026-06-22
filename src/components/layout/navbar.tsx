"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, MessageCircle, Sun, Moon } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/data/site-content";
import { navGroups, useNav } from "@/lib/nav-config";

type NavState = "top" | "floating" | "hidden";

export function Navbar() {
  const [navState, setNavState] = React.useState<NavState>("top");
  const [open, setOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
  const { activeId, activePage, scrollTo, goToPage } = useNav();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const lastScroll = React.useRef(0);

  React.useEffect(() => setMounted(true), []);

  // Scroll-aware dynamic behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastScroll.current;
    lastScroll.current = latest;

    if (latest < 40) {
      setNavState("top");
      return;
    }
    // Scrolling down → hide (after threshold)
    if (latest > prev && latest > 280 && !open) {
      setNavState("hidden");
    } else {
      // Scrolling up → show floating
      setNavState("floating");
    }
  });

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string, page: string) => {
    e.preventDefault();
    setOpen(false);
    if (page === activePage) {
      scrollTo(sectionId);
    } else {
      goToPage(page, sectionId);
    }
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <motion.header
      initial={false}
      animate={{
        y: navState === "hidden" ? "-110%" : 0,
      }}
      transition={{ duration: 0.32, ease: [0.21, 0.5, 0.27, 0.99] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        navState === "top" ? "py-3" : "py-2"
      )}
    >
      <div className="container-page">
        <motion.div
          initial={false}
          animate={{
            backgroundColor:
              navState === "top"
                ? "rgba(255,255,255,0.6)"
                : "rgba(255,255,255,0.85)",
            borderColor:
              navState === "top"
                ? "rgba(10,10,10,0.06)"
                : "rgba(10,10,10,0.10)",
            boxShadow:
              navState === "floating"
                ? "0 8px 32px -8px rgba(10,10,10,0.10)"
                : "0 0 0 0 transparent",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between gap-4 px-4 sm:px-5 py-2.5 border-b backdrop-blur-xl"
          style={{ WebkitBackdropFilter: "blur(20px) saturate(180%)" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="BREICORP inicio">
            <Logo size={32} />
          </Link>

          {/* Desktop nav — mega menu style */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
            {navGroups.map((group) => {
              const isActiveGroup = activePage === group.page;
              return (
                <div
                  key={group.page}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.page)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md",
                      isActiveGroup
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground"
                    )}
                    onClick={() => goToPage(group.page, group.sections[0].id)}
                  >
                    {group.label}
                    {isActiveGroup && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="ml-1 size-1.5 rounded-full bg-brand-orange"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <ChevronDown className="size-3.5 opacity-50" />
                  </button>

                  <AnimatePresence>
                    {openGroup === group.page && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-background border border-black/8 shadow-[0_24px_60px_-12px_rgba(10,10,10,0.18)] rounded-lg p-2 overflow-hidden"
                      >
                        <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
                          {group.label}
                        </p>
                        {group.sections.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={(e) => handleSectionClick(e, s.id, s.page)}
                            className={cn(
                              "flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-md transition-colors",
                              activeId === s.id && activePage === s.page
                                ? "bg-brand-orange/10 text-brand-orange"
                                : "text-foreground/70 hover:bg-black/[0.04] hover:text-foreground"
                            )}
                          >
                            <span>{s.label}</span>
                            <ArrowRight className="size-3 opacity-40" />
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Cambiar tema"
                className="inline-flex items-center justify-center size-9 rounded-md text-foreground/60 hover:text-foreground hover:bg-black/[0.04] transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </button>
            )}

            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-foreground/70 hover:text-foreground px-3"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex bg-brand-ink hover:bg-brand-ink/90 text-white"
            >
              <Link href="/" onClick={() => scrollTo("inicio")}>
                Solicitar demo
              </Link>
            </Button>

            {/* Mobile trigger */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-md hover:bg-black/[0.04] transition-colors"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll progress bar (top of navbar) */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-brand-orange origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Mobile drawer — full screen, premium */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-black/8">
              <Logo size={32} />
              <button
                type="button"
                className="inline-flex items-center justify-center size-10 rounded-md hover:bg-black/[0.04]"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
              {navGroups.map((group, gi) => (
                <motion.div
                  key={group.page}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + gi * 0.06 }}
                  className="mb-6"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/40 mb-2 px-1">
                    {group.label}
                  </p>
                  <div className="space-y-0.5">
                    {group.sections.map((s) => {
                      const isActive = activeId === s.id && activePage === s.page;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={(e) => handleSectionClick(e, s.id, s.page)}
                          className={cn(
                            "flex items-center justify-between w-full px-3 py-3 text-base font-medium text-left rounded-md transition-colors",
                            isActive
                              ? "bg-brand-orange/10 text-brand-orange"
                              : "text-foreground/80 hover:bg-black/[0.04]"
                          )}
                        >
                          <span>{s.label}</span>
                          {isActive && <span className="size-1.5 rounded-full bg-brand-orange" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-black/8 p-4 sm:p-6 space-y-2.5">
              <Button
                asChild
                className="w-full justify-center bg-brand-ink hover:bg-brand-ink/90 text-white h-12"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-center h-12 border-black/15"
              >
                <Link
                  href="/"
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollTo("inicio"), 100);
                  }}
                >
                  Solicitar demo
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
