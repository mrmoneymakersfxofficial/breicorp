"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { whatsappLink } from "@/lib/data/site-content";
import { useNav } from "@/lib/nav-config";

export function FinalCta() {
  const { scrollTo } = useNav();

  return (
    <section id="contacto" className="relative py-16 lg:py-24 bg-brand-gray">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden bg-brand-ink text-white px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-24">
            <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
            <div className="absolute -top-32 -right-32 size-[400px] sm:size-[500px] rounded-full bg-brand-orange/25 blur-[120px]" aria-hidden="true" />
            <div className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-brand-orange/15 blur-[120px]" aria-hidden="true" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />

            <div className="relative max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/15 text-brand-orange text-xs font-semibold uppercase tracking-[0.18em] mb-5"
              >
                Comienza hoy
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance"
              >
                Moderniza la gestión fiscal de tu empresa{" "}
                <span className="text-gradient-orange">hoy.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed"
              >
                Solicita una demo personalizada de 30 minutos y descubre cómo BREICORP
                puede automatizar tu facturación, reducir errores y ahorrar horas de
                trabajo administrativo cada semana.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
                >
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Hablar por WhatsApp
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("planes")}
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white h-12 sm:h-11"
                >
                  Ver planes
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-white/45"
              >
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="size-3.5 text-brand-orange" />
                  +51 948 261 382
                </span>
                <span>Sin contratos forzados</span>
                <span>Cancela cuando quieras</span>
                <span>Setup en menos de 10 minutos</span>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
