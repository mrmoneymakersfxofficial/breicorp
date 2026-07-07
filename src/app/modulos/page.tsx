import { AppShell } from "@/components/layout/app-shell";
import { SectionBlend } from "@/components/shared/section-blend";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { modules } from "@/lib/data/site-content";
import { whatsappLink } from "@/lib/data/site-content";
import { ArrowRight, MessageCircle, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Módulos del Sistema — Gestión empresarial completa | BREICORP",
  description:
    "Descubre los 18 módulos de BREICORP: facturación electrónica, inventario, ventas, clientes, compras, caja, reportes, guías de remisión y más. Todo lo que tu negocio necesita.",
  alternates: { canonical: "/modulos" },
  openGraph: {
    title: "Módulos del Sistema BREICORP — 18 módulos para tu negocio",
    description:
      "Gestión empresarial completa con 18 módulos integrados: facturación electrónica SUNAT, inventario, CRM, caja, reportes y logística.",
    url: "/modulos",
  },
};

const tagColors: Record<string, string> = {
  Core: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
  Logística: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
  Pro: "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-400",
};

export default function ModulosPage() {
  return (
    <AppShell>
      {/* HERO */}
      <SectionBlend glow>
        <section className="relative py-20 lg:py-28 bg-background">
          <div className="container-page">
            <Reveal className="max-w-3xl mx-auto text-center">
              <span className="eyebrow">
                <Layers className="size-3.5" />
                Plataforma
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mt-4">
                Módulos del{" "}
                <span className="text-gradient-orange">Sistema</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
                18 módulos integrados para una gestión empresarial completa.
                Facturación electrónica, inventario, ventas, clientes, compras,
                caja, reportes, logística y más — todo en una sola plataforma.
              </p>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* MODULES GRID */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Todos los módulos</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance mt-4">
              Todo lo que tu negocio necesita,{" "}
              <span className="text-gradient-orange">nada que sobre</span>
            </h2>
            <p className="mt-4 text-base text-foreground/65 leading-relaxed">
              Cada módulo está diseñado para resolver un desafío real de tu
              operación diaria. Todos se conectan entre sí para que no tengas
              que usar múltiples herramientas.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div
                  key={i}
                  className="group bg-background border border-black/8 dark:border-white/8 p-6 hover:shadow-float transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center size-10 bg-brand-orange/10 text-brand-orange rounded-lg">
                      <Icon className="size-5" />
                    </div>
                    {mod.tag && (
                      <Badge
                        variant="outline"
                        className={tagColors[mod.tag] ?? "text-muted-foreground"}
                      >
                        {mod.tag}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-display text-base font-bold mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              );
            })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden bg-brand-ink text-white px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-24">
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
              <div
                className="absolute -top-32 -right-32 size-[400px] sm:size-[500px] rounded-full bg-brand-orange/25 blur-[120px]"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-brand-orange/15 blur-[120px]"
                aria-hidden="true"
              />
              <div
                className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent"
                aria-hidden="true"
              />

              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
                  Prueba todos los módulos{" "}
                  <span className="text-gradient-orange">hoy</span>
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed">
                  Solicita una demo personalizada de 30 minutos y descubre cómo
                  BREICORP puede transformar la gestión de tu empresa.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
                  >
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      Hablar por WhatsApp
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-white/45">
                  <span>18 módulos incluidos en todos los planes</span>
                  <span>Sin contratos forzados</span>
                  <span>Setup en menos de 10 minutos</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </AppShell>
  );
}