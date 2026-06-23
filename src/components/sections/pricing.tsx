"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { plans } from "@/lib/data/site-content";
import { Button } from "@/components/ui/button";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/data/site-content";

type Cycle = "monthly" | "yearly";

export function Pricing() {
  const [cycle, setCycle] = React.useState<Cycle>("monthly");

  return (
    <section id="planes" className="relative py-16 lg:py-24 bg-background overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="container-page relative">
        {/* Header — exact copy from client reference */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
            Planes <span className="text-gradient-orange">BREICORP</span>
          </h2>
          <p className="mt-3 font-display text-lg sm:text-xl font-semibold text-foreground">
            Plan de Facturación Electrónica
          </p>
          <p className="mt-3 text-base lg:text-lg text-foreground/65 leading-relaxed">
            Elige el plan ideal para tu negocio y crece con una solución segura,
            moderna y autorizada por SUNAT.
          </p>
        </Reveal>

        {/* Billing toggle */}
        <Reveal delay={0.1} className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-1 p-1 bg-brand-gray border border-black/8 dark:border-white/8">
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className={cn(
                "px-5 sm:px-6 py-2.5 text-sm font-semibold transition-all",
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
                "px-5 sm:px-6 py-2.5 text-sm font-semibold transition-all inline-flex items-center gap-1.5",
                cycle === "yearly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-foreground/55 hover:text-foreground"
              )}
            >
              Anual
              <span className="text-[10px] px-1.5 py-0.5 bg-brand-orange/15 text-brand-orange font-bold">
                Ahorra
              </span>
            </button>
          </div>
        </Reveal>

        {/* Plans grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-black/8 dark:bg-white/8 border border-black/8 dark:border-white/8 items-stretch"
        >
          {plans.map((plan) => {
            return (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                className={cn(
                  "relative flex flex-col p-6 lg:p-7 transition-colors duration-300",
                  plan.highlighted
                    ? "bg-brand-ink text-white"
                    : "bg-background hover:bg-brand-gray/50 dark:hover:bg-brand-gray-100/50"
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

                <h3 className="font-display text-lg font-bold mb-1">{plan.name}</h3>
                <p
                  className={cn(
                    "text-xs leading-relaxed mb-5",
                    plan.highlighted ? "text-white/60" : "text-foreground/55"
                  )}
                >
                  {plan.description}
                </p>

                {/* Price — shows monthly or yearly depending on toggle */}
                <div className="mb-5">
                  {cycle === "monthly" ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold opacity-60">S/</span>
                      <span className="font-display text-4xl font-extrabold tabular-nums">
                        {plan.monthly}
                      </span>
                      <span className={cn("text-xs", plan.highlighted ? "text-white/55" : "text-foreground/50")}>
                        /mes
                      </span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-semibold opacity-60">S/</span>
                        <span className="font-display text-4xl font-extrabold tabular-nums">
                          {plan.yearly.toLocaleString("es-PE")}
                        </span>
                        <span className={cn("text-xs", plan.highlighted ? "text-white/55" : "text-foreground/50")}>
                          /año
                        </span>
                      </div>
                      <p className="text-[11px] mt-1 text-brand-orange font-semibold">
                        Ahorra S/ {(plan.monthly * 12 - plan.yearly).toLocaleString("es-PE")}
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  asChild
                  className={cn(
                    "w-full justify-center mb-6 h-11",
                    plan.highlighted
                      ? "bg-brand-orange hover:bg-brand-orange/90 text-white"
                      : "bg-brand-ink hover:bg-brand-ink/90 text-white dark:bg-brand-orange dark:hover:bg-brand-orange/90"
                  )}
                >
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="inline-flex items-center justify-center size-4 shrink-0 mt-0.5 text-brand-orange">
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

        {/* Footer note — exact from client reference */}
        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 bg-brand-gray dark:bg-brand-gray-100 px-5 py-2.5 border border-black/8 dark:border-white/8">
            <Check className="size-4 text-green-500" strokeWidth={3} />
            Todos los planes incluyen acceso multiplataforma, capacitación y soporte.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
