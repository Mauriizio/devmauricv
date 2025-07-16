import { useState } from "react";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import MenuOverlay from "@/components/MenuOverlay";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Overlay del menú */}
      <MenuOverlay show={showMenu} onClose={() => setShowMenu(false)} />

      {/* Contenedor principal con scroll */}
      <main className="flex flex-row-reverse overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-screen">
        <SectionOne onMenuOpen={() => setShowMenu(true)} />
        <SectionTwo onMenuOpen={() => setShowMenu(true)} />
      </main>
    </>
  );
}
