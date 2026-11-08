# Shared UI primitives

There is no component library. Styling is inline Tailwind v4 utilities; icons come from lucide-react; motion from framer-motion. `ProjectCard.tsx` in src/components/product is a legacy light-theme card and is NOT used by the homepage (ProjectsSection defines its own).

## `src/components/ui/AnimatedSection.tsx`

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: -40 },
    right: { x: 40 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

```

## `src/components/ui/ScrollReveal.tsx`

```tsx
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

```

## `src/hooks/useScrollReveal.ts`

```ts
"use client";

import { useEffect, useRef, useState, RefObject } from "react";

type ScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px 0px -80px 0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip if already visible and triggerOnce is true
    if (isVisible && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, isVisible]);

  return [ref, isVisible];
}

// Staggered children reveal
export function useStaggeredReveal<T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  options: ScrollRevealOptions = {}
): [RefObject<T | null>, boolean[], number] {
  const { threshold = 0.1, rootMargin = "0px 0px -60px 0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const allVisible = visibleItems.every(Boolean);
    if (allVisible && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the visibility
          const newVisible = [...visibleItems];
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const updated = [...prev];
                updated[i] = true;
                return updated;
              });
            }, i * 100);
          }
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setVisibleItems(new Array(itemCount).fill(false));
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, itemCount]);

  return [ref, visibleItems, visibleItems.filter(Boolean).length];
}

```
