import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import BlogSection from "@/components/sections/BlogSection";
import OrderSection from "@/components/sections/OrderSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollProgress from "@/components/common/ScrollProgress";
import ParticleBackground from "@/components/common/ParticleBackground";
import LoadingScreen from "@/components/common/LoadingScreen";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/*<ServicesSection />*/}
      {/*<CertificatesSection />*/}
      <ExperienceSection />
      <TestimonialsSection />
      {/*<BlogSection />*/}
      <OrderSection />
      <ContactSection />
      <Footer />
    </main>
  );
}