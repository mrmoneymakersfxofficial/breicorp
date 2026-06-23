import {
  ShieldCheck,
  Zap,
  Users,
  Headset,
  Clock,
  FileCheck2,
  Receipt,
  CreditCard,
  PackageCheck,
  BarChart3,
  Building2,
  Boxes,
  Code2,
  LayoutDashboard,
  Rocket,
  Crown,
  Shield,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Seguridad avanzada",
    description:
      "Cifrado AES-256, firma digital certificada y respaldo automático. Cumplimos los estándares más altos de protección de datos fiscales.",
  },
  {
    icon: FileCheck2,
    title: "Integración SUNAT",
    description:
      "Envío automático de comprobantes a SUNAT en segundos. Recepción de CDR y constancia de recepción en tiempo real, sin intervención manual.",
  },
  {
    icon: Zap,
    title: "Automatización total",
    description:
      "Genera series, envía XML y PDF, notifica a tus clientes por correo y WhatsApp de forma automática. Reduce horas de trabajo a segundos.",
  },
  {
    icon: Users,
    title: "Multiusuario",
    description:
      "Roles y permisos granulares para administradores, cajeros, contadores y vendedores. Controla quién emite, quién anula y quién consulta.",
  },
  {
    icon: Headset,
    title: "Soporte especializado",
    description:
      "Equipo en Perú con experiencia en normativa SUNAT. Atención por WhatsApp, chat y teléfono, con tiempo de respuesta menor a 15 minutos.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description:
      "Infraestructura cloud con 99.98% de uptime. Factura desde cualquier dispositivo, en cualquier momento, sin interrupciones.",
  },
];

