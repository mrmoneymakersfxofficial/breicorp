import { AppShell } from "@/components/layout/app-shell";
import { PlanesContent } from "./planes-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planes y Precios — Facturación Electrónica desde S/50/mes | BREICORP",
  description:
    "Planes de facturación electrónica BREICORP desde S/50/mes. Emprendedor, Empresario, Premium y Full. Todos los módulos incluidos, soporte en Perú y cumplimiento SUNAT.",
  alternates: { canonical: "/planes" },
  openGraph: {
    title: "Planes y Precios — BREICORP Facturación Electrónica",
    description:
      "Elige el plan ideal para tu negocio. Desde S/50/mes con todos los módulos incluidos, soporte y cumplimiento SUNAT.",
    url: "/planes",
  },
};

export default function PlanesPage() {
  return (
    <AppShell>
      <PlanesContent />
    </AppShell>
  );
}