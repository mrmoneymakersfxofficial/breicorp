"use client";

import * as React from "react";

interface Section {
  id: string;
  label: string;
  /** subpage path this section belongs to (without trailing slash) */
  page: string;
}

interface UseScrollSpyOptions {
  sections: Section[];
  /** offset from top to consider a section "active" */
  offset?: number;
  /** debounce ms */
  debounceMs?: number;
}

/**
 * Scroll spy + History API URL sync.
 * - Updates the URL hash as the user scrolls without reload
 * - Synces the active section state for nav highlighting
 * - Supports deep-linking (loads /#section or /page#section)
 * - Smooth scroll to section on nav click
 * - Pauses briefly after programmatic scroll so the URL doesn't get overwritten
 */
export function useScrollSpy({ sections, offset = 120, debounceMs = 60 }: UseScrollSpyOptions) {
  const [activeId, setActiveId] = React.useState<string>(sections[0]?.id ?? "");
  const [activePage, setActivePage] = React.useState<string>(sections[0]?.page ?? "/");
  const isScrolling = React.useRef(false);
  const paused = React.useRef(false);

  const pause = React.useCallback((ms: number) => {
    paused.current = true;
    window.setTimeout(() => {
      paused.current = false;
    }, ms);
  }, []);

  // Compute active section based on scroll position
  React.useEffect(() => {
    let raf = 0;
    let lastUpdate = 0;

    const compute = () => {
      const now = performance.now();
      if (now - lastUpdate < debounceMs) {
        raf = requestAnimationFrame(compute);
        return;
      }
      lastUpdate = now;

      if (paused.current || isScrolling.current) {
        raf = requestAnimationFrame(compute);
        return;
      }

      const scrollY = window.scrollY + offset;
      let current = sections[0];
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.offsetTop;
        if (top <= scrollY) current = s;
      }
      // Bottom of page → last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = sections[sections.length - 1];
      }

      if (current.id !== activeId) {
        setActiveId(current.id);
        setActivePage(current.page);
        // Update URL without reload
        const target =
          current.page === "/" ? `/#${current.id}` : `${current.page}#/${current.id}`;
        history.replaceState(null, "", target);
      }
      raf = requestAnimationFrame(compute);
    };

    raf = requestAnimationFrame(compute);
    return () => cancelAnimationFrame(raf);
  }, [sections, offset, debounceMs, activeId]);

  // Smooth scroll helper — pauses spy so programmatic scroll wins
  const scrollTo = React.useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      isScrolling.current = true;
      pause(1000);
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
      const section = sections.find((s) => s.id === id);
      if (section) {
        setActiveId(id);
        setActivePage(section.page);
        const target =
          section.page === "/" ? `/#${id}` : `${section.page}#/${id}`;
        history.replaceState(null, "", target);
      }
      window.setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    },
    [sections, pause]
  );

  return { activeId, activePage, scrollTo, pause };
}
