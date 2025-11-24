import { ExperienceItem } from "../components/ExperienceSection";
import { EducationItem } from "../components/EducationSection";

export const experiences: ExperienceItem[] = [
  {
    company: "Quintis Studios",
    role: "Consultant / Fractional CTO",
    period: "Sept 2024 - Present",
    description:
      "Advised local businesses on scaling digital presence and modernizing ecommerce infrastructure. Designed and launched multiple AI-driven applications exploring LLM integration and generative interfaces.",
    highlights: [
      "Defined technical strategy and product roadmap for client transformation projects.",
      "Architected and deployed production-ready AI applications including:",
    ],
    projects: [
      {
        name: "Brekky.news",
        url: "https://brekky.news",
        description:
          "News aggregation platform using clustering and timeline generation to group related stories. MVP built in 1 week.",
      },
      {
        name: "CHAD",
        url: "https://chitchad.com",
        description: "Multi-user AI chat platform enabling collaborative conversations with LLMs. MVP built in 6 weeks.",
      },
    ],
  },
  {
    company: "Exchvnge / Livfie Inc",
    role: "Co Founder",
    period: "Jan 2019 - Present",
    description:
      "Built and scaled a livestream commerce platform for vintage fashion, connecting independent sellers with global audiences. Led technical vision, product development, and analytics strategy.",
    highlights: [
      "Implemented referral system that increased MAU by 20% in a 2 week period.",
      "Led development team to deliver end-to-end platform across iOS, Android, and web, supporting multi-user livestream sessions",
      "Drove roadmap decisions aligned with user behavior insights and monetization strategies.",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jun 2017 - Present",
    description: "Delivered full-cycle development projects for ecommerce and retail clients.",
    highlights: [
      "Helped local businesses modernize ecommerce solutions and social media strategies",
      "Helped DesignerCon launch their own NFT project as part of their new VIP ticketing system",
    ],
  },
  {
    company: "InSkin",
    role: "Technical Operations Manager",
    period: "Jun 2015 - Jan 2017",
    description:
      "Expanded publisher network by 200% and increased ad inventory by 500% across APAC. Led regional adtech operations across publisher and agency partnerships. Oversaw campaign delivery, optimization, and technical onboarding for partners.",
  },
  {
    company: "Investible.vc",
    role: "CTO",
    period: "Oct 2014 - June 2015",
    description:
      "Built and launched an invite-only investment platform connecting high-growth startups with accredited investors. Led product design, system architecture, and engineering delivery from concept to deployment. Collaborated with investment and due-diligence teams to streamline deal evaluation workflows.",
  },
  {
    company: "InSkin",
    role: "Technical Account Manager",
    period: "Apr 2013 - Oct 2014",
    description:
      "Managed technical integrations for new publishers and agencies. Collaborated with creative teams to deliver high-impact digital ad formats and optimize campaign performance across APAC.",
  },
  {
    company: "fluid",
    role: "Development and Technology Head",
    period: "Oct 2010 - Apr 2013",
    description:
      "Led development and digital production team at one of the leading creative agencies (later acquired by PwC). Directed multi-disciplinary teams delivering large-scale digital campaigns for enterprise clients.",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Swinburne University of Technology",
    location: "Melbourne",
    degree: "MSc of Multimedia",
    period: "2004 - 2006",
  },
  {
    institution: "University of Hong Kong",
    location: "Hong Kong",
    degree: "BSc in Computer Science and Information Systems",
    period: "2001 - 2004",
  },
];

export interface Skill {
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    title: "Core Strength",
    description: "Full-stack product architecture, team scaling, rapid prototyping, growth strategy",
  },
  {
    title: "Leadership",
    description: "Mentoring, stakeholder management, agile delivery, cross-functional collaboration",
  },
  {
    title: "Tech Stack",
    description: "React, React Native, Flutter, NextJS, GCP, AWS, SQL, MongoDB, Docker",
  },
  {
    title: "AI",
    description: "Prompt Engineering, multimodal generative AI prototyping, LLM based product integration",
  },
  {
    title: "Methodologies",
    description: "Agile, Scrum",
  },
];

export const personalInfo = {
  name: "Alex Au-Yeung",
  title: "Technical Leader & Founder",
  phone: "+61472605905",
  email: "alex@a-y.io",
  linkedin: "https://linkedin.com/in/thatalexay/",
  github: "https://github.com/thatalexay/",
  bio: "With 20+ years building and scaling digital products across startups, adtech, and ecommerce. Blends hands-on engineering with strategic leadership — from architecting full-stack systems in React, NextJS, and Flutter to leading distributed teams and shipping AI-driven consumer products. Proven record of turning ideas into market-ready platforms, including a livestream marketplace and multi-user AI chat app.",
  languages: ["English", "Cantonese", "Mandarin"],
};
