export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        Education
      </h2>

      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-serif text-base font-bold text-black dark:text-white">
            {edu.institution}, <span className="font-normal">{edu.location} — </span>
            <span className="font-normal italic">{edu.degree}</span>
          </h3>
          <p className="text-xs italic text-zinc-500 dark:text-zinc-500">
            {edu.period}
          </p>
        </div>
      ))}
    </section>
  );
}
