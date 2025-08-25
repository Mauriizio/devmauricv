// data/projects.js
export const projectsData = [
  {
    id: "mecanica-int",
    slug: "mecanica-intercontinental",
    title: "El Intercontinental",
    icon: "/assets/mec/icon-mec.webp",
    detailImage: "/assets/mec/mec-1.webp", 
    contentImage: "/assets/mec/mec-2.webp",
    extraImage: "/assets/mec/mec-3.webp",
    ogImage: "/assets/coriolisacc/og.webp",
    image: "/assets/coriolisacc/icon-mec.webp",
    description:
      "Sitio web desarrollado para Mecánica El Intercontinental, un taller mecánico que buscaba aumentar su clientela. La página mejoró su presencia digital y facilitó el contacto directo. Además, implementé una campaña de publicidad con Google Ads, lo que incrementó notablemente las llamadas y solicitudes de servicios.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "WhatsApp API", "Responsive Design", "Google ADS"],
    challenges:
      "El reto principal fue lograr una interfaz moderna, rápida y totalmente adaptada a móviles, manteniendo una experiencia fluida y profesional en todos los dispositivos.",
    features: [
      "Diseño completamente responsivo",
      "Integración con la API de WhatsApp",
      "Optimización básica para SEO local",
      "Campaña activa con Google Ads",
    ],
    githubUrl: "https://github.com/Mauriizio/webmecanic",
    liveUrl: "https://www.mecanicaelintercontinental.com/",
  },

  {
    id: "coriolis",
    slug: "coriolis-accesorios",
    title: "Coriolis Accesorios",

    // Miniatura del menú
    icon: "/assets/coriolisacc/cover.webp",

    // Imágenes del detalle
    detailImage: "/assets/coriolisacc/hero.webp",     // HERO inicial
    contentImage: "/assets/coriolisacc/cor-2.webp", // grande tras la descripción
    extraImage: "/assets/coriolisacc/cor-3.webp",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/coriolisacc/og.webp",

    // Fallback (compatibilidad con código previo)
    image: "/assets/coriolisacc/cover.webp",

    description: "Página web para emprendimiento local, con tienda online.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "TypeScript"],
    challenges:
      "Crear colecciones por temporada y categorizar productos, yendo más allá del desarrollo hacia la creación visual de assets con IA.",
    features: [
      "Animaciones CSS complejas",
      "Layouts avanzados con Grid y Flexbox",
      "Efectos visuales modernos",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/coriolis",
    liveUrl: "https://www.coriolisaccesorios.store/",
  },

  {
    
    id: "dulcessecretos",
    slug: "duleces-secretos",
    title: "Dulces Secretos",

    // Miniatura del menú
    icon: "/assets/dulces/icon-dul.webp",

    // Imágenes del detalle
    detailImage: "/assets/coriolisacc/hero.webp",     // HERO inicial
    contentImage: "/assets/coriolisacc/cor-2.webp", // grande tras la descripción
    extraImage: "/assets/coriolisacc/cor-3.webp",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/coriolisacc/og.webp",

    // Fallback (compatibilidad con código previo)
    image: "/assets/coriolisacc/cover.webp",

    description: "Página web para emprendimiento local, con tienda online.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "TypeScript"],
    challenges:
      "Crear colecciones por temporada y categorizar productos, yendo más allá del desarrollo hacia la creación visual de assets con IA.",
    features: [
      "Animaciones CSS complejas",
      "Layouts avanzados con Grid y Flexbox",
      "Efectos visuales modernos",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/sturdy-rotary-phone",
    liveUrl: "https://www.dulcessecretos.online/",
  },

  {
    
    id: "lcl",
    slug: "chamitos-locos",
    title: "Los Chamitos Locos",

    // Miniatura del menú
    icon: "/assets/lcl/icon-lcl.webp",

    // Imágenes del detalle
    detailImage: "/assets/coriolisacc/hero.webp",     // HERO inicial
    contentImage: "/assets/coriolisacc/cor-2.webp", // grande tras la descripción
    extraImage: "/assets/coriolisacc/cor-3.webp",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/coriolisacc/og.webp",

    // Fallback (compatibilidad con código previo)
    image: "/assets/coriolisacc/cover.webp",

    description: "Página web para emprendimiento local, con tienda online.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "TypeScript"],
    challenges:
      "Crear colecciones por temporada y categorizar productos, yendo más allá del desarrollo hacia la creación visual de assets con IA.",
    features: [
      "Animaciones CSS complejas",
      "Layouts avanzados con Grid y Flexbox",
      "Efectos visuales modernos",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/sturdy-rotary-phone",
    liveUrl: "https://www.dulcessecretos.online/",
  },

  {
    id: "nextjs",
    title: "Aplicación Next.js Full-Stack",
    image: "/assets/project-nextjs.jpg",
    description:
      "Una aplicación full-stack desarrollada con Next.js, implementando SSR, API routes, y optimizaciones avanzadas para producción.",
    technologies: ["Next.js", "React", "API Routes", "SSR/SSG", "Vercel"],
    challenges:
      "Balancear el rendimiento entre SSR y CSR fue complejo. Implementé una estrategia híbrida usando ISR (Incremental Static Regeneration) para obtener lo mejor de ambos mundos.",
    features: [
      "Server-Side Rendering optimizado",
      "API Routes integradas",
      "Optimización automática de imágenes",
      "Deploy automático con Vercel",
    ],
    githubUrl: "https://github.com/tuusuario/proyecto-nextjs",
    liveUrl: "https://tu-proyecto-nextjs.vercel.app",
  },

  {
    id: "tailwind",
    title: "UI Kit con Tailwind CSS",
    image: "/assets/project-tailwind.jpg",
    description:
      "Un sistema de diseño completo y biblioteca de componentes desarrollada con Tailwind CSS, enfocada en la reutilización y consistencia visual.",
    technologies: ["Tailwind CSS", "PostCSS", "Storybook", "React", "TypeScript"],
    challenges:
      "Crear un sistema de diseño escalable y mantenible requería una arquitectura cuidadosa. Desarrollé un sistema de tokens de diseño y componentes modulares que facilitan la consistencia en proyectos grandes.",
    features: [
      "Sistema de tokens de diseño",
      "Componentes reutilizables",
      "Documentación interactiva",
      "Temas personalizables",
    ],
    githubUrl: "https://github.com/tuusuario/proyecto-tailwind",
    liveUrl: "https://tu-ui-kit-tailwind.vercel.app",
  },
]
// --- End of code ---