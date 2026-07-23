import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Instagram, Facebook, BookOpen, Building2, Smartphone } from "lucide-react";
import { whatsappLink } from "@/lib/data/site-content";

const footerNav = {
  Producto: [
    { label: "Módulos", href: "/modulos" },
    { label: "Planes", href: "/planes" },
    { label: "Rubros", href: "/rubros" },
    { label: "App Móvil", href: "/app-movil" },
    { label: "Plataforma", href: "/plataforma" },
  ],
  Empresa: [
    { label: "Nosotros", href: "/empresa" },
    { label: "Clientes", href: "/clientes" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Términos y condiciones", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de cookies", href: "#" },
    { label: "Seguridad", href: "/seguridad" },
    { label: "Cumplimiento SUNAT", href: "/seguridad" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-auto bg-brand-ink text-white overflow-hidden pb-28 lg:pb-0">
      {/* Top accent — gradient line for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative pt-16 lg:pt-20 pb-8 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Image
              src="/logo/breicorp-logo-nav.webp"
              alt="BREICORP"
              width={44}
              height={44}
              className="h-11 w-auto object-contain"
            />
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Plataforma SaaS de facturación electrónica empresarial para Perú. Cumplimiento SUNAT, automatización y control en tiempo real. Diseñada para empresas que quieren escalar.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center size-9 rounded-lg bg-white/5 hover:bg-primary transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center size-9 rounded-lg bg-white/5 hover:bg-primary transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center size-9 rounded-lg bg-white/5 hover:bg-primary transition-colors"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title} className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/70">
                <Phone className="size-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:+51908877659" className="hover:text-white transition-colors">
                  +51 908 877 659
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <Mail className="size-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:breicorp@gmail.com" className="hover:text-white transition-colors">
                  breicorp@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
                <span>Av. Tito Jaime 642, Tingo María - Huánuco</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <Clock className="size-4 mt-0.5 text-primary shrink-0" />
                <span>Lun–Sáb · 8:00 — 20:00</span>
              </li>
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <MessageCircle className="size-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {/* Medios de pago */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 text-center mb-4">
            Medios de pago
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Building2 className="size-4 text-primary" />
              <div>
                <p className="font-medium text-white/80">BCP — Cuenta Corriente</p>
                <p className="text-xs text-white/50">5607324697001</p>
                <p className="text-xs text-white/40">CCI: 002-560-007324697001-13</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="size-4 text-primary" />
              <div>
                <p className="font-medium text-white/80">Yape</p>
                <p className="text-xs text-white/50">908 877 659</p>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-white/30 mt-3">BREICORP E.I.R.L.</p>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} BREICORP E.I.R.L. Todos los derechos reservados. RUC 20615859312. Nacida en la ciudad de Tingo María.
          </p>
          <p className="text-xs text-white/40">
            Diseñado y desarrollado por{" "}
            <a
              href="https://fastpagepro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
              style={{ color: "#FF6801" }}
            >
              FastPagePro
            </a>
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Libro de Reclamaciones */}
            <a
              href="https://breicorpperu.breicorp.pe/complaint"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors text-xs font-medium text-white/80"
              aria-label="Libro de Reclamaciones"
            >
              <BookOpen className="size-3.5 text-brand-orange" />
              Libro de Reclamaciones
            </a>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-green-400" />
                Sistemas operativos
              </span>
              <span className="text-white/20">·</span>
              <span>SUNAT compliant</span>
              <span className="text-white/20">·</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


