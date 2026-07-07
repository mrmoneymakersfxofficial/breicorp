"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, MessageCircle, DollarSign } from "lucide-react";
import { plans, whatsappLink } from "@/lib/data/site-content";
import { Button } from "@/components/ui/button";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

type Cycle = "monthly" | "yearly";

export function PlanesContent() {
  const [cycle, setCycle] = React.useState<Cycle>("monthly");

  return (
    <>
      {/* HERO */}
      <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="container-page relative">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">
              <DollarSign className="size-3.5" />
              Precios
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mt-4">
              Planes y{" "}
              <span className="text-gradient-orange">Precios</span>
            </h1>
            <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
              Elige el plan ideal para tu negocio y crece con una solución segura,
              moderna y autorizada por SUNAT. Todos los planes incluyen todos los módulos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="pb-16 lg:pb-24 bg-background overflow-hidden">
        <div className="container-page relative">
          {/* Billing toggle */}
          <Reveal delay={0.1} className="flex justify-center mb-10 lg:mb-12">
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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 items-stretch"
          >
            {plans.map((plan) => {
              return (
                <motion.div
                  key={plan.id}
                  variants={staggerItem}
                  className={cn(
                    "relative flex flex-col p-6 lg:p-7 transition-all duration-300 border h-full",
                    plan.highlighted
                      ? "bg-brand-ink text-white border-brand-orange shadow-glow-orange"
                      : "bg-background border-black/8 dark:border-white/8 hover:border-black/15 dark:hover:border-white/15 hover:shadow-premium"
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

                  {/* Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={cn(
                        "inline-flex items-center justify-center size-14 rounded-2xl",
                        plan.highlighted
                          ? "bg-brand-orange text-white"
                          : "bg-brand-orange/10 text-brand-orange"
                      )}
                    >
                      <plan.icon className="size-6" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Name + description */}
                  <h3 className="font-display text-lg font-bold mb-1 text-center">{plan.name}</h3>
                  <p
                    className={cn(
                      "text-xs leading-relaxed mb-5 min-h-[2.5rem] text-center",
                      plan.highlighted ? "text-white/60" : "text-foreground/55"
                    )}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-5 min-h-[4.5rem] flex flex-col items-center justify-start">
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
                      <div className="text-center">
                        <div className="flex items-baseline gap-1 justify-center">
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

                  {/* CTA button */}
                  <Button
                    asChild
                    className={cn(
                      "w-full justify-center h-11 mb-6 shrink-0",
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

                  {/* Features list */}
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((feature, idx) => {
                      const FeatureIcon = plan.featureIcons?.[idx];
                      return (
                        <li key={feature} className="flex items-center gap-2.5 text-sm">
                          <span
                            className={cn(
                              "inline-flex items-center justify-center size-4 shrink-0 rounded-full bg-brand-orange text-white"
                            )}
                          >
                            <Check className="size-2.5" strokeWidth={4} />
                          </span>
                          <span
                            className={cn(
                              "flex-1 leading-snug",
                              plan.highlighted ? "text-white/85" : "text-foreground/75"
                            )}
                          >
                            {feature}
                          </span>
                          {FeatureIcon && (
                            <FeatureIcon
                              className={cn(
                                "size-4 shrink-0",
                                plan.highlighted ? "text-white/40" : "text-foreground/35"
                              )}
                              strokeWidth={1.5}
                            />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer note */}
          <Reveal delay={0.2} className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 bg-brand-gray px-5 py-2.5 border border-black/8 dark:border-white/8">
              <Check className="size-4 text-green-500" strokeWidth={3} />
              Todos los planes incluyen acceso multiplataforma, capacitación y soporte.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden bg-brand-ink text-white px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-24">
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
              <div
                className="absolute -top-32 -right-32 size-[400px] sm:size-[500px] rounded-full bg-brand-orange/25 blur-[120px]"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-brand-orange/15 blur-[120px]"
                aria-hidden="true"
              />
              <div
                className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent"
                aria-hidden="true"
              />

              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
                  ¿Necesitas un plan a{" "}
                  <span className="text-gradient-orange">medida</span>?
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed">
                  Si tu empresa requiere más capacidad, sucursales adicionales o
                  funcionalidades personalizadas, contáctanos para una propuesta
                  adaptada a tu operación.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
                  >
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      Solicitar demo
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-white/45">
                  <span>Sin contratos forzados</span>
                  <span>Cambio de plan sin costo</span>
                  <span>Factura de suscripción incluida</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}