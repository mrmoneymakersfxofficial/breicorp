"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MessageCircle, Phone, Mail, MapPin, Clock, FileCheck2, Building2 } from "lucide-react";
import { whatsappLink, WHATSAPP_NUMBER } from "@/lib/data/site-content";

export function ContactForm() {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      `*Nombre:* ${form.nombre}`,
      `*Email:* ${form.email}`,
      `*Teléfono:* ${form.telefono}`,
      `*Empresa/Rubro:* ${form.empresa}`,
      `*Mensaje:* ${form.mensaje}`,
    ].join("%0A");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre *</Label>
          <Input
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="correo@ejemplo.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            placeholder="+51 900 000 000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa">Empresa / Rubro</Label>
          <Input
            id="empresa"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Tu empresa o giro de negocio"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Cuéntanos en qué podemos ayudarte..."
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-12"
      >
        <Send className="size-4" />
        Enviar por WhatsApp
      </Button>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-extrabold mb-6">
          Información de contacto
        </h2>
      </div>

      <div className="bg-background border border-black/8 dark:border-white/8 p-6 space-y-6">
        {/* WhatsApp */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 group"
        >
          <div className="inline-flex items-center justify-center size-10 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0">
            <MessageCircle className="size-5" />
          </div>
          <div>
            <p className="text-sm font-bold group-hover:text-brand-orange transition-colors">
              WhatsApp directo
            </p>
            <p className="text-sm text-foreground/60 mt-0.5">
              +51 948 261 382
            </p>
          </div>
        </a>

        {/* Phone */}
        <a href="tel:+51948261382" className="flex items-start gap-4 group">
          <div className="inline-flex items-center justify-center size-10 bg-brand-orange/10 text-brand-orange rounded-lg shrink-0">
            <Phone className="size-5" />
          </div>
          <div>
            <p className="text-sm font-bold group-hover:text-brand-orange transition-colors">
              Teléfono
            </p>
            <p className="text-sm text-foreground/60 mt-0.5">
              +51 948 261 382
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:hola@breicorp.com"
          className="flex items-start gap-4 group"
        >
          <div className="inline-flex items-center justify-center size-10 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-lg shrink-0">
            <Mail className="size-5" />
          </div>
          <div>
            <p className="text-sm font-bold group-hover:text-brand-orange transition-colors">
              Email
            </p>
            <p className="text-sm text-foreground/60 mt-0.5">
              hola@breicorp.com
            </p>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="inline-flex items-center justify-center size-10 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg shrink-0">
            <MapPin className="size-5" />
          </div>
          <div>
            <p className="text-sm font-bold">Dirección</p>
            <p className="text-sm text-foreground/60 mt-0.5">
              Av. Tito Jaime 642, Tingo María — Huánuco
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-4">
          <div className="inline-flex items-center justify-center size-10 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg shrink-0">
            <Clock className="size-5" />
          </div>
          <div>
            <p className="text-sm font-bold">Horario de atención</p>
            <p className="text-sm text-foreground/60 mt-0.5">
              Lun — Sáb · 8:00 — 20:00
            </p>
          </div>
        </div>
      </div>

      {/* Legal info */}
      <div className="bg-background border border-black/8 dark:border-white/8 p-6 space-y-3">
        <p className="text-sm font-bold flex items-center gap-2">
          <Building2 className="size-4 text-brand-orange" />
          Datos legales
        </p>
        <div className="space-y-1.5 text-sm text-foreground/60">
          <p className="flex items-center gap-2">
            <FileCheck2 className="size-3.5 shrink-0" />
            <span>
              <strong className="text-foreground/80">RUC:</strong> 20610570349
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FileCheck2 className="size-3.5 shrink-0" />
            <span>
              <strong className="text-foreground/80">Partida Electrónica:</strong>{" "}
              11084023
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}