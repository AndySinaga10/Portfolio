"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, ArrowUpRight, Loader2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-60px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "0fe3deff-a7a1-43c1-acdf-015ea7e4a543";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: `${form.name} (Portfolio Contact)`,
          subject: `New Portfolio Message from ${form.name}`,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message. Please try again.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const errMsg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "andysinagaa@gmail.com",
      href: "mailto:andysinagaa@gmail.com",
      color: "#652b4e",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: undefined,
      color: "#482439",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-x-clip">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[300px] rounded-full opacity-[0.05] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #482439, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-white/5 text-emerald-400 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-white/10">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Let&rsquo;s build something{" "}
            <span className="gradient-text">amazing together</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Have a project in mind or want to discuss a collaboration?
            I&rsquo;d love to hear from you.
          </p>
        </motion.header>

        {/* Content Grid */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-2 flex flex-col gap-3.5 sm:gap-4"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium">{item.label}</p>
                    <p className="text-xs sm:text-sm font-semibold text-white break-all sm:break-normal">{item.value}</p>
                  </div>
                </>
              );

              return item.href ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl hover:border-white/20 hover:bg-white/[0.05] transition-all group"
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl hover:border-white/15 transition-colors"
                >
                  {content}
                </motion.div>
              );
            })}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
              className="p-4 sm:p-5 bg-gradient-to-br from-[#652b4e]/20 to-[#482439]/20 border border-white/10 rounded-xl sm:rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">Open to Opportunities</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Currently available for freelance projects, full-time roles, and
                design consulting. Let&rsquo;s create something great together.
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1"
            >
              {[
                { label: "LinkedIn", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "Dribbble", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-xl hover:text-white hover:border-white/20 active:bg-white/10 transition-all"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 sm:py-12 gap-3.5 sm:gap-4 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 text-xs sm:text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out! Your message has been delivered to Andi&rsquo;s inbox. You will receive a response soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setError(null);
                  }}
                  className="mt-2 px-5 py-2.5 bg-gradient-to-r from-[#652b4e] via-[#482439] to-[#36162a] text-white text-xs sm:text-sm font-semibold rounded-xl border border-[#652b4e]/40 hover:border-[#7a345e]/60 hover:shadow-lg hover:shadow-[#482439]/30 active:scale-95 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                {error && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-red-300 mb-1">Failed to send message</p>
                      <p className="text-xs text-red-300/80 leading-relaxed mb-2">{error}</p>
                      <a
                        href={`mailto:andysinagaa@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
                          form.name || "Visitor"
                        )}&body=${encodeURIComponent(form.message)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white underline underline-offset-2 hover:text-red-200"
                      >
                        Send directly via email to andysinagaa@gmail.com &rarr;
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      disabled={loading}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-base sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#652b4e]/50 focus:border-transparent transition-all hover:border-white/20 disabled:opacity-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      disabled={loading}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-base sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#652b4e]/50 focus:border-transparent transition-all hover:border-white/20 disabled:opacity-50"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    disabled={loading}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-base sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#652b4e]/50 focus:border-transparent transition-all resize-none hover:border-white/20 disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#652b4e] via-[#482439] to-[#36162a] text-white font-semibold text-sm sm:text-base rounded-xl border border-[#652b4e]/40 hover:border-[#7a345e]/60 hover:shadow-lg hover:shadow-[#482439]/30 active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
