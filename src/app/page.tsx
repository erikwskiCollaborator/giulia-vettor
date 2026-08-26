import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";
import RadunoBanner from "@/components/RadunoBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Packages />
      <CallToAction />
      <RadunoBanner />
      <Footer />
    </main>
  );
}
