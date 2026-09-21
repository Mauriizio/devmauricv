// data/projects.js
export const projectsData = [

  // IconFull Generator
{
  id: "iconfull",
  slug: "iconfull",
  category: "Herramienta Web + CLI",
  title: "IconFull (Studio + CLI) ",

  // Miniatura del menú
  icon: "/assets/iconforge/3.png",

  // Imágenes del detalle
  detailImage: "/assets/iconforge/1.png",        // HERO inicial
  contentImage: "/assets/iconforge/2.png",     // grande tras la descripción
  extraImage: "/assets/iconforge/33.png", // grande tras retos/soluciones

  // (Opcional) Imagen para Open Graph/Twitter
  ogImage: "/assets/iconforge/og-1200x630.png",

  // Fallback (compatibilidad con código previo)
  image: "/assets/iconforge/3.png",

  description:
    "Herramienta para generar, desde una sola imagen, todos los assets esenciales de una app/web: favicons, Apple Touch, Android Chrome icons, imagen Open Graph y manifest.webmanifest, con flujo visual en web y automatización por CLI. Ideal para desarrolladores y diseñadores que buscan optimizar su flujo de trabajo y garantizar consistencia en sus proyectos. La aplicación web permite a los usuarios subir una imagen (SVG, PNG o JPG) y personalizar opciones como colores de fondo, textos para OG, y tamaños específicos. Luego, genera un paquete ZIP listo para usar con todos los assets necesarios. La versión CLI facilita la integración en pipelines de desarrollo, permitiendo generar los mismos assets directamente desde la terminal con comandos simples.",

  technologies: [
    "React",
    "Next.js (Studio web)",
    "Tailwind CSS",
    "Node.js",
    "CLI con Commander",
    "Sharp (procesamiento de imágenes)",
    "Archiver (export ZIP)"
  ],

  challenges:
    "Al tener dos vías de uso (Studio y terminal), era clave mantener el mismo estándar de archivos para evitar diferencias en producción. Solución: se definió un set consistente de salidas (favicon, apple-touch-icon, android-chrome, og, manifest) y se documentó para ambos flujos. muchos usuarios necesitan interfaz gráfica, pero equipos técnicos requieren ejecución en pipelines/CI. Solución: arquitectura monorepo con dos productos complementarios: apps/web (Studio) y packages/cli (automatización por comandos).  Procesar SVG/PNG/JPG íntegramente en el cliente garantizando nitidez en múltiples tamaños y formatos, mantener la UI responsiva sin solapes en móvil (h-dvh + safe-areas), y generar ZIP/manifest/OG de forma consistente. Además, asegurar feedback de estado (spinners/disabled), validación de archivos (≤5MB) y accesibilidad de controles.",

  features: [
    "Exportes PNG 16–512 y favicon.ico multi-tamaño",
    "OG 1200×630 con título/subtítulo y fondo auto cuando es transparente",
    "site.webmanifest con purpose 'any maskable' y colores configurables",
    "ZIP final con icons/, og/, manifest y README con snippets listo para copiar",
    "100% local: sin backend, privacidad por diseño"
  ],

  githubUrl: "https://github.com/Mauriizio/icon-full",
  liveUrl: "https://icon-full.vercel.app/" 
},

  // Space Marine Club de Boxeo y Gym
{
  id: "spacemarine",
  slug: "spacemarine",
  category: "Sitio Web para Gimnasio/Boxeo",
  title: "Space Marine Club de Box",

  // Miniatura del menú
  icon: "/assets/spacemarine/3.png",

  // Imágenes del detalle
  detailImage: "/assets/spacemarine/1.png",        // HERO inicial
  contentImage: "/assets/spacemarine/2.png",     // grande tras la descripción
  extraImage: "/assets/spacemarine/33.png", // grande tras retos/soluciones

  // (Opcional) Imagen para Open Graph/Twitter

  // Miniatura del menú
  icon: "/assets/gym/logo.png",

  // Imágenes del detalle
  detailImage: "/assets/gym/1.png",        // HERO inicial
  contentImage: "/assets/gym/2.png",     // grande tras la descripción
  extraImage: "/assets/gym/3.png", // grande tras retos/soluciones

  // (Opcional) Imagen para Open Graph/Twitter
  ogImage: "/assets/gym/og.png",

  // Fallback (compatibilidad con código previo)
  image: "/assets/gym/logo.png",

  description:
    "Sitio web para gimnasio y club de boxeo, con diseño moderno y funcionalidad completa. El objetivo principal era crear una plataforma que no solo presentara la información de manera clara, sino que también facilitara la interacción con los usuarios potenciales. Implementé secciones detalladas para horarios, entrenadores, servicios ofrecidos y una galería multimedia para mostrar las instalaciones y eventos del gimnasio. Además, optimicé la web para SEO local y redes sociales, asegurando que los interesados pudieran encontrar fácilmente el gimnasio en línea.",

  technologies: [
    "React",
    "Next.js (Studio web)",
    "Tailwind CSS",
   "SEO local y optimización para redes sociales",
   "Integración de formularios de contacto y suscripción"
  ],

  challenges: //Gym mas club de boxeo mas la venta del  producto oficial del gym Creatina Monohidrato Space Marine y tener que promocionarla y a la vez pormocionar el gym sin quiarse protagonismo entre ambos
    "El principal desafío fue equilibrar la promoción del gimnasio y el club de boxeo con la venta del producto oficial (Creatina Monohidrato Space Marine) sin que uno opacara al otro. Para resolver esto, diseñé una estructura de navegación clara que destacaba ambos aspectos por igual, utilizando secciones dedicadas para cada uno. Además, implementé estrategias de SEO local para el gimnasio y optimización de contenido para la tienda online, asegurando que ambos elementos tuvieran visibilidad adecuada en los motores de búsqueda y redes sociales.",

  features: [
    "Diseño moderno y responsivo con Tailwind CSS",
    "Secciones detalladas para horarios, productos y servicios",
    "Galería multimedia para mostrar instalaciones y eventos",
    "Optimización SEO local y para redes sociales",
    "Formularios de contacto y suscripción integrados"
  ],

  githubUrl: "https://github.com/Mauriizio/Gym-Space-Marin",
  liveUrl: "https://www.spacemarinegym.cl/" 
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
    extraImage: "/assets/lcl/lcl (4).webp",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/lcl/og-1200x630.png",

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
    liveUrl: "https://lcl-sepia-nine.vercel.app/",
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
    liveUrl: "https://coriolis-caballeromaurizio-gmailcoms-projects.vercel.app/",
},

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
  "image": "/assets/mec/icon-mec.webp",
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
  "liveUrl": "https://webmecanic-lme7-caballeromaurizio-gmailcoms-projects.vercel.app/"
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
    liveUrl: "https://sturdy-rotary-p-git-209069-caballeromaurizio-gmailcoms-projects.vercel.app/",
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
    liveUrl: "https://cvdaniyer-caballeromaurizio-gmailcoms-projects.vercel.app/",
},



