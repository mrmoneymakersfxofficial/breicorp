import { SiteShell } from "@/components/layout/site-shell";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Benefits } from "@/components/sections/benefits";
import { Modules } from "@/components/sections/modules";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://breicorp.com/#organization",
      name: "BREICORP",
      alternateName: "BREICORP S.A.C.",
      url: "https://breicorp.com",
      logo: "https://breicorp.com/brand/logo.png",
      description:
        "Plataforma SaaS de facturación electrónica empresarial para Perú con cumplimiento SUNAT, automatización y control en tiempo real.",
      foundingDate: "2017",
      areaServed: "PE",
      knowsLanguage: "es-PE",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+51-948-261-382",
        contactType: "sales",
        areaServed: "PE",
        availableLanguage: "Spanish",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Javier Prado 1234, San Isidro",
        addressLocality: "Lima",
        addressRegion: "LIMA",
        addressCountry: "PE",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://breicorp.com/#software",
      name: "BREICORP — Sistema de Facturación Electrónica",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "PEN",
        lowPrice: "50",
        highPrice: "150",
        offerCount: "4",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "2417",
        reviewCount: "2417",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://breicorp.com/#website",
      url: "https://breicorp.com",
      name: "BREICORP",
      publisher: { "@id": "https://breicorp.com/#organization" },
      inLanguage: "es-PE",
    },
    {
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
    },
  ],
};

export default function HomePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustBar />
      <Benefits />
      <Modules />
      <DashboardPreview />
      <HowItWorks />
      <Pricing />
      <Industries />
      <Testimonials />
      <About />
      <Faq />
      <FinalCta />
    </SiteShell>
  );
}
