"use client";

import { motion } from "framer-motion";
import { Award, Cpu, ShieldCheck, Globe, Lock } from "lucide-react";
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
    <section id="nosotros" className="relative py-16 lg:py-24 bg-brand-gray overflow-hidden blend-to-light">
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />

      <div className="container-page relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="eyebrow">Nosotros</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
            Construimos la infraestructura fiscal del{" "}
            <span className="text-gradient-orange">Perú moderno</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-foreground/70 leading-relaxed">
            BREICORP nace en Lima con una misión clara: eliminar la fricción entre las
            empresas peruanas y sus obligaciones fiscales. Combinamos ingeniería de
            élite con conocimiento profundo de la normativa SUNAT para entregar una
            plataforma que se siente como infraestructura pública, pero con la agilidad
            de una startup.
          </p>
          <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
            Nuestra misión es democratizar el acceso a herramientas enterprise para
            empresas de cualquier tamaño. Nuestra visión es ser el sistema operativo
            fiscal de referencia en Perú y, en la próxima década, expandirnos por toda
            Latinoamérica.
          </p>

          {/* Stats — integrated, no cards */}
          <div className="mt-8 grid grid-cols-2 border-t border-l border-black/8">
            <div className="p-5 border-r border-b border-black/8">
              <p className="font-display text-2xl font-extrabold text-brand-orange">
                <Counter value={8} suffix=" años" />
              </p>
              <p className="text-xs text-foreground/55 mt-1">Construyendo software fiscal</p>
            </div>
            <div className="p-5 border-r border-b border-black/8">
              <p className="font-display text-2xl font-extrabold text-brand-orange">
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
          className="lg:col-span-7 border-t border-black/8"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="group flex items-start gap-5 py-6 lg:py-7 border-b border-black/8 hover:bg-background/50 px-2 transition-colors"
            >
              <div className="inline-flex items-center justify-center size-12 bg-brand-ink text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                <p.icon className="size-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Compliance badges — inline pills, no cards */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-2 pt-6">
            {["ISO 27001", "SUNAT PSE", "PCI DSS", "GDPR Ready", "SLA 99.99%"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background border border-black/10 text-xs font-medium text-foreground/70"
              >
                <Lock className="size-3 text-brand-orange" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
