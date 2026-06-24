"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/data/site-content";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-16 lg:py-24 bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow justify-center">Beneficios</span>
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

        {/* Centered cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              className="group relative p-6 lg:p-8 rounded-2xl border border-black/8 dark:border-white/8 bg-card text-center hover:shadow-premium hover:border-brand-orange/20 dark:hover:border-brand-orange/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-brand-orange/10 text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors mx-auto">
                <benefit.icon className="size-6" strokeWidth={1.75} />
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