//Portafolio Paola Morales
  {
    id: "Paola_Morales",
    slug: "Paola",
    category: "Curriculum Web",
    title: "Curriculum Paola Morales",

    // Miniatura del menú
    icon: "/assets/pm/ico.png",

    // Imágenes del detalle
    detailImage: "/assets/pm/pm1.webp",     // HERO inicial
    contentImage: "/assets/pm/pm2.webp", // grande tras la descripción
    extraImage: "/assets/pm/pm3.webp",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/pm/ico.png",

    // Fallback (compatibilidad con código previo)
    image: "/assets/pm/ico.png",

    description: "Página web para portafolio personal Ingeniera de Procesos Quimicos venezolana. Este proyecto fue especialmente significativo ya que me permitió ayudar a una profesional con una carrera única a destacar sus habilidades y experiencia en un formato digital moderno. Trabajé en estrecha colaboración con Paola para entender su trayectoria y diseñar una plataforma que reflejara su profesionalismo y versatilidad. Implementé secciones detalladas para su experiencia laboral, certificaciones y servicios ofrecidos, asegurando que la información fuera accesible y atractiva para potenciales empleadores e instituciones.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Flexbox", "TypeScript"],
    challenges:
      "Crear una experiencia de usuario que transmitiera confianza y profesionalismo, integrando multimedia y manteniendo tiempos de carga rápidos. También fue un reto organizar el contenido para que fuera accesible y atractivo tanto para empleadores potenciales como para instituciones que buscan contratar sus servicios.",
    features: [
      "Creacion de Logo personalizado","minimalismo y profesionalismo",
      "Layouts avanzados con Grid y Flexbox",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/moralescv",
    liveUrl: "https://moralescv-f4u3-caballeromaurizio-gmailcoms-projects.vercel.app/",
},

//Portafolio Gladys Pabon Estudiante de Geologia
  {
    id: "Gladys_Pabon",
    slug: "Gladys",
    category: "Curriculum Web",
    title: "Curriculum Gladys Pabon",

    // Miniatura del menú
    icon: "/assets/gp/ico.png",

    // Imágenes del detalle
    detailImage: "/assets/gp/gp1.webp",     // HERO inicial
    contentImage: "/assets/gp/gp2.webp", // grande tras la descripción
    extraImage: "/assets/gp/gp3.webp",     // grande tras retos/soluciones

    // (Opcional) Imagen para Open Graph/Twitter
    ogImage: "/assets/gp/ico.png",

    // Fallback (compatibilidad con código previo)
    image: "/assets/gp/ico.png",

    description: "Página web para portafolio personal de estudiante de Geología. Este proyecto fue especialmente significativo ya que me permitió ayudar a una estudiante con una carrera única a destacar sus habilidades y experiencia en un formato digital moderno con enfoque en coseguir practicas profesionales.",
    technologies: ["React", "Tailwind CSS", "Flexbox"],
    challenges:
      "Hacerlo visualmente atractivo y profesional, integrando multimedia y manteniendo tiempos de carga rápidos. También fue un reto organizar el contenido para que fuera accesible y atractivo tanto para empleadores potenciales como para instituciones que buscan contratar sus servicios.",
    features: [
      "Creacion de Logo personalizado","minimalismo y profesionalismo","Layouts avanzados con Grid y Flexbox",
      "Optimización de rendimiento",
    ],
    githubUrl: "https://github.com/Mauriizio/cvgladys",
    liveUrl: "https://cvgladys.vercel.app/",
}

,

