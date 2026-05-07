import Header from '../components/Header';
import type { Project } from '../data/portfolio';

type ProjectDetailPageProps = {
  project: Project;
  onBack: () => void;
};

function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-hero-radial text-ink">
      <Header onNavigateHome={onBack} showSectionLinks={false} />
      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-8 lg:py-16">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white"
        >
          <span aria-hidden="true">←</span>
          Quay lại home
        </button>

        <article className="mt-8 space-y-8 rounded-[2.25rem] border border-line bg-white/80 p-6 shadow-[0_24px_100px_rgba(11,16,32,0.12)] lg:p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-ink/45">Project detail</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-600">{project.period}</p>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-ink/75">{project.summary}</p>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-2xl border border-ink/10 bg-paper p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-ink/45">Vai trò</p>
                <p className="mt-2 text-base font-semibold">{project.role}</p>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-paper p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-ink/45">Bạn đã làm gì</p>
                <ul className="mt-3 space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="flex gap-3 text-base text-ink/75">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-paper"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-ink/10 bg-ink p-5 text-paper shadow-glow">
              <p className="text-sm uppercase tracking-[0.28em] text-paper/55">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium text-paper">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default ProjectDetailPage;
