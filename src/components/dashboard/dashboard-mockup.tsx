"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  FileCheck2,
  Receipt,
  Users,
  MoreHorizontal,
  ArrowUpRight,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

const bars = [42, 58, 35, 70, 52, 88, 64, 76, 60, 92, 80, 96];
const linePath =
  "M0,80 C20,72 40,84 60,62 C80,40 100,52 120,34 C140,16 160,28 180,18 C200,8 220,22 240,12";

export function DashboardMockup() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-brand-ink text-white border border-white/10 shadow-[0_40px_120px_-20px_rgba(255,104,1,0.35),0_24px_60px_-12px_rgba(0,0,0,0.6)]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-[#ff5f57]" />
          <div className="size-2 rounded-full bg-[#febc2e]" />
          <div className="size-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] text-white/40 font-mono">app.breicorp.com/dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <Search className="size-3.5 text-white/40" />
          <Bell className="size-3.5 text-white/40" />
          <div className="size-6 rounded-full bg-gradient-to-br from-primary to-orange-400 ring-2 ring-white/10" />
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="hidden md:flex col-span-2 flex-col gap-1 p-3 border-r border-white/8 bg-white/[0.01]">
          <div className="flex items-center gap-2 mb-3 px-2">
            <div className="size-6 rounded-lg bg-primary flex items-center justify-center text-[10px] font-bold">B</div>
            <span className="text-[11px] font-semibold">BREICORP</span>
          </div>
          {[
            { icon: TrendingUp, label: "Resumen", active: true },
            { icon: Receipt, label: "Comprobantes" },
            { icon: Users, label: "Clientes" },
            { icon: FileCheck2, label: "Reportes" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] ${
                item.active ? "bg-primary/15 text-primary" : "text-white/55 hover:bg-white/5"
              }`}
            >
              <item.icon className="size-3" />
              {item.label}
            </div>
          ))}
        </aside>

        {/* Main content */}
        <div className="col-span-12 md:col-span-10 p-4 sm:p-5 space-y-4 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,104,1,0.10),transparent_70%)]">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <div className="flex items-center gap-2 text-[10px] text-white/40 mb-1">
                <span>Resumen general</span>
                <ChevronDown className="size-3" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Facturación · Diciembre 2025</h3>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/60">7d</button>
              <button className="text-[10px] px-2 py-1 rounded-md bg-primary text-white">30d</button>
              <button className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/60">12m</button>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            <KpiCard
              icon={<Receipt className="size-3.5" />}
              label="Comprobantes"
              value="12,458"
              trend="+12.4%"
              trendUp
            />
            <KpiCard
              icon={<TrendingUp className="size-3.5" />}
              label="Ventas totales"
              value="S/ 2.45M"
              trend="+8.1%"
              trendUp
            />
            <KpiCard
              icon={<FileCheck2 className="size-3.5" />}
              label="Aceptado SUNAT"
              value="99.6%"
              trend="+0.3%"
              trendUp
            />
            <KpiCard
              icon={<Users className="size-3.5" />}
              label="Clientes activos"
              value="1,284"
              trend="-1.2%"
              trendUp={false}
            />
          </div>

          {/* Chart row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
            {/* Bar chart */}
            <div className="lg:col-span-2 rounded-xl bg-white/[0.03] border border-white/8 p-3.5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[10px] text-white/40">Emisión mensual</p>
                  <p className="text-sm font-semibold">Comprobantes / mes</p>
                </div>
                <MoreHorizontal className="size-3.5 text-white/30" />
              </div>
              <div className="flex items-end justify-between gap-1.5 h-20">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                    className={`flex-1 rounded-t-sm ${
                      i === bars.length - 1 ? "bg-primary" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5 text-[9px] text-white/30">
                <span>Ene</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dic</span>
              </div>
            </div>

            {/* Line chart / donut */}
            <div className="rounded-xl bg-white/[0.03] border border-white/8 p-3.5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold">Ingresos</p>
                <span className="text-[10px] text-green-400 flex items-center gap-0.5">
                  <ArrowUpRight className="size-3" /> 18%
                </span>
              </div>
              <div className="relative h-20">
                <svg viewBox="0 0 240 100" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff6801" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#ff6801" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={`${linePath} L240,100 L0,100 Z`}
                    fill="url(#area-grad)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  />
                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="#ff6801"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
                  />
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-1.5 mt-2 text-center">
                <div>
                  <p className="text-[8px] text-white/40">Hoy</p>
                  <p className="text-[10px] font-semibold">S/84k</p>
                </div>
                <div>
                  <p className="text-[8px] text-white/40">Semana</p>
                  <p className="text-[10px] font-semibold">S/580k</p>
                </div>
                <div>
                  <p className="text-[8px] text-white/40">Mes</p>
                  <p className="text-[10px] font-semibold text-primary">S/2.4M</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent transactions */}
          <div className="rounded-xl bg-white/[0.03] border border-white/8 p-3.5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold">Comprobantes recientes</p>
              <span className="text-[10px] text-primary cursor-pointer">Ver todo</span>
            </div>
            <div className="space-y-1.5">
              {[
                { serie: "F001-4827", client: "Inversiones Andinas S.A.C.", amount: "S/ 12,450.00", status: "Aceptado", color: "bg-green-400" },
                { serie: "B002-1923", client: "Carlos Mendoza Ríos", amount: "S/ 380.00", status: "Aceptado", color: "bg-green-400" },
                { serie: "F001-4826", client: "Distribuidora Norte S.A.", amount: "S/ 8,920.00", status: "Procesando", color: "bg-amber-400" },
              ].map((row) => (
                <div
                  key={row.serie}
                  className="grid grid-cols-12 items-center gap-2 text-[11px] py-1.5 hover:bg-white/[0.03] rounded-md px-1.5"
                >
                  <div className="col-span-3 font-mono text-white/70">{row.serie}</div>
                  <div className="col-span-5 text-white/55 truncate">{row.client}</div>
                  <div className="col-span-3 text-right font-medium">{row.amount}</div>
                  <div className="col-span-1 flex items-center justify-end gap-1">
                    <span className={`size-1.5 rounded-full ${row.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({
  icon,
  label,
  value,
  trend,
  trendUp = true,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendUp?: boolean;
}) {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/8 p-3 hover:bg-white/[0.05] transition-colors">
      <div className="flex items-center justify-between mb-1.5">
        <div className="size-6 rounded-md bg-primary/15 text-primary flex items-center justify-center">
          {icon}
        </div>
        <span
          className={`text-[9px] font-medium flex items-center gap-0.5 ${
            trendUp ? "text-green-400" : "text-red-400"
          }`}
        >
          {trendUp ? <TrendingUp className="size-2.5" /> : <TrendingDown className="size-2.5" />}
          {trend}
        </span>
      </div>
      <p className="text-[10px] text-white/40">{label}</p>
      <p className="text-sm sm:text-base font-semibold mt-0.5">{value}</p>
    </div>
  );
}