// Hip Hop Don’t Stop
{
  id: "hip-hop-dont-stop",
  slug: "hip-hop-dont-stop",
  type: "creative",
  contentKind: "music-production",
  title: "Hip Hop Don’t Stop",
  category: "Música / Producción",
  categories: ["Música / Producción", "Producción musical"],
  tags: ["Rap", "Producción musical", "Mezcla", "Mastering", "Composición", "Interpretación"],
  tools: [
    "Cubase 5",
    "Cubase Elements",
    "Cubase 15",
    "Photoshop",
    "Auto-Tune",
    "Waves Plugins",
    "FabFilter Bundle",
    "Blue Cat's Bundle",
    "Plugins de procesamiento vocal y mezcla",
  ],
  summary:
    "Proyecto musical de rap realizado con United Rappers y colaboración con Misterio MC, con producción musical, mezcla y mastering.",
  description:
    "Muestra seleccionada de una etapa musical profesional vinculada a producción, mezcla, mastering, composición e interpretación. El proyecto se presenta como antecedente creativo y técnico, útil para evidenciar disciplina de producción, criterio audiovisual y capacidad para cerrar piezas publicables.",
  status: "completed",
  featured: false,
  visibility: "public",
  year: 2016,
  role: "Productor musical, mezcla, mastering, composición e interpretación rap.",
  image: "/assets/projects/hip-hop-dont-stop/cover.webp",
  icon: "/assets/projects/hip-hop-dont-stop/logo-united-rappers.webp",
  detailImage: "/assets/projects/hip-hop-dont-stop/cover.webp",
  contentImage: "/assets/projects/hip-hop-dont-stop/tracklist.webp",
  extraImage: "/assets/projects/hip-hop-dont-stop/mockup-disco.webp",
  ogImage: "/assets/projects/hip-hop-dont-stop/cover.webp",
  media: {
    cover: "/assets/projects/hip-hop-dont-stop/cover.webp",
    tracklist: "/assets/projects/hip-hop-dont-stop/tracklist.webp",
    logo: "/assets/projects/hip-hop-dont-stop/logo-united-rappers.webp",
    mockup: "/assets/projects/hip-hop-dont-stop/mockup-disco.webp",
    caminoFrame: "/assets/projects/hip-hop-dont-stop/camino-del-mal-frame.webp",
  },
  links: [
    {
      id: "hip-hop-dont-stop-youtube",
      label: "Hip Hop Don’t Stop",
      url: "https://www.youtube.com/watch?v=ZPHE3eiXVBw&list=RDZPHE3eiXVBw&start_radio=1",
      type: "youtube",
    },
    {
      id: "camino-del-mal-youtube",
      label: "Camino del Mal",
      url: "https://www.youtube.com/watch?v=SvYkUlRW_wY",
      type: "youtube",
    },
  ],
  sections: [
    {
      id: "contexto",
      title: "Contexto",
      content:
        "Proyecto de rap desarrollado junto a United Rappers y con colaboración de Misterio MC. Se registra como una experiencia creativa anterior, enfocada en producción musical y publicación de piezas terminadas.",
    },
    {
      id: "rol-y-responsabilidades",
      title: "Rol y responsabilidades",
      content:
        "Participé en la producción musical, mezcla, mastering, composición e interpretación, cuidando tanto la construcción sonora como el cierre técnico de las piezas.",
    },
    {
      id: "herramientas-de-produccion",
      title: "Herramientas de producción",
      content:
        "El flujo combinó Cubase en distintas versiones, edición visual en Photoshop y plugins de procesamiento vocal y mezcla para ajustar voces, dinámica, ecualización y acabado final.",
    },
    {
      id: "piezas-destacadas",
      title: "Piezas destacadas",
      content:
        "La selección incluye Hip Hop Don’t Stop y Camino del Mal como referencias públicas del trabajo musical realizado en esa etapa.",
    },
    {
      id: "aprendizajes-transferibles",
      title: "Aprendizajes transferibles al perfil actual",
      content:
        "La experiencia aporta criterio audiovisual, atención al detalle, disciplina creativa y capacidad para iterar hasta obtener una entrega coherente y publicable.",
    },
  ],
  seo: {
    title: "Hip Hop Don’t Stop | Producción musical",
    description:
      "Proyecto musical de rap con producción, mezcla, mastering, composición e interpretación junto a United Rappers.",
    image: "/assets/projects/hip-hop-dont-stop/cover.webp",
    keywords: ["rap", "producción musical", "mezcla", "mastering", "United Rappers"],
  },
},

// Aseo Market
{
  id: "aseo-market",
  slug: "aseo-market",
  type: "web-project",
  contentKind: "client-website",
  title: "Aseo Market",
  category: "Desarrollo Web",
  categories: ["Desarrollo Web", "Sitio para cliente"],
  tags: ["Landing", "Sitio web", "React", "TypeScript", "Next.js", "Vercel", "Responsive"],
  tools: ["TypeScript", "React", "Next.js/Vercel", "Diseño responsive"],
  summary:
    "Sitio web para una empresa de mantenimiento industrial, orientado a presentar servicios y facilitar contacto comercial.",
  description:
    "Proyecto sencillo tipo landing extendida, con estructura de páginas y secciones para comunicar servicios de una empresa real de manera clara, profesional y directa.",
  status: "completed",
  featured: false,
  visibility: "public",
  role: "Desarrollo frontend y publicación web.",
  image: "/assets/projects/aseo-market/cover.webp",
  icon: "/assets/projects/aseo-market/logo.webp",
  detailImage: "/assets/projects/aseo-market/cover.webp",
  contentImage: "/assets/projects/aseo-market/home-desktop.webp",
  extraImage: "/assets/projects/aseo-market/servicios.webp",
  ogImage: "/assets/projects/aseo-market/cover.webp",
  media: {
    cover: "/assets/projects/aseo-market/cover.webp",
    home: "/assets/projects/aseo-market/home-desktop.webp",
    servicios: "/assets/projects/aseo-market/servicios.webp",
    contacto: "/assets/projects/aseo-market/contacto.webp",
    logo: "/assets/projects/aseo-market/logo.webp",
  },
  links: [
    {
      id: "demo",
      label: "Demo",
      url: "https://aseo-web.vercel.app/",
      type: "live",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Mauriizio/aseo-web",
      type: "github",
    },
  ],
  sections: [
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Crear una presencia web simple para presentar servicios de mantenimiento industrial y facilitar el contacto comercial desde una interfaz ordenada.",
    },
    {
      id: "alcance",
      title: "Alcance",
      content:
        "El alcance se mantuvo acotado: comunicar información relevante, mostrar servicios principales y orientar al usuario hacia canales de contacto.",
    },
    {
      id: "implementacion",
      title: "Implementación",
      content:
        "Se trabajó una estructura responsive publicada en Vercel, con secciones claras para inicio, servicios e información de contacto.",
    },
    {
      id: "resultado",
      title: "Resultado",
      content:
        "El resultado es un sitio profesional y directo, adecuado para una empresa que necesita explicar qué ofrece sin sumar complejidad innecesaria.",
    },
    {
      id: "aprendizaje",
      title: "Aprendizaje",
      content:
        "El proyecto reforzó la importancia de priorizar claridad, jerarquía visual y llamados a la acción en sitios de servicios.",
    },
  ],
  seo: {
    title: "Aseo Market | Sitio web de mantenimiento industrial",
    description:
      "Sitio web para empresa de mantenimiento industrial, orientado a servicios y contacto comercial.",
    image: "/assets/projects/aseo-market/cover.webp",
    keywords: ["desarrollo web", "landing", "mantenimiento industrial", "React", "Next.js"],
  },
},

