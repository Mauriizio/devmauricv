import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
<main className="flex flex-row-reverse overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-screen">
  <SectionOne />
  <SectionTwo />
</main>
  );
}

