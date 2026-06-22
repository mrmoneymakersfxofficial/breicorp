"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/site-content";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-16 lg:py-24 bg-background">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="eyebrow justify-center">Clientes</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
            Empresas peruanas que ya{" "}
            <span className="text-gradient-orange">facturan con BREICORP</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
            Más de 2,400 negocios en restaurantes, clínicas, retail y servicios confían
            en nuestra plataforma para su cumplimiento fiscal.
          </p>
        </Reveal>

        {/* Testimonials — integrated grid, no rounded cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/8"
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className={cn(
                "relative p-6 lg:p-8 border-r border-b border-black/8 hover:bg-brand-gray/50 transition-colors",
                i === 0 && "lg:row-span-2 lg:bg-brand-ink lg:text-white lg:hover:bg-brand-ink"
              )}
            >
              <Quote
                className={cn(
                  "size-7 mb-4",
                  i === 0 ? "text-brand-orange" : "text-brand-orange/40"
                )}
              />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <blockquote
                className={cn(
                  "text-sm leading-relaxed mb-6",
                  i === 0 ? "text-lg lg:text-xl font-medium" : "text-foreground/70"
                )}
              >
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className={cn(
                    "inline-flex items-center justify-center size-10 font-semibold text-sm shrink-0",
                    i === 0
                      ? "bg-brand-orange text-white"
                      : "bg-brand-orange/10 text-brand-orange"
                  )}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className={cn("font-semibold text-sm truncate", i === 0 && "text-white")}>
                    {t.name}
                  </p>
                  <p className={cn("text-xs truncate", i === 0 ? "text-white/55" : "text-foreground/50")}>
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
