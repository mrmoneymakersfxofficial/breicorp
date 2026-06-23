"use client";

import { motion } from "framer-motion";
import { UserPlus, FileCheck2, Send, CheckCircle2 } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Crea tu cuenta",
    description:
      "Regístrate con tu RUC en menos de 5 minutos. Sin tarjeta de crédito, sin compromisos.",
  },
  {
    icon: FileCheck2,
    step: "02",
    title: "Carga tu certificado",
    description:
      "Sube tu certificado digital SUNAT una sola vez. Te guiamos paso a paso si aún no lo tienes.",
  },
  {
    icon: Send,
    step: "03",
    title: "Empieza a facturar",
    description:
      "Emitir tu primera factura electrónica toma segundos. El envío a SUNAT es automático.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Automatiza todo",
    description:
      "Configura series, plantillas y notificaciones. Tu facturación funciona sola, 24/7.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-16 lg:py-24 bg-background">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="eyebrow justify-center">Cómo funciona</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
            De cero a facturar en{" "}
            <span className="text-gradient-orange">menos de 10 minutos</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
            Sin instalaciones complejas, sin personal técnico. BREICORP está diseñado
            para que cualquier persona de tu equipo pueda operarlo desde el día uno.
          </p>
        </Reveal>

        {/* Centered step cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {steps.map((s) => (
            <motion.div
              key={s.step}
              variants={staggerItem}
              className="group relative p-6 lg:p-8 rounded-2xl border border-black/8 dark:border-white/8 bg-card text-center hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-5">
                <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-brand-orange text-white shadow-glow-orange group-hover:scale-110 transition-transform">
                  <s.icon className="size-6" strokeWidth={1.75} />
                </div>
              </div>
              <span className="block font-display text-3xl font-extrabold text-foreground/10 mb-2">
                {s.step}
              </span>
              <h3 className="font-display text-base font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