// Ferox BARF
{
  id: "ferox-barf",
  slug: "ferox-barf",
  type: "web-project",
  contentKind: "fullstack-client-project",
  title: "Ferox BARF",
  category: "Desarrollo Web / Base de Datos",
  categories: ["Desarrollo Web / Base de Datos", "Proyecto fullstack"],
  tags: ["TypeScript", "React", "Next.js", "Supabase", "SQL", "Usuarios", "Calculadora", "Responsive"],
  tools: ["TypeScript", "React/Next.js", "Supabase", "SQL", "Autenticación/usuarios", "Diseño responsive"],
  summary:
    "Proyecto web para marca de alimentación BARF con registro de usuarios, registro de perros, calculadora de porciones y base de datos.",
  description:
    "Primer proyecto mostrable con base de datos y funcionalidades más complejas, integrando experiencia de usuario, registros relacionados y una calculadora útil para estimar porciones.",
  status: "completed",
  featured: false,
  visibility: "public",
  role: "Desarrollo web, modelado de datos y funcionalidades interactivas.",
  image: "/assets/projects/ferox-barf/cover.webp",
  icon: "/assets/projects/ferox-barf/cover.webp",
  detailImage: "/assets/projects/ferox-barf/cover.webp",
  contentImage: "/assets/projects/ferox-barf/home-desktop.webp",
  extraImage: "/assets/projects/ferox-barf/calculadora-porciones.webp",
  ogImage: "/assets/projects/ferox-barf/cover.webp",
  media: {
    cover: "/assets/projects/ferox-barf/cover.webp",
    home: "/assets/projects/ferox-barf/home-desktop.webp",
    calculadora: "/assets/projects/ferox-barf/calculadora-porciones.webp",
    registroPerro: "/assets/projects/ferox-barf/registro-perro.webp",
    dashboardUsuario: "/assets/projects/ferox-barf/dashboard-usuario.webp",
  },
  links: [
    {
      id: "demo",
      label: "Demo",
      url: "https://feroxbarf.com/",
      type: "live",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Mauriizio/ferox",
      type: "github",
    },
  ],
  sections: [
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Construir una experiencia web para una marca de alimentación BARF, combinando presentación comercial con herramientas útiles para usuarios registrados.",
    },
    {
      id: "funcionalidades-principales",
      title: "Funcionalidades principales",
      content:
        "El proyecto incluye registro de usuarios, registro de perros, dashboard de usuario y una calculadora de porciones orientada a apoyar decisiones de alimentación.",
    },
    {
      id: "base-de-datos",
      title: "Base de datos",
      content:
        "La solución incorpora Supabase y SQL para organizar usuarios, perros y datos necesarios para las funcionalidades interactivas.",
    },
    {
      id: "retos",
      title: "Retos",
      content:
        "El principal reto fue conectar datos reales de usuarios y perros con una interfaz clara, manteniendo una experiencia entendible para personas no técnicas.",
    },
    {
      id: "resultado",
      title: "Resultado",
      content:
        "El resultado es una aplicación web publicable que combina landing, base de datos y herramientas funcionales para el uso cotidiano de la marca.",
    },
    {
      id: "aprendizaje",
      title: "Aprendizaje",
      content:
        "El proyecto consolidó aprendizajes sobre modelado de datos, autenticación, flujos de usuario y comunicación entre frontend y backend gestionado.",
    },
  ],
  seo: {
    title: "Ferox BARF | Proyecto web con Supabase",
    description:
      "Proyecto web con usuarios, registro de perros, calculadora de porciones y base de datos Supabase.",
    image: "/assets/projects/ferox-barf/cover.webp",
    keywords: ["Ferox BARF", "Supabase", "SQL", "usuarios", "calculadora", "Next.js"],
  },
},


// Keribel vL
{
  id: "keribel-vl",
  slug: "keribel-vl",
  type: "web-project",
  contentKind: "client-website",
  title: "Keribel vL",
  category: "Desarrollo Web",
  categories: ["Desarrollo Web", "Sitio para cliente"],
  tags: ["Next.js", "Responsive", "Negocio local", "Belleza"],
  tools: ["Next.js", "Diseño responsive"],
  icon: "/assets/projects/keribel-vl/logo.png",
  image: "/assets/projects/keribel-vl/logo.png",
  detailImage: "/assets/projects/keribel-vl/cover.png",
  contentImage: "/assets/projects/keribel-vl/service.png",
  extraImage: "/assets/projects/keribel-vl/detalle.png",
  ogImage: "/assets/projects/keribel-vl/cover.png",
  summary:
    "Sitio web para una pyme de manicure, nail art y servicios de belleza en Santiago Centro, orientado a presentar su trabajo y facilitar reservas.",
  description:
    "Keribel vL es una web desarrollada para un emprendimiento de manicure, nail art, uñas acrílicas, poligel, soft gel y otros servicios de belleza. El sitio reúne la identidad del negocio, una muestra de trabajos, el catálogo de servicios, la ubicación y accesos directos para consultar disponibilidad o reservar.",
  status: "completed",
  featured: false,
  visibility: "public",
  role: "Desarrollo y publicación web.",
  links: [
    {
      id: "demo",
      label: "Demo",
      url: "https://keribel-vl.vercel.app/",
      type: "live",
    },
  ],
  sections: [
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Dar al emprendimiento una presencia digital profesional que comunique su estilo, muestre trabajos reales y ayude a las personas a conocer los servicios antes de contactar.",
    },
    {
      id: "resultado",
      title: "Resultado",
      content:
        "Una experiencia responsive que combina una portada visual, galería de trabajos, detalle de servicios y accesos directos a reserva y contacto por WhatsApp.",
    },
  ],
  seo: {
    title: "Keribel vL | Sitio web para pyme de belleza",
    description:
      "Sitio web para Keribel vL, pyme de manicure, nail art y servicios de belleza en Santiago Centro.",
    keywords: ["Keribel vL", "desarrollo web", "manicure", "nail art", "pyme"],
  },
},

