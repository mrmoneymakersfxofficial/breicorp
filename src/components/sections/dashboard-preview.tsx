"use client";

import { motion } from "framer-motion";
import { BarChart3, FileText, Bell, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import { useNav } from "@/lib/nav-config";

const previewFeatures = [
  {
    icon: BarChart3,
    title: "Analítica en tiempo real",
    description: "Métricas de facturación, impuestos y rentabilidad actualizadas al segundo.",
  },
  {
    icon: FileText,
    title: "Reportes automáticos",
    description: "Genera y envía reportes mensuales a tu contador sin trabajo manual.",
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "Notificaciones de vencimientos, saldos pendientes y observaciones SUNAT.",
  },
  {
    icon: ShieldCheck,
    title: "Auditoría completa",
    description: "Historial de cada operación, firma y envío. Trazabilidad total.",
  },
];

export function DashboardPreview() {
  const { scrollTo } = useNav();

  return (
    <section id="dashboard" className="relative py-16 lg:py-24 bg-brand-ink text-white overflow-hidden blend-from-gray blend-to-light">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 size-[500px] rounded-full bg-brand-orange/15 blur-[120px]" aria-hidden="true" />

      <div className="container-page relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-5 space-y-6">
          <Reveal>
            <span className="eyebrow">Dashboard</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
              Control total de tu negocio{" "}
              <span className="text-gradient-orange">en una sola pantalla</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-white/70 leading-relaxed">
              Visualiza cada métrica importante: comprobantes emitidos, ventas por día,
              impuestos por período, clientes top y proyección mensual. Toma decisiones
              con datos, no con intuición.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-0 divide-y divide-white/8 border-y border-white/8"
          >
            {previewFeatures.map((feat) => (
              <motion.div
                key={feat.title}
                variants={staggerItem}
                className="flex items-start gap-4 py-4 first:pt-5 last:pb-5"
              >
                <div className="inline-flex items-center justify-center size-10 rounded-lg bg-brand-orange/15 text-brand-orange shrink-0">
                  <feat.icon className="size-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold mb-1">{feat.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.3}>
            <button
              type="button"
              onClick={() => scrollTo("planes")}
              className="inline-flex items-center gap-2 px-5 h-11 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-sm rounded-md transition-colors group"
            >
              Ver demo en vivo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.2} className="lg:col-span-7">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent blur-2xl pointer-events-none" />
            <div className="relative grid grid-cols-2 gap-3">
              <MiniStat label="Ventas hoy" value="S/ 84,250" trend="+12.4%" spark="up" />
              <MiniStat label="Comprobantes" value="482" trend="+8.1%" spark="up" />
              <MiniStat label="IGV del mes" value="S/ 56,800" trend="+3.2%" spark="up" />
              <MiniStat label="Saldos pendientes" value="S/ 12,400" trend="-4.1%" spark="down" />

              {/* Bar chart — integrated panel */}
              <div className="col-span-2 bg-white/[0.03] border border-white/10 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.15em]">Facturación semanal</p>
                    <p className="text-lg font-semibold">S/ 580,400</p>
                  </div>
                  <span className="text-[10px] text-green-400">+18% vs semana anterior</span>
                </div>
                <div className="flex items-end gap-1.5 h-20 sm:h-24">
                  {[40, 65, 50, 78, 60, 92, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.7, ease: "easeOut" }}
                      className="flex-1 bg-gradient-to-t from-brand-orange/40 to-brand-orange"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-white/30">
                  <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MiniStat({
  label,
  value,
  trend,
  spark,
}: {
  label: string;
  value: string;
  trend: string;
  spark: "up" | "down";
}) {
  return (
    <div className="bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.05] transition-colors">
      <p className="text-[10px] text-white/40 uppercase tracking-[0.15em]">{label}</p>
      <p className="font-display text-lg sm:text-xl font-bold mt-1">{value}</p>
      <p className={`text-[10px] mt-1 ${spark === "up" ? "text-green-400" : "text-red-400"}`}>
        {trend}
      </p>
    </div>
  );
}
