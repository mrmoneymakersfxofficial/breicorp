"use client";

import { motion } from "framer-motion";

// Simplified "logo" wordmarks representing client industries
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
    <section className="relative bg-background border-b border-black/5 py-10">
      <div className="container-page">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-foreground/40 mb-7">
          Más de 2,400 empresas en Perú confían en BREICORP
        </p>
        <div className="relative overflow-hidden mask-fade-x">
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="font-display text-lg font-bold text-foreground/30 hover:text-foreground/60 transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .mask-fade-x {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
