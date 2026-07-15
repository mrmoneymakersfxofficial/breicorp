"use client";

import { motion } from "framer-motion";
import { FileText, MapPin, Calendar, Users, Building2, Hash } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

const companyCards = [
  { label: "RAZÓN SOCIAL", value: "BREICORP E.I.R.L.", icon: FileText },
  { label: "RUC", value: "20610570349", icon: Hash },
  { label: "PARTIDA ELECTRÓNICA", value: "N.° 11084023", icon: FileText },
  { label: "UBICACIÓN", value: "Av. Tito Jaime 642, Tingo María — Huánuco", icon: MapPin },
  { label: "FUNDACIÓN", value: "2017", icon: Calendar },
  { label: "CLIENTES ACTIVOS", value: "Más de 2,000 empresas en Perú", icon: Users },
];

export function CompanyPresentation() {
  return (
    <section id="sobre-breicorp" className="relative py-16 lg:py-24 bg-background">
      <div className="container-page">
        {/* Two-column layout: text left, image right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
          {/* Left — Text */}
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              SOBRE BREICORP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-balance mt-4">
              Empresa tecnológica peruana especializada en{" "}
              <span className="text-gradient-orange">facturación electrónica</span>
            </h2>
            <p className="mt-5 text-base lg:text-lg text-foreground/70 leading-relaxed">
              BREICORP E.I.R.L. es una empresa tecnológica peruana especializada en software empresarial, automatización y soluciones digitales para negocios. Nuestro Sistema de Facturación Electrónica permite emitir comprobantes electrónicos, controlar ventas, gestionar productos, clientes, reportes e inventario desde una plataforma web y aplicativo móvil.
            </p>
            <p className="mt-4 text-base text-foreground/55 leading-relaxed">
              Trabajamos para ayudar a los negocios a formalizarse, digitalizar sus procesos y crecer con mayor orden, control y tecnología. Más de 2,000 empresas en todo el Perú confían en BREICORP para su facturación electrónica.
            </p>
          </Reveal>

          {/* Right — Image */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-black/8 dark:border-white/8 shadow-premium">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/app-mockup.webp"
                alt="BREICORP - Aplicativo móvil de facturación electrónica"
                width={1024}
                height={1536}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* Company Info Cards — 3 cols with icons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {companyCards.map((card) => (
            <motion.div
              key={card.label}
              variants={staggerItem}
              className="p-5 lg:p-6 rounded-2xl border border-black/8 dark:border-white/8 bg-card hover:shadow-float hover:border-brand-orange/20 dark:hover:border-brand-orange/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center size-8 rounded-lg bg-brand-orange/10 text-brand-orange shrink-0">
                  <card.icon className="size-4" strokeWidth={1.75} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
                  {card.label}
                </p>
              </div>
              <p className="font-display text-base lg:text-lg font-bold text-foreground pl-11">
                {card.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}