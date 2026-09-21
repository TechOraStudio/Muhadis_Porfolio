import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("developer.py");

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Turning ideas into
            <span className="text-blue-400"> real software.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            A developer focused on building clean, scalable and user-focused
            web applications.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ================= CODE EDITOR ================= */}
          <div className="group relative min-w-0">

            {/* Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-600/20 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />

            {/* Editor */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1120] shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/40">

              {/* Editor Header */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3">

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>

                <div className="text-xs text-slate-500">
                  VS Code
                </div>

                <div className="w-12" />
              </div>

              {/* File Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-900/40">
                <button
                  onClick={() => setActiveTab("developer.py")}
                  className={`border-r border-slate-800 px-5 py-3 text-xs transition-colors ${
                    activeTab === "developer.py"
                      ? "bg-[#0b1120] text-blue-400"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  developer.py
                </button>

                <button
                  onClick={() => setActiveTab("about.md")}
                  className={`px-5 py-3 text-xs transition-colors ${
                    activeTab === "about.md"
                      ? "bg-[#0b1120] text-cyan-400"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  about.md
                </button>
              </div>

              {/* Code Area */}
              <div className="overflow-x-auto p-5 sm:p-6">
                {activeTab === "developer.py" ? (
                  <div className="code-editor witespace-nowrap text-xs leading-6 sm:text-sm sm:leading-7">

                    <div>
                      <span className="mr-5 text-slate-600">01</span>
                      <span className="text-purple-400">class</span>{" "}
                      <span className="text-yellow-300">
                        Future Software Engineer
                      </span>
                      <span className="text-slate-300">:</span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">02</span>
                      <span className="ml-5 text-slate-300">
                        name ={" "}
                        <span className="text-green-400">
                          "Muhammad Muhadis"
                        </span>
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">03</span>
                      <span className="ml-5 text-slate-300">
                        role ={" "}
                        <span className="text-green-400">
                          "Full Stack Developer"
                        </span>
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">04</span>
                      <span className="ml-5 text-slate-300">
                        location ={" "}
                        <span className="text-green-400">
                          "Pakistan"
                        </span>
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="mr-5 text-slate-600">05</span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">06</span>
                      <span className="ml-5 text-slate-300">
                        stack = [
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">07</span>
                      <span className="ml-10 text-green-400">
                        "Python",
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">08</span>
                      <span className="ml-10 text-green-400">
                        "Django",
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">09</span>
                      <span className="ml-10 text-green-400">
                        "React",
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">10</span>
                      <span className="ml-10 text-green-400">
                        "SQL"
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">11</span>
                      <span className="ml-5 text-slate-300">
                        ]
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="mr-5 text-slate-600">12</span>
                      <span className="ml-5 text-slate-300">
                        focus ={" "}
                        <span className="text-green-400">
                          "Clean & scalable software"
                        </span>
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">13</span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">14</span>
                      <span className="ml-5 text-purple-400">
                        def
                      </span>{" "}
                      <span className="text-blue-400">
                        build
                      </span>
                      <span className="text-slate-300">
                        (self):
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">15</span>
                      <span className="ml-10 text-purple-400">
                        return
                      </span>{" "}
                      <span className="text-green-400">
                        "Ideas → Software"
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="mr-5 text-slate-600">16</span>
                      <span className="text-slate-500">
                        # Always learning. Always building.
                      </span>
                    </div>

                  </div>
                ) : (
                  <div className="code-editor min-w-[430px] text-sm leading-7">

                    <div>
                      <span className="mr-5 text-slate-600">01</span>
                      <span className="text-blue-400"># About Me</span>
                    </div>

                    <div className="mt-2">
                      <span className="mr-5 text-slate-600">02</span>
                      <span className="text-slate-300">
                        I build modern web applications
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">03</span>
                      <span className="text-slate-300">
                        with Python, Django and React.
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="mr-5 text-slate-600">04</span>
                      <span className="text-slate-300">
                        My goal is to write clean,
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-slate-600">05</span>
                      <span className="text-slate-300">
                        maintainable and scalable code.
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="mr-5 text-slate-600">06</span>
                      <span className="text-green-400">
                        # Keep learning. Keep building.
                      </span>
                    </div>

                  </div>
                )}
              </div>

              {/* Editor Footer */}
              <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/60 px-4 py-2 text-[11px] text-slate-500">
                <span>Python</span>
                <span>UTF-8</span>
                <span>Ln 16, Col 1</span>
              </div>
            </div>
          </div>

          {/* ================= ABOUT CONTENT ================= */}
          <div>

            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Who I Am
            </span>

            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              I turn ideas into
              <span className="text-blue-400"> Functional Software.</span>
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm Muhammad Muhadis, a Full Stack Developer focused on
              building modern, scalable and user-friendly web applications.
              My development journey started with frontend technologies and
              is now expanding into backend engineering with Python and
              Django.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I enjoy solving problems, learning new technologies and
              turning real-world requirements into clean and maintainable
              software.
            </p>

            {/* ================= TECH CARDS ================= */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              {/* Python */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="mb-4 text-2xl transition-transform duration-300 group-hover:scale-110">
                  🐍
                </div>

                <h4 className="font-semibold text-white">
                  Python
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Backend & Software Development
                </p>
              </div>

              {/* Django */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-green-500/50 hover:bg-green-500/5 hover:shadow-xl hover:shadow-green-500/10">
                <div className="mb-4 text-2xl transition-transform duration-300 group-hover:scale-110">
                  🌐
                </div>

                <h4 className="font-semibold text-white">
                  Django
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Web Apps & REST APIs
                </p>
              </div>

              {/* React */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="mb-4 text-2xl transition-transform duration-300 group-hover:scale-110">
                  ⚛️
                </div>

                <h4 className="font-semibold text-white">
                  React
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Modern Frontend Interfaces
                </p>
              </div>

            </div>

            {/* ================= STATUS ================= */}
            <div className="mt-8 flex flex-wrap items-center gap-4">


              <div className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-400">
                Python Full-Stack Dveloper
              </div>
              
                <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Software Engineer
              </div>
            </div>
              

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;