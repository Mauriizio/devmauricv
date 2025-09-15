// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Preconnect a Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Favicon & PWA */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f5f5f4" />

        {/* Open Graph (global por defecto) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="devMauriz · Maurizio Caballero" />
        <meta property="og:title" content="Maurizio Hernández — Frontend Developer" />
        <meta
          property="og:description"
          content="Portafolio de desarrollo frontend: proyectos, stack y contacto."
        />
        <meta property="og:url" content="https://maurizio.dev" />
        <meta property="og:image" content="https://maurizio.dev/og/og-1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maurizio Hernández — Frontend Developer" />
        <meta
          name="twitter:description"
          content="Portafolio de desarrollo frontend: proyectos, stack y contacto."
        />
        <meta name="twitter:image" content="https://maurizio.dev/og/og-1200x630.png" />

        {/* Precarga de fuente local (opcional) */}
        {/*
        <link
          rel="preload"
          as="font"
          href="/fonts/Azonix.otf"
          type="font/otf"
          crossOrigin=""
        />
        */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
