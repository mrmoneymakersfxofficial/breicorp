"use client";

import { motion } from "framer-motion";

const logos = [
  "Inversiones Andinas",
  "Grupo Restaurantero Lima",
  "Clínica San Felipe",
  "MiniMarket El Sol",
  "Distribuidora Norte",
  "Tech Retail Perú",
];

export function TrustBar() {
  return (
    <section className="relative bg-background border-b border-black/8 dark:border-white/8 py-8 sm:py-10 blend-from-dark overflow-hidden">
      <div className="container-page">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40 mb-6 sm:mb-7">
          Más de 2,400 empresas en Perú confían en BREICORP
        </p>
        <div className="relative overflow-hidden mask-fade-x">
          <motion.div
            className="flex items-center gap-10 sm:gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="font-display text-base sm:text-lg font-bold text-foreground/30 hover:text-foreground/60 transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
