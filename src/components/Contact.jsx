import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const NOTIFY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID;
const REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Pause between the two emails, in milliseconds (2000 = 2 seconds)
const AUTO_REPLY_DELAY_MS = 2000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // These keys must match the {{variables}} used in both templates
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      time: new Date().toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    try {
      // 1) Message to me (this one must succeed)
      await emailjs.send(SERVICE_ID, NOTIFY_TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      // 2) Auto-reply to the visitor (if this fails, the message
      //    still reached me, so don't show an error to the visitor)
      try {
        await sleep(AUTO_REPLY_DELAY_MS); // button stays on "Sending..." meanwhile
        await emailjs.send(SERVICE_ID, REPLY_TEMPLATE_ID, templateParams, {
          publicKey: PUBLIC_KEY,
        });
      } catch (replyError) {
        console.error("Auto-reply failed:", replyError);
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-mono text-sm tracking-widest text-blue-400">
            // CONTACT
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Let’s Build Something
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Have a project, opportunity, or idea in mind? Feel free to
            get in touch. I’m always open to discussing software
            development opportunities and interesting projects.
          </p>
        </div>

        {/* Main Contact Area */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-slate-800 bg-slate-900/60 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <div className="mb-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 font-mono text-lg font-bold text-blue-400">
                  MM.
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Get in Touch
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Whether you’re looking for a developer, want to discuss
                  a project, or simply want to connect, send me a message.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:muhadismgl.tech@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    @
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-slate-200 group-hover:text-blue-400">
                      muhadismgl.tech@gmail.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Techorastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                    GH
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      GitHub
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-200 group-hover:text-blue-400">
                      TechOraStudio ↗
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/techOrastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                    in
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-200 group-hover:text-blue-400">
                      Muhammad Muhadis ↗
                    </p>
                  </div>
                </a>
              </div>

              {/* Availability */}
              <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-sm font-medium text-emerald-400">
                    Open to opportunities
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Available for software development projects and
                  professional opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              {/* Editor Header */}
              <div className="mb-8 flex items-center gap-2 border-b border-slate-800 pb-5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />

                <span className="ml-3 font-mono text-xs text-slate-500">
                  message.js
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Muhammad Ali"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Discussion"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        : "border-red-500/20 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message ↗"}
                  </span>

                  {!isSubmitting && (
                    <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;