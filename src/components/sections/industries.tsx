"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, Stethoscope, ShoppingBag, Store, Building2, Truck, ArrowRight } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    description:
      "Integración POS, facturación por mesa, manejo de propinas y boletas masivas en horas pico.",
    keyword: "Facturación para restaurantes",
    href: "/facturacion-para-restaurantes",
  },
  {
    icon: Stethoscope,
    title: "Clínicas y salud",
    description:
      "Notas de crédito por reembolsos, facturación por aseguradora y manejo de series múltiples.",
    keyword: "Facturación para clínicas",
    href: "/facturacion-para-clinicas",
  },
  {
    icon: ShoppingBag,
    title: "Minimarkets y retail",
    description:
      "Boletas masivas, control de inventario en tiempo real y sincronización multi-sucursal.",
    keyword: "Facturación para minimarket",
    href: "/facturacion-para-minimarket",
  },
  {
    icon: Store,
    title: "POS Perú",
    description:
      "Software POS integrado con facturación electrónica SUNAT. Emisión en 2 segundos.",
    keyword: "Software POS Perú",
    href: "/software-pos-peru",
  },
  {
    icon: Building2,
    title: "Empresas corporativas",
    description:
      "Multiempresa, reportes consolidados, API y SSO. Listo para grupos corporativos.",
    keyword: "Sistema CPE empresarial",
    href: "/plataforma#industrias",
  },
  {
    icon: Truck,
    title: "Distribuidoras",
    description:
      "Guías de remisión, control de transporte y facturación por ruta. Logística integrada.",
    keyword: "Guías de remisión Perú",
    href: "/plataforma#industrias",
  },
];

export function Industries() {
  return (
    <section id="industrias" className="relative py-16 lg:py-24 bg-brand-gray">
      <div className="absolute inset-0 bg-grid-dark dark:bg-grid opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="eyebrow justify-center">Por industria</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
            Soluciones diseñadas para{" "}
            <span className="text-gradient-orange">tu sector</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
            BREICORP se adapta a las necesidades específicas de cada industria peruana.
            Configuración lista para tu rubro en minutos.
          </p>
        </Reveal>

        {/* Centered cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {industries.map((ind) => (
            <motion.div key={ind.title} variants={staggerItem}>
              <Link
                href={ind.href}
                className="group block p-6 lg:p-8 rounded-2xl border border-black/8 dark:border-white/8 bg-background text-center hover:bg-brand-ink hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="flex items-center justify-center mb-5">
                  <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <ind.icon className="size-6" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{ind.title}</h3>
                <p className="text-sm text-foreground/60 group-hover:text-white/60 leading-relaxed mb-4">
                  {ind.description}
                </p>
                <span className="text-xs font-semibold text-brand-orange inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  {ind.keyword}
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
