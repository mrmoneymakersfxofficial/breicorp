"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { modules } from "@/lib/data/site-content";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Modules() {
  return (
    <section id="modulos" className="relative py-20 lg:py-28 bg-brand-gray">
      {/* Decorative */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Módulos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
              Una plataforma, <span className="text-gradient-orange">10 módulos empresariales</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-foreground/60 leading-relaxed">
              Desde la emisión del comprobante hasta el cierre contable. Cada módulo
              está diseñado para funcionar solo o integrado con tu operación actual.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="outline" className="border-black/15">
              <Link href="#planes">
                Ver todos los módulos
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4"
        >
          {modules.map((module) => (
            <motion.div
              key={module.title}
              variants={staggerItem}
              className={cn(
                "group relative p-5 rounded-xl border border-black/8 bg-white hover:bg-brand-ink hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer",
                "lg:even:translate-y-2"
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <module.icon className="size-5" />
                </div>
                {module.tag && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary group-hover:bg-white/15 group-hover:text-white transition-colors">
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
