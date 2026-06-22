import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { SectionBlend } from "@/components/shared/section-blend";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, ArrowRight, MessageCircle, ShieldCheck, Zap, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/data/site-content";
import { industryPages, getIndustryBySlug } from "@/lib/data/industry-pages";
import { IndustryHero } from "@/components/sections/industry-hero";

export function generateStaticParams() {
  return industryPages.map((p) => ({ industry: p.slug }));
}

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const page = getIndustryBySlug(industry);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/${page.slug}`,
      type: "website",
    },
  };
}

export default async function IndustryRoute({ params }: PageProps) {
  const { industry } = await params;
  const page = getIndustryBySlug(industry);
  if (!page) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <AppShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <SectionBlend to="white" glow>
        <IndustryHero
          iconName={page.icon.name}
          headline={page.heroHeadline}
          subheadline={page.heroSubheadline}
          stats={page.stats}
        />
      </SectionBlend>

      {/* BENEFITS */}
      <SectionBlend from="white" to="gray">
        <section className="py-16 lg:py-24 bg-background">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Beneficios</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
                Diseñado para <span className="text-gradient-orange">{page.shortTitle.toLowerCase()}</span>
              </h2>
              <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
                Funcionalidades específicas que resuelven los desafíos reales de tu industria.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-black/8">
                {page.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="group p-6 lg:p-8 border-r border-b border-black/8 hover:bg-brand-gray/50 transition-colors"
                  >
                    <h3 className="font-display text-lg font-bold mb-2">{b.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* FEATURES */}
      <SectionBlend from="gray" to="gray">
        <section className="py-16 lg:py-24 bg-brand-gray">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Funcionalidades</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
                Todo lo que necesitas, <span className="text-gradient-orange">nada que sobra</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-black/8">
                {page.features.map((f) => (
                  <div
                    key={f.title}
                    className="p-6 lg:p-8 border-r border-b border-black/8 bg-background hover:bg-brand-gray/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center size-8 bg-brand-orange/10 text-brand-orange shrink-0 mt-1">
                        <Check className="size-4" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold mb-2">{f.title}</h3>
                        <p className="text-sm text-foreground/60 leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* FAQ */}
      <SectionBlend from="gray" to="gray">
        <section className="py-16 lg:py-24 bg-background">
          <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <span className="eyebrow">FAQ</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance mt-4">
                Preguntas frecuentes
              </h2>
              <p className="mt-4 text-base text-foreground/65 leading-relaxed">
                Resolvemos las dudas más comunes de {page.shortTitle.toLowerCase()} sobre nuestra plataforma.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full border-t border-black/8">
                {page.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-black/8 px-1"
                  >
                    <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/65 leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* CTA */}
      <SectionBlend from="white" to="gray">
        <section className="py-16 lg:py-24 bg-brand-gray">
          <div className="container-page">
            <div className="relative overflow-hidden bg-brand-ink text-white px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
              <div className="absolute -top-32 -right-32 size-[400px] rounded-full bg-brand-orange/25 blur-[120px]" aria-hidden="true" />

              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
                  Empieza a facturar para tu {page.shortTitle.toLowerCase()} hoy
                </h2>
                <p className="mt-4 text-base lg:text-lg text-white/70 leading-relaxed">
                  Solicita una demo personalizada de 30 minutos. Sin compromisos.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
                  >
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-4" />
                      Hablar por WhatsApp
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-white/45">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-brand-orange" />
                    Cumple con SUNAT
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Zap className="size-3.5 text-brand-orange" />
                    Setup en 10 min
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FileCheck2 className="size-3.5 text-brand-orange" />
                    Sin contratos forzados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBlend>
    </AppShell>
  );
}
