import "@/styles/globals.css"
import { ThemeProvider } from "@/context/ThemeContext"
import Head from "next/head"
import ElectricCursor from "@/components/ElectricCursor"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
        <ElectricCursor />
      </ThemeProvider>
    </>
  )
}
