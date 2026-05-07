import Header from '../components/Header';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import type { Project, SkillGroup } from '../data/portfolio';
import HeroSection from '../components/HeroSection';

type HomePageProps = {
  projects: Project[];
  skills: SkillGroup[];
  onOpenProject: (project: Project) => void;
};

function HomePage({ projects, skills, onOpenProject }: HomePageProps) {
  return (
    <div className="min-h-screen bg-hero-radial text-ink">
      <Header />
      <main id="top" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <HeroSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} onOpenProject={onOpenProject} />
        <ContactSection />
      </main>
    </div>
  );
}

export default HomePage;
