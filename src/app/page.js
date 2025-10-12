import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import PillarsSection from "@/components/PillarsSection";
import StartWithUs from "@/components/StartWithUs";

export default function Home() {
  return (
    <>
      <Hero />

      <ServicesSection />
      <PillarsSection />
      <PortfolioSection />
      <StartWithUs />
      <ContactSection />

      <AboutSection />
    </>
  );
}
