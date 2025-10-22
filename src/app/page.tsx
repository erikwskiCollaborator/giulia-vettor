import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

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
