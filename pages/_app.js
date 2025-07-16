// pages/_app.js
import "@/styles/globals.css";
import LayoutTransition from "@/components/LayoutTransition";


export default function App({ Component, pageProps }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <LayoutTransition>
        <Component {...pageProps} />
      </LayoutTransition>
    </div>
  );
}
