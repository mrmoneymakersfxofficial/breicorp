import { AppShell } from "@/components/layout/app-shell";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Industries } from "@/components/sections/industries";
import { Integrations } from "@/components/sections/integrations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plataforma — Facturación, Planes, Industrias e Integraciones",
  description:
    "Conoce cómo funciona BREICORP, compara planes de facturación electrónica, descubre soluciones por industria y conecta tu stack con nuestra API REST.",
  alternates: { canonical: "/plataforma" },
  openGraph: {
    title: "Plataforma BREICORP — Cómo funciona, planes, industrias e integraciones",
    description:
      "Plataforma SaaS de facturación electrónica con API REST, webhooks, integraciones ERP y POS.",
    url: "/plataforma",
  },
};

export default function PlataformaPage() {
  return (
    <AppShell>
      <HowItWorks />
      <Pricing />
      <Industries />
      <Integrations />
    </AppShell>
  );
}