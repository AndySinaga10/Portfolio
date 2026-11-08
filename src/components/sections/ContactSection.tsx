"use client";

import { useState } from "react";
import { Send, ArrowUpRight, Loader2, AlertCircle } from "lucide-react";
import { socialLinks } from "@/lib/site";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const fieldClass =
    "w-full border-b-2 border-cream bg-transparent py-3 text-lg text-cream placeholder:text-cream/70 transition-colors hover:border-coral focus:border-coral focus:outline-none disabled:opacity-60";
  const labelClass = "text-xs font-bold uppercase tracking-widest";

  return (
    <section id="contact" className="bg-plum text-cream">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 md:px-10 lg:py-32">
        <h2 className="section-title mb-8 font-black uppercase">
          Let&rsquo;s Talk<span className="text-coral">.</span>
        </h2>
        <a
          href="mailto:andysinagaa@gmail.com"
          className="inline-block border-b-4 border-coral pb-1 font-display text-[clamp(1.5rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight transition-colors hover:text-coral"
        >
          andysinagaa@gmail.com
        </a>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <span className="h-2.5 w-2.5 bg-coral" />
              Open to opportunities
            </p>
            <p className="max-w-md text-lg leading-relaxed">
              Currently available for freelance projects, full-time roles, and design consulting.
              Based in Jakarta, Indonesia.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-coral"
                  >
                    {social.label}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div role="status" className="border-t-4 border-coral pt-8">
                <h3 className="mb-3 text-4xl font-extrabold">Message Sent!</h3>
                <p className="mb-6 max-w-md text-lg leading-relaxed">
                  Thanks for reaching out! Your message has been delivered to Andi&rsquo;s inbox. You will receive a response soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setError(null);
                  }}
                  className="cursor-pointer border-2 border-cream px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-cream hover:text-plum"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {error && (
                  <div role="alert" className="flex items-start gap-3 border-l-4 border-coral bg-plum-deep p-4">
                    <AlertCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 font-bold">Failed to send message</p>
                      <p className="mb-2 text-sm leading-relaxed">{error}</p>
                      <a
                        href={`mailto:andysinagaa@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
                          form.name || "Visitor"
                        )}&body=${encodeURIComponent(form.message)}`}
                        className="text-sm font-bold underline underline-offset-2 hover:text-coral"
                      >
                        Send directly via email to andysinagaa@gmail.com &rarr;
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      required
                      disabled={loading}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      required
                      disabled={loading}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    disabled={loading}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 self-start bg-coral px-8 py-4 text-sm font-bold uppercase tracking-wider text-plum transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send aria-hidden="true" className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
