import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Packages />
    </main>
  );
}
