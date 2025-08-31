// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Preconnects seguros */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />

        {/* Precarga de fuente local (si la usas en <body>) */}
        {/* <link
          rel="preload"
          as="font"
          href="/fonts/Azonix.otf"
          type="font/otf"
          crossOrigin="anonymous"
        /> */}

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
