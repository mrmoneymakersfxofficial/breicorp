"use client";

import { motion } from "framer-motion";
import { BarChart3, FileText, Bell, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  return (
    <section id="dashboard" className="relative py-20 lg:py-28 bg-brand-ink text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 size-[500px] rounded-full bg-primary/15 blur-[120px]" aria-hidden="true" />

      <div className="container-page relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-5 space-y-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Dashboard
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
              Control total de tu negocio{" "}
              <span className="text-gradient-orange">en una sola pantalla</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-white/60 leading-relaxed">
              Visualiza cada métrica importante: comprobantes emitidos, ventas por día,
              impuestos por período, clientes top y proyección mensual. Toma decisiones
              con datos, no con intuición.
            </p>
          </Reveal>

          <div className="space-y-4">
            {previewFeatures.map((feat, i) => (
              <Reveal key={feat.title} delay={0.1 + i * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/15 text-primary shrink-0">
                    <feat.icon className="size-4.5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold mb-1">{feat.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-glow-orange">
              <Link href="#contacto">
                Ver demo en vivo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.2} className="lg:col-span-7">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-transparent blur-2xl pointer-events-none" />
            <div className="relative grid grid-cols-2 gap-3">
              {/* Mini metric cards */}
              <MiniStat
                label="Ventas hoy"
                value="S/ 84,250"
                trend="+12.4%"
                spark="up"
              />
              <MiniStat
                label="Comprobantes"
                value="482"
                trend="+8.1%"
                spark="up"
              />
              <MiniStat
                label="IGV del mes"
                value="S/ 56,800"
                trend="+3.2%"
                spark="up"
              />
              <MiniStat
                label="Saldos pendientes"
                value="S/ 12,400"
                trend="-4.1%"
                spark="down"
              />

              {/* Bar chart card */}
              <div className="col-span-2 rounded-xl bg-white/[0.03] border border-white/10 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Facturación semanal</p>
                    <p className="text-lg font-semibold">S/ 580,400</p>
                  </div>
                  <span className="text-[10px] text-green-400">+18% vs semana anterior</span>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {[40, 65, 50, 78, 60, 92, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.7, ease: "easeOut" }}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
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
    <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.05] transition-colors">
      <p className="text-[10px] text-white/40 uppercase tracking-wider">{label}</p>
      <p className="font-display text-xl font-bold mt-1">{value}</p>
      <p className={`text-[10px] mt-1 ${spark === "up" ? "text-green-400" : "text-red-400"}`}>
        {trend}
      </p>
    </div>
  );
}
