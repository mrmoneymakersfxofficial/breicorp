import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://breicorp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BREICORP — Sistema de Facturación Electrónica Empresarial | SUNAT Perú",
    template: "%s | BREICORP",
  },
  description:
    "Plataforma SaaS empresarial de facturación electrónica para Perú. Automatiza boletas, facturas, notas de crédito y guías de remisión con cumplimiento SUNAT en tiempo real. Diseñada para empresas que quieren escalar.",
  keywords: [
    "facturación electrónica Perú",
    "sistema SUNAT",
    "comprobantes electrónicos CPE",
    "software facturación Perú",
    "facturación para restaurantes",
    "facturación para clínicas",
    "facturación para minimarket",
    "software POS Perú",
    "BREICORP",
    "ERP empresarial Perú",
  ],
  authors: [{ name: "BREICORP" }],
  creator: "BREICORP",
  publisher: "BREICORP",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/brand/logo.png", type: "image/png" }],
    shortcut: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: "BREICORP — Facturación Electrónica Empresarial para Perú",
    description:
      "Automatiza tus comprobantes electrónicos, cumple con SUNAT y controla tu negocio desde una plataforma moderna, rápida y segura.",
    url: siteUrl,
    siteName: "BREICORP",
    images: [
      {
        url: "/brand/logo.png",
        width: 639,
        height: 646,
        alt: "BREICORP",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BREICORP — Facturación Electrónica Empresarial SUNAT Perú",
    description:
      "Plataforma SaaS de facturación electrónica empresarial. Cumplimiento SUNAT, automatización y control en tiempo real.",
    images: ["/brand/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          manrope.variable,
          jetbrainsMono.variable,
          "font-sans antialiased bg-background text-foreground"
        )}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-right" />
      </body>
    </html>
  );
}
