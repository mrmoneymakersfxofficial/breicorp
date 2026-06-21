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
import Link from "next/link";

export function Faq() {
  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-background">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-base text-foreground/60 leading-relaxed">
            Todo lo que necesitas saber sobre BREICORP y la facturación
            electrónica en Perú. ¿No encuentras tu respuesta?
          </p>
          <Link
            href="#contacto"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-2"
          >
            Contáctanos directamente →
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-black/8 bg-card px-5 data-[state=open]:shadow-premium transition-shadow"
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
