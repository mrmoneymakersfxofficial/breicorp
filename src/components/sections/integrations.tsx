"use client";

import { motion } from "framer-motion";
import { Code2, Webhook, KeyRound, Boxes, Zap, Database, Cloud, GitBranch } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/shared/reveal";

const integrations = [
  { icon: Code2, name: "API REST", description: "OpenAPI 3.0 · SDKs en 4 lenguajes" },
  { icon: Webhook, name: "Webhooks", description: "Eventos en tiempo real · retries automáticos" },
  { icon: KeyRound, name: "OAuth 2.0", description: "SSO + SAML · autenticación empresarial" },
  { icon: Boxes, name: "POS", description: "Integración nativa con principales POS del Perú" },
  { icon: Database, name: "ERP", description: "SAP · Oracle · Microsoft Dynamics" },
  { icon: Cloud, name: "Cloud Sync", description: "Respaldo automático · multi-región" },
  { icon: GitBranch, name: "E-commerce", description: "Shopify · WooCommerce · Magento" },
  { icon: Zap, name: "Automatización", description: "Zapier · Make · n8n · workflows custom" },
];

export function Integrations() {
  return (
    <section id="integraciones" className="relative py-16 lg:py-24 bg-background">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="eyebrow justify-center">Integraciones</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mt-4">
            Conecta BREICORP con{" "}
            <span className="text-gradient-orange">todo tu stack</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/65 leading-relaxed">
            API REST documentada, webhooks en tiempo real y SDKs oficiales.
            Integra facturación electrónica en tu ERP, e-commerce o app móvil en días, no meses.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-black/8"
        >
          {integrations.map((int) => (
            <motion.div
              key={int.name}
              variants={staggerItem}
              className="group p-6 lg:p-7 border-r border-b border-black/8 hover:bg-brand-gray/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center size-10 bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors mb-4">
                <int.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-sm font-bold mb-1">{int.name}</h3>
              <p className="text-xs text-foreground/55 leading-relaxed">{int.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Code snippet — integrated */}
        <Reveal delay={0.2} className="mt-10 lg:mt-14">
          <div className="bg-brand-ink text-white overflow-hidden border border-white/8">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#ff5f57]" />
                <div className="size-2 rounded-full bg-[#febc2e]" />
                <div className="size-2 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] text-white/40 font-mono">emitir-factura.ts</span>
              </div>
              <span className="text-[10px] text-white/40 font-mono">POST /api/v1/invoices</span>
            </div>
            <pre className="p-5 sm:p-6 text-[12px] sm:text-[13px] font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-white/40">{"import { BREICORP } from '@breicorp/sdk';"}</span>
                {"\n\n"}
                <span className="text-white/40">{"const breicorp = new BREICORP(process.env.BREICORP_KEY);"}</span>
                {"\n\n"}
                <span className="text-white/40">{"const factura = await breicorp.invoices.emit({"}</span>
                {"\n"}
                <span className="text-white">{"  tipo: '01', // Factura"}</span>
                {"\n"}
                <span className="text-white">{"  cliente: clienteRuc,"}</span>
                {"\n"}
                <span className="text-white">{"  items: carrito,"}</span>
                {"\n"}
                <span className="text-white">{"  serie: 'F001',"}</span>
                {"\n"}
                <span className="text-white/40">{"});"}</span>
                {"\n\n"}
                <span className="text-white/40">{"// → Envío automático a SUNAT · CDR en 1.2s"}</span>
                {"\n"}
                <span className="text-white/40">{"console.log(factura.cdr);"}</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
