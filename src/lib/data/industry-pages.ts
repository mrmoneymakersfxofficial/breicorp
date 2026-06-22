import {
  UtensilsCrossed,
  Stethoscope,
  ShoppingBag,
  Store,
  Building2,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface IndustryPage {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  benefits: { title: string; description: string }[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  stats: { value: string; label: string }[];
}

export const industryPages: IndustryPage[] = [
  {
    slug: "facturacion-para-restaurantes",
    title: "Facturación Electrónica para Restaurantes en Perú",
    shortTitle: "Restaurantes",
    icon: UtensilsCrossed,
    keyword: "facturación para restaurantes",
    metaTitle: "Facturación Electrónica para Restaurantes Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para restaurantes en Perú. Integración POS, boletas masivas, manejo de propinas y cumplimiento SUNAT. Emisión en 2 segundos.",
    heroHeadline: "Facturación electrónica para restaurantes que aman la eficiencia",
    heroSubheadline:
      "Integra tu POS con BREICORP y emite boletas y facturas en 2 segundos. Controla propinas, maneja mesas, sync multi-sucursal y cumplimiento SUNAT automático.",
    benefits: [
      {
        title: "Integración POS nativa",
        description:
          "Conecta tu sistema POS (Aloha, Posnet, IFood, Square) con BREICORP. Cada venta genera automáticamente su comprobante electrónico. Sin doble trabajo.",
      },
      {
        title: "Boletas masivas en horas pico",
        description:
          "Emite hasta 50 boletas por minuto en almuerzo y cena. Procesamiento por lotes con validación SUNAT en paralelo, sin cuellos de botella.",
      },
      {
        title: "Propinas y service charge",
        description:
          "Manejo automático de propinas del 10%, service charge opcional y reparto entre mozos. Todo correctamente registrado en el comprobante.",
      },
      {
        title: "Multi-sucursal centralizado",
        description:
          "Administra todos tus locales desde un solo panel. Cada sucursal tiene su serie, su inventario y sus usuarios. Reportes consolidados en tiempo real.",
      },
    ],
    features: [
      {
        title: "Facturación por mesa",
        description:
          "Vincula cada comprobante a una mesa y mesero. Historial completo para resolver disputas y analizar consumo por zona del local.",
      },
      {
        title: "Menú digital con IGV correcto",
        description:
          "Cada producto del menú tiene su IGV (18%) y ISC configurados correctamente. No más errores de cálculo al cerrar la cuenta.",
      },
      {
        title: "Delivery y takeout",
        description:
          "Boletas para delivery con datos del cliente desde la app. Integración con Rappi, PedidosYa y WhatsApp Business.",
      },
      {
        title: "Reportes de venta por hora",
        description:
          "Identifica tus horas pico, platos más vendidos y rentabilidad por categoría. Datos para optimizar tu carta y tu personal.",
      },
    ],
    faqs: [
      {
        question: "¿BREICORP funciona con mi sistema POS actual?",
        answer:
          "Sí. Tenemos integraciones nativas con los principales POS del Perú (Aloha, Posnet, IFood, Square, Sapa) y una API REST abierta para conectar cualquier sistema. La mayoría de restaurantes están operando en menos de 48 horas.",
      },
      {
        question: "¿Cómo maneja las propinas del 10%?",
        answer:
          "BREICORP calcula automáticamente la propina del 10% sobre el subtotal (opcional para el cliente), la registra como ingreso del mozo y la incluye correctamente en el comprobante. Al cierre del día, genera el reporte de propinas por mesero para liquidación.",
      },
      {
        question: "¿Puedo emitir boletas masivas en hora almuerzo?",
        answer:
          "Sí, nuestro sistema está diseñado para alta concurrencia. Procesamos hasta 50 boletas por minuto por sucursal con validación SUNAT en paralelo. Restaurantes con 200+ mesas facturan sin retrasos en hora pico.",
      },
      {
        question: "¿Funciona para restaurantes con varios locales?",
        answer:
          "Absolutamente. El plan Premium soporta hasta 3 RUCs y sucursales ilimitadas. Cada local tiene su propia serie de comprobantes, inventario y usuarios, pero todo se consolida en un dashboard central.",
      },
    ],
    stats: [
      { value: "180+", label: "Restaurantes activos" },
      { value: "2.4M", label: "Boletas/mes" },
      { value: "2s", label: "Tiempo de emisión" },
      { value: "99.6%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-clinicas",
    title: "Facturación Electrónica para Clínicas y Centros Médicos en Perú",
    shortTitle: "Clínicas",
    icon: Stethoscope,
    keyword: "facturación para clínicas",
    metaTitle: "Facturación Electrónica para Clínicas Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para clínicas, centros médicos y consultorios en Perú. Notas de crédito por reembolsos, facturación por aseguradora, series múltiples.",
    heroHeadline: "Facturación electrónica clínica con precisión fiscal impecable",
    heroSubheadline:
      "Maneja reembolsos de aseguradoras, facturación por convenio, notas de crédito automáticas y series múltiples para cada especialidad. Cumplimiento SUNAT garantizado.",
    benefits: [
      {
        title: "Reembolsos de aseguradoras",
        description:
          "Notas de crédito automáticas vinculadas a la factura original cuando la aseguradora rechaza o ajusta un monto. Trazabilidad completa para auditoría.",
      },
      {
        title: "Facturación por convenio",
        description:
          "Configura convenios con EPS, seguros privados y empresas. Tarifas diferenciadas por servicio y afiliación, con facturación mensual consolidada.",
      },
      {
        title: "Series múltiples por especialidad",
        description:
          "Cada especialidad (consulta, laboratorio, imagenología, cirugía) puede tener su propia serie de comprobantes. Organización profesional sin límites.",
      },
      {
        title: "Cumplimiento SUNAT sector salud",
        description:
          "Aplicamos correctamente IGV, ISC (donde aplica), y exoneraciones por servicios médicos. Nuestro equipo conoce la normativa sectorial a profundidad.",
      },
    ],
    features: [
      {
        title: "Historia clínica vinculada",
        description:
          "Cada comprobante se vincula con el ID del paciente y la atención. Auditoría completa para SUNAT y para la propia clínica.",
      },
      {
        title: "Copagos y deducibles",
        description:
          "Cálculo automático de copago según el plan del paciente. Diferenciación clara entre monto aseguradora y monto paciente en el comprobante.",
      },
      {
        title: "Facturación consolidada mensual",
        description:
          "Genera facturas mensuales consolidadas por aseguradora o empresa con todas las atenciones del período. Reduce 80% del trabajo administrativo.",
      },
      {
        title: "Reportes fiscal-contables",
        description:
          "Reportes de ingresos por especialidad, por aseguradora, por tipo de servicio. Exportación a Excel para tu contador y para auditoría externa.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo manejan los reembolsos de aseguradoras?",
        answer:
          "Cuando una aseguradora rechaza o ajusta un monto, BREICORP genera automáticamente la nota de crédito vinculada a la factura original y emite una nueva factura con el monto correcto. Todo queda trazado para auditoría.",
      },
      {
        question: "¿Puedo tener series diferentes por especialidad?",
        answer:
          "Sí. Cada especialidad puede tener sus propias series de facturas, boletas y notas de crédito. Es ideal para clínicas con varios servicios (consulta externa, laboratorio, imagenología, hospitalización) que quieren mantener orden contable separado.",
      },
      {
        question: "¿Cumple con la normativa SUNAT del sector salud?",
        answer:
          "Sí. Aplicamos correctamente IGV (18%), ISC donde aplica, y exoneraciones por servicios médicos esenciales según el TUO de la Ley del IGV. Nuestro equipo legal fiscal mantiene el sistema actualizado con cada cambio normativo.",
      },
      {
        question: "¿Generan facturas mensuales consolidadas por aseguradora?",
        answer:
          "Sí. Al cierre del mes, BREICORP consolida todas las atenciones de cada aseguradora en una sola factura con detalle anexo. Reduce drásticamente el trabajo administrativo y los errores de facturación.",
      },
    ],
    stats: [
      { value: "85+", label: "Clínicas activas" },
      { value: "320k", label: "Atenciones/mes" },
      { value: "18", label: "Aseguradoras integradas" },
      { value: "100%", label: "Trazabilidad fiscal" },
    ],
  },
  {
    slug: "facturacion-para-minimarket",
    title: "Facturación Electrónica para Minimarkets y Bodegas en Perú",
    shortTitle: "Minimarkets",
    icon: ShoppingBag,
    keyword: "facturación para minimarket",
    metaTitle: "Facturación Electrónica para Minimarkets Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para minimarkets, bodegas y tiendas en Perú. Boletas masivas, control de inventario, sync multi-sucursal, código de barras.",
    heroHeadline: "Facturación electrónica para minimarkets que venden mucho y rápido",
    heroSubheadline:
      "Boletas masivas con escáner de código de barras, inventario en tiempo real, sync entre sucursales y reportes de rotación de productos. Cumplimiento SUNAT sin fricción.",
    benefits: [
      {
        title: "Boletas con escáner de código de barras",
        description:
          "Cada producto tiene su UPC/EAN configurado. El cajero escanea y la boleta se arma en segundos. Compatible con cualquier escáner USB del mercado.",
      },
      {
        title: "Inventario en tiempo real",
        description:
          "Cada venta descuenta stock automáticamente. Alertas de stock mínimo, productos por vencer y rotación lenta. Nunca más te quedes sin vender por falta de stock.",
      },
      {
        title: "Sync multi-sucursal",
        description:
          "Tienes 3, 5 o 20 tiendas? Todos los productos, precios y clientes se sincronizan automáticamente. Cambia un precio en una tienda y se actualiza en todas.",
      },
      {
        title: "Código de barras y peso",
        description:
          "Soporte para productos por unidad (UPC) y por peso (balanza con código de barras). Ideal para minimarkets con sección de frutas, verduras y carnes.",
      },
    ],
    features: [
      {
        title: "Precios y promociones centralizados",
        description:
          "Define precios, ofertas 2x1, descuentos por volumen y vigencias desde el panel central. Se aplican automáticamente en todas las cajas.",
      },
      {
        title: "Control de vencimientos",
        description:
          "Alertas tempranas de productos por vencer. Reportes de mermas y productos con baja rotación para optimizar tu compra.",
      },
      {
        title: "Reportes de venta por categoría",
        description:
          "Identifica tus categorías estrella: bebidas, abarrotes, limpieza, lacteos. Margen de ganancia por categoría y por producto individual.",
      },
      {
        title: "Integración con proveedores",
        description:
          "Carga masiva de productos desde Excel o desde la API de tu distribuidor mayorista. Ordenes de compra automáticas cuando el stock baja.",
      },
    ],
    faqs: [
      {
        question: "¿Funciona con cualquier escáner de código de barras?",
        answer:
          "Sí. BREICORP funciona con cualquier escáner USB estándar (Honeywell, Zebra, Symbol, genéricos). También soporta balanzas con etiquetas de código de barras (formato EAN-13 y PLU).",
      },
      {
        question: "¿Puedo manejar varios minimarkets desde una sola cuenta?",
        answer:
          "Sí. El plan Premium soporta hasta 3 RUCs y sucursales ilimitadas. Cada tienda tiene su propia serie de comprobantes, su inventario y sus cajeros, pero tú ves todo consolidado desde un panel central.",
      },
      {
        question: "¿Cómo maneja productos por peso (frutas, verduras)?",
        answer:
          "BREICORP se integra con balanzas electrónicas que imprimen etiquetas con código de barras (formato PLU). El cajero escanea la etiqueta y el sistema lee automáticamente el producto y el peso, calculando el precio correcto.",
      },
      {
        question: "¿Tiene control de vencimientos?",
        answer:
          "Sí. Cada lote de productos se registra con su fecha de vencimiento. El sistema te alerta 30, 15 y 7 días antes de vencer, y genera reportes de productos con baja rotación para que ajustes tu compra.",
      },
    ],
    stats: [
      { value: "420+", label: "Minimarkets activos" },
      { value: "8M+", label: "Boletas/mes" },
      { value: "1.5s", label: "Tiempo por boleta" },
      { value: "99.8%", label: "Sync accuracy" },
    ],
  },
  {
    slug: "software-pos-peru",
    title: "Software POS Perú con Facturación Electrónica SUNAT",
    shortTitle: "POS Perú",
    icon: Store,
    keyword: "software POS Perú",
    metaTitle: "Software POS Perú con Facturación Electrónica SUNAT | BREICORP",
    metaDescription:
      "Software POS para Perú con facturación electrónica SUNAT integrada. Punto de venta rápido, inventario, clientes, multi-sucursal. Emisión en 2 segundos.",
    heroHeadline: "Software POS Perú con facturación electrónica SUNAT embebida",
    heroSubheadline:
      "Punto de venta rápido, intuitivo y conectado directamente con SUNAT. No necesitas dos sistemas: tu POS y tu facturador en uno solo. Emisión en 2 segundos.",
    benefits: [
      {
        title: "POS y facturador en uno",
        description:
          "Una sola plataforma para punto de venta y facturación electrónica. No más sincronización entre sistemas, no más errores de doble input.",
      },
      {
        title: "Velocidad de cajero",
        description:
          "Interfaz optimizada para cajeros: atajos de teclado, búsqueda de productos por nombre o código, venta en 3 clics. Capacita a un cajero nuevo en 15 minutos.",
      },
      {
        title: "Offline-first",
        description:
          "Si se cae internet, el POS sigue funcionando. Las ventas se encolan y se envían a SUNAT automáticamente cuando vuelve la conexión. Cero downtime.",
      },
      {
        title: "Multi-dispositivo",
        description:
          "Funciona en PC, tablet, móvil y hasta en tu smartwatch. Cajas desktop para supermercados, tablets para restaurantes, móviles para delivery.",
      },
    ],
    features: [
      {
        title: "Atajos de teclado pro",
        description:
          "F1 para buscar, F2 para cliente, F4 para pagar. Cualquier cajero experimentado duplica su velocidad. Personalizable por usuario.",
      },
      {
        title: "Múltiples formas de pago",
        description:
          "Efectivo, tarjetas, Yape, Plin, transferencias, vales, combos. Split payment automático y cambio calculado al instante.",
      },
      {
        title: "Devoluciones y anulaciones",
        description:
          "Proceso guiado para devoluciones con nota de crédito automática vinculada a la venta original. Trazabilidad completa para SUNAT.",
      },
      {
        title: "Cierre de caja inteligente",
        description:
          "Al cierre, el sistema cuadra efectivo, tarjetas y electrónicos. Reporte de diferencias y arqueo automático. Envío por WhatsApp al gerente.",
      },
    ],
    faqs: [
      {
        question: "¿El POS funciona sin internet?",
        answer:
          "Sí. BREICORP es offline-first. Si se cae la conexión, el POS sigue emitiendo boletas y facturas. Los comprobantes se encolan localmente y se envían a SUNAT automáticamente cuando vuelve el internet, sin intervención del cajero.",
      },
      {
        question: "¿Qué dispositivos soporta?",
        answer:
          "Funciona en PC Windows/Mac/Linux, tablets iPad/Android, móviles y hasta en terminales todo-en-uno (touchscreen). Para entrega usamos cualquier impresora térmica ESC/POS estándar (Epson, Star, Bixolon).",
      },
      {
        question: "¿Capacito a mi cajero rápidamente?",
        answer:
          "Sí. La interfaz está diseñada para cajeros sin experiencia técnica. Una capacitación de 15 minutos es suficiente. Incluimos videos tutoriales y un modo demo para practicar antes de salir a producción.",
      },
      {
        question: "¿Soporta Yape, Plin y otros pagos digitales?",
        answer:
          "Sí. Soportamos Yape, Plin, transferencias bancarias, tarjetas Visa/Mastercard/Amex, vales y efectivo. El sistema generaba el QR de Yape/Plin automáticamente y detecta el pago confirmado vía API.",
      },
    ],
    stats: [
      { value: "1,800+", label: "POS activos" },
      { value: "2s", label: "Tiempo de venta" },
      { value: "100%", label: "Offline capable" },
      { value: "15 min", label: "Capacitación cajero" },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
