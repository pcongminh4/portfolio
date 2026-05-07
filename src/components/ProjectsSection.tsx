import type { Project } from '../data/portfolio';
import ProjectCard from './ProjectCard';

type ProjectsSectionProps = {
  projects: Project[];
  onOpenProject: (project: Project) => void;
};

function ProjectsSection({ projects, onOpenProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mt-20 space-y-8">
      <div>
        <h2 className="text-4xl font-bold tracking-tight">Dự án</h2>
        <p className="mt-2 text-lg text-ink/65">Nhấn vào để mở trang riêng của từng project</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
