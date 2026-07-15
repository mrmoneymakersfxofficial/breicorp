import { AppShell } from "@/components/layout/app-shell";
import { Hero } from "@/components/sections/hero";
import { CompanyPresentation } from "@/components/sections/company-presentation";
import { Pricing } from "@/components/sections/pricing";
import { MissionVision } from "@/components/sections/mission-vision";
import { WhyChooseBreicorp } from "@/components/sections/why-choose-breicorp";
import { TrustBar } from "@/components/sections/trust-bar";
import { Benefits } from "@/components/sections/benefits";
import { Modules } from "@/components/sections/modules";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { SectionBlend } from "@/components/shared/section-blend";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://breicorp.com/#organization",
      name: "BREICORP",
      alternateName: "BREICORP E.I.R.L.",
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
        streetAddress: "Av. Tito Jaime 642",
        addressLocality: "Tingo María",
        addressRegion: "Huánuco",
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
  ],
};

export default function HomePage() {
  return (
    <AppShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionBlend glow>
        <Hero />
      </SectionBlend>
      <CompanyPresentation />
      <Pricing />
      <MissionVision />
      <WhyChooseBreicorp />
      <TrustBar />
      <Benefits />
      <Modules />
      <SectionBlend glow>
        <DashboardPreview />
      </SectionBlend>
    </AppShell>
  );
}