export interface Module {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

export const modules: Module[] = [
  {
    icon: Receipt,
    title: "Facturación electrónica",
    description:
      "Emisión de facturas con serie automática, cálculo de IGV e ISC, envío SUNAT y descarga XML/PDF.",
    tag: "Core",
  },
  {
    icon: CreditCard,
    title: "Boletas electrónicas",
    description:
      "Boletas con cálculo automático, redondeo y envío al cliente. Integrado con POS y e-commerce.",
  },
  {
    icon: FileCheck2,
    title: "Notas de crédito y débito",
    description:
      "Anulaciones, devoluciones y ajustes vinculados al comprobante original. Cumplimiento SUNAT garantizado.",
  },
  {
    icon: PackageCheck,
    title: "Guías de remisión",
    description:
      "Guías de remisión electrónicas con transporte, conductor y punto de llegada. Firma y envío automático.",
    tag: "Logística",
  },
  {
    icon: BarChart3,
    title: "Reportes y analítica",
    description:
      "Dashboards de ventas, impuestos y rentabilidad. Exportación a Excel y conexión con tu contador.",
  },
  {
    icon: Users,
    title: "Gestión de clientes",
    description:
      "CRM integrado con historial de comprobantes, saldos pendientes y recordatorios automáticos de pago.",
  },
  {
    icon: Boxes,
    title: "Inventario y stock",
    description:
      "Control de productos, lotes y series. Sincronización con almacenes, alertas de stock mínimo y costos.",
  },
  {
    icon: Building2,
    title: "Multiempresa",
    description:
      "Administra varios RUCs desde una sola cuenta. Facturación centralizada con reportes consolidados.",
    tag: "Pro",
  },
  {
    icon: Code2,
    title: "API REST",
    description:
      "Conecta tu ERP, e-commerce o app móvil con nuestra API. Webhooks en tiempo real y SDKs en 4 lenguajes.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard financiero",
    description:
      "Métricas en vivo: facturación diaria, impuestos por período, top clientes y proyección mensual.",
  },
];

export interface Plan {
  id: string;
  name: string;
  icon: LucideIcon;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export const plans: Plan[] = [
  {
    id: "emprendedor",
    name: "Plan Emprendedor",
    icon: Rocket,
    monthly: 50,
    yearly: 480,
    description: "Ideal para negocios que inician",
    features: [
      "250 comprobantes por mes",
      "750 documentos por mes",
      "01 establecimiento",
      "01 usuario",
      "1000 productos y/o servicios",
      "Todos los módulos incluidos",
      "Plataforma web y celular",
      "Capacitación online o presencial",
      "Soporte por WhatsApp",
    ],
    cta: "Elegir plan",
  },
  {
    id: "empresario",
    name: "Plan Empresario",
    icon: TrendingUp,
    monthly: 80,
    yearly: 720,
    description: "Ideal para negocios en crecimiento",
    features: [
      "500 comprobantes por mes",
      "1500 documentos por mes",
      "02 establecimientos",
      "04 usuarios",
      "1000 productos y/o servicios",
      "Todos los módulos incluidos",
      "Plataforma web y celular",
      "Capacitación online o presencial",
      "Soporte por WhatsApp",
    ],
    cta: "Solicitar demo",
    highlighted: true,
    badge: "Plan recomendado",
  },
  {
    id: "premium",
    name: "Plan Premium",
    icon: Shield,
    monthly: 100,
    yearly: 1080,
    description: "Mayor capacidad para tu operación",
    features: [
      "1000 comprobantes por mes",
      "2400 documentos por mes",
      "03 establecimientos",
      "06 usuarios",
      "2000 productos y/o servicios",
      "Todos los módulos incluidos",
      "Plataforma web y celular",
      "Capacitación online o presencial",
      "Soporte por WhatsApp",
    ],
    cta: "Elegir plan",
  },
  {
    id: "full",
    name: "Plan Full",
    icon: Crown,
    monthly: 150,
    yearly: 1680,
    description: "Máximo control para empresas avanzadas",
    features: [
      "1500 comprobantes por mes",
      "4500 documentos por mes",
      "04 establecimientos",
      "08 usuarios",
      "4000 productos y/o servicios",
      "Todos los módulos incluidos",
      "Plataforma web y celular",
      "Capacitación online o presencial",
      "Soporte por WhatsApp",
    ],
    cta: "Elegir plan",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Carla Mendoza",
    role: "Gerente Comercial",
    company: "Inversiones Andinas S.A.C.",
    quote:
      "Migramos de facturación manual a BREICORP y reducimos 18 horas mensuales de trabajo administrativo. El envío automático a SUNAT es instantáneo y ya no tenemos observaciones.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Jorge Quispe",
    role: "CFO",
    company: "Grupo Restaurantero Lima",
    quote:
      "Operamos 7 restaurantes y necesitábamos un sistema multi-sucursal. BREICORP centraliza toda la facturación y el dashboard financiero nos da visibilidad en tiempo real de cada local.",
    rating: 5,
    initials: "JQ",
  },
  {
    name: "Dra. Lucía Fernández",
    role: "Directora",
    company: "Clínica San Felipe",
    quote:
      "Cumplir con SUNAT en salud requiere precisión. BREICORP automatiza notas de crédito por reembolsos y mantiene un historial impecable. El soporte es excepcional.",
    rating: 5,
    initials: "LF",
  },
  {
    name: "Andrés Ríos",
    role: "Fundador",
    company: "MiniMarket El Sol",
    quote:
      "Integramos BREICORP con nuestro POS en una semana. Las boletas se emiten en 2 segundos y el inventario se actualiza solo. La integración con WhatsApp para enviar comprobantes es brillante.",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Mónica Salazar",
    role: "Contadora General",
    company: "Distribuidora Norte S.A.",
    quote:
      "Como contadora, valoro la precisión fiscal. BREICORP aplica correctamente IGV, ISC y retenciones. Los reportes mensuales me ahorran días de trabajo al cierre.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Raúl Cárdenas",
    role: "CEO",
    company: "Tech Retail Perú",
    quote:
      "La API REST nos permitió conectar nuestra tienda online en 3 días. Facturamos automáticamente cada compra y nuestros clientes reciben su comprobante en segundos. Nivel enterprise real.",
    rating: 5,
    initials: "RC",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "¿BREICORP está homologado por SUNAT?",
    answer:
      "Sí. BREICORP opera como proveedor de servicios electrónicos (PSE) cumpliendo la normativa vigente de SUNAT. Todos los comprobantes se envían en formato UBL 2.1 y la firma digital se realiza con certificado de SOL. Recibes el CDR (Constancia de Recepción) en segundos, con trazabilidad completa de cada operación.",
  },
  {
    question: "¿Cuánto demora la implementación?",
    answer:
      "El plan Emprendedor está operativo en menos de 10 minutos: creas tu cuenta, registras tu RUC, cargas tu certificado digital y empiezas a facturar. Los planes Premium y Enterprise incluyen acompañamiento de un gerente de cuenta y migración asistida desde tu sistema actual, normalmente en 5 a 7 días hábiles.",
  },
  {
    question: "¿Necesito un certificado digital propio?",
    answer:
      "Sí. La normativa SUNAT exige un certificado digital para firmar comprobantes. BREICORP te guía paso a paso para obtenerlo (SUNAT o proveedor privado) y lo cargas una sola vez en la plataforma. Si ya cuentas con uno, puedes usarlo inmediatamente sin trámite adicional.",
  },
  {
    question: "¿Puedo manejar varias empresas o sucursales?",
    answer:
      "Absolutamente. Los planes Premium y Enterprise soportan múltiples RUCs y sucursales desde una sola cuenta. Cada sucursal puede tener su propia serie de comprobantes, almacén y usuarios. Generamos reportes consolidados y desglosados por ubicación para que tengas control total de la operación.",
  },
  {
    question: "¿Qué pasa si excedo el límite de comprobantes de mi plan?",
    answer:
      "Te notificamos antes de llegar al límite. Puedes subir de plan en cualquier momento desde el panel, sin perder datos ni configuración. Los planes Empresario, Premium y Enterprise incluyen comprobantes ilimitados, por lo que tu operación escala sin fricción.",
  },
  {
    question: "¿Cómo se realizan los pagos de la suscripción?",
    answer:
      "Aceptamos tarjetas Visa, Mastercard y American Express, además de Yape, Plin, transferencias bancarias y pagos presenciales. Las suscripciones anuales ofrecen 20% de ahorro. Emitimos factura electrónica mensual automáticamente y puedes descargar el historial completo desde tu panel.",
  },
  {
    question: "¿Tienen API para integrar con mi sistema?",
    answer:
      "Sí. BREICORP cuenta con una API REST documentada con OpenAPI 3.0, SDKs oficiales para JavaScript, Python, PHP y Java, y webhooks en tiempo real. Puedes automatizar emisión, consulta y anulación de comprobantes, sincronizar inventario y recibir notificaciones instantáneas de cada operación.",
  },
  {
    question: "¿Qué soporte técnico ofrecen?",
    answer:
      "Soporte local en Perú por WhatsApp, chat en vivo, correo y teléfono. El plan Emprendedor incluye respuesta en menos de 4 horas hábiles, Empresario respuesta prioritaria 24/7, y Premium/Enterprise incluyen account manager dedicado y SLA con tiempo de respuesta menor a 15 minutos en incidencias críticas.",
  },
];

export const WHATSAPP_NUMBER = "51948261382";
export const WHATSAPP_MESSAGE =
  "Hola BREICORP, deseo información sobre el sistema de facturación electrónica.";

export function whatsappLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
