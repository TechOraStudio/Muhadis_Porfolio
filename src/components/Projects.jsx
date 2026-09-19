const projects = [
  {
    title: "TaskFlow",
    subtitle: "Project Management App",
    description:
      "A modern project management application designed to manage projects, tasks, users and workflows through a clean developer-focused interface.",
    technologies: ["React", "Tailwind CSS", "FastAPI", "REST API"],
    status: "",
    github: "https://github.com/Techorastudio",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce Sales Analytics",
    subtitle: "Python Backend Project",
    description:
      "A Python-based sales management and analytics system for handling products, customers, orders and revenue data with database integration.",
    technologies: ["Python", "OOP", "MySQL", "PyMySQL"],
    status: "Completed",
    github: "https://github.com/Techorastudio",
    live: "#",
    featured: true,
  },
  {
    title: "SkyPulse",
    subtitle: "Weather Application",
    description:
      "A weather application that provides current weather information and forecasts through a clean and responsive user interface.",
    technologies: ["JavaScript", "API", "HTML", "CSS"],
    status: "Completed",
    github: "https://github.com/Techorastudio",
    live: "#",
    featured: false,
  },
  {
    title: "Developer Portfolio",
    subtitle: "Personal Portfolio",
    description:
      "A professional developer portfolio built to showcase my software engineering journey, technical skills, projects and experience.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    status: "Active",
    github: "https://github.com/Techorastudio",
    live: "https://techorastudio.github.io/",
    featured: false,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-sm tracking-widest text-blue-400">
            // PROJECTS
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Things I’ve Built
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A selection of projects where I apply software development,
            problem-solving and modern web technologies to build practical
            applications.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-950/30 ${
                project.featured ? "lg:p-8" : ""
              }`}
            >
              {/* Top gradient */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Project number */}
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-sm text-slate-600">
                  0{index + 1}
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    project.status === "Completed"
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                      : project.status === "Active"
                        ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                        : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Terminal header */}
              <div className="mb-7 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                  <span className="ml-3 font-mono text-xs text-slate-500">
                    project.config
                  </span>
                </div>

                <div className="px-5 py-6 font-mono text-sm">
                  <p className="text-slate-600">01</p>
                  <p className="mt-2 text-slate-400">
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-white">project</span>{" "}
                    <span className="text-slate-500">=</span>{" "}
                    <span className="text-emerald-400">
                      "{project.title}"
                    </span>
                  </p>
                  <p className="mt-2 text-slate-400">
                    <span className="text-blue-400">stack</span>{" "}
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-purple-400">
                      {project.technologies.length}
                    </span>
                    <span className="text-slate-500"> technologies</span>
                  </p>
                  <p className="mt-2 text-slate-400">
                    <span className="text-blue-400">status</span>{" "}
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-emerald-400">
                      "{project.status}"
                    </span>
                  </p>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="mb-2 text-sm font-medium text-blue-400">
                  {project.subtitle}
                </p>

                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors duration-300 group-hover:border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative overflow-hidden rounded-xl border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-white"
                >
                  <span className="relative z-10">
                    GitHub ↗
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-blue-500/10 transition-transform duration-500 group-hover/btn:translate-x-0" />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative overflow-hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <span className="relative z-10">
                    Live Demo ↗
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover/btn:translate-x-0" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-5 sm:flex-row">
          <div>
            <p className="font-semibold text-white">
              More projects are on the way.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Building practical software, one project at a time.
            </p>
          </div>

          <a
            href="https://github.com/Techorasudio"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-400 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
          >
            Explore GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;