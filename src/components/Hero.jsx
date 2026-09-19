import profileImage from "../assets/Muhammad Muhadis.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Grid */}
      <div className="hero-grid absolute inset-0 opacity-40" />

      {/* Background Glow */}
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for Development Opportunities
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building the web
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                with clean code.
              </span>
            </h1>

            {/* Name */}
            <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-5xl">
              I'm Muhammad Muhadis
            </h2>

            {/* Role */}
            <p className="mt-3 text-lg font-medium text-blue-400">
              Full Stack Developer | Python + Django + React
            </p>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 lg:mx-0">
              I build modern, scalable and user-focused web applications
              using clean code, powerful backend technologies and modern
              frontend development.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

              {/* Projects Button */}
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
              >
                <span className="relative z-10">
                  View My Projects →
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="group rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                Let's Talk
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-6 lg:justify-start">
              <a
                href="https://github.com/Techorastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/techorastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* ================= RIGHT PROFILE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Outer Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />

            {/* Rotating Ring */}
            <div className="absolute h-[340px] w-[340px] rounded-full border border-blue-500/20 animate-[spin_18s_linear_infinite]" />

            {/* Main Profile Card */}
            <div className="group relative">

              {/* Animated Border */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-60 blur transition duration-500 group-hover:opacity-100 group-hover:blur-md" />

              {/* Image Container */}
              <div className="relative h-[380px] w-[300px] overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-blue-400">

                <img
                  src={profileImage}
                  alt="Muhammad Muhadis"
                  className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm text-blue-400">
                    Software Engineer
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    Muhammad Muhadis
                  </p>
                </div>
              </div>

              {/* MM Badge */}
              <div className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-slate-900/90 text-xl font-bold text-white shadow-xl shadow-blue-500/20 backdrop-blur transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-blue-400">
                MM<span className="text-blue-400">.</span>
              </div>

              {/* Stack Badge */}
              <div className="absolute -bottom-5 -left-8 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-xs text-slate-300 shadow-xl backdrop-blur transition-all duration-500 group-hover:-translate-x-2">
                <span className="text-blue-400">Python</span>
                <span className="mx-2 text-slate-600">•</span>
                <span className="text-green-400">Django</span>
                <span className="mx-2 text-slate-600">•</span>
                <span className="text-cyan-400">React</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;