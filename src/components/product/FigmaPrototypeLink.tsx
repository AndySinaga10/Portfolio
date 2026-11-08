"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { ArrowUpRight, Loader2, X } from "lucide-react";

// figma.com/proto blocks framing, so the modal loads the same prototype from Figma's embed host.
function toEmbedUrl(prototypeUrl: string, isNarrowScreen: boolean) {
  const url = new URL(prototypeUrl);
  url.hostname = "embed.figma.com";
  // Share-link tracking values are not needed to display the prototype.
  url.searchParams.delete("t");
  url.searchParams.delete("fuid");
  url.searchParams.set("embed-host", "share");
  // The flows sidebar covers most of the prototype on a phone.
  if (isNarrowScreen) url.searchParams.delete("show-proto-sidebar");
  return url.toString();
}

interface FigmaPrototypeLinkProps {
  href: string;
  title: string;
  className?: string;
  children: ReactNode;
}

export default function FigmaPrototypeLink({
  href,
  title,
  className,
  children,
}: FigmaPrototypeLinkProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [embedSrc, setEmbedSrc] = useState<string | null>(null);
  const open = embedSrc !== null;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.showModal();
    closeRef.current?.focus();
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleOpen = (event: MouseEvent<HTMLAnchorElement>) => {
    // Leave ctrl/cmd/shift/middle clicks to the browser so "open in new tab" still works.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    setLoaded(false);
    setEmbedSrc(toEmbedUrl(href, window.innerWidth < 768));
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-haspopup="dialog"
        onClick={handleOpen}
        className={className}
      >
        {children}
      </a>

      <dialog
        ref={dialogRef}
        aria-label={`${title}, interactive Figma prototype`}
        onClose={() => setEmbedSrc(null)}
        onClick={(event) => {
          // A click on the dialog element itself means the backdrop was clicked.
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-plum p-0 text-cream backdrop:bg-plum-deep/90 sm:h-[90dvh] sm:w-[min(92vw,90rem)]"
      >
        {open && (
          <div className="flex h-full flex-col">
            <header className="flex shrink-0 items-center justify-between gap-4 border-b-4 border-coral py-2 pl-6 pr-3 md:pl-8">
              <h2 className="min-w-0 truncate text-xl font-extrabold md:text-2xl">{title}</h2>
              <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors hover:text-coral sm:text-sm"
                >
                  Open in Figma
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  aria-label="Close prototype"
                  onClick={() => dialogRef.current?.close()}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center transition-colors hover:text-coral"
                >
                  <X aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </header>

            <div className="relative min-h-0 flex-1 bg-plum-deep">
              {!loaded && (
                <p
                  role="status"
                  className="absolute inset-0 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider"
                >
                  <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
                  Loading prototype
                </p>
              )}
              <iframe
                src={embedSrc}
                title={`${title} prototype`}
                allow="fullscreen"
                allowFullScreen
                onLoad={() => setLoaded(true)}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