// Mundo Barber
{
  id: "mundo-barber",
  slug: "mundo-barber",
  type: "web-project",
  contentKind: "client-website",
  title: "Mundo Barber",
  category: "Desarrollo Web",
  categories: ["Desarrollo Web", "Sitio para cliente"],
  tags: ["Next.js", "Responsive", "Barbería", "Negocio local"],
  tools: ["Next.js", "Diseño responsive"],
  icon: "/assets/projects/mundo-barber/logo.png",
  image: "/assets/projects/mundo-barber/logo.png",
  detailImage: "/assets/projects/mundo-barber/cover.png",
  contentImage: "/assets/projects/mundo-barber/vista.png",
  extraImage: "/assets/projects/mundo-barber/promocion.png",
  ogImage: "/assets/projects/mundo-barber/cover.png",
  gallery: [
    {
      src: "/assets/projects/mundo-barber/card.png",
      alt: "Tarjeta promocional de Mundo Barber con identidad visual, precio, ubicación y código QR",
      caption: "Pieza promocional con identidad de marca, datos del local y acceso mediante código QR.",
    },
  ],
  summary:
    "Sitio web para barbería en Puente Alto, enfocado en presentar servicios, promociones y facilitar reservas por WhatsApp.",
  description:
    "Mundo Barber es un sitio web para una barbería de Puente Alto, diseñado para presentar el local, comunicar servicios, precios y promociones, y ofrecer un camino directo hacia la reserva o el contacto. La experiencia se adapta a dispositivos móviles y se complementa con piezas gráficas vinculadas a la promoción del negocio.",
  status: "completed",
  featured: false,
  visibility: "public",
  role: "Desarrollo y publicación web.",
  links: [
    {
      id: "demo",
      label: "Demo",
      url: "https://mundo-barber.vercel.app/",
      type: "live",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Mauriizio/mundo-barber",
      type: "github",
    },
  ],
  sections: [
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Dar a la barbería una presencia digital moderna, clara y útil para que sus clientes conozcan la propuesta, las promociones y las vías de reserva.",
    },
    {
      id: "resultado",
      title: "Resultado",
      content:
        "Sitio responsive con información comercial, reserva por WhatsApp y una identidad visual aplicada tanto a la interfaz como a material promocional con código QR.",
    },
  ],
  seo: {
    title: "Mundo Barber | Sitio web para barbería",
    description:
      "Sitio web para Mundo Barber en Puente Alto, con servicios, promociones y reservas por WhatsApp.",
    keywords: ["Mundo Barber", "desarrollo web", "barbería", "Puente Alto"],
  },
},

// Pizza 10
{
  id: "pizza10-menu",
  slug: "pizza10-menu",
  type: "web-project",
  contentKind: "client-website",
  title: "Pizza 10",
  category: "Desarrollo Web",
  categories: ["Desarrollo Web", "Menú digital"],
  tags: ["Next.js", "Responsive", "Menú digital", "Gastronomía"],
  tools: ["Next.js", "Diseño responsive"],
  icon: "/assets/projects/pizza10-menu/logo.png",
  image: "/assets/projects/pizza10-menu/logo.png",
  detailImage: "/assets/projects/pizza10-menu/cover.png",
  contentImage: "/assets/projects/pizza10-menu/menu.png",
  extraImage: "/assets/projects/pizza10-menu/flayer.jpeg",
  ogImage: "/assets/projects/pizza10-menu/cover.png",
  summary:
    "Menú web para Pizza 10, orientado a mostrar pizzas familiares, postres y productos de panadería desde una interfaz simple y accesible.",
  description:
    "Pizza 10 es un menú digital para un negocio gastronómico. La experiencia organiza pizzas, adicionales, postres y productos de panadería para que la oferta pueda consultarse con rapidez desde el teléfono, complementando o sustituyendo la carta física mediante una interfaz web.",
  status: "completed",
  featured: false,
  visibility: "public",
  role: "Desarrollo y publicación web.",
  links: [
    {
      id: "demo",
      label: "Demo",
      url: "https://pizza10-menu.vercel.app/",
      type: "live",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Mauriizio/pizza10-menu",
      type: "github",
    },
  ],
  sections: [
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Digitalizar el menú del negocio para facilitar la consulta de productos desde dispositivos móviles.",
    },
    {
      id: "resultado",
      title: "Resultado",
      content:
        "Menú web responsive publicado en Vercel, acompañado de una pieza promocional con código QR que facilita el acceso desde material impreso.",
    },
  ],
  seo: {
    title: "Pizza 10 | Menú digital",
    description:
      "Menú web de Pizza 10 con pizzas familiares, postres y panadería.",
    keywords: ["Pizza 10", "menú digital", "desarrollo web", "pizzería"],
  },
},

// Horaly App
{
  id: "horaly-app",
  slug: "horaly-app",
  type: "web-project",
  contentKind: "software",
  title: "Horaly App",
  category: "Software / Productividad",
  categories: ["Software / Productividad", "Aplicación web"],
  tags: ["Next.js", "Responsive", "Productividad", "Horarios", "Estudiantes", "Herramientas académicas"],
  tools: ["Next.js", "Aplicación web responsive"],
  icon: "/assets/projects/horaly-app/logo.svg",
  image: "/assets/projects/horaly-app/logo.svg",
  detailImage: "/assets/projects/horaly-app/cover.png",
  contentImage: "/assets/projects/horaly-app/cover2.png",
  extraImage: "/assets/projects/horaly-app/tools.png",
  ogImage: "/assets/projects/horaly-app/cover.png",
  gallery: [
    {
      src: "/assets/projects/horaly-app/calculadora-cientifica.png",
      alt: "Calculadora científica de Horaly App con funciones trigonométricas y registro de cálculos",
      caption: "Calculadora científica integrada entre las herramientas de apoyo académico.",
    },
    {
      src: "/assets/projects/horaly-app/calculadora-resistencias.png",
      alt: "Calculadora de código de colores de resistencias de Horaly App",
      caption: "Herramienta para calcular resistencias de 4, 5 y 6 bandas en ambos sentidos.",
    },
  ],
  summary:
    "Producto de productividad académica para organizar clases, asignaturas, notas, recordatorios, apuntes y herramientas de estudio.",
  description:
    "Horaly App es una aplicación web de productividad académica que reúne horarios de clases, asignaturas, calificaciones, promedios, recordatorios, actividades y apuntes en un mismo espacio. Su dashboard permite revisar el progreso y detectar qué materias requieren más atención; además incorpora un cuaderno por asignatura y herramientas para estudiantes, entre ellas una calculadora científica y una calculadora de resistencias.",
  status: "completed",
  featured: false,
  visibility: "public",
  role: "Desarrollo de producto y publicación web.",
  links: [
    {
      id: "demo",
      label: "Demo",
      url: "https://horaly-app.vercel.app/",
      type: "live",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Mauriizio/HoralyApp",
      type: "github",
    },
  ],
  sections: [
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Centralizar la organización académica para que cada estudiante pueda planificar su semana, registrar información de sus asignaturas y comprender su avance desde una sola interfaz.",
    },
    {
      id: "organizacion",
      title: "Organización y seguimiento",
      content:
        "La aplicación permite crear materias y bloques de horario, registrar notas y calcular promedios, organizar evaluaciones y recordatorios, y consultar un resumen del progreso académico y de los próximos pendientes.",
    },
    {
      id: "estudio",
      title: "Cuaderno y herramientas",
      content:
        "Cada asignatura puede reunir apuntes en un cuaderno interno. El módulo de herramientas amplía el producto con utilidades académicas como la calculadora científica y el cálculo del código de colores de resistencias.",
    },
    {
      id: "resultado",
      title: "Resultado",
      content:
        "Producto web responsive publicado en Vercel, con navegación académica integrada y una base preparada para seguir incorporando herramientas de estudio.",
    },
  ],
  seo: {
    title: "Horaly App | Organización de horarios académicos",
    description:
      "Aplicación web para organizar clases, asignaturas, notas, promedios, recordatorios, apuntes y herramientas académicas.",
    image: "/assets/projects/horaly-app/cover.png",
    keywords: ["Horaly App", "horarios", "estudiantes", "notas", "productividad", "herramientas académicas", "Next.js"],
  },
},

