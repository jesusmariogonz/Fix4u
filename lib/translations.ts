// Central translation dictionary for the ES/EN client-side language toggle.
// Edit the text here to change any copy on the site — no other files need
// to change. Default language is Spanish ("es").
//
// NOTE on SEO/hreflang: because the language switch is a pure client-side
// state toggle (same URL, no /en route), we intentionally do NOT emit
// hreflang tags — those are meant for distinct, crawlable URLs per
// language. If the client later wants separate indexable ES/EN URLs,
// this dictionary can be split into real localized routes.

export type Locale = "es" | "en";

export interface Service {
  key: string;
  title: string;
  bullets: string[];
}

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
    cta: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    ctaWhatsapp: string;
    ctaServices: string;
    imageAlt: string;
  };
  about: {
    title: string;
    text: string;
    points: { title: string; text: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  gallery: {
    title: string;
    subtitle: string;
    note: string;
    items: { alt: string; src: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    errorRequired: string;
    errorPhone: string;
    success: string;
  };
  footer: {
    tagline: string;
    contactTitle: string;
    servicesTitle: string;
    followUs: string;
    privacy: string;
    rights: string;
    emailLabel: string;
  };
  whatsappFloat: {
    label: string;
  };
}

const serviceKeys = [
  "pisos",
  "pintura",
  "herreria",
  "electricidad",
  "automatizaciones",
  "obraCivil",
  "camaras",
  "minisplits",
  "carpinteria",
  "paneles",
] as const;

export const translations: Record<Locale, Translation> = {
  es: {
    meta: {
      title: "Fix4U | Instalaciones y Mantenimiento Industrial y Residencial",
      description:
        "Fix4U es tu socio confiable en soluciones integrales para la industria: pisos epóxicos, pintura industrial, herrería, electricidad, automatización, obra civil, cámaras, mini splits, carpintería y paneles solares.",
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      gallery: "Proyectos",
      contact: "Contacto",
      cta: "Cotizar por WhatsApp",
    },
    hero: {
      headline: "Tu Solución en Instalaciones y Mantenimiento",
      subtitle:
        "Tu socio confiable en soluciones integrales para la industria. Residencial, oficinas e industrial en un solo lugar.",
      ctaWhatsapp: "Cotizar por WhatsApp",
      ctaServices: "Ver servicios",
      imageAlt: "Equipo de Fix4U realizando trabajos de instalación industrial",
    },
    about: {
      title: "¿Quiénes somos?",
      text:
        "En Fix4U contamos con años de experiencia brindando soluciones integrales de instalación y mantenimiento para hogares, oficinas e industria en México. Nuestro equipo combina calidad, rapidez y precios justos para que tu proyecto quede resuelto de principio a fin.",
      points: [
        {
          title: "Experiencia comprobada",
          text: "Equipo capacitado con años de experiencia en proyectos residenciales, comerciales e industriales.",
        },
        {
          title: "Respuesta rápida",
          text: "Cotizaciones y visitas ágiles, directamente por WhatsApp.",
        },
        {
          title: "Garantía de trabajo",
          text: "Materiales de calidad y garantía en cada servicio realizado.",
        },
      ],
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones completas para tu hogar, oficina o planta industrial.",
      items: [
        {
          key: "pisos",
          title: "Pisos (pintura epóxica y pulido)",
          bullets: [
            "Aplicación de pintura epóxica industrial",
            "Pulido y sellado de concreto",
            "Pisos resistentes a químicos y tráfico pesado",
          ],
        },
        {
          key: "pintura",
          title: "Pintura industrial y comercial",
          bullets: [
            "Recubrimientos anticorrosivos",
            "Pintura de naves industriales y oficinas",
            "Acabados decorativos y protectores",
          ],
        },
        {
          key: "herreria",
          title: "Herrería general",
          bullets: [
            "Estructuras metálicas a medida",
            "Puertas, rejas y barandales",
            "Reparación y mantenimiento",
          ],
        },
        {
          key: "electricidad",
          title: "Electricidad de baja tensión",
          bullets: [
            "Instalaciones eléctricas residenciales e industriales",
            "Tableros y circuitos",
            "Diagnóstico y corrección de fallas",
          ],
        },
        {
          key: "automatizaciones",
          title: "Automatizaciones",
          bullets: [
            "Portones y accesos automáticos",
            "Control de iluminación y procesos",
            "Integración de sistemas",
          ],
        },
        {
          key: "obraCivil",
          title: "Obra civil",
          bullets: [
            "Remodelaciones y ampliaciones",
            "Acabados y construcción ligera",
            "Proyectos llave en mano",
          ],
        },
        {
          key: "camaras",
          title: "Cámaras de seguridad",
          bullets: [
            "Instalación de circuito cerrado (CCTV)",
            "Monitoreo remoto vía app",
            "Mantenimiento y actualización de sistemas",
          ],
        },
        {
          key: "minisplits",
          title: "Instalación y mantenimiento de mini splits",
          bullets: [
            "Instalación de equipos nuevos",
            "Mantenimiento preventivo y correctivo",
            "Carga de gas y limpieza profunda",
          ],
        },
        {
          key: "carpinteria",
          title: "Carpintería",
          bullets: [
            "Muebles a medida",
            "Closets y cocinas integrales",
            "Reparación de estructuras de madera",
          ],
        },
        {
          key: "paneles",
          title: "Paneles solares",
          bullets: [
            "Diseño e instalación de sistemas fotovoltaicos",
            "Mantenimiento de paneles existentes",
            "Asesoría en ahorro energético",
          ],
        },
      ],
    },
    gallery: {
      title: "Proyectos realizados",
      subtitle: "Una muestra de nuestro trabajo en pisos, naves industriales y estructuras metálicas.",
      note: "Fotografías reales de proyectos ejecutados por Fix4U.",
      items: [
        { alt: "Piso epóxico industrial en color azul en planta de manufactura", src: "/images/gallery/project-img-010.jpg" },
        { alt: "Piso epóxico industrial blanco con líneas de señalización en amarillo", src: "/images/gallery/project-img-012.jpg" },
        { alt: "Piso epóxico industrial en tono gris claro en área de almacenamiento", src: "/images/gallery/project-img-013.jpg" },
        { alt: "Piso epóxico decorativo negro con vetas en cochera residencial", src: "/images/gallery/project-img-016.jpg" },
        { alt: "Piso de concreto pulido en nave industrial con trabajadores en faena", src: "/images/gallery/project-img-018.jpg" },
        { alt: "Estructura metálica sobre ruedas fabricada a medida en planta industrial", src: "/images/gallery/project-img-021.jpg" },
        { alt: "Mesas y estructuras metálicas industriales fabricadas a medida en línea de producción", src: "/images/gallery/project-img-024.jpg" },
        { alt: "Escalera y plataforma metálica industrial pintada en amarillo de seguridad", src: "/images/gallery/project-img-025.jpg" },
        { alt: "Estructura metálica de acceso junto a maquinaria industrial pintada en amarillo", src: "/images/gallery/project-img-026.jpg" },
      ],
    },
    contact: {
      title: "Solicita tu cotización",
      subtitle: "Cuéntanos qué necesitas y te contactaremos por WhatsApp.",
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      company: "Empresa (opcional)",
      companyPlaceholder: "Nombre de tu empresa",
      phone: "Teléfono",
      phonePlaceholder: "10 dígitos",
      service: "Tipo de servicio",
      servicePlaceholder: "Selecciona un servicio",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos brevemente qué necesitas",
      submit: "Enviar por WhatsApp",
      errorRequired: "Este campo es obligatorio.",
      errorPhone: "Ingresa un teléfono válido (10 dígitos).",
      success: "Abriendo WhatsApp con tu mensaje...",
    },
    footer: {
      tagline: "Tu socio confiable en soluciones integrales para la industria.",
      contactTitle: "Contacto",
      servicesTitle: "Servicios",
      followUs: "Síguenos",
      privacy:
        "Aviso de privacidad: los datos proporcionados en este sitio se utilizan únicamente para responder tu solicitud de cotización y no se comparten con terceros.",
      rights: "Todos los derechos reservados.",
      emailLabel: "Correo electrónico",
    },
    whatsappFloat: {
      label: "Chatea con nosotros por WhatsApp",
    },
  },
  en: {
    meta: {
      title: "Fix4U | Industrial & Residential Installation and Maintenance",
      description:
        "Fix4U is your trusted partner for complete industrial solutions: epoxy flooring, industrial painting, metalwork, electrical, automation, civil works, security cameras, mini splits, carpentry and solar panels.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Projects",
      contact: "Contact",
      cta: "Get a Quote on WhatsApp",
    },
    hero: {
      headline: "Your Solution for Installation and Maintenance",
      subtitle:
        "Your trusted partner for complete industrial solutions. Residential, office, and industrial services in one place.",
      ctaWhatsapp: "Get a Quote on WhatsApp",
      ctaServices: "View Services",
      imageAlt: "Fix4U team performing industrial installation work",
    },
    about: {
      title: "Who we are",
      text:
        "At Fix4U we have years of experience providing complete installation and maintenance solutions for homes, offices, and industry across Mexico. Our team combines quality, speed, and fair prices to get your project done from start to finish.",
      points: [
        {
          title: "Proven experience",
          text: "A trained team with years of experience in residential, commercial, and industrial projects.",
        },
        {
          title: "Fast response",
          text: "Quick quotes and site visits, directly through WhatsApp.",
        },
        {
          title: "Work guarantee",
          text: "Quality materials and a guarantee on every service performed.",
        },
      ],
    },
    services: {
      title: "Our Services",
      subtitle: "Complete solutions for your home, office, or industrial plant.",
      items: [
        {
          key: "pisos",
          title: "Flooring (epoxy coating & polishing)",
          bullets: [
            "Industrial epoxy coating application",
            "Concrete polishing and sealing",
            "Chemical and heavy-traffic resistant floors",
          ],
        },
        {
          key: "pintura",
          title: "Industrial & commercial painting",
          bullets: [
            "Anti-corrosion coatings",
            "Painting of industrial facilities and offices",
            "Decorative and protective finishes",
          ],
        },
        {
          key: "herreria",
          title: "General metalwork",
          bullets: [
            "Custom metal structures",
            "Doors, gates, and railings",
            "Repair and maintenance",
          ],
        },
        {
          key: "electricidad",
          title: "Low-voltage electrical",
          bullets: [
            "Residential and industrial electrical installations",
            "Panels and circuits",
            "Fault diagnosis and repair",
          ],
        },
        {
          key: "automatizaciones",
          title: "Automation",
          bullets: [
            "Automatic gates and access control",
            "Lighting and process control",
            "System integration",
          ],
        },
        {
          key: "obraCivil",
          title: "Civil works",
          bullets: [
            "Remodeling and expansions",
            "Finishes and light construction",
            "Turnkey projects",
          ],
        },
        {
          key: "camaras",
          title: "Security cameras",
          bullets: [
            "CCTV installation",
            "Remote monitoring via app",
            "System maintenance and upgrades",
          ],
        },
        {
          key: "minisplits",
          title: "Mini split installation & maintenance",
          bullets: [
            "New equipment installation",
            "Preventive and corrective maintenance",
            "Gas recharge and deep cleaning",
          ],
        },
        {
          key: "carpinteria",
          title: "Carpentry",
          bullets: [
            "Custom furniture",
            "Closets and integral kitchens",
            "Wood structure repair",
          ],
        },
        {
          key: "paneles",
          title: "Solar panels",
          bullets: [
            "Photovoltaic system design and installation",
            "Maintenance of existing panels",
            "Energy savings consulting",
          ],
        },
      ],
    },
    gallery: {
      title: "Completed Projects",
      subtitle: "A sample of our work in flooring, industrial buildings, and metal structures.",
      note: "Real photographs of projects completed by Fix4U.",
      items: [
        { alt: "Blue industrial epoxy floor coating in a manufacturing plant", src: "/images/gallery/project-img-010.jpg" },
        { alt: "White industrial epoxy floor with yellow safety line markings", src: "/images/gallery/project-img-012.jpg" },
        { alt: "Light gray industrial epoxy floor in a storage area", src: "/images/gallery/project-img-013.jpg" },
        { alt: "Black decorative flake epoxy floor in a residential garage", src: "/images/gallery/project-img-016.jpg" },
        { alt: "Polished concrete floor in an industrial warehouse with workers finishing the job", src: "/images/gallery/project-img-018.jpg" },
        { alt: "Custom-built rolling metal fabrication rack in an industrial plant", src: "/images/gallery/project-img-021.jpg" },
        { alt: "Custom industrial metal tables and structures on a production line", src: "/images/gallery/project-img-024.jpg" },
        { alt: "Industrial metal staircase and platform painted safety yellow", src: "/images/gallery/project-img-025.jpg" },
        { alt: "Metal access structure next to industrial machinery painted safety yellow", src: "/images/gallery/project-img-026.jpg" },
      ],
    },
    contact: {
      title: "Request Your Quote",
      subtitle: "Tell us what you need and we'll contact you on WhatsApp.",
      name: "Name",
      namePlaceholder: "Your full name",
      company: "Company (optional)",
      companyPlaceholder: "Your company name",
      phone: "Phone",
      phonePlaceholder: "10 digits",
      service: "Service type",
      servicePlaceholder: "Select a service",
      message: "Message",
      messagePlaceholder: "Briefly tell us what you need",
      submit: "Send via WhatsApp",
      errorRequired: "This field is required.",
      errorPhone: "Enter a valid phone number (10 digits).",
      success: "Opening WhatsApp with your message...",
    },
    footer: {
      tagline: "Your trusted partner for complete industrial solutions.",
      contactTitle: "Contact",
      servicesTitle: "Services",
      followUs: "Follow us",
      privacy:
        "Privacy notice: information submitted on this site is used solely to respond to your quote request and is not shared with third parties.",
      rights: "All rights reserved.",
      emailLabel: "Email",
    },
    whatsappFloat: {
      label: "Chat with us on WhatsApp",
    },
  },
};

export const WHATSAPP_NUMBER = "528444448342";
export const CONTACT_EMAIL = "ombmyo@gmail.com";
export const serviceOrder = serviceKeys;
