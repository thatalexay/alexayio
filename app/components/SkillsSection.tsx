interface Skill {
  title: string;
  description: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        Skills
      </h2>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h4 className="mb-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {skill.title}
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
