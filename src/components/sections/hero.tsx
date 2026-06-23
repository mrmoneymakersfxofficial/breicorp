"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play, ShieldCheck, Zap, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/dashboard/dashboard-mockup";
import { whatsappLink } from "@/lib/data/site-content";
import { useNav } from "@/lib/nav-config";
import { useHeroParallax } from "@/hooks/use-hero-parallax";

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Cumple con SUNAT",
    subtitle: "y normativa vigente",
  },
  {
    icon: Zap,
    title: "Automatiza",
    subtitle: "y ahorra tiempo",
  },
  {
    icon: BarChart3,
    title: "Datos en tiempo real",
    subtitle: "para mejores decisiones",
  },
  {
    icon: Lock,
    title: "Seguro y confiable",
    subtitle: "Infraestructura de nivel empresarial",
  },
];

export function Hero() {
  const { scrollTo } = useNav();
  const mockupRef = useHeroParallax<HTMLDivElement>();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-ink text-white pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 sm:-right-40 size-[500px] sm:size-[600px] rounded-full bg-brand-orange/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 size-[400px] sm:size-[500px] rounded-full bg-brand-orange/10 blur-[120px]" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            {/* Badge — Plataforma #1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-sm text-xs sm:text-sm font-semibold text-brand-orange"
            >
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              Plataforma #1 de facturación electrónica en Perú
            </motion.div>

            {/* Headline — exact from reference */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-[2.25rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08] font-extrabold tracking-tight"
            >
              Facturación electrónica inteligente para empresas que{" "}
              <span className="text-gradient-orange">quieren crecer</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
            >
              Automatiza tus procesos, cumple con la normativa de SUNAT y obtén el
              control total de tu negocio en tiempo real.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("planes")}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
              >
                Solicitar demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white h-12 sm:h-11"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <Play className="size-4" />
                  Ver cómo funciona
                </a>
              </Button>
            </motion.div>

            {/* Trust badges — 4 items with icon + title + subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="grid grid-cols-2 gap-4 pt-6 border-t border-white/8"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <div className="inline-flex items-center justify-center size-8 rounded-lg bg-brand-orange/15 text-brand-orange shrink-0">
                    <badge.icon className="size-4" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight">{badge.title}</p>
                    <p className="text-[11px] text-white/50 leading-tight mt-0.5">{badge.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.5, 0.27, 0.99] }}
            className="lg:col-span-7 relative"
            ref={mockupRef}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent blur-2xl pointer-events-none" />
            <div className="relative">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>

        {/* Trust strip — "Más de 2,000 empresas en Perú confían en BREICORP" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 lg:mt-20 text-center"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-white/40">
            Más de 2,000 empresas en Perú confían en BREICORP
          </p>
        </motion.div>
      </div>
    </section>
  );
}
