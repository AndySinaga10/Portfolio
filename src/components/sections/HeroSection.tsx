import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg, #f8f7f4 0%, #eef2ff 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
      />

      {/* Floating decorative shapes */}
      <div
        aria-hidden="true"
        className="absolute top-24 left-[10%] w-4 h-4 rounded-full bg-blue-400 opacity-60 animate-float"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 right-[15%] w-3 h-3 rotate-45 bg-yellow-400 opacity-70 animate-float-reverse"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-32 left-[20%] w-5 h-5 rounded-full border-2 border-purple-400 opacity-50 animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-48 right-[10%] w-4 h-4 rotate-12 bg-pink-400 opacity-40 animate-float"
      />
      <div
        aria-hidden="true"
        className="absolute top-[35%] left-[5%] w-2 h-8 rounded-full bg-blue-300 opacity-40 animate-float-reverse"
      />

      {/* Grid dots pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1a2e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left Content ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-up delay-100">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-[#1a1a2e]">
                I&rsquo;m{" "}
                <span className="text-[#1a1a2e]">Andi Sinaga</span>
                <br />
                <span className="gradient-text">UI/UX Product</span>
                <br />
                <span className="text-[#1a1a2e]">Designer</span>
              </h1>
            </div>

            {/* Bio */}
            <div className="animate-fade-up delay-200">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
                Senior UI/UX Designer with more than 8 years of experience.
                Graduated from the University of Indonesia majoring in Computer
                Science. I&rsquo;m passionate about crafting digital experiences that
                create real impact for users all over the world.
              </p>
            </div>

            {/* Stats row */}
            <div className="animate-fade-up delay-300 flex items-center gap-6 py-2">
              {[
                { value: "8+", label: "Years Exp." },
                { value: "40+", label: "Projects" },
                { value: "15+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-900/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                See My Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold rounded-2xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Featured Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-up delay-500 flex items-center gap-4 pt-2">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Find me on</span>
              {[
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Dribbble",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.477 0-.945.04-1.4.113zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.386z" />
                    </svg>
                  ),
                },
                {
                  label: "Behance",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.1zm-7.249-4h3.953c-.066-1.741-1.25-2.55-2.001-2.55-.8 0-2.05.698-1.952 2.55zM2.565 6.726c.596-.003 4.867.101 4.867 3.727 0 1.091-.408 1.953-1.04 2.564.89.564 1.612 1.495 1.612 2.825 0 3.873-3.905 4.056-5.439 4.056H0V6.726h2.565zm-.22 5.726H1.8v3.03h.55c.745 0 2.65 0 2.65-1.56 0-1.63-1.905-1.47-2.655-1.47zm.048-4.07H1.8v2.786h.547c.682 0 2.35-.148 2.35-1.39 0-1.197-1.668-1.396-2.304-1.396z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white text-gray-500 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 transition-all duration-200 hover:border-blue-200 hover:-translate-y-0.5 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Photo Card ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer ring decoration */}
              <div className="absolute -inset-4 rounded-[40px] border-2 border-blue-200 border-dashed opacity-50 animate-float-slow" />

              {/* Main photo container */}
              <div
                className="relative w-80 h-[22rem] sm:w-[22rem] sm:h-[28rem] rounded-[32px] overflow-hidden"
              >
                {/* Real Photo */}
                <Image
                  src="/Andi.png"
                  alt="Andi Sinaga - UI/UX Product Designer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 320px, 352px"
                />

                {/* Top tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm z-10">
                  <p className="text-xs font-semibold text-[#1a1a2e]">UI/UX Designer</p>
                </div>
              </div>

              {/* Floating info cards */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 border border-gray-100 animate-float">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Projects Done</p>
                  <p className="text-sm font-bold text-[#1a1a2e]">40+ Projects</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 border border-gray-100 animate-float-reverse">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Happy Clients</p>
                  <p className="text-sm font-bold text-[#1a1a2e]">15+ Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
