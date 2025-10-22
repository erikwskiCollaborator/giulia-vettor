import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Features />
      <Packages />
      <CallToAction />
      <Footer />
    </main>
  );
}
