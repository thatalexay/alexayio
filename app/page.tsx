import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import PrintButton from "./components/PrintButton";
import { experiences, education, skills, personalInfo } from "./data/resume";

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Au-Yeung",
    jobTitle: "Technical Leader & Founder",
    url: "https://a-y.io",
    email: "alex@a-y.io",
    telephone: "+61472605905",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
    },
    sameAs: [
      "https://www.linkedin.com/in/thatalexay/",
      "https://github.com/alexauyeung",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Swinburne University of Technology",
        location: "Melbourne, Australia",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Hong Kong",
        location: "Hong Kong",
      },
    ],
    knowsAbout: [
      "React",
      "NextJS",
      "Flutter",
      "Full Stack Development",
      "Product Architecture",
      "Technical Leadership",
      "AI Products",
      "Livestream Commerce",
      "Adtech",
      "Ecommerce",
    ],
    description:
      "Technical Leader & Founder with 20+ years building and scaling digital products across startups, adtech, and ecommerce. Full-stack engineer specializing in React, NextJS, Flutter, and AI-driven products.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-8 py-12 md:px-12 lg:px-16">
        <div className="print-grid grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2">
            {/* Header */}
            <header className="mb-8">
              <h1 className="mb-4 font-serif text-4xl font-bold text-black dark:text-white md:text-5xl">
                {personalInfo.name}
              </h1>
              <p className="mb-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {personalInfo.title}
              </p>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {personalInfo.bio}
              </p>
            </header>

            {/* Experience Section */}
            <ExperienceSection experiences={experiences} />

            {/* Education Section */}
            <EducationSection education={education} />
          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:col-span-1">
            {/* Contact Info */}
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold text-black dark:text-white">
                {personalInfo.phone}
              </p>
              <p className="mb-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-bold text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {personalInfo.linkedin.replace("https://", "")}
                </a>
              </p>
              <p>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {personalInfo.github.replace("https://", "")}
                </a>
              </p>
            </div>

            {/* Skills Section */}
            <SkillsSection skills={skills} />

            {/* Languages Section */}
            <section>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Languages
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {personalInfo.languages.join(" | ")}
              </p>
            </section>
          </aside>
        </div>

        <Footer />
      </div>
      <PrintButton />
      </div>
    </>
  );
}
