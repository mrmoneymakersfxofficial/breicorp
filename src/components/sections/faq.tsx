"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/site-content";
import { Reveal } from "@/components/shared/reveal";
import { useNav } from "@/lib/nav-config";

export function Faq() {
  const { scrollTo } = useNav();

  return (
    <section id="faq" className="relative py-16 lg:py-24 bg-background overflow-hidden blend-from-gray blend-to-gray">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance mt-4">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-base text-foreground/65 leading-relaxed">
            Todo lo que necesitas saber sobre BREICORP y la facturación
            electrónica en Perú. ¿No encuentras tu respuesta?
          </p>
          <button
            type="button"
            onClick={() => scrollTo("inicio")}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:gap-2.5 transition-all"
          >
            Contáctanos directamente →
          </button>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full border-t border-black/8 dark:border-white/8">
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
    </section>
  );
}
