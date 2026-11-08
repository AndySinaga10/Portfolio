"use client";

import { MotionConfig, motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "9+", label: "Years Exp" },
  { value: "20+", label: "Projects" },
];

export default function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        className="relative isolate flex flex-col overflow-hidden bg-plum text-cream lg:block lg:h-svh lg:min-h-[720px]"
      >
        {/* Poster word: sits behind the portrait. It and the portrait only slide in, since fading them delays the largest paint. */}
        <motion.div
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="z-10 pt-28 text-center lg:absolute lg:inset-x-0 lg:top-[46%] lg:-translate-y-3/4 lg:pt-0"
        >
          <h1 className="hero-word whitespace-nowrap font-black uppercase text-cream-dark">
            <span className="sr-only">Andi Yusup Sinaga, Senior UI/UX </span>
            <span className="block">Product</span>{" "}
            <span className="block">Designer</span>
          </h1>
        </motion.div>

        {/* Portrait cut-out. The source PNG has about 20% empty space on top. */}
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative z-20 mx-auto -mt-[22vw] aspect-[9/16] w-[min(78vw,26rem)] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[79%] lg:w-auto lg:-translate-x-1/2"
        >
          <Image
            src="/Andi.png"
            alt="Andi Yusup Sinaga (Andi Sinaga) - Senior UI/UX Product Designer"
            fill
            priority
            sizes="(max-width: 1024px) 78vw, 450px"
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="relative z-30 border-t-4 border-coral bg-plum px-6 py-8 md:px-10 lg:absolute lg:bottom-10 lg:left-10 lg:w-[30vw] lg:max-w-[30rem] lg:border-t-0 lg:bg-transparent lg:p-0"
        >
          <span className="inline-block bg-coral px-4 py-1 text-xs font-bold uppercase tracking-widest text-plum">
            Available for work
          </span>
          <p className="mt-4 text-sm font-medium text-cream/85">
            Hi, I&rsquo;m Andi Yusup Sinaga, based in Jakarta, Indonesia
          </p>
          <p className="mt-3 text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-tight">
            I design products for complicated systems, and I know how they get built.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-coral px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-plum transition-colors hover:bg-cream"
            >
              View Work
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download="Resume - Andi Yusup Sinaga.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-cream px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-cream hover:text-plum"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="relative z-30 flex gap-12 bg-plum px-6 pb-10 md:px-10 lg:absolute lg:bottom-10 lg:right-10 lg:bg-transparent lg:p-0 lg:text-right"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-xs font-bold uppercase tracking-widest">{stat.label}</dt>
              <dd className="font-display text-6xl font-black leading-none text-coral">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </section>
    </MotionConfig>
  );
}
