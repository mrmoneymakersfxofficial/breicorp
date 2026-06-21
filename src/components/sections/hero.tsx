"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/dashboard/dashboard-mockup";
import { whatsappLink } from "@/lib/data/site-content";
import { Counter } from "@/components/shared/reveal";

const trustStats = [
  { value: 2400, suffix: "+", label: "Empresas activas" },
  { value: 12, suffix: "M+", label: "Comprobantes / año" },
  { value: 99.98, suffix: "%", label: "Uptime", decimals: 2 },
  { value: 15, suffix: "s", label: "Soporte promedio" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 size-[600px] rounded-full bg-primary/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />

      <div className="container-page relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column — copy */}
          <div className="lg:col-span-5 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm text-xs text-white/80"
            >
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              Homologado por SUNAT · ISO 27001
              <span className="text-white/30">·</span>
              <span className="text-primary">v3.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight"
            >
              Sistema de{" "}
              <span className="text-gradient-orange">Facturación Electrónica</span>{" "}
              Profesional para Empresas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-base sm:text-lg text-white/65 leading-relaxed max-w-xl"
            >
              Automatiza tus comprobantes electrónicos, cumple con SUNAT y controla
              tu negocio desde una plataforma moderna, rápida y segura. Diseñada para
              empresas peruanas que quieren escalar sin fricción.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-glow-orange group"
              >
                <Link href="#planes">
                  Seleccionar plan
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Hablar por WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/55"
            >
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-primary" /> Cumple con SUNAT
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Zap className="size-3.5 text-primary" /> Automatización total
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-primary" /> Sin contratos forzados
              </li>
            </motion.ul>
          </div>

          {/* Right column — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.5, 0.27, 0.99] }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-transparent blur-2xl pointer-events-none" />
            <div className="relative">
              <DashboardMockup />

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="hidden sm:flex absolute -left-6 bottom-12 items-center gap-2.5 px-3 py-2.5 rounded-xl bg-background text-foreground shadow-premium border border-black/5"
              >
                <div className="size-8 rounded-lg bg-green-500/15 flex items-center justify-center">
                  <CheckCircle2 className="size-4 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground/50">CDR recibido</p>
                  <p className="text-xs font-semibold">F001-4827 · 1.2s</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="hidden sm:flex absolute -right-4 top-16 items-center gap-2.5 px-3 py-2.5 rounded-xl bg-background text-foreground shadow-premium border border-black/5"
              >
                <div className="size-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Zap className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground/50">Envío automático</p>
                  <p className="text-xs font-semibold">SUNAT · 100%</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          {trustStats.map((stat) => (
            <div key={stat.label} className="px-6 py-7 text-center bg-white/[0.01]">
              <p className="font-display text-3xl lg:text-4xl font-extrabold text-gradient-orange">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-1 text-xs text-white/55">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
