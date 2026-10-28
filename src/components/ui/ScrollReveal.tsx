"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  duration?: number;
  as?: "div" | "section" | "article" | "li";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
  as: Component = "div",
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  });

  const getTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-40px)";
      case "right":
        return "translateX(40px)";
      case "up":
      default:
        return "translateY(32px)";
    }
  };

  return (
    <Component
      ref={ref as any}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
