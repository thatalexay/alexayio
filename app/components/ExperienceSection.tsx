import Link from "next/link";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  projects?: Array<{
    name: string;
    url: string;
    description: string;
  }>;
}

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        Experience
      </h2>

      {experiences.map((experience, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-serif text-base font-bold text-black dark:text-white">
            {experience.company}{" "}
            <span className={`font-normal ${experience.role.includes("Co Founder") || experience.role.includes("CTO") ? "italic" : ""}`}>
              — {experience.role}
            </span>
          </h3>
          <p className="mb-2 text-xs italic text-zinc-500 dark:text-zinc-500">
            {experience.period}
          </p>
          <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
            {experience.description}
          </p>
          {experience.highlights && experience.highlights.length > 0 && (
            <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
              {experience.projects && experience.projects.length > 0 && (
                <ul className="ml-6 list-none space-y-1">
                  {experience.projects.map((project, projIdx) => (
                    <li key={projIdx}>
                      <strong>
                        <Link href={project.url} target="_blank">
                          {project.name}
                        </Link>
                        :
                      </strong>{" "}
                      {project.description}
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
