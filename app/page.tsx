import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Hero from "@/components/sections/Hero";
import PartnerSlider from "@/components/sections/PartnerSlider";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Hero />

      <PartnerSlider />

      <ServicesGrid />

      <Features />

      <GalleryPreview />

      <FAQ />

      <ContactSection />

    </main>
  );
}
