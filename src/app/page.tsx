import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Packages />
      <CheckoutForm />
      <CallToAction />
      <Footer />
    </main>
  );
}
