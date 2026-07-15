import { AppShell } from "@/components/layout/app-shell";
import { SectionBlend } from "@/components/shared/section-blend";
import { Reveal } from "@/components/shared/reveal";
import { industryPages } from "@/lib/data/industry-pages";
import { whatsappLink } from "@/lib/data/site-content";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Building2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rubros — Un sistema para cada tipo de negocio | BREICORP",
  description:
    "BREICORP se adapta a tu industria: restaurantes, clínicas, minimarkets, tiendas, construcción, logística y más. Soluciones de facturación electrónica por rubro en Perú.",
  alternates: { canonical: "/rubros" },
  openGraph: {
    title: "Soluciones por Rubro — Facturación Electrónica para cada Industria",
    description:
      "Descubre cómo BREICORP adapta su sistema de facturación electrónica a cada tipo de negocio en Perú.",
    url: "/rubros",
  },
};

export default function RubrosPage() {
  return (
    <AppShell>
      {/* HERO */}
      <SectionBlend glow>
        <section className="relative py-20 lg:py-28 bg-background">
          <div className="container-page">
            <Reveal className="max-w-3xl mx-auto text-center">
              <span className="eyebrow">
                <Building2 className="size-3.5" />
                Por industria
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mt-4">
                Un sistema para cada tipo de{" "}
                <span className="text-gradient-orange">negocio</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
                Cada industria tiene sus propios desafíos de facturación. BREICORP
                se adapta a tu rubro con funcionalidades específicas, integraciones
                nativas y cumplimiento SUNAT automático.
              </p>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* INDUSTRY GRID */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="container-page">
          <Reveal className="max-w-2xl mb-12">
            <span className="eyebrow">Todos los rubros</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance mt-4">
              Encuentra la solución para{" "}
              <span className="text-gradient-orange">tu industria</span>
            </h2>
            <p className="mt-4 text-base text-foreground/65 leading-relaxed">
              Selecciona tu rubro y descubre cómo BREICORP puede optimizar tu
              facturación electrónica y gestión diaria.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {industryPages.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.slug}
                    href={`/${industry.slug}`}
                    className="group bg-background border border-black/8 dark:border-white/8 p-6 hover:shadow-float hover:border-brand-orange/30 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center size-12 bg-brand-orange/10 text-brand-orange rounded-xl mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-display text-base font-bold mb-2 group-hover:text-brand-orange transition-colors">
                      {industry.shortTitle}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver más
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
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
                  ¿No encuentras tu rubro?{" "}
                  <span className="text-gradient-orange">Hablemos</span>
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed">
                  BREICORP se adapta a cualquier tipo de negocio. Cuéntanos tu caso
                  y te mostraremos cómo podemos ayudarte con una demo personalizada.
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
                  <span>Sin contratos forzados</span>
                  <span>Setup en menos de 10 minutos</span>
                  <span>Soporte especializado por rubro</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </AppShell>
  );
}