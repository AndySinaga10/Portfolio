import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
