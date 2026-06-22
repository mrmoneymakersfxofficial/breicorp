import { AppShell } from "@/components/layout/app-shell";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionBlend } from "@/components/shared/section-blend";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa — Nosotros, Clientes y FAQ",
  description:
    "Conoce a BREICORP: misión, visión, tecnología, seguridad e infraestructura. Testimonios de clientes reales en Perú y respuestas a preguntas frecuentes.",
  alternates: { canonical: "/empresa" },
  openGraph: {
    title: "BREICORP — Empresa, clientes y FAQ",
    description:
      "Conoce al equipo BREICORP, lee testimonios de clientes peruanos y resuelve tus dudas sobre facturación electrónica.",
    url: "/empresa",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿BREICORP está homologado por SUNAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. BREICORP opera como proveedor de servicios electrónicos (PSE) cumpliendo la normativa vigente de SUNAT. Todos los comprobantes se envían en formato UBL 2.1 y la firma digital se realiza con certificado de SOL.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto demora la implementación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plan Emprendedor está operativo en menos de 10 minutos. Los planes Premium y Enterprise incluyen acompañamiento de un gerente de cuenta y migración asistida en 5 a 7 días hábiles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tienen API para integrar con mi sistema?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. BREICORP cuenta con una API REST documentada con OpenAPI 3.0, SDKs oficiales para JavaScript, Python, PHP y Java, y webhooks en tiempo real.",
      },
    },
  ],
};

export default function EmpresaPage() {
  return (
    <AppShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SectionBlend to="gray">
        <About />
      </SectionBlend>
      <SectionBlend from="gray" to="white">
        <Testimonials />
      </SectionBlend>
      <SectionBlend from="white" to="gray">
        <Faq />
      </SectionBlend>
      <SectionBlend from="gray" to="gray">
        <FinalCta />
      </SectionBlend>
    </AppShell>
  );
}
