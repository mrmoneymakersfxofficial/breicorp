"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { plans } from "@/lib/data/site-content";
import { Button } from "@/components/ui/button";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

type Cycle = "monthly" | "yearly";

export function Pricing() {
  const [cycle, setCycle] = React.useState<Cycle>("monthly");

  return (
    <section id="planes" className="relative py-20 lg:py-28 bg-background">
      {/* Decorative */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Planes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
            Planes de <span className="text-gradient-orange">facturación electrónica</span> para cada etapa
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/60 leading-relaxed">
            Precios transparentes en soles. Sin costos ocultos. Cambia o cancela cuando quieras.
            Ahorra 20% con facturación anual.
          </p>
        </Reveal>

        {/* Billing toggle */}
        <Reveal delay={0.1} className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-black/5 border border-black/8">
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all",
                cycle === "monthly"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-foreground/55 hover:text-foreground"
              )}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setCycle("yearly")}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all inline-flex items-center gap-1.5",
                cycle === "yearly"
                  ? "bg-background shadow-sm text-foreground"
                  : "text-foreground/55 hover:text-foreground"
              )}
            >
              Anual
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/15 text-primary font-bold">
                -20%
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
          className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 items-stretch"
        >
          {plans.map((plan) => {
            const price = cycle === "monthly" ? plan.monthly : Math.round(plan.yearly / 12);
            return (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                className={cn(
                  "relative flex flex-col p-6 lg:p-7 rounded-2xl transition-all duration-300",
                  plan.highlighted
                    ? "bg-brand-ink text-white border-2 border-primary shadow-glow-orange lg:-translate-y-3"
                    : "bg-card border border-black/8 hover:border-black/15 hover:-translate-y-1"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                      <Sparkles className="size-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div
                  className={cn(
                    "inline-flex items-center justify-center size-11 rounded-xl mb-4",
                    plan.highlighted
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  <plan.icon className="size-5" />
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
                    <p className={cn("text-[11px] mt-1", plan.highlighted ? "text-primary" : "text-primary")}>
                      Facturado S/ {plan.yearly} al año
                    </p>
                  )}
                </div>

                <Button
                  asChild
                  className={cn(
                    "w-full justify-center mb-6",
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white shadow-glow-orange"
                      : "bg-brand-ink hover:bg-brand-ink/90 text-white"
                  )}
                >
                  <Link href="#contacto">
                    {plan.cta}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span
                        className={cn(
                          "inline-flex items-center justify-center size-4 rounded-full shrink-0 mt-0.5",
                          plan.highlighted ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
                        )}
                      >
                        <Check className="size-2.5" strokeWidth={3} />
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

        {/* Bottom note */}
        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-foreground/55">
            ¿Necesitas algo más personalizado?{" "}
            <Link
              href="#contacto"
              className="text-primary font-semibold hover:underline underline-offset-2"
            >
              Conversa con nuestro equipo de ventas →
            </Link>
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
