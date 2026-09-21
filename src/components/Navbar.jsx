import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto max-w-7xl">

        {/* Main Navbar */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-950/90 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center"
          >
            <span className="text-2xl font-black tracking-tight text-white transition-all duration-300 group-hover:text-blue-400">
              MM<span className="text-blue-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Desktop Resume */}
          <a
            href="/cv.pdf"
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
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg border border-slate-800 p-2 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              /* X Icon */
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
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
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mt-2 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "max-h-[500px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col p-3">

            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Resume */}
            {/* Mobile Resume */}
<a
  href="/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleNavClick}
  className="mt-2 rounded-xl border border-blue-500/40 bg-blue-500/10 px-4 py-3 text-center text-sm font-semibold text-blue-400 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
>
  View Resume ↗
</a>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;