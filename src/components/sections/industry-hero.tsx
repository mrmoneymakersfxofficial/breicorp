"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, UtensilsCrossed, Stethoscope, ShoppingBag, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/data/site-content";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Stethoscope,
  ShoppingBag,
  Store,
};

interface IndustryHeroProps {
  iconName: string;
  headline: string;
  subheadline: string;
  stats: { value: string; label: string }[];
}

export function IndustryHero({ iconName, headline, subheadline, stats }: IndustryHeroProps) {
  const Icon = iconMap[iconName] ?? UtensilsCrossed;
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 size-[500px] rounded-full bg-brand-orange/20 blur-[120px]" aria-hidden="true" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm text-xs text-white/85 mb-6"
        >
          <Icon className="size-3.5 text-brand-orange" />
          Solución por industria
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-[2.25rem] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <Button
            asChild
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Solicitar demo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white h-12 sm:h-11"
          >
            <a href="/plataforma#/planes">
              Ver planes
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8 border-y border-white/8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 sm:px-6 py-6 text-center">
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-gradient-orange">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-white/55">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
