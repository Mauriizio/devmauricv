import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <main className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-screen">
      <SectionTwo />
      <SectionOne />
      
    </main>
  );
}
