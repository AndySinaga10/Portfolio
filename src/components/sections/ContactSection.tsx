"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const [headerRef, headerVisible] = useScrollReveal<HTMLElement>();
  const [infoRef, infoVisible] = useScrollReveal<HTMLDivElement>();
  const [formRef, formVisible] = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real form submission (Resend, Formspree, etc.)
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-4 border border-green-100">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
            Let&rsquo;s Work Together
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have a project in mind or want to discuss a collaboration?
            I&rsquo;d love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left info column */}
          <div
            ref={infoRef}
            className="lg:col-span-2 flex flex-col gap-6"
            style={{
              opacity: infoVisible ? 1 : 0,
              transform: infoVisible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: "Email",
                value: "andi.sinaga@email.com",
                color: "#eff6ff",
                iconColor: "#2563eb",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: "Location",
                value: "Jakarta, Indonesia",
                color: "#f5f3ff",
                iconColor: "#7c3aed",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Response Time",
                value: "Within 24 hours",
                color: "#ecfdf5",
                iconColor: "#059669",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100"
                style={{
                  backgroundColor: item.color,
                  opacity: infoVisible ? 1 : 0,
                  transform: infoVisible ? "translateX(0)" : "translateX(-24px)",
                  transition: `opacity 0.5s ease-out ${i * 80}ms, transform 0.5s ease-out ${i * 80}ms`,
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: `${item.iconColor}22`, color: item.iconColor }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                  <p className="text-sm font-semibold text-[#1a1a2e]">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div
              className="p-5 rounded-2xl bg-[#1a1a2e] text-white"
              style={{
                opacity: infoVisible ? 1 : 0,
                transform: infoVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Open to Opportunities</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Currently available for freelance projects, full-time roles, and
                design consulting. Let&rsquo;s create something great together.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-sm p-8"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thanks for reaching out. I&rsquo;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-50 hover:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1a1a2e] text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-900/20 hover:-translate-y-0.5"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
