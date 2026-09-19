function Journey() {
  const journey = [
    {
      year: "2025",
      number: "01",
      title: "Frontend Development",
      subtitle: "Building the Foundation",
      description:
        "Started my development journey by building responsive and user-friendly websites and developing a strong foundation in modern frontend technologies.",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
      ],
      status: "Completed",
    },

    {
      year: "2026",
      number: "02",
      title: "Python Development",
      subtitle: "Moving Beyond the Frontend",
      description:
        "Expanded my development journey into Python programming, object-oriented programming, Git, databases and backend development.",
      technologies: [
        "Python",
        "OOP",
        "Git",
        "GitHub",
        "SQL",
      ],
      status: "In Progress",
    },

    {
      year: "2026",
      number: "03",
      title: "Full Stack Development",
      subtitle: "Building Complete Applications",
      description:
        "Working toward building complete web applications by combining modern frontend development with Python-based backend technologies.",
      technologies: [
        "Django",
        "REST APIs",
        "React",
        "PostgreSQL",
        "Authentication",
      ],
      status: "In Progress",
    },

    {
      year: "Next",
      number: "04",
      title: "Software Engineering",
      subtitle: "Engineering Scalable Software",
      description:
        "Expanding from application development into software engineering practices including architecture, testing, Docker, deployment and system design.",
      technologies: [
        "DSA",
        "Testing",
        "Docker",
        "Architecture",
        "System Design",
      ],
      status: "Roadmap",
    },
  ];

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background */}
      <div className="hero-grid absolute inset-0 opacity-20" />

      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            From{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>{" "}
            to Software Engineer
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            A continuous journey of learning, building and growing through
            real-world development.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 lg:left-1/2 lg:block lg:-translate-x-1/2" />

          <div className="space-y-12">

            {journey.map((item, index) => (
              <div
                key={item.number}
                className={`group relative lg:flex lg:items-center ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >

                {/* ================= CONTENT ================= */}
                <div className="w-full lg:w-[calc(50%-45px)]">

                  <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-8">

                    {/* Hover Glow */}
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top */}
                    <div className="relative flex items-start justify-between gap-4">

                      <div>
                        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                          {item.year}
                        </span>

                        <h3 className="mt-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-cyan-400">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Number */}
                      <span className="text-4xl font-black text-slate-800 transition-colors duration-300 group-hover:text-slate-700">
                        {item.number}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="relative mt-5 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-400 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="relative mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

                      <span className="text-xs uppercase tracking-widest text-slate-600">
                        Development Stage
                      </span>

                      <span
                        className={`flex items-center gap-2 text-xs font-semibold ${
                          item.status === "Completed"
                            ? "text-green-400"
                            : item.status === "In Progress"
                            ? "text-blue-400"
                            : "text-slate-400"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            item.status === "Completed"
                              ? "bg-green-400"
                              : item.status === "In Progress"
                              ? "animate-pulse bg-blue-400"
                              : "bg-slate-500"
                          }`}
                        />

                        {item.status}
                      </span>
                    </div>

                    {/* Bottom Hover Line */}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

                  </div>
                </div>

                {/* ================= CENTER NODE ================= */}
                <div className="relative z-10 hidden w-[90px] shrink-0 justify-center lg:flex">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-slate-950 shadow-lg shadow-blue-500/10 transition-all duration-500 group-hover:scale-125 group-hover:border-blue-400 group-hover:shadow-blue-500/30">

                    <div className="h-3 w-3 rounded-full bg-blue-400 transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400" />

                  </div>

                </div>

                {/* Empty Side */}
                <div className="hidden lg:block lg:w-[calc(50%-45px)]" />

              </div>
            ))}

          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mx-auto mt-20 max-w-3xl text-center">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl">

            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              The Goal
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Build. Learn. Engineer.
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              My goal is to continuously improve my engineering skills and
              build reliable software that solves real-world problems.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Journey;