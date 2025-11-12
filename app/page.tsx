export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-8 py-12 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2">
            {/* Header */}
            <header className="mb-8">
              <h1 className="mb-4 font-serif text-4xl font-bold text-black dark:text-white md:text-5xl">
                Alex Au-Yeung
              </h1>
              <p className="mb-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Technical Leader & Founder
              </p>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                with 20+ years building and scaling digital products across startups, adtech, and ecommerce.
                Blends hands-on engineering with strategic leadership — from architecting full-stack systems in
                React, NextJS, and Flutter to leading distributed teams and shipping AI-driven consumer products.
                Proven record of turning ideas into market-ready platforms, including a livestream marketplace and
                multi-user AI chat app.
              </p>
            </header>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Experience
              </h2>

              {/* Quintis Studios */}
              <div className="mb-6">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  Quintis Studios <span className="font-normal">— Consultant / Fractional CTO</span>
                </h3>
                <p className="mb-2 text-xs italic text-zinc-500 dark:text-zinc-500">
                  Sept 2024 - Present
                </p>
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Advised local businesses on scaling digital presence and modernizing ecommerce infrastructure.
                  Designed and launched multiple AI-driven applications exploring LLM integration and generative interfaces.
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Defined technical strategy and product roadmap for client transformation projects.</li>
                  <li>Architected and deployed production-ready AI applications including:</li>
                  <ul className="ml-6 list-none space-y-1">
                    <li><strong>Brekky.news:</strong> News aggregation platform using clustering and timeline generation to group related stories.</li>
                    <li><strong>ChitChad.com:</strong> Multi-user AI chat platform enabling collaborative conversations with LLMs.</li>
                  </ul>
                  <li>Guided business owners on product-market fit, scalability, and technical hiring strategies.</li>
                </ul>
              </div>

              {/* Exchvnge / Livfie */}
              <div className="mb-6">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  Exchvnge / Livfie Inc <span className="font-normal italic">— Co Founder</span>
                </h3>
                <p className="mb-2 text-xs italic text-zinc-500 dark:text-zinc-500">
                  Jan 2019 - Present
                </p>
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Built and scaled a livestream commerce platform for vintage fashion, connecting independent sellers
                  with global audiences. Led technical vision, product development, and analytics strategy.
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Directed full product lifecycle — from architecture and mobile app development (Flutter, Firebase) to livestream infrastructure and backend systems.</li>
                  <li>Delivered end-to-end platform across iOS, Android, and web, supporting hundreds of live sessions and thousands of users.</li>
                  <li>Implemented analytics dashboards to track engagement and sales metrics, increasing retention by 30%.</li>
                  <li>Managed cross-functional teams spanning engineering, UX, and marketing, ensuring smooth scaling during peak growth periods.</li>
                  <li>Drove roadmap decisions aligned with user behavior insights and monetization strategies.</li>
                </ul>
              </div>

              {/* Freelance */}
              <div className="mb-6">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  Freelance <span className="font-normal italic">— Full Stack Developer</span>
                </h3>
                <p className="mb-2 text-xs italic text-zinc-500 dark:text-zinc-500">
                  Jun 2017 - Dec 2018
                </p>
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Delivered full-cycle development projects for ecommerce and retail clients.
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Designed, built, and deployed high-performance web and mobile applications using React and Flutter.</li>
                  <li>Advised clients on digital strategy, backend architecture, and UI/UX optimization.</li>
                  <li>Implemented secure payment integrations and CMS solutions tailored to client workflows.</li>
                </ul>
              </div>

              {/* InSkin Hong Kong - Tech Ops Manager */}
              <div className="mb-6">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  InSkin (Hong Kong, Singapore) <span className="font-normal italic">— Technical Operations Manager</span>
                </h3>
                <p className="mb-2 text-xs italic text-zinc-500 dark:text-zinc-500">
                  Jun 2015 - Jan 2017
                </p>
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Led adtech operations for regional publisher and agency partnerships, ensuring scalable delivery of high-impact campaigns.
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Managed production teams across multiple markets, overseeing campaign setup, optimization, and delivery.</li>
                  <li>Partnered with creative agencies to design rich media experiences that drove measurable engagement.</li>
                </ul>
              </div>

              {/* Investible.vc */}
              <div className="mb-6">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  Investible.vc (Hong Kong) <span className="font-normal italic">— CTO</span>
                </h3>
                <p className="mb-2 text-xs italic text-zinc-500 dark:text-zinc-500">
                  Oct 2014 - June 2015
                </p>
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Led the technical build of a private investment platform connecting high-growth startups with accredited investors.
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Designed and launched a secure, data-driven crowdfunding system.</li>
                  <li>Collaborated with due diligence teams to streamline startup profile workflows and deal evaluation.</li>
                  <li>Established product roadmap, tech stack, and cloud infrastructure from the ground up.</li>
                </ul>
              </div>

              {/* InSkin - Tech Account Manager */}
              <div className="mb-6">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  InSkin (Hong Kong, Singapore) <span className="font-normal italic">— Technical Account Manager</span>
                </h3>
                <p className="mb-2 text-xs italic text-zinc-500 dark:text-zinc-500">
                  Apr 2013 - Oct 2014
                </p>
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Oversaw integration and performance optimization for regional digital ad campaigns.
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Negotiated and executed publisher partnerships across APAC.</li>
                  <li>Provided technical onboarding and support to new partners.</li>
                  <li>Built automation scripts for campaign setup, reducing manual overhead and launch time.</li>
                </ul>
              </div>

              {/* fluid */}
              <div className="mb-6">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  fluid (Hong Kong) <span className="font-normal italic">— Development and Technology Head</span>
                </h3>
                <p className="mb-2 text-xs italic text-zinc-500 dark:text-zinc-500">
                  Oct 2010 - Apr 2013
                </p>
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Led technology and production at one of Hong Kong's leading digital agencies (later acquired by PwC).
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Directed cross-disciplinary teams in delivering branding and marketing campaigns for enterprise clients.</li>
                  <li>Managed multi-million HKD project budgets, timelines, and client relationships.</li>
                  <li>Implemented digital strategy and technical architecture for high-traffic marketing platforms.</li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Education
              </h2>

              <div className="mb-4">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  Swinburne University of Technology, <span className="font-normal">Melbourne — </span>
                  <span className="font-normal italic">MSc of Multimedia</span>
                </h3>
                <p className="text-xs italic text-zinc-500 dark:text-zinc-500">
                  2004 - 2006
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-serif text-base font-bold text-black dark:text-white">
                  University of Hong Kong, <span className="font-normal">Hong Kong — </span>
                  <span className="font-normal italic">BSc in Computer Science and Information Systems</span>
                </h3>
                <p className="text-xs italic text-zinc-500 dark:text-zinc-500">
                  2001 - 2004
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:col-span-1">
            {/* Contact Info */}
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold text-black dark:text-white">
                +61 0472 605 905
              </p>
              <p className="mb-2">
                <a
                  href="mailto:alex@a-y.io"
                  className="text-sm font-bold text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  alex@a-y.io
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/thatalexay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  linkedin.com/in/thatalexay
                </a>
              </p>
            </div>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Skills
              </h2>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Core Strength
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Full-stack product architecture, team scaling, rapid prototyping, growth strategy
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Leadership
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Mentoring, stakeholder management, agile delivery, cross-functional collaboration
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Tech Stack
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    React, React Native, Flutter, NextJS, GCP, AWS, SQL, MongoDB, Docker
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    AI
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Prompt Engineering, multimodal generative AI prototyping, LLM based product integration
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Methodologies
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Agile, Scrum
                  </p>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Languages
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                English | Chinese (Cantonese) | Chinese (Mandarin)
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
