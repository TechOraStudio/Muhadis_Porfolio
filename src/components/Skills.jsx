import { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = {
    Frontend: [
      {
        name: "HTML5",
        short: "HTML",
        description: "Semantic & accessible structure",
        level: "Core",
      },
      {
        name: "CSS3",
        short: "CSS",
        description: "Modern styling & layouts",
        level: "Core",
      },
      {
        name: "JavaScript",
        short: "JS",
        description: "Interactive web applications",
        level: "Core",
      },
      {
        name: "React",
        short: "⚛",
        description: "Component-based UI development",
        level: "Core",
      },
      {
        name: "Tailwind CSS",
        short: "TW",
        description: "Utility-first responsive design",
        level: "Core",
      },
      {
        name: "Bootstrap",
        short: "BS",
        description: "Responsive UI development",
        level: "Core",
      },
    ],

    Backend: [
      {
        name: "Python",
        short: "PY",
        description: "Backend & software development",
        level: "Core",
      },
      {
        name: "Django",
        short: "DJ",
        description: "Full-stack web applications",
        level: "Core",
      },
      {
        name: "Django REST",
        short: "DRF",
        description: "RESTful API development",
        level: "Core",
      },
      {
        name: "Flask",
        short: "FL",
        description: "Lightweight Python web apps",
        level: "Core",
      },
      {
        name: "REST APIs",
        short: "API",
        description: "Frontend & backend communication",
        level: "Core",
      },
      {
        name: "Authentication",
        short: "AUTH",
        description: "Secure user authentication",
        level: "Core",
      },
    ],

    Database: [
      {
        name: "SQL",
        short: "SQL",
        description: "Relational database queries",
        level: "Core",
      },
      {
        name: "MySQL",
        short: "MY",
        description: "Relational database management",
        level: "Core",
      },
      {
        name: "PostgreSQL",
        short: "PG",
        description: "Advanced relational databases",
        level: "Core",
      },
      {
        name: "MongoDB",
        short: "MDB",
        description: "NoSQL database systems",
        level: "Core",
      },
      {
        name: "Database Design",
        short: "DB",
        description: "Structured data modeling",
        level: "Core",
      },
      {
        name: "CRUD",
        short: "CRUD",
        description: "Create, read, update & delete",
        level: "Core",
      },
    ],

    Tools: [
      {
        name: "Git",
        short: "GIT",
        description: "Version control",
        level: "Core",
      },
      {
        name: "GitHub",
        short: "GH",
        description: "Code collaboration & repositories",
        level: "Core",
      },
      {
        name: "VS Code",
        short: "VS",
        description: "Primary development environment",
        level: "Core",
      },
      {
        name: "Postman",
        short: "PM",
        description: "API development & testing",
        level: "Core",
      },
      {
        name: "Vite",
        short: "VT",
        description: "Modern frontend tooling",
        level: "Core",
      },
      {
        name: "npm",
        short: "npm",
        description: "JavaScript package management",
        level: "Core",
      },
    ],

    Engineering: [
      {
        name: "OOP",
        short: "OOP",
        description: "Object-oriented programming",
        level: "Core",
      },
      {
        name: "Data Structures",
        short: "DS",
        description: "Efficient data organization",
        level: "Core",
      },
      {
        name: "Clean Code",
        short: "CC",
        description: "Readable & maintainable code",
        level: "Core",
      },
      {
        name: "Debugging",
        short: "DBG",
        description: "Problem solving & troubleshooting",
        level: "Core",
      },
      {
        name: "Testing",
        short: "TEST",
        description: "Reliable software development",
        level: "Core",
      },
      {
        name: "Software Architecture",
        short: "SA",
        description: "Structured application design",
        level: "Core",
      },
    ],

    DevOps: [
      {
        name: "Linux",
        short: "LIN",
        description: "Development & server environment",
        level: "Core",
      },
      {
        name: "Docker",
        short: "DK",
        description: "Containerized applications",
        level: "Core",
      },
      {
        name: "Deployment",
        short: "DEP",
        description: "Application deployment",
        level: "Core",
      },
      {
        name: "Environment Variables",
        short: "ENV",
        description: "Secure application configuration",
        level: "Core",
      },
      {
        name: "Cloud",
        short: "☁",
        description: "Cloud application hosting",
        level: "Core",
      },
      {
        name: "CI/CD",
        short: "CI",
        description: "Automated development workflows",
        level: "Core",
      },
    ],
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background */}
      <div className="hero-grid absolute inset-0 opacity-20" />

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Technologies and engineering skills I use to design, develop and
            build modern full-stack applications.
          </p>
        </div>

        {/* ================= CATEGORY NAV ================= */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-blue-500/50 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10"
                  : "border-slate-800 bg-slate-900/50 text-slate-400 hover:-translate-y-1 hover:border-slate-600 hover:text-white"
              }`}
            >
              {category}

              {activeCategory === category && (
                <span className="absolute -bottom-[1px] left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-blue-400" />
              )}
            </button>
          ))}
        </div>

        {/* ================= SKILLS PANEL ================= */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-blue-600/10 blur-2xl" />

          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

            {/* Panel Header */}
            <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-5">

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Selected Category
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  {activeCategory}
                </h3>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
            </div>

            {/* ================= SKILL GRID ================= */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {categories[activeCategory].map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-blue-500/10"
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  {/* Hover Glow */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-xs font-bold text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:text-cyan-400">
                      {skill.short}
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                          {skill.name}
                        </h4>

                        <span className="rounded-full border border-slate-800 px-2 py-0.5 text-[9px] uppercase tracking-wider text-slate-600">
                          {skill.level}
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Hover Line */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= BOTTOM STATS ================= */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5">
            <p className="text-3xl font-bold text-white">
              6+
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Development Areas
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5">
            <p className="text-3xl font-bold text-white">
              Full Stack
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Development Focus
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5">
            <p className="text-3xl font-bold text-white">
              Python
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Backend Focus
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;