import { AppShell } from "@/components/layout/app-shell";
import { SectionBlend } from "@/components/shared/section-blend";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm, ContactInfo } from "@/components/sections/contact-form";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Escríbenos | BREICORP",
  description:
    "Contáctanos por WhatsApp, teléfono, email o visita nuestra oficina en Tingo María, Huánuco. RUC 20610570349. Respuesta en menos de 15 minutos.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto BREICORP — WhatsApp, teléfono, email",
    description:
      "Estamos en Av. Tito Jaime 642, Tingo María. Horario: Lun–Sáb 8:00–20:00. WhatsApp +51 948 261 382.",
    url: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <AppShell>
      {/* HERO */}
      <SectionBlend glow>
        <section className="relative py-20 lg:py-28 bg-background">
          <div className="container-page">
            <Reveal className="max-w-3xl mx-auto text-center">
              <span className="eyebrow">
                <MessageCircle className="size-3.5" />
                Contacto
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mt-4">
                <span className="text-gradient-orange">Contáctanos</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
                ¿Tienes dudas o necesitas más información? Estamos aquí para
                ayudarte. Escríbenos y un asesor te responderá en menos de 15
                minutos.
              </p>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* FORM + CONTACT INFO */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* FORM */}
            <Reveal className="lg:col-span-3">
              <div className="bg-background border border-black/8 dark:border-white/8 p-6 sm:p-8 lg:p-10">
                <h2 className="font-display text-2xl font-extrabold mb-6">
                  Envíanos un mensaje
                </h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* CONTACT INFO */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <ContactInfo />
            </Reveal>
          </div>
        </div>
      </section>
    </AppShell>
  );
}