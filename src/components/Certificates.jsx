import { useState } from "react";

// Images live in src/assets, so Vite needs them imported (not typed as "/path" strings).
// Paths are relative to THIS file: src/components/Certificates.jsx -> ../assets/
import frontendCertificate from "../assets/frontend.png";
import pythonCertificate from "../assets/python.png";
import ieeeCertificate from "../assets/ieee.png";

// Static data lives outside the component so it isn't re-created on every render.
// Each item has a unique `id`, which React uses as the list key.
// Add a real verification URL in `credential` when you have one.
const certificates = [
  {
    id: "frontend-piti-2025",
    title: "Frontend Web Development",
    issuer: "Promotezz International Training Institute (PITI)",
    year: "2025",
    category: "Development",
    image: frontendCertificate,
    credential: "",
  },
  {
    id: "python-piti-2026",
    title: "Python Programming",
    issuer: "Promotezz International Training Institute (PITI)",
    year: "2026",
    category: "Python",
    image: pythonCertificate,
    credential: "",
  },
  {
    id: "iee-certificate-2025",
    title: "IEEE Participation",
    issuer: "The Islamia Univerty Of Bhawalpur (IUB))",
    year: "2026",
    category: "Participate",
    image: ieeeCertificate,
    credential: "",
  },
];

const categories = ["All", "Development", "Python", "Participation"];

function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter(
          (certificate) => certificate.category === activeCategory
        );

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="hero-grid absolute inset-0 opacity-20" />

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Certifications
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Credentials that
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Support My Journey.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            A collection of certifications and learning achievements from my
            development journey.
          </p>
        </div>

        {/* ================= FILTER ================= */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-blue-500/40 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10"
                  : "border-slate-800 bg-slate-900/50 text-slate-400 hover:-translate-y-1 hover:border-slate-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= CERTIFICATES ================= */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group relative"
            >

              {/* Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/40 group-hover:shadow-2xl group-hover:shadow-blue-500/10">

                {/* ================= IMAGE ================= */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display =
                        "flex";
                    }}
                  />

                  {/* Placeholder (shown only if the image fails to load) */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
                    <div className="text-center">

                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-400">
                        ✦
                      </div>

                      <p className="text-sm font-medium text-slate-400">
                        Certificate Preview
                      </p>

                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                  {/* Year */}
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {certificate.year}
                  </span>

                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-6">

                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                    {certificate.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Issued by {certificate.issuer}
                  </p>

                  {/* View button: opens the credential link if there is one,
                      otherwise opens the certificate image in a new tab */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">

                    <span className="text-xs text-slate-600">
                      {certificate.credential
                        ? "Verified Credential"
                        : "Certificate"}
                    </span>

                    <a
                      href={certificate.credential || certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      View
                      <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                        ↗
                      </span>
                    </a>

                  </div>
                </div>

                {/* Bottom Line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              </div>
            </div>
          ))}

        </div>

        {/* ================= BOTTOM STATS ================= */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">
            <p className="text-2xl font-bold text-white">
              {certificates.length}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Certifications
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">
            <p className="text-2xl font-bold text-white">
              Development
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Primary Focus
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">
            <p className="text-2xl font-bold text-white">
              2025+
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Learning Journey
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Certificates;