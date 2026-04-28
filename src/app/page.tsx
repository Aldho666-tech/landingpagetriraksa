import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LifeExperience from "@/components/LifeExperience";
import Features from "@/components/Features";
import Details from "@/components/Details";
import Footer from "@/components/Footer";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <LifeExperience />
      <Features />
      <Details />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
