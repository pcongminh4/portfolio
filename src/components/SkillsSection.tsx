import type { SkillGroup } from '../data/portfolio';

type SkillsSectionProps = {
  skills: SkillGroup[];
};

function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="mt-20 space-y-8">
      <div>
        <h2 className="text-4xl font-bold tracking-tight">Kỹ năng</h2>
        <p className="mt-2 text-lg text-ink/65">Các công nghệ và kỹ năng chính</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="rounded-[1.75rem] border border-line bg-white/75 p-6 shadow-sm">
            <h3 className="text-lg font-bold">{skillGroup.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span key={skill} className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-sm font-medium text-ink/75">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
