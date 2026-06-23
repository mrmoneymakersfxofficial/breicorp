import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Instagram, Facebook, BookOpen } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { whatsappLink } from "@/lib/data/site-content";

const footerNav = {
  Producto: [
    { label: "Beneficios", href: "#beneficios" },
    { label: "Módulos", href: "#modulos" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Planes", href: "#planes" },
    { label: "API REST", href: "#modulos" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Clientes", href: "#testimonios" },
    { label: "Casos de éxito", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Términos y condiciones", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de cookies", href: "#" },
    { label: "Seguridad", href: "#" },
    { label: "Cumplimiento SUNAT", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-auto bg-brand-ink text-white overflow-hidden">
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center size-9 rounded-xl bg-primary">
                <LogoMarkMini />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight">
                BREI<span className="text-primary">CORP</span>
              </span>
            </div>
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
                <a href="tel:+51948261382" className="hover:text-white transition-colors">
                  +51 948 261 382
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <Mail className="size-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:hola@breicorp.com" className="hover:text-white transition-colors">
                  hola@breicorp.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
                <span>Av. Javier Prado 1234, San Isidro, Lima</span>
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

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} BREICORP S.A.C. Todos los derechos reservados. RUC 20601234567.
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

function LogoMarkMini() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 text-white" fill="currentColor" aria-hidden="true">
      <path d="M7 5h5.5c2.7 0 4.5 1.2 4.5 3.4 0 1.5-.8 2.4-2.1 2.9 1.6.4 2.5 1.5 2.5 3.2 0 2.4-1.9 3.8-4.9 3.8H7V5Zm2.9 5h2.6c1.1 0 1.8-.4 1.8-1.3 0-.8-.7-1.2-1.8-1.2H9.9V10Zm0 5.4h2.8c1.2 0 1.9-.5 1.9-1.4 0-.9-.7-1.4-1.9-1.4H9.9v2.8Z" />
    </svg>
  );
}
