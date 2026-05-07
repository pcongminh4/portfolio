import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-line bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
      <h3 className="mt-4 text-xl font-bold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ink/45">{project.period}</p>
      <p className="mt-3 line-clamp-3 text-sm text-ink/70">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-xs font-medium text-ink/65">
            {tech}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition group-hover:gap-3"
      >
        Xem chi tiết
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

export default ProjectCard;
