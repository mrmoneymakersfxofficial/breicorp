"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { modules } from "@/lib/data/site-content";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { useNav } from "@/lib/nav-config";

export function Modules() {
  const { scrollTo } = useNav();

  return (
    <section id="modulos" className="relative py-16 lg:py-24 bg-brand-gray">
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Módulos</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
              Una plataforma, <span className="text-gradient-orange">10 módulos empresariales</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
              Desde la emisión del comprobante hasta el cierre contable. Cada módulo
              está diseñado para funcionar solo o integrado con tu operación actual.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={() => scrollTo("planes")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:gap-3 transition-all"
            >
              Ver todos los módulos
              <ArrowRight className="size-4" />
            </button>
          </Reveal>
        </div>

        {/* Integrated grid — no rounded cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-t border-l border-black/10"
        >
          {modules.map((module) => (
            <motion.div
              key={module.title}
              variants={staggerItem}
              className="group relative p-5 lg:p-6 border-r border-b border-black/10 bg-background hover:bg-brand-ink hover:text-white transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <module.icon className="size-5" strokeWidth={1.75} />
                </div>
                {module.tag && (
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm bg-brand-orange/10 text-brand-orange group-hover:bg-white/15 group-hover:text-white transition-colors">
                    {module.tag}
                  </span>
                )}
              </div>
              <h3 className="font-display text-base font-bold mb-1.5">{module.title}</h3>
              <p className="text-xs text-foreground/55 group-hover:text-white/60 leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
