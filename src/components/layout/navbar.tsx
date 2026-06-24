"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, MessageCircle, Sun, Moon } from "lucide-react";
import { Logo, LogoMarkLight } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/data/site-content";
import { navGroups, useNav } from "@/lib/nav-config";

type NavState = "top" | "floating" | "hidden";

/** Pages whose first section is dark (hero with bg-brand-ink) */
const DARK_HERO_PAGES = ["/", "/facturacion-para-restaurantes", "/facturacion-para-clinicas", "/facturacion-para-minimarket", "/software-pos-peru"];

export function Navbar() {
  const [navState, setNavState] = React.useState<NavState>("top");
  const [open, setOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
  const { activeId, activePage, scrollTo, goToPage } = useNav();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const lastScroll = React.useRef(0);
  const pathname = usePathname();

  // Detect if the current page has a dark hero above the fold
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);

  React.useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastScroll.current;
    lastScroll.current = latest;
    if (latest < 40) {
      setNavState("top");
      return;
    }
    if (latest > prev && latest > 320 && !open) {
      setNavState("hidden");
    } else {
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

  // In top state: white text only if page has dark hero, otherwise use foreground
  const isOverDark = navState === "top" && hasDarkHero;

  return (
    <motion.header
      initial={false}
      animate={{ y: navState === "hidden" ? "-110%" : 0 }}
      transition={{ duration: 0.32, ease: [0.21, 0.5, 0.27, 0.99] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      {/* Scroll progress bar (top edge, full bleed) */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-brand-orange origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* FULL-BLEED NAVBAR — edge-to-edge, no container padding, no rounded corners */}
      <div
        className={cn(
          "w-full transition-all duration-300",
          navState === "top"
            ? isOverDark
              ? "bg-transparent border-transparent"
              : "bg-background/80 border-transparent backdrop-blur-md"
            : "bg-background/95 border-border shadow-[0_8px_32px_-8px_rgba(10,10,10,0.08)] backdrop-blur-2xl border-b"
        )}
        style={navState === "top" ? {} : { WebkitBackdropFilter: "blur(20px) saturate(180%)" }}
      >
        <div className="flex items-center justify-between gap-4 h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo — white when over dark hero, normal otherwise */}
          <Link href="/" className="flex items-center shrink-0" aria-label="BREICORP inicio">
            {isOverDark ? (
              <span className="inline-flex items-center gap-2.5">
                <LogoMarkLight size={32} />
                <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-white leading-none">
                  BREI<span className="text-brand-orange">CORP</span>
                </span>
              </span>
            ) : (
              <Logo size={32} />
            )}
          </Link>

          {/* Desktop nav — mega menu */}
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
                      isOverDark
                        ? isActiveGroup
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                        : isActiveGroup
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
                        className="absolute top-full left-0 mt-1 w-64 bg-popover border border-border shadow-premium rounded-lg p-2"
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
                                : "text-foreground/70 hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.06]"
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
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Cambiar tema"
                className={cn(
                  "inline-flex items-center justify-center size-9 rounded-md transition-colors",
                  isOverDark
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/[0.06]"
                )}
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
            )}

            <Button
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "hidden md:inline-flex px-3",
                isOverDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className={cn(
                "hidden md:inline-flex",
                isOverDark
                  ? "bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange"
                  : "bg-brand-ink hover:bg-brand-ink/90 text-white dark:bg-brand-orange dark:hover:bg-brand-orange/90"
              )}
            >
              <Link href="/" onClick={() => scrollTo("inicio")}>
                Solicitar demo
              </Link>
            </Button>

            {/* Mobile trigger */}
            <button
              type="button"
              className={cn(
                "lg:hidden inline-flex items-center justify-center size-9 rounded-md transition-colors",
                isOverDark
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-foreground/[0.06]"
              )}
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer — full screen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-border shrink-0">
              <Logo size={32} />
              <button
                type="button"
                className="inline-flex items-center justify-center size-9 rounded-md hover:bg-foreground/[0.06]"
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
                              : "text-foreground/80 hover:bg-foreground/[0.04]"
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

            <div className="border-t border-border p-4 sm:p-6 space-y-2.5 shrink-0">
              <Button
                asChild
                className="w-full justify-center bg-brand-ink hover:bg-brand-ink/90 text-white dark:bg-brand-orange dark:hover:bg-brand-orange/90 h-12"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-center h-12 border-border"
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
