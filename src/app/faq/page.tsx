import { AppShell } from "@/components/layout/app-shell";
import { SectionBlend } from "@/components/shared/section-blend";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs, whatsappLink } from "@/lib/data/site-content";
import { ArrowRight, MessageCircle, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — FAQ | BREICORP",
  description:
    "Respuestas a las preguntas más comunes sobre BREICORP: homologación SUNAT, implementación, certificado digital, multiempresa, API, soporte técnico y más.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Preguntas Frecuentes — BREICORP",
    description:
      "¿BREICORP está homologado por SUNAT? ¿Cuánto demora la implementación? Resuelve todas tus dudas aquí.",
    url: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <AppShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <SectionBlend glow>
        <section className="relative py-20 lg:py-28 bg-background">
          <div className="container-page">
            <Reveal className="max-w-3xl mx-auto text-center">
              <span className="eyebrow">
                <HelpCircle className="size-3.5" />
                FAQ
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mt-4">
                Preguntas{" "}
                <span className="text-gradient-orange">Frecuentes</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
                Todo lo que necesitas saber sobre BREICORP y la facturación
                electrónica en Perú.
              </p>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* FAQ ACCORDION */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <Accordion
                type="single"
                collapsible
                className="w-full border-t border-black/8 dark:border-white/8"
              >
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-black/8 dark:border-white/8 px-1"
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
                  ¿Tienes más{" "}
                  <span className="text-gradient-orange">preguntas</span>?
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed">
                  Un asesor especializado está listo para responder todas tus
                  dudas. Escríbenos por WhatsApp y te respondemos en menos de 15
                  minutos.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
                  >
                    <a
                      href={whatsappLink("Hola BREICORP, tengo una pregunta sobre el sistema.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      Preguntar por WhatsApp
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