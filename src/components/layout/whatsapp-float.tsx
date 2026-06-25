"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { whatsappLink } from "@/lib/data/site-content";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={cn(
        // Desktop: bottom-right. Mobile: above bottom-nav (h-16 + safe-area ≈ 98px)
        "fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-40 flex flex-col items-end gap-2.5 transition-all duration-500",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[280px] sm:w-[300px] max-w-[calc(100vw-2rem)] rounded-2xl bg-background border border-black/10 dark:border-white/10 shadow-float overflow-hidden"
          >
            {/* Chat header — WhatsApp teal */}
            <div className="bg-[#075E54] text-white p-3.5 flex items-start gap-3">
              <div className="size-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="size-4.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">BREICORP · Soporte</p>
                <p className="text-[11px] text-white/80 flex items-center gap-1.5">
                  <span className="inline-block size-1.5 rounded-full bg-green-400 animate-pulse" />
                  En línea ahora
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="text-white/80 hover:text-white p-1"
              >
                <X className="size-4" />
              </button>
            </div>
            {/* Chat body */}
            <div className="p-3.5 bg-brand-gray">
              <div className="bg-background rounded-lg rounded-tl-none p-2.5 shadow-sm text-[13px] text-foreground mb-2 leading-relaxed">
                ¡Hola! 👋 Soy parte del equipo BREICORP. ¿En qué podemos ayudarte con tu facturación electrónica?
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#25D366] hover:bg-[#1ebd58] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
              >
                Abrir conversación
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB — official WhatsApp green circle */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={!reduceMotion ? { scale: 1.08 } : undefined}
        whileTap={!reduceMotion ? { scale: 0.94 } : undefined}
        aria-label="Contactar por WhatsApp"
        className="relative inline-flex items-center justify-center size-14 lg:size-[60px] rounded-full text-white shadow-[0_4px_14px_-2px_rgba(37,211,102,0.45),0_8px_28px_-4px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_20px_-2px_rgba(37,211,102,0.55),0_12px_36px_-6px_rgba(37,211,102,0.30)] transition-shadow duration-300 bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1a9e4a]"
      >
        {/* Pulse ring — only when closed and first shown */}
        {!open && show && (
          <motion.span
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
            aria-hidden="true"
          />
        )}
        <span className="relative">
          {open ? (
            <X className="size-6" strokeWidth={2} />
          ) : (
            <WhatsAppIcon className="size-7 lg:size-[30px]" />
          )}
        </span>
      </motion.button>
    </div>
  );
}

/** Official WhatsApp logo icon (exact SVG path) */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}