import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
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
    icon: [{ url: "/logo/breicorp-logo-nav.webp", type: "image/webp" }],
    shortcut: "/logo/breicorp-logo-nav.webp",
    apple: "/logo/breicorp-logo-nav.webp",
  },
  openGraph: {
    title: "BREICORP — Facturación Electrónica Empresarial para Perú",
    description:
      "Automatiza tus comprobantes electrónicos, cumple con SUNAT y controla tu negocio desde una plataforma moderna, rápida y segura.",
    url: siteUrl,
    siteName: "BREICORP",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BREICORP — Facturación Electrónica Empresarial",
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
    images: ["/opengraph-image"],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="top-right" />
        </ThemeProvider>

        {/* Meta Pixel — Replace PIXEL_ID with actual pixel ID */}
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'PIXEL_ID');
          fbq('track', 'PageView');
        `}} />
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1" /></noscript>

        {/* Google Analytics — Replace GA_ID with actual measurement ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_ID');
        `}} />
      </body>
    </html>
  );
}
