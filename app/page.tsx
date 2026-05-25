import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  TestimonialsSection
} from "@/components/sections";

export default function Home() {
  return (
    <main id="main" className="relative z-10 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
