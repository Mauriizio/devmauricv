// data/projects.js
export const projectsData = [
//Mecanica El Intercontinental
{
  "id": "mecanica-int",
  "slug": "mecanica-intercontinental",
  "category": "Servicios/Landing page",
  "title": "El Intercontinental",
  "icon": "/assets/mec/icon-mec.webp",
  "detailImage": "/assets/mec/mec-1.webp",
  "contentImage": "/assets/mec/mec-2.webp",
  "extraImage": "/assets/mec/mec-3.webp",
  "ogImage": "/assets/coriolisacc/og.webp",
  "image": "/assets/coriolisacc/icon-mec.webp",
  "description": "Diseñé y desarrollé el sitio web para Mecánica El Intercontinental partiendo de un objetivo claro: que el taller dejara de depender solo del boca a boca y empezara a captar clientes de forma constante por canales digitales. Me encargué desde el wireframe hasta la implementación final: arquitectura de la información, diseño mobile-first, animaciones sutiles para mejorar la percepción de profesionalismo y los llamados a la acción que convierten (WhatsApp directo, formulario rápido y mapa de ubicación). Además optimicé imágenes, configuré SEO local básico y preparé la landing para una campaña de Google Ads enfocada en servicios clave. El resultado fue una presencia digital mucho más clara y un aumento visible en las solicitudes de servicio y llamadas en las semanas posteriores.",
  "technologies": [
    "React",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "WhatsApp API (enlace directo y mensajes preconfigurados)",
    "Responsive Design (mobile-first)",
    "Optimización de imágenes y lazy-loading",
    "Google Ads (configuración y optimización básica)"
  ],
  "role": "Desarrollador full-stack: diseño UI/UX, maquetación responsiva, integración con API de mensajería y gestión inicial de la campaña publicitaria.",
  "year": "2024",
  "duration": "4 semanas (diseño, desarrollo y puesta en marcha de la campaña inicial)",
  "challenges": "El principal desafío fue lograr una experiencia rápida y confiable en dispositivos móviles con imágenes del taller y galerías pesadas. Tuve que balancear calidad visual con tiempos de carga, implementar compresión y lazy-loading, y asegurar que la integración con la API de WhatsApp funcionara sin fricciones en distintos navegadores. También optimicé la landing para que la campaña de Google Ads dirigiera tráfico cualificado con una tasa de rebote baja.",
  "process": [
    "Análisis rápido del negocio y definición de objetivos (captación de clientes y facilidad de contacto).",
    "Wireframes y prototipo móvil-first para priorizar la información que más convierte.",
    "Maquetación en React con Tailwind CSS; componentes reutilizables para servicios y testimonios.",
    "Integración de WhatsApp API y formulario de contacto con validación.",
    "Optimización de rendimiento: compresión, lazy-loading, sprites y preloading crítico.",
    "Lanzamiento de la campaña básica en Google Ads y ajustes iniciales para medir conversiones."
  ],
  "features": [
    "Diseño completamente responsivo con enfoque mobile-first — botones y CTAs optimizados para tocar con el pulgar.",
    "Integración directa con WhatsApp: mensajes predefinidos por servicio y botón visible en todas las secciones.",
    "Formulario de contacto simple y rápido para solicitudes de presupuesto y reserva de turnos.",
    "Mapa embebido con ubicación y horarios para facilitar la llegada de clientes.",
    "Optimización básica para SEO local (metatags, esquema de negocio local y NAP consistente).",
    "Preparación de la landing para campañas de Google Ads (mensajes claros, velocidad y tracking)."
  ],
  "results": "Mejoré la presencia digital del taller y facilité el contacto directo entre clientes y mecánicos. Tras la puesta en marcha se observó un incremento en llamadas y solicitudes de servicio. (Si tienes números concretos —llamadas, formularios, conversion rate— los agrego para dejar la ficha con métricas).",
  "learnings": "Aprendí a priorizar recursos gráficos sin sacrificar la experiencia móvil y a montar una estructura de landing que responde bien a anuncios pagados; pequeñas optimizaciones en la carga marcaron la diferencia en la tasa de conversión.",
  "notes": "Si quieres que redacte esta misma entrada en inglés, en formato para Behance, o que añada un testimonio real del cliente y métricas, pásame los textos y cifras y lo dejo listo.",
  "githubUrl": "https://github.com/Mauriizio/webmecanic",
  "liveUrl": "https://www.mecanicaelintercontinental.com/"
},
//Coriolis Accesorios
{
    id: "coriolis",
    slug: "coriolis-accesorios",
    category: "e-comerce/Tienda online",
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

    description: "Página web para emprendimiento local, con tienda online. Esta web es un emprendimiento de una estudiante de Biologia marina, que queria vender accesorios hechos a mano, y expresar su escencia en la web como en cada producto  por lo cual me encarge de diseñar y desarrollar la web desde cero en React/Next.js, desde el diseño de logo, paleta de colores y todo el branding de la marca.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "TypeScript"],
    challenges:
      "Crear colecciones por temporada y categorizar productos, yendo más allá del desarrollo hacia la creación visual de assets con IA. Editar cada foto de producto para mantener una estética coherente en toda la tienda.",
    features: [
      "Animaciones CSS complejas",
      "Layouts avanzados con Grid y Flexbox",
      "Efectos visuales modernos",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/coriolis",
    liveUrl: "https://www.coriolisaccesorios.store/",
},
//Dulces Secretos
{
    
    id: "dulcessecretos",
    slug: "duleces-secretos",
    category: "e-comerce/App tienda online",
    title: "Dulces Secretos",

    // Miniatura del menú
    icon: "/assets/dulces/icon-dul.webp",

    // Imágenes del detalle
    detailImage: "/assets/dulces/dulces (3).png",     // HERO inicial
    contentImage: "/assets/dulces/dulces (2).png", // grande tras la descripción
    extraImage: "/assets/dulces/dulces (1).png",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/dulces/icon-dul.webp",

    // Fallback (compatibilidad con código previo)
    image: "/assets/dulces/icon-dul.webp",

    description: "Página web para emprendimiento local, con tienda online y app mobile. Esta web la habia realizado anteriormente en Wordpress, pero la cliente queria una web mas rapida y con mejor experiencia de usuario, por lo cual decidi rediseñarla y desarrollarla desde cero en React/Next.js.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "Grid", "TypeScript"],
    challenges:
      "Aparte de crear la tienda de reposteria, la cliente queria comenzar con la venta de cursos, el reto fue ayudarla a organizar sus ideas y plantearle posibles metodos de ventas de los cursos, creando categorias, metodologias de entrega y llevandolo a la realidad.",
    features: [
      "Animaciones CSS complejas",
      "Layouts avanzados con Grid y Flexbox",
      "Efectos visuales modernos",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/sturdy-rotary-phone",
    liveUrl: "https://www.dulcessecretos.online/",
  },
//Los Chamitos Locos
  {
    
    id: "lcl",
    slug: "chamitos-locos",
    title: "Los Chamitos Locos",
    category: "Sitio web de Banda Musical",

    // Miniatura del menú
    icon: "/assets/lcl/icon-lcl.webp",

    // Imágenes del detalle
    detailImage: "/assets/lcl/lcl (2).webp",     // HERO inicial
    contentImage: "/assets/lcl/lcl (3).webp", // grande tras la descripción
    extraImage: "/assets/lcl/lcl (1).webp",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/coriolisacc/og.webp",

    // Fallback (compatibilidad con código previo)
    image: "/assets/lcl/icon-lcl.webp",

    description: "Página web para grupo musical venezolano. Para mi lo principal fue capturar la energía y el espíritu vibrante de la banda a través del diseño web. Trabajé en estrecha colaboración con los miembros para entender su visión y traducirla en una experiencia digital que reflejara su estilo único. Implementé secciones dinámicas para biografías, galería multimedia y un calendario de eventos interactivo. Además, optimicé la web para SEO local y redes sociales, asegurando que los fans pudieran encontrar fácilmente información sobre próximos conciertos y lanzamientos.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "TypeScript"],
    challenges:
      "Crear una experiencia inmersiva que transmitiera la energía de la banda, integrando multimedia y manteniendo tiempos de carga rápidos. También fue un reto organizar el contenido para que fuera accesible y atractivo tanto para fans nuevos como para seguidores leales.",
    features: [
      "Animaciones CSS complejas",
      "Layouts avanzados con Grid y Flexbox",
      "Efectos visuales modernos",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/lcl",
    liveUrl: "https://www.dulcessecretos.online/",
  },
//GH Formación
  {
    id: "ghformacion",
    slug: "gh-formacion",
    category: "Sitio web para academia online",
    title: "GH Formación",

    // Miniatura del menú
    icon: "/assets/gh/gh.jpg",

    // Imágenes del detalle
    detailImage: "/assets/gh/gh (2).png",     // HERO inicial
    contentImage: "/assets/gh/gh (1).png",  // grande tras la descripción
    extraImage: "/assets/gh/gh (3).png",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/gh/gh.jpg",

    // Fallback (compatibilidad con código previo)
    image: "/assets/gh/gh.jpg",

    description: "Página web para academia de formación online. Este proyecto fue especialmente gratificante ya que me permitió combinar mi pasión por la educación y la tecnología. Trabajé en estrecha colaboración con el equipo de GH Formación y el Profesor Gabriel Hernandez para diseñar una plataforma que no solo fuera visualmente atractiva, sino también funcional y fácil de navegar para estudiantes e instituciones que deseen instruir a su personal. Además, optimicé la web para SEO y rendimiento, asegurando que los futuros visitantes pudieran encontrar fácilmente la academia en línea.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "TypeScript"],
    challenges:
      "Crear una experiencia de usuario intuitiva que facilitara la navegación entre los recursos educativos. También fue un reto integrar funcionalidades específicas para la espera de la introduccion de material academico a futuro de manera que sea escalable y poder comenzar a publicar cursos en texto Plano y recursos de texto descargables. Se dejo la opcion a futuro para introducir clases grabadas y en vivo.",
    features: [
      "Animaciones CSS complejas",
      "Layouts avanzados con Grid y Flexbox",
      "Efectos visuales modernos",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/cvgabriel",
    liveUrl: "https://www.ghformacion.com/",
},
//Portafolio Daniyer
  {
    id: "daniyer",
    slug: "daniyer",
    category: "Portafolio personal",
    title: "Portafolio Daniyer",

    // Miniatura del menú
    icon: "/assets/daniyer/dani.jpg",

    // Imágenes del detalle
    detailImage: "/assets/daniyer/dani (3).png",     // HERO inicial
    contentImage: "/assets/daniyer/dani (2).png", // grande tras la descripción
    extraImage: "/assets/daniyer/dani (1).png",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/daniyer/dani.jpg",

    // Fallback (compatibilidad con código previo)
    image: "/assets/daniyer/dani.jpg",

    description: "Página web para portafolio personal de ex-militar y escolta profesional venezolano. Este proyecto fue especialmente significativo ya que me permitió ayudar a un profesional con una carrera única a destacar sus habilidades y experiencia en un formato digital moderno. Trabajé en estrecha colaboración con Daniyer para entender su trayectoria y diseñar una plataforma que reflejara su profesionalismo y versatilidad. Implementé secciones detalladas para su experiencia laboral, certificaciones y servicios ofrecidos, asegurando que la información fuera accesible y atractiva para potenciales clientes e instituciones.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "TypeScript"],
    challenges:
      "Crear una experiencia de usuario que transmitiera confianza y profesionalismo, integrando multimedia y manteniendo tiempos de carga rápidos. También fue un reto organizar el contenido para que fuera accesible y atractivo tanto para clientes potenciales como para instituciones que buscan contratar servicios de seguridad.",
    features: [
      "Animaciones CSS complejas",
      "Layouts avanzados con Grid y Flexbox",
      "Efectos visuales modernos",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/cvdaniyer",
    liveUrl: "https://daniyer.online/",
},

// IconForge
{
  id: "iconforge",
  slug: "iconforge",
  category: "Herramienta web / Generador de assets",
  title: "IconForge — All-in-one icon & OG generator",

  // Miniatura del menú
  icon: "/assets/iconforge/3.png",

  // Imágenes del detalle
  detailImage: "/assets/iconforge/1.png",        // HERO inicial
  contentImage: "/assets/iconforge/2.png",     // grande tras la descripción
  extraImage: "/assets/iconforge/2.png", // grande tras retos/soluciones

  // (Opcional) Imagen para Open Graph/Twitter
  ogImage: "/assets/iconforge/og-1200x630.png",

  // Fallback (compatibilidad con código previo)
  image: "/assets/iconforge/3.png",

  description:
    "IconForge es un studio web 100% cliente (Next.js + React + Tailwind) para generar todos los assets de marca de un sitio desde un único logo: favicons .ico/.png, iconos PWA (16–512, maskable), Open Graph 1200×630 con título/subtítulo, site.webmanifest y un ZIP final. Todo sucede en el navegador (Canvas API, canvg, client-zip, png2icojs), sin backend y con foco en accesibilidad y UX clara.",

  technologies: [
    "React 19",
    "Next.js 15 (App Router)",
    "Tailwind CSS 3",
    "Canvas API",
    "canvg",
    "client-zip",
    "png2icojs"
  ],

  challenges:
    "Procesar SVG/PNG/JPG íntegramente en el cliente garantizando nitidez en múltiples tamaños y formatos, mantener la UI responsiva sin solapes en móvil (h-dvh + safe-areas), y generar ZIP/manifest/OG de forma consistente. Además, asegurar feedback de estado (spinners/disabled), validación de archivos (≤5MB) y accesibilidad de controles.",

  features: [
    "Exportes PNG 16–512 y favicon.ico multi-tamaño",
    "OG 1200×630 con título/subtítulo y fondo auto cuando es transparente",
    "site.webmanifest con purpose 'any maskable' y colores configurables",
    "ZIP final con icons/, og/, manifest y README con snippets listo para copiar",
    "100% local: sin backend, privacidad por diseño"
  ],

  githubUrl: "https://github.com/Mauriizio/icon-forget",
  liveUrl: "https://icon-forget.vercel.app/" // ← reemplaza con tu URL de producción
}



]
// --- End of code ---