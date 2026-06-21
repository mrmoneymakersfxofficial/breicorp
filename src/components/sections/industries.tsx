"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, Stethoscope, ShoppingBag, Store, Building2, Truck } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    description:
      "Integración POS, facturación por mesa, manejo de propinas y boletas masivas en horas pico.",
    keyword: "Facturación para restaurantes",
    href: "#",
  },
  {
    icon: Stethoscope,
    title: "Clínicas y salud",
    description:
      "Notas de crédito por reembolsos, facturación por aseguradora y manejo de series múltiples.",
    keyword: "Facturación para clínicas",
    href: "#",
  },
  {
    icon: ShoppingBag,
    title: "Minimarkets y retail",
    description:
      "Boletas masivas, control de inventario en tiempo real y sincronización multi-sucursal.",
    keyword: "Facturación para minimarket",
    href: "#",
  },
  {
    icon: Store,
    title: "POS Perú",
    description:
      "Software POS integrado con facturación electrónica SUNAT. Emisión en 2 segundos.",
    keyword: "Software POS Perú",
    href: "#",
  },
  {
    icon: Building2,
    title: "Empresas corporativas",
    description:
      "Multiempresa, reportes consolidados, API y SSO. Listo para grupos corporativos.",
    keyword: "Sistema CPE empresarial",
    href: "#",
  },
  {
    icon: Truck,
    title: "Distribuidoras",
    description:
      "Guías de remisión, control de transporte y facturación por ruta. Logística integrada.",
    keyword: "Guías de remisión Perú",
    href: "#",
  },
];

export function Industries() {
  return (
    <section className="relative py-20 lg:py-28 bg-background">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Por industria
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
            Soluciones diseñadas para{" "}
            <span className="text-gradient-orange">tu sector</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/60 leading-relaxed">
            BREICORP se adapta a las necesidades específicas de cada industria peruana.
            Configuración lista para tu rubro en minutos.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.title}
              variants={staggerItem}
              className="group relative overflow-hidden p-6 rounded-2xl border border-black/8 bg-card hover:border-primary/30 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ind.icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{ind.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  {ind.description}
                </p>
                <Link
                  href={ind.href}
                  className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:gap-1.5 transition-all"
                >
                  {ind.keyword} →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