// Física Aplicada: vagón sobre rieles en extracción de litio
{
  id: "fisica-vagon-litio",
  slug: "fisica-vagon-litio",
  type: "academic",
  contentKind: "engineering-note",
  title: "Caso de Física Aplicada: vagón sobre rieles en extracción de litio",
  category: "Bitácora Académica",
  categories: ["Bitácora Académica", "Física aplicada"],
  tags: ["Física aplicada", "Segunda Ley de Newton", "Fricción cinética", "Diagramas de cuerpo libre", "Litio"],
  tools: ["GIMP", "Inkscape", "Análisis físico", "Diagramas de cuerpo libre", "Redacción técnica"],
  summary:
    "Informe técnico sobre un sistema transportador de vagones en extracción de litio, aplicando Segunda Ley de Newton, fricción cinética y equilibrio vertical.",
  description:
    "Entrada de bitácora académica orientada a documentar resolución de problemas físicos en contexto industrial como material de apoyo y registro de aprendizaje.",
  status: "completed",
  featured: false,
  visibility: "public",
  semester: "1er semestre",
  course: "Física Aplicada a Procesos Industriales",
  image: "/assets/bitacora/fisica-vagon-litio/cover.webp",
  icon: "/assets/bitacora/fisica-vagon-litio/cover.webp",
  detailImage: "/assets/bitacora/fisica-vagon-litio/cover.webp",
  contentImage: "/assets/bitacora/fisica-vagon-litio/diagrama-sistema.webp",
  extraImage: "/assets/bitacora/fisica-vagon-litio/diagrama-cuerpo-libre.webp",
  ogImage: "/assets/bitacora/fisica-vagon-litio/cover.webp",
  media: {
    cover: "/assets/bitacora/fisica-vagon-litio/cover.webp",
    sistema: "/assets/bitacora/fisica-vagon-litio/diagrama-sistema.webp",
    dcl: "/assets/bitacora/fisica-vagon-litio/diagrama-cuerpo-libre.webp",
  },
  downloads: [
    {
      id: "pdf",
      label: "PDF",
      url: "/docs/bitacora/fisica-vagon-litio/caso-vagon-litio.pdf",
      type: "pdf",
    },
  ],
  sections: [
    {
      id: "contexto-industrial",
      title: "Contexto industrial",
      content:
        "El caso se plantea sobre un sistema transportador de vagones usado como referencia para analizar fuerzas en un proceso asociado a extracción de litio.",
    },
    {
      id: "principios-fisicos-aplicados",
      title: "Principios físicos aplicados",
      content:
        "El análisis considera Segunda Ley de Newton, fricción cinética y equilibrio vertical para organizar las fuerzas relevantes del sistema.",
    },
    {
      id: "desarrollo-del-analisis",
      title: "Desarrollo del análisis",
      content:
        "Se documenta el planteamiento mediante diagramas, identificación de variables y resolución paso a paso del problema físico.",
    },
    {
      id: "resultado",
      title: "Resultado",
      content:
        "La entrada deja registro del procedimiento y de los resultados del informe, priorizando claridad antes que espectacularidad.",
    },
    {
      id: "aprendizaje",
      title: "Aprendizaje",
      content:
        "El ejercicio refuerza la conexión entre modelos físicos básicos y situaciones industriales representadas de forma simplificada.",
    },
  ],
  seo: {
    title: "Caso de Física Aplicada | Vagón sobre rieles en extracción de litio",
    description:
      "Informe académico sobre un vagón en rieles aplicado a Segunda Ley de Newton, fricción cinética y equilibrio vertical.",
    image: "/assets/bitacora/fisica-vagon-litio/cover.webp",
    keywords: ["física aplicada", "litio", "vagón", "Newton", "fricción"],
  },
},

