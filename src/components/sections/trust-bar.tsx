"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, ShieldCheck, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Reveal,
  staggerContainer,
  staggerItem,
  Counter,
} from "@/components/shared/reveal";
import { whatsappLink } from "@/lib/data/site-content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const stats = [
  {
    value: 2400,
    suffix: "+",
    label: "Empresas activas",
    icon: Building2,
  },
  {
    value: 25,
    suffix: "",
    label: "Departamentos",
    icon: MapPin,
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Disponibilidad",
    decimals: 1,
    icon: ShieldCheck,
  },
  {
    value: 7,
    suffix: "/24",
    label: "Soporte técnico",
    icon: Headphones,
  },
];

/* All 45 client logos extracted from the Word document */
const clientLogos = Array.from({ length: 45 }, (_, i) => ({
  src: `/clients/image${i + 1}.webp`,
  alt: `Cliente ${i + 1} de BREICORP`,
}));

export function TrustBar() {
  return (
    <section id="clientes" className="relative py-16 lg:py-24 bg-brand-gray overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-100" aria-hidden="true" />

      <div className="container-page relative">
        {/* Header */}
        <Reveal className="text-center mb-10 lg:mb-14">
          <span className="eyebrow">Nuestros Clientes</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight text-balance mt-4">
            Empresas que{" "}
            <span className="text-gradient-orange">confían en nosotros</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Más de 2,400+ empresas en todo Perú eligen BREICORP para su
            facturación electrónica y gestión empresarial.
          </p>
        </Reveal>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12 lg:mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="bg-card rounded-2xl border border-black/8 dark:border-white/8 p-5 lg:p-6 text-center hover:shadow-float transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center size-9 rounded-lg bg-brand-orange/10 text-brand-orange mb-3">
                <stat.icon className="size-4.5" strokeWidth={1.75} />
              </div>
              <p className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-brand-orange leading-none">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-foreground/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos — Swiper Carousel */}
        <Reveal className="mb-10 lg:mb-14">
          <p className="text-center text-xs font-medium text-foreground/40 mb-6 uppercase tracking-wider">
            Desliza para ver más clientes
          </p>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={16}
            slidesPerView="auto"
            speed={4000}
            loop
            freeMode
            allowTouchMove
            grabCursor
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="clients-swiper !overflow-visible"
          >
            {clientLogos.map((logo, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <div className="flex items-center justify-center h-20 sm:h-24 px-5 sm:px-7 bg-card border border-black/8 dark:border-white/8 rounded-xl hover:shadow-float hover:border-brand-orange/20 transition-all duration-300 cursor-grab active:cursor-grabbing">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className="max-h-14 sm:max-h-16 w-auto object-contain select-none pointer-events-none"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal className="text-center">
          <p className="text-sm text-foreground/50 mb-2">
            48 empresas confían en nosotros
          </p>
          <p className="text-xs text-foreground/35 mb-5">
            Únete a más de 2,400 empresas que ya digitalizan su negocio
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-glow-orange group h-11 sm:h-12"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Comienza ahora
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}