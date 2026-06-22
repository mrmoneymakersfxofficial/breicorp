"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { plans } from "@/lib/data/site-content";
import { Button } from "@/components/ui/button";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { useNav } from "@/lib/nav-config";

type Cycle = "monthly" | "yearly";

export function Pricing() {
  const [cycle, setCycle] = React.useState<Cycle>("monthly");
  const { scrollTo } = useNav();

  return (
    <section id="planes" className="relative py-16 lg:py-24 bg-background">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow justify-center">Planes</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
            Planes de <span className="text-gradient-orange">facturación electrónica</span> para cada etapa
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
            Precios transparentes en soles. Sin costos ocultos. Cambia o cancela cuando quieras.
            Ahorra 20% con facturación anual.
          </p>
        </Reveal>

        {/* Billing toggle */}
        <Reveal delay={0.1} className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-1 p-1 bg-brand-gray border border-black/8">
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className={cn(
                "px-4 sm:px-5 py-2 text-sm font-semibold transition-all",
                cycle === "monthly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-foreground/55 hover:text-foreground"
              )}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setCycle("yearly")}
              className={cn(
                "px-4 sm:px-5 py-2 text-sm font-semibold transition-all inline-flex items-center gap-1.5",
                cycle === "yearly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-foreground/55 hover:text-foreground"
              )}
            >
              Anual
              <span className="text-[10px] px-1.5 py-0.5 bg-brand-orange/15 text-brand-orange font-bold">
                -20%
              </span>
            </button>
          </div>
        </Reveal>

        {/* Plans grid — sharp edges, no rounded cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-black/8 border border-black/8 items-stretch"
        >
          {plans.map((plan) => {
            const price = cycle === "monthly" ? plan.monthly : Math.round(plan.yearly / 12);
            return (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                className={cn(
                  "relative flex flex-col p-6 lg:p-7 transition-colors duration-300",
                  plan.highlighted
                    ? "bg-brand-ink text-white"
                    : "bg-background hover:bg-brand-gray/50"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-[0.12em] whitespace-nowrap">
                      <Sparkles className="size-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div
                  className={cn(
                    "inline-flex items-center justify-center size-11 mb-4",
                    plan.highlighted
                      ? "bg-brand-orange text-white"
                      : "bg-brand-orange/10 text-brand-orange"
                  )}
                >
                  <plan.icon className="size-5" strokeWidth={1.75} />
                </div>

                <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                <p
                  className={cn(
                    "text-xs leading-relaxed mb-5",
                    plan.highlighted ? "text-white/60" : "text-foreground/55"
                  )}
                >
                  {plan.description}
                </p>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold opacity-60">S/</span>
                    <span className="font-display text-4xl font-extrabold tabular-nums">
                      {price}
                    </span>
                    <span className={cn("text-xs", plan.highlighted ? "text-white/55" : "text-foreground/50")}>
                      /mes
                    </span>
                  </div>
                  {cycle === "yearly" && (
                    <p className={cn("text-[11px] mt-1", "text-brand-orange")}>
                      Facturado S/ {plan.yearly} al año
                    </p>
                  )}
                </div>

                <Button
                  onClick={() => scrollTo("inicio")}
                  className={cn(
                    "w-full justify-center mb-6 h-11",
                    plan.highlighted
                      ? "bg-brand-orange hover:bg-brand-orange/90 text-white"
                      : "bg-brand-ink hover:bg-brand-ink/90 text-white"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </Button>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span
                        className={cn(
                          "inline-flex items-center justify-center size-4 shrink-0 mt-0.5",
                          plan.highlighted ? "text-brand-orange" : "text-brand-orange"
                        )}
                      >
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className={plan.highlighted ? "text-white/80" : "text-foreground/70"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-foreground/55">
            ¿Necesitas algo más personalizado?{" "}
            <button
              type="button"
              onClick={() => scrollTo("faq")}
              className="text-brand-orange font-semibold hover:underline underline-offset-2"
            >
              Conversa con nuestro equipo de ventas →
            </button>
          </p>
          <p className="mt-3 text-xs text-foreground/40">
            Todos los planes incluyen certificado SSL, backups diarios, actualizaciones
            automáticas y cumplimiento SUNAT. IGV no incluido.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
