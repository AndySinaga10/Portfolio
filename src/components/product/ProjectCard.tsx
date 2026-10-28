"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

interface Screen {
  bg: string;
  label: string;
  icon: string;
}

interface Project {
  id: number;
  company: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  accentBg: string;
  screens?: Screen[];
  thumbnail?: string;
  figmaUrl: string;
  reversed?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { company, title, description, tags, accent, accentBg, screens, thumbnail, figmaUrl, reversed } = project;
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const textContent = (
    <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
      {/* Company label */}
      <div>
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: accent }}
        >
          {company}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-semibold rounded-full"
            style={{ color: accent, backgroundColor: accentBg, border: `1px solid ${accent}22` }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA - Figma Link */}
      <div>
        <a
          href={figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
          style={{ backgroundColor: accent }}
        >
          {/* Figma Icon */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-4.587 7.51h3.117v-6.038H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm.001 1.471h3.117v3.117c0 1.665-1.355 3.019-3.019 3.019s-3.019-1.355-3.019-3.019 1.354-3.019 3.019-3.019h-.098z"/>
          </svg>
          View in Figma
          {/* External link icon */}
          <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );

  // Thumbnail with real image
  const thumbnailContent = thumbnail ? (
    <div
      className="relative flex items-center justify-center p-4 overflow-hidden cursor-pointer group min-h-[300px]"
      style={{ background: `linear-gradient(135deg, ${accentBg} 0%, white 100%)` }}
      onClick={() => window.open(figmaUrl, '_blank', 'noopener,noreferrer')}
    >
      {/* Background decoration */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: accent }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-5"
        style={{ backgroundColor: accent }}
      />

      {/* Real Image */}
      <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:scale-[1.02] transition-transform duration-300">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100%, 500px"
        />
      </div>

      {/* Figma badge */}
      <div
        className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl shadow-md text-xs font-bold text-white z-10"
        style={{ backgroundColor: accent }}
      >
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-4.587 7.51h3.117v-6.038H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm.001 1.471h3.117v3.117c0 1.665-1.355 3.019-3.019 3.019s-3.019-1.355-3.019-3.019 1.354-3.019 3.019-3.019h-.098z"/>
        </svg>
        Figma
        <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold z-20" style={{ color: accent }}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-4.587 7.51h3.117v-6.038H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm.001 1.471h3.117v3.117c0 1.665-1.355 3.019-3.019 3.019s-3.019-1.355-3.019-3.019 1.354-3.019 3.019-3.019h-.098z"/>
          </svg>
          Open in Figma
        </div>
      </div>
    </div>
  ) : null;

  // Mockup fallback (if no thumbnail)
  const mockupContent = screens && !thumbnail ? (
    <div
      className="relative flex items-center justify-center p-8 min-h-[280px] overflow-hidden cursor-pointer group"
      style={{ background: `linear-gradient(135deg, ${accentBg} 0%, white 100%)` }}
      onClick={() => window.open(figmaUrl, '_blank', 'noopener,noreferrer')}
    >
      {/* Background circle decoration */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: accent }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-5"
        style={{ backgroundColor: accent }}
      />

      {/* Screen mockups */}
      <div className="relative flex items-end gap-3 z-10 group-hover:scale-105 transition-transform duration-300">
        {screens.map((screen, i) => (
          <div
            key={screen.label}
            className="rounded-2xl shadow-xl overflow-hidden border border-white/80 transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: screen.bg,
              width: i === 1 ? "120px" : "90px",
              height: i === 1 ? "200px" : "160px",
              transform: i === 0 ? "rotate(-6deg)" : i === 2 ? "rotate(6deg)" : "rotate(0deg)",
              marginBottom: i === 1 ? "0px" : "-20px",
              zIndex: i === 1 ? 10 : 5,
            }}
          >
            {/* Fake screen header */}
            <div className="h-6 flex items-center gap-1 px-2" style={{ backgroundColor: `${accent}22` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </div>

            {/* Screen content placeholder */}
            <div className="p-2 flex flex-col gap-1.5">
              <div className="text-xl text-center py-1">{screen.icon}</div>
              {[80, 60, 70, 50, 65].map((w, j) => (
                <div
                  key={j}
                  className="h-1.5 rounded-full"
                  style={{ width: `${w}%`, backgroundColor: `${accent}33` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Figma badge */}
      <div
        className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl shadow-md text-xs font-bold text-white"
        style={{ backgroundColor: accent }}
      >
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-4.587 7.51h3.117v-6.038H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm.001 1.471h3.117v3.117c0 1.665-1.355 3.019-3.019 3.019s-3.019-1.355-3.019-3.019 1.354-3.019 3.019-3.019h-.098z"/>
        </svg>
        Figma
        <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold" style={{ color: accent }}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-4.587 7.51h3.117v-6.038H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm.001 1.471h3.117v3.117c0 1.665-1.355 3.019-3.019 3.019s-3.019-1.355-3.019-3.019 1.354-3.019 3.019-3.019h-.098z"/>
          </svg>
          Open in Figma
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      {/* Accent top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}88)` }}
      />

      <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
        <div className={reversed ? "lg:[direction:ltr]" : ""}>{textContent}</div>
        <div className={reversed ? "lg:[direction:ltr]" : ""}>
          {thumbnailContent || mockupContent}
        </div>
      </div>
    </div>
  );
}
