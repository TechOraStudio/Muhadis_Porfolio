function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center"
        >
          <span className="text-2xl font-black tracking-tight text-white transition-all duration-300 group-hover:text-blue-400">
            MM<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative py-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {item.name}

              {/* Animated underline */}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hidden overflow-hidden rounded-xl border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 sm:block"
        >
          <span className="relative z-10">
            Resume ↗
          </span>

          {/* Shine effect */}
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg border border-slate-800 p-2 text-slate-300 transition hover:border-blue-500 hover:text-blue-400 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;