// Electrotecnia: análisis de mallas y tabla de valores
{
  id: "electrotecnia-mallas",
  slug: "electrotecnia-mallas",
  type: "academic",
  contentKind: "engineering-note",
  title: "Electrotecnia: análisis de mallas y tabla de valores",
  category: "Bitácora Académica",
  categories: ["Bitácora Académica", "Electrotecnia"],
  tags: ["Electrotecnia", "Análisis de mallas", "Kirchhoff", "AutoCAD", "Circuitos eléctricos"],
  tools: [
    "AutoCAD",
    "Análisis de mallas",
    "Ley de Voltajes de Kirchhoff",
    "Cálculo de corrientes",
    "Cálculo de voltajes",
    "Cálculo de potencia",
  ],
  summary:
    "Tarea de electrotecnia con dibujo de circuito, ecuaciones de malla, resolución de corrientes, voltajes y potencia total.",
  description:
    "Entrada de bitácora académica para documentar análisis de circuitos eléctricos mediante Ley de Voltajes de Kirchhoff, con apoyo visual y tabla de valores.",
  status: "completed",
  featured: false,
  visibility: "public",
  semester: "1er semestre",
  course: "Electrotecnia",
  image: "/assets/bitacora/electrotecnia-mallas/cover.webp",
  icon: "/assets/bitacora/electrotecnia-mallas/cover.webp",
  detailImage: "/assets/bitacora/electrotecnia-mallas/cover.webp",
  contentImage: "/assets/bitacora/electrotecnia-mallas/circuito-autocad.webp",
  extraImage: "/assets/bitacora/electrotecnia-mallas/tabla-valores.webp",
  ogImage: "/assets/bitacora/electrotecnia-mallas/cover.webp",
  media: {
    cover: "/assets/bitacora/electrotecnia-mallas/cover.webp",
    circuito: "/assets/bitacora/electrotecnia-mallas/circuito-autocad.webp",
    tabla: "/assets/bitacora/electrotecnia-mallas/tabla-valores.webp",
  },
  downloads: [
    {
      id: "pdf",
      label: "PDF",
      url: "/docs/bitacora/electrotecnia-mallas/tarea-mallas-electrotecnia.pdf",
      type: "pdf",
    },
  ],
  sections: [
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Documentar una tarea de análisis de circuitos mediante mallas, integrando dibujo técnico, ecuaciones y verificación de valores.",
    },
    {
      id: "desarrollo",
      title: "Desarrollo",
      content:
        "Se representa el circuito en AutoCAD, se plantean ecuaciones con la Ley de Voltajes de Kirchhoff y se calculan corrientes y voltajes.",
    },
    {
      id: "resultados",
      title: "Resultados",
      content:
        "La tabla de valores resume corrientes, voltajes y potencia total como apoyo para revisar el procedimiento y detectar inconsistencias.",
    },
    {
      id: "aprendizaje",
      title: "Aprendizaje",
      content:
        "El ejercicio fortalece la traducción entre esquema eléctrico, ecuaciones matemáticas y resultados tabulados.",
    },
  ],
  seo: {
    title: "Electrotecnia | Análisis de mallas y tabla de valores",
    description:
      "Tarea académica de electrotecnia con análisis de mallas, Kirchhoff, corrientes, voltajes y potencia.",
    image: "/assets/bitacora/electrotecnia-mallas/cover.webp",
    keywords: ["electrotecnia", "mallas", "Kirchhoff", "AutoCAD", "circuitos"],
  },
},

// Examen final de Seguridad Ocupacional: matriz de riesgos IPER/MIPER
{
  id: "matriz-riesgos-seguridad-ocupacional",
  slug: "matriz-riesgos-seguridad-ocupacional",
  type: "academic",
  contentKind: "safety-risk-assessment",
  title: "Matriz de Riesgos IPER/MIPER — Seguridad Ocupacional",
  category: "Bitácora Académica",
  categories: ["Bitácora Académica", "Seguridad Ocupacional"],
  tags: ["IPER", "MIPER", "Seguridad Ocupacional", "Riesgo eléctrico", "LOTO", "Jerarquía de controles"],
  tools: [
    "IPER/MIPER",
    "Evaluación de riesgos",
    "Jerarquía de controles",
    "Seguridad eléctrica",
    "Microsoft Excel",
  ],
  summary:
    "Examen transversal de Seguridad Ocupacional: matriz IPER/MIPER para evaluar los riesgos del reemplazo de un interruptor termomagnético trifásico.",
  description:
    "Proyecto académico desarrollado en equipo junto a Martín Vera. El documento organiza peligros, consecuencias, valoración inicial, controles preventivos y riesgo residual para una intervención simulada en un tablero de distribución eléctrica.",
  status: "completed",
  featured: false,
  visibility: "public",
  semester: "1er semestre",
  course: "Seguridad Ocupacional",
  image: "/assets/bitacora/matriz  de riesgo/matriz (2).png",
  icon: "/assets/bitacora/matriz  de riesgo/matriz (2).png",
  detailImage: "/assets/bitacora/matriz  de riesgo/matriz (2).png",
  contentImage: "/assets/bitacora/matriz  de riesgo/MATRIX.png",
  extraImage: "/assets/bitacora/matriz  de riesgo/matriz (1).png",
  heroAlt: "Matriz IPER con identificación de peligros y evaluación de riesgos eléctricos",
  contentImageAlt: "Detalle de tareas, riesgos y medidas preventivas para intervenir un tablero eléctrico",
  extraImageAlt: "Registro de elaboración y revisión del trabajo académico de seguridad ocupacional",
  ogImage: "/assets/bitacora/matriz  de riesgo/matriz (2).png",
  media: {
    cover: "/assets/bitacora/matriz  de riesgo/matriz (2).png",
    matriz: "/assets/bitacora/matriz  de riesgo/MATRIX.png",
    autoria: "/assets/bitacora/matriz  de riesgo/matriz (1).png",
  },
  sections: [
    {
      id: "contexto-academico",
      title: "Contexto académico",
      content:
        "Trabajo final y examen transversal de Seguridad Ocupacional, desarrollado en equipo junto a Martín Vera a partir de un caso de estudio académico, sin representar una intervención ejecutada en una empresa real.",
    },
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Evaluar de forma estructurada los riesgos asociados al reemplazo de un interruptor termomagnético trifásico en un tablero de distribución, desde la preparación del trabajo hasta la reenergización controlada.",
    },
    {
      id: "metodologia",
      title: "Metodología IPER/MIPER",
      content:
        "La matriz descompone el proceso en etapas y tareas, identifica peligros, riesgos y consecuencias, y valora probabilidad y consecuencia en una escala de 1 a 5. El resultado se clasifica como bajo, medio, alto o crítico y vuelve a evaluarse después de aplicar controles.",
    },
    {
      id: "identificacion-de-peligros",
      title: "Identificación de peligros",
      content:
        "El análisis considera contacto eléctrico, proximidad a partes energizadas, herramientas no aisladas, cortocircuito y arco eléctrico, además de orden, circulación, iluminación, ausencia de ATS/ART, uso de EPP y reenergización.",
    },
    {
      id: "evaluacion-del-riesgo",
      title: "Evaluación del riesgo",
      content:
        "Cada escenario relaciona la probabilidad con la consecuencia o severidad para establecer el nivel inicial, su clasificación y la prioridad de tratamiento antes de calcular el riesgo residual.",
    },
    {
      id: "jerarquia-de-controles",
      title: "Jerarquía de controles",
      content:
        "Las medidas propuestas incluyen corte y aislamiento, bloqueo y etiquetado LOTO, verificación de ausencia de tensión, herramientas aisladas, barreras dieléctricas, delimitación, permiso de trabajo, charla de seguridad, checklist y EPP dieléctrico.",
    },
    {
      id: "resultado",
      title: "Resultado y documento final",
      content:
        "El resultado es una matriz trazable con evaluación inicial y residual, acompañada por control de cambios, participantes, glosario, anexos y referencias de evaluación. El archivo XLSX original queda pendiente de sanitización antes de su publicación.",
    },
    {
      id: "aprendizajes",
      title: "Aprendizajes",
      content:
        "El examen reforzó la relación entre secuencia de trabajo, peligro, nivel de riesgo y selección de controles, junto con la responsabilidad de documentar claramente un análisis preventivo.",
    },
  ],
  seo: {
    title: "Matriz de Riesgos IPER/MIPER | Seguridad Ocupacional",
    description:
      "Examen académico de Seguridad Ocupacional sobre evaluación IPER/MIPER para el reemplazo de un interruptor termomagnético trifásico.",
    image: "/assets/bitacora/matriz  de riesgo/matriz (2).png",
    keywords: ["IPER", "MIPER", "seguridad ocupacional", "riesgo eléctrico", "LOTO", "matriz de riesgos"],
  },
},

