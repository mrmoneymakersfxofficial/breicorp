"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/data/site-content";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-16 lg:py-24 bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Beneficios</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
            Todo lo que tu empresa necesita para{" "}
            <span className="text-gradient-orange">facturar sin fricción</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
            BREICORP combina cumplimiento normativo SUNAT, automatización inteligente
            y experiencia enterprise para que tu equipo enfoque su energía en crecer,
            no en papeleo.
          </p>
        </Reveal>

        {/* Integrated grid — no cards, hairline dividers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              className="group relative p-6 lg:p-8 border-r border-b border-black/8 hover:bg-brand-gray/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center size-11 rounded-lg bg-brand-orange/10 text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <benefit.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
