import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonSection from "@/components/ComparisonSection";
import TechSection from "@/components/TechSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ComparisonSection />
      <BenefitsSection />
      <TechSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
