"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/data/site-content";
import { navGroups, useNav } from "@/lib/nav-config";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
  const { activeId, activePage, scrollTo, goToPage } = useNav();
  const router = useRouter();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  const handleSectionClick = (e: React.MouseEvent, sectionId: string, page: string) => {
    e.preventDefault();
    setOpen(false);
    if (page === activePage) {
      scrollTo(sectionId);
    } else {
      goToPage(page, sectionId);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-3"
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-none px-4 sm:px-5 py-2.5 transition-all duration-300",
            scrolled
              ? "glass border-b border-black/8 shadow-[0_1px_0_rgba(10,10,10,0.04)]"
              : "glass border-b border-black/8"
          )}
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
                      <span className="ml-1 size-1 rounded-full bg-brand-orange" />
                    )}
                    <ChevronDown className="size-3.5 opacity-50" />
                  </button>

                  <AnimatePresence>
                    {openGroup === group.page && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-background border border-black/8 shadow-premium rounded-lg p-2"
                      >
                        <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/40">
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
                                ? "bg-brand-orange/8 text-brand-orange"
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
          <div className="flex items-center gap-2">
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
        </div>
      </div>

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
                              ? "bg-brand-orange/8 text-brand-orange"
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
    </header>
  );
}
