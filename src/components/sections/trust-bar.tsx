"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, ShieldCheck, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Reveal,
  staggerContainer,
  staggerItem,
  Counter,
} from "@/components/shared/reveal";
import { whatsappLink } from "@/lib/data/site-content";

const stats = [
  {
    value: 2400,
    suffix: "+",
    label: "Empresas activas",
    icon: Building2,
  },
  {
    value: 25,
    suffix: "",
    label: "Departamentos",
    icon: MapPin,
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Disponibilidad",
    decimals: 1,
    icon: ShieldCheck,
  },
  {
    value: 7,
    suffix: "/24",
    label: "Soporte técnico",
    icon: Headphones,
  },
];

const clients = [
  "Botica Peruana",
  "Hensey SAC",
  "Corp. Michel",
  "ROF Abogados",
  "Grupo Corp OPG SAC",
  "Farma Medicmer",
  "C&L Farma",
  "Deseret Agronomía",
  "Paul TunQui EIRL",
];

export function TrustBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="clientes" className="relative py-16 lg:py-24 bg-brand-gray overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-100" aria-hidden="true" />

      <div className="container-page relative">
        {/* Header */}
        <Reveal className="text-center mb-10 lg:mb-14">
          <span className="eyebrow">Nuestros Clientes</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight text-balance mt-4">
            Empresas que{" "}
            <span className="text-gradient-orange">confían en nosotros</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Más de 2,400+ empresas en todo Perú eligen BREICORP para su
            facturación electrónica y gestión empresarial.
          </p>
        </Reveal>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12 lg:mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="bg-card rounded-2xl border border-black/8 dark:border-white/8 p-5 lg:p-6 text-center hover:shadow-float transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center size-9 rounded-lg bg-brand-orange/10 text-brand-orange mb-3">
                <stat.icon className="size-4.5" strokeWidth={1.75} />
              </div>
              <p className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-brand-orange leading-none">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-foreground/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Carousel */}
        <Reveal className="mb-10 lg:mb-14">
          <p className="text-center text-xs font-medium text-foreground/40 mb-6">
            Desliza para ver más clientes
          </p>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-gray to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-gray to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-2 snap-x snap-mandatory"
            >
              {clients.map((name) => (
                <div
                  key={name}
                  className="flex-shrink-0 snap-start bg-card border border-black/8 dark:border-white/8 rounded-xl px-6 py-4 flex items-center justify-center min-w-[180px] sm:min-w-[200px] hover:shadow-float hover:border-brand-orange/20 transition-all duration-300"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-foreground/50 whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal className="text-center">
          <p className="text-sm text-foreground/50 mb-2">
            48 empresas confían en nosotros
          </p>
          <p className="text-xs text-foreground/35 mb-5">
            Únete a más de 2,400 empresas que ya digitalizan su negocio
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-11 sm:h-12"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Comienza ahora
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}