// Proyecto final de Dibujo de Planos Eléctricos
{
  id: "plano-casa-dos-plantas",
  slug: "plano-casa-dos-plantas",
  type: "academic",
  contentKind: "technical-drawing",
  title: "Proyecto de instalación eléctrica residencial en AutoCAD",
  category: "Bitácora Académica",
  categories: ["Bitácora Académica", "Dibujo de planos eléctricos"],
  tags: ["AutoCAD", "Plano eléctrico", "Alumbrado", "Enchufes", "Cuadro de cargas", "Diagrama unilineal"],
  tools: [
    "AutoCAD",
    "Simbología eléctrica",
    "Cálculo eléctrico",
    "Interpretación de planos",
    "Documentación técnica",
  ],
  summary:
    "Examen final de instalación eléctrica residencial: plantas de alumbrado y enchufes, cuadro de cargas, cálculos, protecciones y diagrama unilineal desarrollados en AutoCAD.",
  description:
    "Proyecto académico completo de Dibujo de Planos Eléctricos que integra representación técnica, distribución de circuitos, criterios eléctricos, cálculo y presentación profesional de una lámina final.",
  status: "completed",
  featured: false,
  visibility: "public",
  semester: "1er semestre",
  course: "Dibujo de Planos Eléctricos",
  grade: "7,0",
  image: "/assets/bitacora/plano-electrico/plano.png",
  icon: "/assets/bitacora/plano-electrico/plano.png",
  detailImage: "/assets/bitacora/plano-electrico/plano.png",
  heroAlt: "Lámina final del proyecto académico de instalación eléctrica residencial",
  ogImage: "/assets/bitacora/plano-electrico/plano.png",
  media: {
    cover: "/assets/bitacora/plano-electrico/plano.png",
  },
  downloads: [
    {
      id: "pdf",
      label: "Ver plano en PDF",
      url: "/assets/bitacora/plano-electrico/Vista_en_PDF_tRABAJO_FINAL_DIBUJO_PLANOS_mAURIZIO_CAABALLERO.pdf",
      type: "pdf",
    },
    {
      id: "dwg",
      label: "Descargar archivo AutoCAD DWG",
      url: "/assets/bitacora/plano-electrico/Caballero_Maurizio_Examen_Dibujo_de_Planos.dwg",
      type: "dwg",
    },
  ],
  sections: [
    {
      id: "objetivo",
      title: "Objetivo",
      content:
        "Desarrollar la documentación técnica de una instalación eléctrica residencial para una vivienda de dos plantas, conectando dibujo, distribución de circuitos, cálculo y selección de componentes. La propuesta corresponde exclusivamente a un proyecto académico.",
    },
    {
      id: "desarrollo-en-autocad",
      title: "Desarrollo en AutoCAD",
      content:
        "La lámina se construyó en AutoCAD a partir de la planta arquitectónica, aplicando capas, simbología y criterios de representación para reunir toda la información de manera legible y profesional.",
    },
    {
      id: "planta-de-alumbrado",
      title: "Planta de alumbrado",
      content:
        "La planta de alumbrado documenta el circuito C1, sus luminarias, interruptores, canalizaciones y relación con el tablero T.D.A. sobre ambas plantas de la vivienda.",
    },
    {
      id: "circuitos-de-enchufes",
      title: "Circuitos de enchufes",
      content:
        "La planta de enchufes separa los circuitos C2 y C3 para cargas generales y especiales, facilitando la lectura de puntos, recorridos y protecciones asociadas.",
    },
    {
      id: "cuadro-de-cargas",
      title: "Cuadro de cargas",
      content:
        "El cuadro de distribución relaciona los circuitos con potencia, corriente, protecciones, conductores y canalizaciones, y permite revisar la organización eléctrica general del proyecto.",
    },
    {
      id: "calculo-electrico",
      title: "Cálculo eléctrico",
      content:
        "La lámina presenta un sistema monofásico de 220 V y 50 Hz, con 7,474 kW de potencia total y 33,97 A de corriente calculada. También documenta el cálculo del alimentador, la caída de tensión y la selección de la protección general como parte del ejercicio académico.",
    },
    {
      id: "diagrama-unilineal",
      title: "Diagrama unilineal",
      content:
        "El diagrama unilineal del T.D.A. representa la alimentación, protección general, diferenciales y circuitos derivados, conectando el esquema eléctrico con las plantas y el cuadro de cargas.",
    },
    {
      id: "documentacion-tecnica",
      title: "Documentación técnica",
      content:
        "La entrega reúne plantas, simbología, cálculos, cuadro de cargas y diagrama unilineal en una única lámina final, junto con el PDF de revisión y el archivo DWG original de AutoCAD.",
    },
    {
      id: "aprendizaje",
      title: "Aprendizaje",
      content:
        "El examen, calificado con nota 7,0, reforzó la conexión entre AutoCAD, electrotecnia, cálculo, interpretación de planos y documentación técnica.",
    },
  ],
  seo: {
    title: "Proyecto de instalación eléctrica residencial | AutoCAD",
    description:
      "Examen final académico en AutoCAD con alumbrado, enchufes, cuadro de cargas, cálculo eléctrico y diagrama unilineal.",
    image: "/assets/bitacora/plano-electrico/plano.png",
    keywords: ["AutoCAD", "plano eléctrico", "instalación residencial", "cuadro de cargas", "diagrama unilineal"],
  },
}




]
// --- End of code ---
