import taskFlowImage from "../assets/task-flow.png";
import ecommerceImage from "../assets/e-commerce.png";
import skyPulseImage from "../assets/skypulse.png";
import developerPortfolioImage from "../assets/developer-portfolio.png";
const projects = [
  {
    title: "TaskFlow",
    subtitle: "Project Management App",
    description:
      "A modern project management application designed to manage projects, tasks, users and workflows through a clean developer-focused interface.",
    technologies: ["React", "Tailwind CSS", "FastAPI", "REST API"],
    status: "In Progress",
   image: taskFlowImage,
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
    image: ecommerceImage, 
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
    status: "In Progress",
    image: skyPulseImage,
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
    image: developerPortfolioImage,
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
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

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
            problem-solving and modern technologies to build practical
            applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-950/30 ${
                project.featured ? "lg:p-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-3xl bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-64 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />

                {/* Project Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 font-mono text-sm font-semibold text-slate-300 backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* Status */}
                <div className="absolute right-5 top-5">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md ${
                      project.status === "Completed"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : project.status === "Active"
                          ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                          : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7">
                {/* Subtitle */}
                <p className="mb-2 text-sm font-medium text-blue-400">
                  {project.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

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
                    className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-white"
                  >
                    GitHub ↗
                  </a>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-6 sm:flex-row">
          <div>
            <p className="font-semibold text-white">
              More projects are on the way.
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Building practical software, one project at a time.
            </p>
          </div>

          <a
            href="https://github.com/Techorastudio"
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