import { AppShell } from "@/components/layout/app-shell";
import { SectionBlend } from "@/components/shared/section-blend";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/data/site-content";
import {
  ArrowRight,
  MessageCircle,
  Smartphone,
  FileText,
  BarChart3,
  Package,
  Users,
  Boxes,
  TrendingUp,
  Download,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Móvil BREICORP — Factura desde tu celular | BREICORP",
  description:
    "Factura desde tu celular con la app de BREICORP. Emite comprobantes electrónicos, revisa ventas, consulta productos, clientes y reportes en tiempo real desde cualquier lugar.",
  alternates: { canonical: "/app-movil" },
  openGraph: {
    title: "App Móvil BREICORP — Facturación desde tu celular",
    description:
      "Controla tu negocio desde cualquier lugar. Emite comprobantes, revisa ventas, consulta inventario y reportes en tiempo real.",
    url: "/app-movil",
  },
};

const features = [
  {
    icon: FileText,
    title: "Emitir comprobantes",
    description:
      "Crea boletas y facturas electrónicas desde tu celular con cálculo automático de IGV y envío inmediato a SUNAT.",
  },
  {
    icon: TrendingUp,
    title: "Revisar ventas",
    description:
      "Consulta el resumen de ventas del día, semana o mes. Identifica tus productos más vendidos y tendencias.",
  },
  {
    icon: Package,
    title: "Consultar productos",
    description:
      "Accede a tu catálogo completo de productos y servicios con precios, stock disponible y categorías.",
  },
  {
    icon: Users,
    title: "Gestionar clientes",
    description:
      "Busca clientes, consulta su historial de compras y datos fiscales desde cualquier lugar.",
  },
  {
    icon: Boxes,
    title: "Controlar inventario",
    description:
      "Revisa el stock en tiempo real, recibe alertas de stock mínimo y actualiza cantidades al instante.",
  },
  {
    icon: BarChart3,
    title: "Ver reportes",
    description:
      "Dashboards financieros con ventas, impuestos y rentabilidad. Toma decisiones informadas sobre tu negocio.",
  },
];

export default function AppMovilPage() {
  return (
    <AppShell>
      {/* HERO */}
      <SectionBlend glow>
        <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
          <div className="container-page relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <span className="eyebrow">
                  <Smartphone className="size-3.5" />
                  App Móvil
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-balance mt-4">
                  Factura desde tu celular con la app de{" "}
                  <span className="text-gradient-orange">BREICORP</span>
                </h1>
                <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed">
                  Controla tu negocio desde cualquier lugar. Emite comprobantes,
                  revisa ventas, consulta productos, clientes, compras y reportes
                  en tiempo real.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Download className="size-4" />
                      App Store
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-foreground/15 hover:bg-brand-gray h-12"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Download className="size-4" />
                      Play Store
                    </a>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="relative mx-auto w-full max-w-sm">
                  {/* Phone mockup */}
                  <div className="relative bg-brand-ink rounded-[2.5rem] p-3 shadow-premium">
                    <div className="rounded-[2rem] overflow-hidden bg-brand-gray aspect-[9/16]">
                      <div className="flex flex-col h-full">
                        {/* Status bar */}
                        <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[10px] text-white/60">
                          <span>9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="size-1 rounded-full bg-white/40" />
                            <div className="size-1 rounded-full bg-white/40" />
                            <div className="size-1 rounded-full bg-white/40" />
                          </div>
                        </div>
                        {/* App header */}
                        <div className="px-4 py-3 bg-brand-ink">
                          <p className="text-white font-bold text-sm">BREICORP</p>
                          <p className="text-white/50 text-[10px]">Panel de ventas</p>
                        </div>
                        {/* Content placeholder */}
                        <div className="flex-1 p-4 space-y-3">
                          <div className="bg-white/80 dark:bg-brand-ink/60 rounded-xl p-3">
                            <p className="text-[10px] text-foreground/50 uppercase tracking-wider">Ventas hoy</p>
                            <p className="text-xl font-bold text-brand-orange mt-1">S/ 4,280.00</p>
                            <p className="text-[10px] text-emerald-500 mt-0.5">↑ 12% vs ayer</p>
                          </div>
                          <div className="bg-white/80 dark:bg-brand-ink/60 rounded-xl p-3">
                            <p className="text-[10px] text-foreground/50 uppercase tracking-wider">Comprobantes</p>
                            <p className="text-xl font-bold mt-1">24</p>
                          </div>
                          <div className="bg-white/80 dark:bg-brand-ink/60 rounded-xl p-3">
                            <p className="text-[10px] text-foreground/50 uppercase tracking-wider">Productos en stock</p>
                            <p className="text-xl font-bold mt-1">1,047</p>
                          </div>
                        </div>
                        {/* Bottom nav */}
                        <div className="flex items-center justify-around px-4 py-3 border-t border-black/8 dark:border-white/8 bg-background">
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="size-5 text-brand-orange" />
                            <span className="text-[9px] text-brand-orange font-medium">Inicio</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="size-5 text-foreground/30" />
                            <span className="text-[9px] text-foreground/30">Ventas</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="size-5 text-foreground/30" />
                            <span className="text-[9px] text-foreground/30">Productos</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="size-5 text-foreground/30" />
                            <span className="text-[9px] text-foreground/30">Más</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Glow behind phone */}
                  <div
                    className="absolute -inset-8 bg-brand-orange/10 rounded-full blur-3xl -z-10"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </SectionBlend>

      {/* "TU NEGOCIO EN TUS MANOS" */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="container-page">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
              Tu negocio en <span className="text-gradient-orange">tus manos</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
              No importa si estás en tu tienda, en casa o de viaje. BREICORP
              te da control total de tu operación desde la palma de tu mano.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={i}
                    className="group bg-background border border-black/8 dark:border-white/8 p-6 hover:shadow-float transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center size-10 bg-brand-orange/10 text-brand-orange rounded-lg mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-base font-bold mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {feat.description}
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
                  Descarga la app y <span className="text-gradient-orange">empieza hoy</span>
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed">
                  ¿Tienes dudas sobre la app? Escríbenos por WhatsApp y te
                  guiamos paso a paso.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
                  >
                    <a
                      href={whatsappLink("Hola BREICORP, deseo información sobre la app móvil.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      Hablar por WhatsApp
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </AppShell>
  );
}