import { AppShell } from "@/components/layout/app-shell";
import { SectionBlend } from "@/components/shared/section-blend";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/data/site-content";
import { ArrowRight, MessageCircle, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes BREICORP — Empresas que confían en nosotros",
  description:
    "Diversos negocios y empresas de distintos rubros confían en BREICORP para ordenar sus ventas, emitir comprobantes electrónicos y gestionar mejor sus operaciones en Perú.",
  alternates: { canonical: "/clientes" },
  openGraph: {
    title: "Clientes que confían en BREICORP",
    description:
      "Restaurantes, clínicas, minimarkets, tiendas, ferreterías y más de 17 rubros confían en BREICORP.",
    url: "/clientes",
  },
};

const companies = [
  "Inversiones Andinas S.A.C.",
  "Grupo Restaurantero Lima",
  "Clínica San Felipe",
  "MiniMarket El Sol",
  "Distribuidora Norte S.A.",
  "Tech Retail Perú",
  "Ferretería El Clavo",
  "Farmacia Bienestar",
  "Hotel Tingo María",
  "Transporte Rápido E.I.R.L.",
  "Colegio San José",
  "Constructora Horizonte",
];

export default function ClientesPage() {
  return (
    <AppShell>
      {/* HERO */}
      <SectionBlend glow>
        <section className="relative py-20 lg:py-28 bg-background">
          <div className="container-page">
            <Reveal className="max-w-3xl mx-auto text-center">
              <span className="eyebrow">
                <Building2 className="size-3.5" />
                Clientes
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mt-4">
                Empresas que confían en{" "}
                <span className="text-gradient-orange">BREICORP</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
                Diversos negocios y empresas de distintos rubros vienen
                confiando en BREICORP para ordenar sus ventas, emitir
                comprobantes electrónicos y gestionar mejor sus operaciones.
              </p>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* LOGO GRID */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="container-page">
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {companies.map((name, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-background border border-black/8 dark:border-white/8 p-6 sm:p-8 hover:shadow-float transition-all duration-300 aspect-[2/1]"
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="inline-flex items-center justify-center size-10 bg-brand-gray rounded-lg text-foreground/30">
                      <Building2 className="size-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground/50 truncate max-w-full">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
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
                  Únete a las empresas que ya{" "}
                  <span className="text-gradient-orange">facturan con BREICORP</span>
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed">
                  Empieza hoy con una demo personalizada. Sin compromisos, sin
                  contratos forzados.
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </AppShell>
  );
}