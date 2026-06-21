"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Cloud, Lock, Award, Globe } from "lucide-react";
import { Reveal, staggerContainer, staggerItem, Counter } from "@/components/shared/reveal";

const pillars = [
  {
    icon: Award,
    title: "Experiencia comprobada",
    description:
      "Más de 8 años desarrollando software fiscal para el mercado peruano. Nuestro equipo conoce la normativa SUNAT a profundidad y participa activamente en su evolución.",
  },
  {
    icon: Cpu,
    title: "Tecnología de punta",
    description:
      "Arquitectura cloud-native con Next.js, PostgreSQL y edge computing. Cada componente está optimizado para velocidad, escalabilidad y disponibilidad 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad certificada",
    description:
      "Cifrado AES-256 en reposo y TLS 1.3 en tránsito. Cumplimos ISO 27001 y realizamos auditorías de seguridad trimestrales con pentesting externo.",
  },
  {
    icon: Globe,
    title: "Infraestructura global",
    description:
      "Desplegado en datacenters tier-IV con redundancia geográfica. CDN global para respuesta inferior a 100ms desde cualquier punto del Perú.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-20 lg:py-28 bg-brand-gray overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />

      <div className="container-page relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Nosotros
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
            Construimos la infraestructura fiscal del{" "}
            <span className="text-gradient-orange">Perú moderno</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed">
            BREICORP nace en Lima con una misión clara: eliminar la fricción entre las
            empresas peruanas y sus obligaciones fiscales. Combinamos ingeniería de
            élite con conocimiento profundo de la normativa SUNAT para entregar una
            plataforma que se siente como infraestructura pública, pero con la agilidad
            de una startup.
          </p>
          <p className="mt-4 text-sm text-foreground/55 leading-relaxed">
            Nuestra misión es democratizar el acceso a herramientas enterprise para
            empresas de cualquier tamaño. Nuestra visión es ser el sistema operativo
            fiscal de referencia en Perú y, en la próxima década, expandirnos por toda
            Latinoamérica.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-card border border-black/8">
              <p className="font-display text-2xl font-extrabold text-primary">
                <Counter value={8} suffix=" años" />
              </p>
              <p className="text-xs text-foreground/55 mt-1">Construyendo software fiscal</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-black/8">
              <p className="font-display text-2xl font-extrabold text-primary">
                <Counter value={45} suffix="+" />
              </p>
              <p className="text-xs text-foreground/55 mt-1">Profesionales en el equipo</p>
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-7 space-y-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="group flex items-start gap-5 p-6 lg:p-7 rounded-2xl bg-card border border-black/8 hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-brand-ink text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <p.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA badges */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-2 pt-2"
          >
            {["ISO 27001", "SUNAT PSE", "PCI DSS", "GDPR Ready", "SLA 99.99%"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-black/10 text-xs font-medium text-foreground/70"
              >
                <Lock className="size-3 text-primary" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
