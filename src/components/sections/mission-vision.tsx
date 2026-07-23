"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, ArrowRight, Zap, Globe, Shield } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { whatsappLink } from "@/lib/data/site-content";
import Link from "next/link";

const values = [
  {
    icon: Zap,
    title: "Innovación constante",
    description:
      "Actualizamos nuestra plataforma continuamente para incorporar las últimas regulaciones de SUNAT y las mejores prácticas del mercado.",
  },
  {
    icon: Globe,
    title: "Alcance nacional",
    description:
      "Servimos a empresas en las 25 regiones del Perú, desde Lima hasta las ciudades más alejadas de la sierra y selva.",
  },
  {
    icon: Shield,
    title: "Confianza y transparencia",
    description:
      "Cada comprobante electrónico se envía y valida ante SUNAT en tiempo real, garantizando total cumplimiento normativo.",
  },
];

export function MissionVision() {
  return (
    <section id="mision-vision" className="relative py-16 lg:py-24 bg-brand-gray">
      <div className="container-page">
        {/* Mission & Vision — side by side */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-16 lg:mb-20">
          {/* Mission — dark card */}
          <Reveal>
            <div className="h-full p-6 lg:p-8 rounded-2xl bg-brand-ink text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange/20 text-brand-orange mb-5">
                <Target className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Nuestra Misión</h3>
              <p className="text-base text-white/70 leading-relaxed">
                Desarrollar y entregar software empresarial de clase mundial que permita a cualquier negocio en Perú emitir comprobantes electrónicos, controlar sus operaciones y tomar mejores decisiones. Queremos que la facturación electrónica sea accesible, simple y confiable para empresas de todos los tamaños, desde emprendedores hasta grandes corporaciones.
              </p>
            </div>
          </Reveal>

          {/* Vision — light card */}
          <Reveal delay={0.08}>
            <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-black/8 dark:border-white/8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange mb-5">
                <Eye className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Nuestra Visión</h3>
              <p className="text-base text-foreground/70 leading-relaxed">
                Ser el sistema operativo fiscal de referencia en Perú y Latinoamérica. Aspiramos a que BREICORP sea sinónimo de facturación electrónica en la región, reconocido por nuestra tecnología, servicio al cliente y compromiso con la formalización empresarial. En la próxima década, planeamos expandir nuestra presencia a toda Latinoamérica.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values Section */}
        <div className="mb-12 text-center">
          <Reveal>
            <span className="eyebrow justify-center">Valores</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
              Nuestros <span className="text-gradient-orange">Valores</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada línea de código que escribimos.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="group p-6 lg:p-8 rounded-2xl border border-black/8 dark:border-white/8 bg-card text-center hover:shadow-premium hover:border-brand-orange/20 dark:hover:border-brand-orange/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors mx-auto">
                <v.icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <Reveal className="mt-10 text-center">
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-ink text-brand-white text-sm font-semibold hover:bg-brand-orange transition-colors duration-300"
          >
            <Heart className="w-4 h-4" />
            Quiero conocer más sobre BREICORP
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}