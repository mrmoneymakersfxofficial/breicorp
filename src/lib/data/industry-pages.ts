import {
  UtensilsCrossed,
  Stethoscope,
  ShoppingBag,
  Store,
  Building2,
  Truck,
  Wrench,
  Pill,
  Hotel,
  GraduationCap,
  Footprints,
  Glasses,
  HardHat,
  Calculator,
  Scale,
  Egg,
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
  {
    slug: "facturacion-para-ferreterias",
    title: "Facturación Electrónica para Ferreterías en Perú",
    shortTitle: "Ferreterías",
    icon: Wrench,
    keyword: "facturación para ferreterías",
    metaTitle: "Facturación Electrónica para Ferreterías Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para ferreterías en Perú. Control de inventario por código, cotizaciones, ventas al crédito y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para ferreterías que organizan su inventario",
    heroSubheadline:
      "Gestiona miles de productos por código SKU, emite cotizaciones que se convierten en ventas, controla créditos a clientes y cumple con SUNAT automáticamente.",
    benefits: [
      {
        title: "Inventario con códigos SKU",
        description:
          "Organiza miles de productos por código, marca, categoría y proveedor. Búsqueda instantánea desde la caja para facturar sin demoras.",
      },
      {
        title: "Cotizaciones a ventas",
        description:
          "Genera cotizaciones profesionales en PDF. Con un clic conviértela en factura o boleta sin re-ingresar datos. Ideal para ventas a empresas.",
      },
      {
        title: "Control de ventas al crédito",
        description:
          "Registra ventas a crédito con fechas de vencimiento, cuotas y recordatorios automáticos por WhatsApp. Saldos pendientes siempre visibles.",
      },
      {
        title: "Reportes de rentabilidad por producto",
        description:
          "Sabe exactamente cuánto ganas por cada tornillo, herramienta o material. Márgenes de ganancia reales incluyendo costo de envío y descuentos.",
      },
    ],
    features: [
      {
        title: "Carga masiva de productos",
        description:
          "Importa tu catálogo completo desde Excel con precios, códigos y categorías. Actualiza precios al por mayor con un solo archivo.",
      },
      {
        title: "Múltiples listas de precios",
        description:
          "Configura listas de precio por tipo de cliente: minorista, mayorista, contratista. El sistema aplica el precio correcto automáticamente.",
      },
      {
        title: "Guías de remisión integradas",
        description:
          "Genera guías de remisión para despachos de materiales a obra. Vinculadas directamente con la factura para trazabilidad completa.",
      },
      {
        title: "Compras y costeo promedio",
        description:
          "Registra compras de proveedores y calcula el costo promedio ponderado automáticamente. Conoce tu margen real en cada venta.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo manejar miles de productos en mi ferretería?",
        answer:
          "Sí. BREICORP está optimizado para catálogos grandes. Ferreterías con 5,000+ productos facturan sin lentitud gracias a la búsqueda instantánea por código o nombre y la indexación automática.",
      },
      {
        question: "¿Maneja ventas al crédito?",
        answer:
          "Sí. Puedes registrar ventas a crédito con plazos, fechas de vencimiento y cuotas. El sistema genera reportes de cuentas por cobrar y envía recordatorios automáticos por WhatsApp.",
      },
      {
        question: "¿Puedo emitir cotizaciones?",
        answer:
          "Sí. Genera cotizaciones profesionales en PDF con vigencia configurable. Cuando el cliente aprueba, conviértela en factura o boleta con un clic sin re-ingresar datos.",
      },
      {
        question: "¿Se integra con guías de remisión?",
        answer:
          "Sí. Puedes generar guías de remisión vinculadas a la factura cuando despachas materiales a obra. Trazabilidad completa para el cliente y para SUNAT.",
      },
    ],
    stats: [
      { value: "310+", label: "Ferreterías activas" },
      { value: "5,000+", label: "Productos promedio" },
      { value: "2s", label: "Búsqueda de producto" },
      { value: "99.7%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-farmacias",
    title: "Facturación Electrónica para Farmacias y Boticas en Perú",
    shortTitle: "Farmacias y boticas",
    icon: Pill,
    keyword: "facturación para farmacias",
    metaTitle: "Facturación Electrónica para Farmacias y Boticas Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para farmacias y boticas en Perú. Control de medicamentos, lotes, vencimientos, recetas y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para farmacias con control sanitario completo",
    heroSubheadline:
      "Gestiona medicamentos con control de lotes y vencimientos, maneja recetas médicas, emite comprobantes para ESSALUD y particulares. Cumplimiento DIGEMID y SUNAT.",
    benefits: [
      {
        title: "Control de lotes y vencimientos",
        description:
          "Cada medicamento se registra con lote, fecha de vencimiento y registro sanitario. Alertas automáticas para productos próximos a expirar.",
      },
      {
        title: "Facturación ESSALUD y particulares",
        description:
          "Diferencia automáticamente entre ventas con receta ESSALUD, seguros privados y pago particular. Tarifas y comprobantes correctos para cada caso.",
      },
      {
        title: "Recetas médicas vinculadas",
        description:
          "Registra y vincula recetas médicas al comprobante de venta. Historial completo por paciente para auditoría y control sanitario.",
      },
      {
        title: "Catálogo de medicamentos estructurado",
        description:
          "Productos organizados por principio activo, forma farmacéutica, laboratorio y concentración. Búsqueda rápida por nombre comercial o genérico.",
      },
    ],
    features: [
      {
        title: "Kardex por lote",
        description:
          "Control de inventario detallado por lote y fecha de vencimiento. Sistema FIFO automático para despachar productos más antiguos primero.",
      },
      {
        title: "Ventas con receta ESSALUD",
        description:
          "Emite comprobantes diferenciados para afiliados ESSALUD con cobertura parcial o total. Cálculo automático de copago del paciente.",
      },
      {
        title: "Reportes DIGEMID",
        description:
          "Genera reportes de ventas y stock compatibles con los requerimientos de DIGEMID para inspecciones y auditorías sanitarias.",
      },
      {
        title: "Alertas de stock mínimo sanitario",
        description:
          "Configura niveles mínimos por medicamento. El sistema alerta cuando el stock está bajo, evitando desabastecimiento de productos críticos.",
      },
    ],
    faqs: [
      {
        question: "¿Controla lotes y fechas de vencimiento?",
        answer:
          "Sí. Cada ingreso de medicamentos registra lote, fecha de fabricación y vencimiento. El sistema genera alertas 90, 60 y 30 días antes del vencimiento y aplica FIFO automáticamente al despachar.",
      },
      {
        question: "¿Maneja ventas con receta ESSALUD?",
        answer:
          "Sí. Puedes configurar cobertura ESSALUD por producto con porcentaje de cobertura y copago del paciente. El sistema calcula automáticamente y emite el comprobante correcto.",
      },
      {
        question: "¿Genera reportes para DIGEMID?",
        answer:
          "Sí. BREICORP genera reportes de movimiento de medicamentos, stock actual y ventas por principio activo en formatos compatibles con los requerimientos de DIGEMID.",
      },
      {
        question: "¿Funciona para cadenas de farmacias?",
        answer:
          "Sí. Con los planes Premium y Full puedes manejar múltiples sucursales con inventario centralizado, transferencias entre tiendas y reportes consolidados de toda la cadena.",
      },
    ],
    stats: [
      { value: "150+", label: "Farmacias activas" },
      { value: "25k+", label: "Medicamentos gestionados" },
      { value: "100%", label: "Control de lotes" },
      { value: "99.8%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-hoteles",
    title: "Facturación Electrónica para Hoteles y Hospedajes en Perú",
    shortTitle: "Hoteles y hospedajes",
    icon: Hotel,
    keyword: "facturación para hoteles",
    metaTitle: "Facturación Electrónica para Hoteles y Hospedajes Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para hoteles, hostales y hospedajes en Perú. Facturación por habitación, servicios adicionales, agencias de viaje.",
    heroHeadline: "Facturación electrónica para hoteles con gestión de hospedaje integrada",
    heroSubheadline:
      "Factura alojamientos por noche, servicios adicionales, check-out consolidado y comisiones de agencias de viaje. Cumplimiento SUNAT para el sector turismo.",
    benefits: [
      {
        title: "Facturación por habitación y noche",
        description:
          "Registra alojamientos con tarifa por noche, tipo de habitación y régimen (desayuno, media pensión, pensión completa). Facturación al check-out.",
      },
      {
        title: "Servicios adicionales consolidados",
        description:
          "Minibar, restaurante, spa, lavandería y parking se acumulan en la cuenta del huésped. Una sola factura al momento del check-out.",
      },
      {
        title: "Comisiones de agencias de viaje",
        description:
          "Maneja comisiones de Booking, Expedia y agencias locales. Factura neta al huésped y registra la comisión como gasto deducible.",
      },
      {
        title: "Nota de crédito por cancelaciones",
        description:
          "Proceso automatizado para cancelaciones y no-show con nota de crédito vinculada a la reserva original. Cumplimiento fiscal sin errores.",
      },
    ],
    features: [
      {
        title: "Registro de huéspedes",
        description:
          "Datos del huésped con tipo de documento, nacionalidad y propósito de viaje. Integrado con el formato de tarjeta de registro turístico.",
      },
      {
        title: "Liquidación por agencia",
        description:
          "Reportes consolidados por agencia de viaje con reservas, comisiones y pagos pendientes. Conciliación mensual simplificada.",
      },
      {
        title: "Ocupación y revenue por habitación",
        description:
          "Dashboard de ocupación en tiempo real, revenue por tipo de habitación, ADR (tarifa diaria promedio) y RevPAR. Datos para optimizar tarifas.",
      },
      {
        title: "Facturación a empresas",
        description:
          "Convenios corporativos con tarifas especiales, facturación mensual consolidada y crédito empresarial con plazos de pago definidos.",
      },
    ],
    faqs: [
      {
        question: "¿Factura automáticamente al check-out?",
        answer:
          "Sí. Todos los cargos de la habitación (alojamiento, minibar, restaurante, servicios) se acumulan durante la estadía. Al check-out, el sistema genera la factura o boleta consolidada con un clic.",
      },
      {
        question: "¿Maneja comisiones de Booking y Expedia?",
        answer:
          "Sí. Configuras la comisión porcentual de cada agencia. Al facturar, el sistema registra el ingreso neto y la comisión como gasto. Al cierre del mes genera la conciliación por agencia.",
      },
      {
        question: "¿Puedo facturar servicios adicionales por separado?",
        answer:
          "Sí. Si el huésped lo solicita, puedes emitir comprobantes separados para el restaurante, spa o lavandería. También puedes consolidar todo en una sola factura al check-out.",
      },
      {
        question: "¿Tiene control de ocupación?",
        answer:
          "Sí. El dashboard muestra ocupación en tiempo real por tipo de habitación, estadía promedio, ADR y RevPAR. Recibe alertas cuando la ocupación supera un umbral configurado.",
      },
    ],
    stats: [
      { value: "65+", label: "Hoteles activos" },
      { value: "4,200+", label: "Huéspedes/mes" },
      { value: "100%", label: "Consolidación check-out" },
      { value: "99.5%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-transporte",
    title: "Facturación Electrónica para Empresas de Transporte en Perú",
    shortTitle: "Empresas de transporte",
    icon: Truck,
    keyword: "facturación para transporte",
    metaTitle: "Facturación Electrónica para Empresas de Transporte Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para empresas de transporte en Perú. Guías de remisión, transporte, MTC, conductores, vehículos y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para transporte con logística integrada",
    heroSubheadline:
      "Gestiona guías de remitente y transportista, controla flota, conductores y rutas. Cumplimiento normativo MTC y SUNAT en una sola plataforma.",
    benefits: [
      {
        title: "Guías de remitente y transportista",
        description:
          "Emite guías de remisión electrónica como remitente y como transportista. Dos documentos, una plataforma, sin duplicar datos.",
      },
      {
        title: "Control de flota y conductores",
        description:
          "Registro completo de vehículos (MTC, SOAT, revisión técnica) y conductores (licencia, certificados). Documentación vigente siempre visible.",
      },
      {
        title: "Rutas y puntos de llegada",
        description:
          "Configura rutas con origen, destino y puntos intermedios. Cada guía de remisión tiene su punto de llegada para trazabilidad completa.",
      },
      {
        title: "Cumplimiento MTC y SUNAT",
        description:
          "Toda la documentación requerida por MTC (tarjeta de propiedad, SOAT) y SUNAT (UBL 2.1, CDR) se gestiona y valida desde la plataforma.",
      },
    ],
    features: [
      {
        title: "Gestión de manifiesto de carga",
        description:
          "Agrupa múltiples guías en un solo manifiesto de carga. Control total de qué va en cada viaje, con pesos y volúmenes registrados.",
      },
      {
        title: "Alertas de vencimiento documentario",
        description:
          "SOAT, revisión técnica y licencias de conducir próximas a vencer. El sistema alerta 30 y 15 días antes para que renueves a tiempo.",
      },
      {
        title: "Facturación por servicio de transporte",
        description:
          "Emite facturas por servicio de transporte con detalle de ruta, peso, tipo de mercancía y tarifa. Incluye fletes, seguros y estibaje.",
      },
      {
        title: "Integración con GPS",
        description:
          "Conecta dispositivos GPS de tu flota para ver en tiempo real la ubicación de cada unidad y vincularla con la guía de remisión activa.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo emitir guías como remitente y como transportista?",
        answer:
          "Sí. BREICORP maneja ambos roles. Puedes emitir guías de remisión electrónica como remitente (cuando envías mercadería) y como transportista (cuando trasladas carga de terceros) desde la misma plataforma.",
      },
      {
        question: "¿Controla la documentación de vehículos?",
        answer:
          "Sí. Cada vehículo tiene su tarjeta de propiedad, SOAT, revisión técnica y certificado de inscripción vehicular. El sistema alerta 30 y 15 días antes del vencimiento de cada documento.",
      },
      {
        question: "¿Puedo agrupar varias guías en un manifiesto?",
        answer:
          "Sí. BREICORP permite crear manifiestos de carga agrupando múltiples guías de remisión. Cada manifiesto tiene el vehículo, conductor y ruta asignados.",
      },
      {
        question: "¿Factura el servicio de transporte?",
        answer:
          "Sí. Puedes emitir facturas por servicio de transporte con detalle de ruta, tipo de mercancía, peso, tarifa de flete, seguro de carga y estibaje. Todo en un solo comprobante.",
      },
    ],
    stats: [
      { value: "120+", label: "Empresas de transporte" },
      { value: "15k+", label: "Guías/mes" },
      { value: "2,500+", label: "Vehículos registrados" },
      { value: "99.6%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-colegios",
    title: "Facturación Electrónica para Colegios e Institutos en Perú",
    shortTitle: "Colegios e institutos",
    icon: GraduationCap,
    keyword: "facturación para colegios",
    metaTitle: "Facturación Electrónica para Colegios e Institutos Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para colegios, institutos y academias en Perú. Pensiones, matrículas, cuotas extraordinarias, recibos y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para colegios con gestión de pensiones integrada",
    heroSubheadline:
      "Emite recibos por pensiones, matrículas y cuotas. Controla pagos mensuales, morosidad y genera reportes para padres y administración. Cumplimiento SUNAT garantizado.",
    benefits: [
      {
        title: "Pensiones y matrículas automatizadas",
        description:
          "Configura tarifas por grado, nivel y concepto (pensiones, matrícula, cuota extraordinaria). Generación masiva de recibos al inicio de cada mes.",
      },
      {
        title: "Control de morosidad",
        description:
          "Dashboard de pagos pendientes por alumno y por grado. Reportes de morosidad para la administración y envío de recordatorios a padres por WhatsApp.",
      },
      {
        title: "Servicios adicionales del colegio",
        description:
          "Factura comedor, transporte escolar, actividades extracurriculares, uniformes y útiles como conceptos separados o en un recibo consolidado.",
      },
      {
        title: "Exoneración de IGV en educación",
        description:
          "El sistema aplica automáticamente la exoneración de IGV para servicios educativos según la normativa vigente. Sin errores tributarios.",
      },
    ],
    features: [
      {
        title: "Generación masiva de recibos",
        description:
          "Al inicio de cada mes, genera automáticamente los recibos de pensión para todos los alumnos matriculados. Exporta lote para impresión o envío digital.",
      },
      {
        title: "Historial de pagos por alumno",
        description:
          "Cada alumno tiene su historial completo: matrícula, pensiones pagadas, saldos pendientes, descuentos aplicados y becas otorgadas.",
      },
      {
        title: "Descuentos y becas",
        description:
          "Configura descuentos por hermanos, becas académicas o sociales. El sistema aplica automáticamente el porcentaje definido a la tarifa base.",
      },
      {
        title: "Reportes para padres y administración",
        description:
          "Certificados de pagos para padres. Reportes de recaudación, morosidad y proyecciones de ingresos para la junta directiva.",
      },
    ],
    faqs: [
      {
        question: "¿Genera recibos masivos automáticamente?",
        answer:
          "Sí. Al inicio de cada mes, BREICORP genera automáticamente los recibos de pensión para todos los alumnos matriculados según su tarifa (por grado, nivel o sección). Puedes exportarlos, imprimirlos o enviarlos por correo.",
      },
      {
        question: "¿Aplica la exoneración de IGV en educación?",
        answer:
          "Sí. Los servicios educativos están exonerados de IGV según la Ley del IGV. BREICORP aplica automáticamente esta exoneración en los recibos de pensión y matrícula. Los servicios no educativos (comedor, transporte) sí incluyen IGV.",
      },
      {
        question: "¿Controla la morosidad?",
        answer:
          "Sí. El dashboard muestra pagos pendientes por alumno, grado y sección. Puedes generar reportes de morosidad y configurar recordatorios automáticos por WhatsApp o correo a los padres.",
      },
      {
        question: "¿Maneja becas y descuentos?",
        answer:
          "Sí. Puedes configurar descuentos porcentuales (hermanos, personal del colegio) o montos fijos (becas parciales/totales). El sistema aplica el descuento automáticamente al generar el recibo mensual.",
      },
    ],
    stats: [
      { value: "90+", label: "Colegios activos" },
      { value: "18k+", label: "Alumnos gestionados" },
      { value: "100%", label: "Exoneración IGV correcta" },
      { value: "99.8%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-tiendas",
    title: "Facturación Electrónica para Tiendas Comerciales en Perú",
    shortTitle: "Tiendas comerciales",
    icon: Store,
    keyword: "facturación para tiendas",
    metaTitle: "Facturación Electrónica para Tiendas Comerciales Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para tiendas comerciales, boutiques y locales en Perú. Inventario, código de barras, promociones, multi-sucursal.",
    heroHeadline: "Facturación electrónica para tiendas que venden con estilo",
    heroSubheadline:
      "Gestiona tu inventario por código de barras, configura promociones y descuentos, controla múltiples sucursales y cumple con SUNAT en cada venta.",
    benefits: [
      {
        title: "Código de barras y búsqueda rápida",
        description:
          "Escanorea productos o búscalos por nombre en segundos. Interfaz de caja optimizada para atender rápido, incluso en horas pico.",
      },
      {
        title: "Promociones y descuentos flexibles",
        description:
          "Configura ofertas 2x1, descuentos por porcentaje, liquidaciones por temporada y cupones de descuento. Todo se aplica automáticamente en caja.",
      },
      {
        title: "Multi-sucursal sincronizada",
        description:
          "Todas tus tiendas comparten catálogo, precios y clientes en tiempo real. Cambia un precio desde el panel y se actualiza en todas las sucursales.",
      },
      {
        title: "Inventario en tiempo real",
        description:
          "Cada venta actualiza el stock al instante. Alertas de productos con baja rotación y reportes de los más vendidos por categoría y temporada.",
      },
    ],
    features: [
      {
        title: "Tallas, colores y variantes",
        description:
          "Gestiona productos con variantes (talla, color, material). Stock independiente por variante y consulta rápida desde la caja.",
      },
      {
        title: "Gift cards y vales",
        description:
          "Emite gift cards con saldo y vigencia. Los clientes pagan con su gift card y el saldo se descuenta automáticamente del comprobante.",
      },
      {
        title: "Clientes frecuentes y puntos",
        description:
          "Programa de fidelización con acumulación de puntos por compra. Los clientes canjean puntos por descuentos en futuras compras.",
      },
      {
        title: "Reportes de temporada",
        description:
          "Compara ventas por temporada, mes y año. Identifica tendencias para anticipar tu próxima compra de inventario y optimizar tu stock.",
      },
    ],
    faqs: [
      {
        question: "¿Maneja productos con tallas y colores?",
        answer:
          "Sí. BREICORP soporta productos con variantes (talla, color, material). Cada variante tiene su propio código de barras y stock independiente. Desde la caja, elige la variante y factura en segundos.",
      },
      {
        question: "¿Puedo configurar promociones?",
        answer:
          "Sí. Puedes crear ofertas 2x1, descuentos por porcentaje, liquidaciones y cupones de descuento con vigencia. Todas las promociones se aplican automáticamente en la caja cuando se cumplen las condiciones.",
      },
      {
        question: "¿Tiene programa de puntos o fidelización?",
        answer:
          "Sí. Puedes configurar acumulación de puntos por monto de compra (ej. 1 punto por S/10). Los clientes consultan su saldo y canjean puntos por descuentos directamente en la caja.",
      },
      {
        question: "¿Sincroniza inventario entre sucursales?",
        answer:
          "Sí. Si manejas varias tiendas, el inventario se sincroniza en tiempo real. Al vender en una tienda, el stock baja en todas. Puedes hacer transferencias entre sucursales desde el panel.",
      },
    ],
    stats: [
      { value: "280+", label: "Tiendas activas" },
      { value: "350k+", label: "Ventas/mes" },
      { value: "1.8s", label: "Tiempo por venta" },
      { value: "99.7%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-zapaterias",
    title: "Facturación Electrónica para Zapaterías en Perú",
    shortTitle: "Zapaterías",
    icon: Footprints,
    keyword: "facturación para zapaterías",
    metaTitle: "Facturación Electrónica para Zapaterías Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para zapaterías en Perú. Control de inventario por modelo, talla y color, ventas al por mayor y menor.",
    heroHeadline: "Facturación electrónica para zapaterías con control de tallas",
    heroSubheadline:
      "Gestiona tu inventario por modelo, talla y color. Emite comprobantes al por menor y mayor con precios diferenciados. Cumplimiento SUNAT en cada venta.",
    benefits: [
      {
        title: "Inventario por modelo, talla y color",
        description:
          "Cada zapato se gestiona con su modelo, talla (35-44), color y material. Stock preciso por cada combinación para evitar ventas de lo que no tienes.",
      },
      {
        title: "Ventas al por mayor y menor",
        description:
          "Dos listas de precio: minorista en tienda y mayorista para revendedores. El sistema aplica el precio correcto según el tipo de cliente.",
      },
      {
        title: "Temporadas y colecciones",
        description:
          "Organiza tu inventario por temporada (verano, invierno) y colección. Identifica qué modelos venden más y cuáles necesitan liquidación.",
      },
      {
        title: "Control de tallas vendidas",
        description:
          "Reportes de las tallas más vendidas por modelo. Datos precisos para tu próxima compra y para evitar sobrestock de tallas que no se mueven.",
      },
    ],
    features: [
      {
        title: "Carga masiva por lote de compra",
        description:
          "Cuando recibes un lote del proveedor, registra todas las tallas y colores de una vez desde Excel. El stock se actualiza masivamente.",
      },
      {
        title: "Liquidación de temporada",
        description:
          "Aplica descuentos por porcentaje a toda una colección o temporada. Las boletas reflejan el precio original tachado y el precio de liquidación.",
      },
      {
        title: "Compras y proveedores",
        description:
          "Registra compras por proveedor con costos, fechas de entrega y facturas de compra. Calcula margen de ganancia real por modelo.",
      },
      {
        title: "Reportes de rotación",
        description:
          "Identifica modelos con rotación lenta y toma decisiones de liquidación antes de que se vuelvan inventario muerto. Optimiza tu capital de trabajo.",
      },
    ],
    faqs: [
      {
        question: "¿Controla inventario por talla y color?",
        answer:
          "Sí. Cada modelo tiene sus variantes de talla y color, cada una con su propio stock y código. Al vender, eliges la talla y color específicos y el stock se descuenta de esa variante.",
      },
      {
        question: "¿Tiene precios diferenciados por mayor y menor?",
        answer:
          "Sí. Configura dos listas de precio: minorista para el público y mayorista para revendedores. Al facturar, elige el tipo de precio y el sistema aplica automáticamente.",
      },
      {
        question: "¿Puedo hacer liquidaciones de temporada?",
        answer:
          "Sí. Selecciona una colección o temporada entera y aplica un descuento porcentual. Los comprobantes mostrarán el precio original y el precio con descuento para transparencia con el cliente.",
      },
      {
        question: "¿Me ayuda a saber qué tallas pedir?",
        answer:
          "Sí. Los reportes muestran las tallas más y menos vendidas por modelo. Estos datos te ayudan a optimizar tu próxima compra, pidiendo más de las tallas que se venden rápido y menos de las que se estancan.",
      },
    ],
    stats: [
      { value: "95+", label: "Zapaterías activas" },
      { value: "4,000+", label: "Modelos gestionados" },
      { value: "1.5s", label: "Tiempo por venta" },
      { value: "99.6%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-opticas",
    title: "Facturación Electrónica para Ópticas en Perú",
    shortTitle: "Ópticas",
    icon: Glasses,
    keyword: "facturación para ópticas",
    metaTitle: "Facturación Electrónica para Ópticas Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para ópticas en Perú. Recetas, monturas, lentes, seguros de salud, ESSALUD y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para ópticas con gestión de recetas integrada",
    heroSubheadline:
      "Registra recetas oftalmológicas, gestiona monturas y lentes, factura a ESSALUD y particulares. Cumplimiento SUNAT y control de inventario especializado.",
    benefits: [
      {
        title: "Recetas oftalmológicas vinculadas",
        description:
          "Registra cada receta con graduación, tipo de lente y fecha. Vincúlala a la venta para trazabilidad completa y atención personalizada.",
      },
      {
        title: "Facturación ESSALUD y seguros",
        description:
          "Maneja coberturas de ESSALUD, seguros privados y particulares. Cálculo automático de copago según el plan del paciente.",
      },
      {
        title: "Inventario de monturas y lentes",
        description:
          "Control de stock por marca, modelo, color y tipo de lente (monofocal, bifocal, progresivo). Alertas de stock mínimo por referencia.",
      },
      {
        title: "Garantías y seguimiento",
        description:
          "Registra garantías por montura y lente. El sistema trackea vigencias y envía recordatorios al cliente cuando la garantía está por vencer.",
      },
    ],
    features: [
      {
        title: "Órdenes de trabajo",
        description:
          "Genera órdenes de trabajo para el laboratorio con especificaciones del lente: material, índice, tratamientos anti-reflejo y tinte.",
      },
      {
        title: "Historial por paciente",
        description:
          "Cada cliente tiene su historial de recetas, compras y adaptaciones. Atención personalizada y datos para campañas de recordatorio.",
      },
      {
        title: "Campañas de recordatorio",
        description:
          "Identifica clientes cuya graduación puede haber cambiado y envía recordatorios por WhatsApp o correo para que vuelvan a controlarse.",
      },
      {
        title: "Reportes de venta por categoría",
        description:
          "Ingresos por monturas, lentes, exámenes y accesorios. Rentabilidad por marca y por tipo de lente para optimizar tu catálogo.",
      },
    ],
    faqs: [
      {
        question: "¿Vincula la receta con la venta?",
        answer:
          "Sí. Al registrar una receta, se guarda la graduación, tipo de lente y datos del profesional. Al momento de vender, vinculas la receta al comprobante para trazabilidad completa.",
      },
      {
        question: "¿Factura a ESSALUD?",
        answer:
          "Sí. Configura la cobertura de ESSALUD por tipo de lente y montura. Al facturar, el sistema calcula automáticamente el copago del paciente y emite el comprobante correcto.",
      },
      {
        question: "¿Controla garantías?",
        answer:
          "Sí. Cada venta de montura o lente puede registrar una garantía con vigencia. El sistema envía recordatorios cuando la garantía está por vencer y permite consultar el historial.",
      },
      {
        question: "¿Envía recordatorios a clientes?",
        answer:
          "Sí. Puedes configurar campañas de recordatorio para clientes que no se han controlado en 12+ meses. El sistema envía mensajes automáticos por WhatsApp o correo.",
      },
    ],
    stats: [
      { value: "40+", label: "Ópticas activas" },
      { value: "12k+", label: "Recetas registradas" },
      { value: "100%", label: "Vinculación receta-venta" },
      { value: "99.9%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-constructoras",
    title: "Facturación Electrónica para Constructoras en Perú",
    shortTitle: "Constructoras",
    icon: HardHat,
    keyword: "facturación para constructoras",
    metaTitle: "Facturación Electrónica para Constructoras Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para constructoras en Perú. Retenciones, detracciones, guías de remisión, certificaciones de obra y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para constructoras con retenciones y detracciones",
    heroSubheadline:
      "Gestiona retenciones del 4%, detracciones por obra pública, certificaciones de obra, guías de remisión para materiales y cumplimiento SUNAT completo.",
    benefits: [
      {
        title: "Retenciones del 4% automáticas",
        description:
          "El sistema calcula automáticamente la retención del 4% en cada factura de constructora. Certificado de retención generado para el proveedor.",
      },
      {
        title: "Detracciones por obra pública",
        description:
          "Maneja detracciones del sistema de pago de obligaciones tributarias (SPOT). Número de detracción en cada comprobante según el bien o servicio.",
      },
      {
        title: "Certificaciones de obra",
        description:
          "Emite facturas por valorizaciones y certificaciones de avance de obra. Historial completo por contrato y por cliente.",
      },
      {
        title: "Guías de remisión para materiales",
        description:
          "Despacha materiales a obra con guías de remisión electrónicas vinculadas a la compra. Trazabilidad desde el proveedor hasta la obra.",
      },
    ],
    features: [
      {
        title: "Control por proyecto u obra",
        description:
          "Organiza facturas, compras y gastos por proyecto u obra. Conoce la rentabilidad real de cada contrato con costeo directo e indirecto.",
      },
      {
        title: "Compras de materiales con retención",
        description:
          "Registra compras de materiales con retención aplicada automáticamente. Conciliación con proveedores y reportes de retenciones mensuales.",
      },
      {
        title: "Subcontratistas",
        description:
          "Gestiona facturas de subcontratistas con retención y vínculo a la obra principal. Control de pagos y saldos pendientes por proveedor.",
      },
      {
        title: "Reportes de IGV por contrato",
        description:
          "IGV por cobrar y por pagar por cada obra. Conciliación para la declaración mensual de IGV con precisión y sin errores.",
      },
    ],
    faqs: [
      {
        question: "¿Calcula retenciones del 4% automáticamente?",
        answer:
          "Sí. Cuando emites una factura como constructora, el sistema aplica automáticamente la retención del 4% y genera el certificado de retención para el proveedor. También lo hace al registrar compras.",
      },
      {
        question: "¿Maneja detracciones?",
        answer:
          "Sí. BREICORP soporta el sistema de detracciones. Configura la tasa de detracción según el tipo de bien o servicio y el sistema incluye el número de detracción en el comprobante.",
      },
      {
        question: "¿Puedo organizar por proyecto u obra?",
        answer:
          "Sí. Cada proyecto u obra tiene su propio centro de costo. Puedes ver facturación, compras, gastos y rentabilidad por cada contrato individual.",
      },
      {
        question: "¿Emite guías de remisión para despacho de materiales?",
        answer:
          "Sí. Cuando despachas materiales desde tu almacén hacia la obra, generas la guía de remisión electrónica vinculada al comprobante de compra. Trazabilidad completa.",
      },
    ],
    stats: [
      { value: "75+", label: "Constructoras activas" },
      { value: "250+", label: "Obras gestionadas" },
      { value: "100%", label: "Retenciones automáticas" },
      { value: "99.5%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-contables",
    title: "Facturación Electrónica para Estudios Contables en Perú",
    shortTitle: "Estudios contables",
    icon: Calculator,
    keyword: "facturación para contables",
    metaTitle: "Facturación Electrónica para Estudios Contables Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para estudios contables en Perú. Multiempresa, planillas, RTF, IGV RSEA, libros electrónicos y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para contables que gestionan múltiples empresas",
    heroSubheadline:
      "Administra la facturación de todos tus clientes desde un solo panel. Emite comprobantes, genera reportes fiscales y simplifica los cierres contables mensuales.",
    benefits: [
      {
        title: "Multiempresa desde un solo panel",
        description:
          "Gestiona la facturación de 10, 50 o 200 empresas desde una sola cuenta. Cambia de RUC sin cerrar sesión. Panel consolidado y por empresa.",
      },
      {
        title: "Reportes para declaraciones",
        description:
          "Genera reportes de ventas, compras, IGV por pagar y por cobrar. Exportación a Excel lista para la declaración mensual de IGV y Renta.",
      },
      {
        title: "Emisión para clientes finales",
        description:
          "Algunos clientes prefieren que su contador emita los comprobantes. BREICORP permite operar como emisor para múltiples RUCs con roles diferenciados.",
      },
      {
        title: "Auditoría y trazabilidad",
        description:
          "Historial completo de cada comprobante emitido, anulado y consultado. Todo queda registrado para auditorías internas y de SUNAT.",
      },
    ],
    features: [
      {
        title: "Libros electrónicos simplificados",
        description:
          "Reportes compatibles con los formatos de libros electrónicos de SUNAT: Registro de Ventas, Registro de Compras y formato 8.1.",
      },
      {
        title: "Conciliación bancaria",
        description:
          "Importa estados de cuenta bancarios y concilia con las facturas cobradas. Identifica pagos no identificados y facturas pendientes de cobro.",
      },
      {
        title: "Dashboard multiempresa",
        description:
          "Vista consolidada de todas tus empresas: comprobantes emitidos, CDR pendientes, errores y alertas. Identifica problemas antes que SUNAT.",
      },
      {
        title: "Roles y permisos por empresa",
        description:
          "Define qué contador puede emitir en qué RUC. Permisos granulares para proteger la información de cada cliente.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo manejar múltiples RUCs desde una cuenta?",
        answer:
          "Sí. BREICORP está diseñado para estudios contables. Puedes agregar múltiples RUCs y cambiar entre ellos sin cerrar sesión. Cada RUC tiene su certificado, series y configuración independiente.",
      },
      {
        question: "¿Genera reportes para la declaración de IGV?",
        answer:
          "Sí. BREICORP genera el Registro de Ventas e Ingresos (RVI) y Registro de Compras (RCC) en formato Excel compatible con SUNAT. Incluye IGV gravado, inafecto, exonerado y exportación.",
      },
      {
        question: "¿Puedo emitir comprobantes para mis clientes?",
        answer:
          "Sí. Muchos estudios contables emiten comprobantes en nombre de sus clientes. Con BREICORP, cargas el certificado digital de cada cliente y emites desde su RUC con full trazabilidad.",
      },
      {
        question: "¿Tiene un dashboard consolidado?",
        answer:
          "Sí. El dashboard muestra el resumen de todas tus empresas: comprobantes del mes, CDR con errores, comprobantes pendientes de envío y alertas. Puedes filtrar por empresa o ver todo consolidado.",
      },
    ],
    stats: [
      { value: "200+", label: "Contadores activos" },
      { value: "1,500+", label: "RUCs gestionados" },
      { value: "500k+", label: "Comprobantes/mes" },
      { value: "99.8%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-juridicos",
    title: "Facturación Electrónica para Estudios Jurídicos en Perú",
    shortTitle: "Estudios jurídicos",
    icon: Scale,
    keyword: "facturación para estudios jurídicos",
    metaTitle: "Facturación Electrónica para Estudios Jurídicos Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para estudios jurídicos en Perú. Honorarios por caso, cobranza a clientes, retenciones y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para estudios jurídicos con control por caso",
    heroSubheadline:
      "Gestiona honorarios por caso o cliente, emite facturas mensuales, controla cobranza y maneja retenciones. Cumplimiento SUNAT para el sector legal.",
    benefits: [
      {
        title: "Honorarios por caso o cliente",
        description:
          "Registra horas trabajadas, tarifas por hora y honorarios fijos por caso. Factura mensual detallada con desglose por asunto legal.",
      },
      {
        title: "Facturación mensual a empresas",
        description:
          "Genera facturas consolidadas para clientes corporativos con todos los asuntos del mes. Detalle por caso, horas y tarifas.",
      },
      {
        title: "Control de cobranza",
        description:
          "Dashboard de facturas emitidas vs. cobradas. Saldos pendientes por cliente con plazos de vencimiento y seguimiento de cobranza.",
      },
      {
        title: "Retenciones por servicios profesionales",
        description:
          "Cálculo automático de la retención del 8% por servicios profesionales de acuerdo a la normativa vigente de SUNAT.",
      },
    ],
    features: [
      {
        title: "Registro de tiempo por caso",
        description:
          "Registra el tiempo dedicado a cada asunto legal. Tarifa por hora configurada por tipo de caso y por profesional del estudio.",
      },
      {
        title: "Proformas y conversiones",
        description:
          "Genera proformas antes de iniciar un caso. Cuando el cliente aprueba, convierte la proforma en factura sin re-ingresar datos.",
      },
      {
        title: "Gastos reembolsables",
        description:
          "Registra gastos incurridos por el cliente (tasas, viajes, peritajes) y los incluye en la factura como conceptos separados.",
      },
      {
        title: "Reportes de rentabilidad por caso",
        description:
          "Compara honorarios facturados vs. horas invertidas por caso. Rentabilidad real por tipo de asunto legal para optimizar tarifas.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo facturar por horas trabajadas?",
        answer:
          "Sí. BREICORP permite registrar el tiempo dedicado a cada asunto con la tarifa por hora. Al final del mes, genera la factura con el desglose por caso, horas y monto.",
      },
      {
        question: "¿Aplica retenciones de servicios profesionales?",
        answer:
          "Sí. El sistema calcula automáticamente la retención del 8% sobre los honorarios profesionales. En la factura se muestra el monto bruto, la retención y el neto a cobrar.",
      },
      {
        question: "¿Puedo emitir facturas consolidadas mensuales?",
        answer:
          "Sí. Para clientes corporativos con múltiples asuntos, BREICORP genera una factura consolidada al cierre del mes con el detalle de cada caso: horas, tarifas y gastos.",
      },
      {
        question: "¿Maneja gastos reembolsables?",
        answer:
          "Sí. Puedes registrar gastos como tasas judiciales, viajes y peritajes vinculados a un caso. Al facturar, se incluyen como líneas separadas para transparencia con el cliente.",
      },
    ],
    stats: [
      { value: "55+", label: "Estudios jurídicos" },
      { value: "3,000+", label: "Casos gestionados" },
      { value: "100%", label: "Retención 8% automática" },
      { value: "99.9%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-talleres",
    title: "Facturación Electrónica para Talleres Automotrices en Perú",
    shortTitle: "Talleres automotrices",
    icon: Wrench,
    keyword: "facturación para talleres",
    metaTitle: "Facturación Electrónica para Talleres Automotrices Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para talleres automotrices en Perú. Órdenes de trabajo, inventario de repuestos, facturación por servicio y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para talleres con órdenes de trabajo integradas",
    heroSubheadline:
      "Gestiona órdenes de trabajo, inventario de repuestos, facturación por mano de obra y materiales. Cumplimiento SUNAT para talleres mecánicos y de chapa y pintura.",
    benefits: [
      {
        title: "Órdenes de trabajo vinculadas",
        description:
          "Cada orden de trabajo registra el vehículo, el diagnóstico, repuestos usados y mano de obra. Al facturar, todo se consolida en un solo comprobante.",
      },
      {
        title: "Inventario de repuestos",
        description:
          "Control de stock de repuestos con código y precio. Cada orden de trabajo descuenta automáticamente los repuestos utilizados.",
      },
      {
        title: "Facturación por servicio y materiales",
        description:
          "Desglosa en la factura la mano de obra, los repuestos y terceros (alineación, balanceo). Transparencia total para el cliente.",
      },
      {
        title: "Historial por vehículo",
        description:
          "Cada placa tiene su historial de servicios, repuestos cambiados y kilometraje. Ideal para recordar al cliente cuándo debe volver.",
      },
    ],
    features: [
      {
        title: "Cotizaciones antes de reparar",
        description:
          "Genera cotizaciones con diagnóstico, repuestos y mano de obra. El cliente aprueba y la cotización se convierte en orden de trabajo activa.",
      },
      {
        title: "Control de tiempos por mecánico",
        description:
          "Asigna órdenes a mecánicos y trackea el tiempo invertido. Reportes de productividad por técnico para optimizar la capacidad del taller.",
      },
      {
        title: "Compras de repuestos a proveedores",
        description:
          "Registra compras a distribuidores de repuestos con costos. Calcula el margen de ganancia en la venta de repuestos al cliente final.",
      },
      {
        title: "Recordatorios de mantenimiento",
        description:
          "Configura intervalos de mantenimiento por tipo de servicio. El sistema identifica vehículos que deben volver y envía recordatorios por WhatsApp.",
      },
    ],
    faqs: [
      {
        question: "¿La orden de trabajo se convierte en factura?",
        answer:
          "Sí. Al finalizar la reparación, la orden de trabajo (con diagnóstico, repuestos y mano de obra) se convierte en factura o boleta con un clic. No re-ingresas datos.",
      },
      {
        question: "¿Controla el inventario de repuestos?",
        answer:
          "Sí. Cada repuesto tiene su código, precio de costo y precio de venta. Al usar repuestos en una orden de trabajo, el stock se descuenta automáticamente.",
      },
      {
        question: "¿Tiene historial por vehículo?",
        answer:
          "Sí. Cada vehículo (por placa) tiene su historial: servicios realizados, repuestos cambiados, fechas y kilometraje. Permite ofrecer un servicio más personalizado.",
      },
      {
        question: "¿Envía recordatorios de mantenimiento?",
        answer:
          "Sí. Puedes configurar intervalos (ej. cambio de aceite cada 5,000 km) y el sistema identifica vehículos que deben volver. Envía recordatorios automáticos por WhatsApp o correo.",
      },
    ],
    stats: [
      { value: "85+", label: "Talleres activos" },
      { value: "6,000+", label: "Órdenes/mes" },
      { value: "100%", label: "Vinculación OT-factura" },
      { value: "99.7%", label: "Aceptación SUNAT" },
    ],
  },
  {
    slug: "facturacion-para-aviolas",
    title: "Facturación Electrónica para Avícolas en Perú",
    shortTitle: "Avícolas",
    icon: Egg,
    keyword: "facturación para avícolas",
    metaTitle: "Facturación Electrónica para Avícolas Perú | BREICORP",
    metaDescription:
      "Sistema de facturación electrónica para empresas avícolas en Perú. Control de producción, inventario por lote, ventas al por mayor y cumplimiento SUNAT.",
    heroHeadline: "Facturación electrónica para avícolas con control de producción integrado",
    heroSubheadline:
      "Gestiona la producción por lote, controla inventario de insumos y producto terminado, factura ventas al por mayor y cumple con SUNAT en cada operación.",
    benefits: [
      {
        title: "Control de producción por lote",
        description:
          "Registra lotes de producción con fecha de inicio, cantidad de aves, alimento consumido y mortalidad. Trazabilidad completa del proceso productivo.",
      },
      {
        title: "Ventas al por mayor",
        description:
          "Factura ventas mayoristas a supermercados, restaurantes y distribuidores con precios diferenciados y condiciones de pago negociadas.",
      },
      {
        title: "Inventario de insumos y alimento",
        description:
          "Control de stock de alimento balanceado, medicamentos y suministros. Alertas de stock mínimo para evitar desabastecimiento en la granja.",
      },
      {
        title: "Costeo de producción",
        description:
          "Registra costos de alimento, mano de obra, energía y sanitarios. Calcula el costo unitario por kilo o por ave para conocer tu margen real.",
      },
    ],
    features: [
      {
        title: "Guías de remisión para distribución",
        description:
          "Emite guías de remisión para el transporte de huevos o pollos desde la granja hasta el centro de distribución o el cliente final.",
      },
      {
        title: "Precios por categoría de producto",
        description:
          "Diferentes precios por tipo de huevo (AA, A, B), pollo entero o por piezas, y presentación (caja, bolsa). Configuración flexible de tarifas.",
      },
      {
        title: "Reportes de producción diaria",
        description:
          "Dashboard de producción diaria: huevos recolectados, mortalidad, consumo de alimento y conversión alimenticia. Datos para tomar decisiones rápidas.",
      },
      {
        title: "Facturación a supermercados y restaurantes",
        description:
          "Condiciones de pago personalizadas por cliente (15, 30, 45 días). Saldos pendientes y conciliación de cobros con comprobantes de pago.",
      },
    ],
    faqs: [
      {
        question: "¿Controla la producción por lote?",
        answer:
          "Sí. Cada lote de producción se registra con fecha, cantidad de aves, raza y galpón. El sistema trackea la producción de huevos, mortalidad y consumo de alimento durante todo el ciclo productivo.",
      },
      {
        question: "¿Factura ventas al por mayor?",
        answer:
          "Sí. BREICORP soporta facturación mayorista con precios diferenciados por cliente, condiciones de pago (15, 30, 45 días) y descuentos por volumen. Ideal para ventas a supermercados y distribuidores.",
      },
      {
        question: "¿Calcula el costo de producción?",
        answer:
          "Sí. Registra todos los costos (alimento, mano de obra, energía, sanitarios, depreciación) y los distribuye por lote. Al final del ciclo, obtienes el costo unitario por kilo o por ave producido.",
      },
      {
        question: "¿Emite guías de remisión?",
        answer:
          "Sí. Para el transporte de huevos o pollos desde la granja, BREICORP genera guías de remisión electrónicas con el tipo de producto, cantidad, temperatura y punto de entrega.",
      },
    ],
    stats: [
      { value: "35+", label: "Avícolas activas" },
      { value: "2M+", label: "Huevos trazados/mes" },
      { value: "100%", label: "Control por lote" },
      { value: "99.5%", label: "Aceptación SUNAT" },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
