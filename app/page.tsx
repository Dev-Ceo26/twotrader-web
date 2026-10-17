import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DexPreview from "@/components/DexPreview";
import TechStats from "@/components/TechStats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <DexPreview />
      <TechStats />
      <CTA />
      <Footer />
    </main>
  );
}
