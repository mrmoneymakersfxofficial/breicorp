"use client";

import { motion } from "framer-motion";
import { Shield, FileText, MessageCircle, UserCheck, Trophy, FileCheck2 } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

const reasons = [
  {
    icon: Shield,
    title: "Evitamos multas con la SUNAT",
    subtitle: "Siempre la tranquilidad",
    dark: false,
  },
  {
    icon: FileText,
    title: "Facturación, inventario y más",
    subtitle: "Todo en un solo sistema",
    dark: true,
  },
  {
    icon: MessageCircle,
    title: "Soporte inmediato",
    subtitle: "Respuesta en minutos",
    dark: false,
  },
  {
    icon: UserCheck,
    title: "Asesoría especializada",
    subtitle: "Expertos en tu negocio",
    dark: true,
  },
  {
    icon: Trophy,
    title: "Casos complejos resueltos",
    subtitle: "Experiencia comprobada",
    dark: false,
  },
  {
    icon: FileCheck2,
    title: "Cumplimiento total normativo",
    subtitle: "UFE y CPE al día",
    dark: true,
  },
];

export function WhyChooseBreicorp() {
  return (
    <section id="por-que-breicorp" className="relative py-16 lg:py-24 bg-brand-ink text-brand-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        {/* Header */}
        <Reveal className="text-center mb-12 lg:mb-16">
          <span className="eyebrow justify-center">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            NUESTRO SERVICIO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
            ¿Por qué escoger <span className="text-gradient-orange">BREICORP</span>?
          </h2>
          <p className="mt-4 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
            Miles de empresas en Perú confían en nosotros para su facturación electrónica. Descubre por qué somos la elección número uno.
          </p>
        </Reveal>

        {/* Feature Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={staggerItem}
              className={`group relative p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                r.dark
                  ? "bg-white/[0.06] border border-white/10 hover:border-brand-orange/30"
                  : "bg-white border border-transparent hover:shadow-premium"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-colors ${
                  r.dark
                    ? "bg-brand-orange/15 text-brand-orange"
                    : "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                }`}
              >
                <r.icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3
                className={`font-display text-lg font-bold mb-1.5 ${
                  r.dark ? "text-white" : "text-brand-ink"
                }`}
              >
                {r.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  r.dark ? "text-white/55" : "text-foreground/55"
                }`}
              >
                {r.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}