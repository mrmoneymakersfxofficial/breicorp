"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/data/site-content";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 lg:py-28 bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Beneficios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
            Todo lo que tu empresa necesita para{" "}
            <span className="text-gradient-orange">facturar sin fricción</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/60 leading-relaxed">
            BREICORP combina cumplimiento normativo SUNAT, automatización inteligente
            y experiencia enterprise para que tu equipo enfoque su energía en crecer,
            no en papeleo.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              className="group relative p-6 lg:p-7 rounded-2xl border border-black/8 bg-card hover:bg-white hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <benefit.icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
