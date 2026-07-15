import { AppShell } from "@/components/layout/app-shell";
import { SectionBlend } from "@/components/shared/section-blend";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/data/site-content";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Lock,
  FileCheck2,
  KeyRound,
  Server,
  RefreshCw,
  BadgeCheck,
  CheckCircle2,
  Fingerprint,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguridad y Cumplimiento SUNAT | BREICORP",
  description:
    "Facturación electrónica segura con cifrado AES-256, firma digital, formato UBL 2.1, CDR en tiempo real y cumplimiento total de la normativa SUNAT en Perú.",
  alternates: { canonical: "/seguridad" },
  openGraph: {
    title: "Seguridad y Cumplimiento SUNAT — BREICORP",
    description:
      "Plataforma segura con cifrado AES-256, firma digital certificada, formato UBL 2.1 y CDR en tiempo real ante SUNAT.",
    url: "/seguridad",
  },
};

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Cifrado AES-256",
    description:
      "Toda la comunicación y almacenamiento de datos está protegida con cifrado AES-256, el estándar más alto de seguridad.",
  },
  {
    icon: KeyRound,
    title: "Firma digital certificada",
    description:
      "Cada comprobante se firma con tu certificado digital emitido por SUNAT o proveedor autorizado, garantizando autenticidad e integridad.",
  },
  {
    icon: Server,
    title: "Backups automáticos",
    description:
      "Respaldos automáticos y redundantes cada hora. Tus datos están protegidos contra pérdida con recuperación instantánea.",
  },
  {
    icon: FileCheck2,
    title: "Formato UBL 2.1",
    description:
      "Todos los comprobantes se generan en formato UBL 2.1 conforme a la normativa vigente de SUNAT para facturación electrónica.",
  },
  {
    icon: RefreshCw,
    title: "CDR en tiempo real",
    description:
      "Constancia de Recepción (CDR) recibida y almacenada en segundos. Consulta el estado de cada comprobante de forma inmediata.",
  },
  {
    icon: Lock,
    title: "Infraestructura segura",
    description:
      "Servidores con certificación ISO 27001, monitoreo 24/7, firewalls de última generación y protección contra ataques DDoS.",
  },
];

const complianceBadges = [
  { label: "PSE habilitado", icon: BadgeCheck },
  { label: "UBL 2.1", icon: FileCheck2 },
  { label: "Firma digital", icon: Fingerprint },
  { label: "CDR automático", icon: CheckCircle2 },
  { label: "Cifrado AES-256", icon: Lock },
  { label: "99.98% uptime", icon: ShieldCheck },
];

export default function SeguridadPage() {
  return (
    <AppShell>
      {/* HERO */}
      <SectionBlend glow>
        <section className="relative py-20 lg:py-28 bg-background">
          <div className="container-page">
            <Reveal className="max-w-3xl mx-auto text-center">
              <span className="eyebrow">
                <ShieldCheck className="size-3.5" />
                Seguridad
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mt-4">
                Seguridad y Cumplimiento{" "}
                <span className="text-gradient-orange">SUNAT</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
                Sistema para emisión de comprobantes electrónicos válidos ante
                SUNAT. Facturación electrónica conforme a normativa, con
                plataforma segura, moderna y fácil de usar.
              </p>
            </Reveal>

            {/* Trust badges row */}
            <Reveal delay={0.15} className="mt-12">
              <div className="flex flex-wrap justify-center gap-3">
                {complianceBadges.map((badge, i) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 bg-brand-gray border border-black/8 dark:border-white/8 px-4 py-2.5 rounded-full text-sm font-medium"
                    >
                      <Icon className="size-4 text-brand-orange" />
                      {badge.label}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>
      </SectionBlend>

      {/* TRUST GRID */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Protección de datos</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance mt-4">
              Comprobantes electrónicos enviados y validados ante{" "}
              <span className="text-gradient-orange">SUNAT</span>
            </h2>
            <p className="mt-4 text-base text-foreground/65 leading-relaxed">
              Cada capa de nuestra infraestructura está diseñada para proteger tu
              información fiscal y garantizar el cumplimiento normativo.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trustItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group bg-background border border-black/8 dark:border-white/8 p-6 hover:shadow-float transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center size-10 bg-brand-orange/10 text-brand-orange rounded-lg mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-base font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
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
                  Factura con seguridad{" "}
                  <span className="text-gradient-orange">garantizada</span>
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed">
                  Solicita una demo y verifica por qué cientos de empresas
                  confían en BREICORP para su cumplimiento fiscal.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12 sm:h-11"
                  >
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <Lock className="size-3.5 text-brand-orange" />
                    Cifrado AES-256
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FileCheck2 className="size-3.5 text-brand-orange" />
                    UBL 2.1
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </AppShell>
  );
}