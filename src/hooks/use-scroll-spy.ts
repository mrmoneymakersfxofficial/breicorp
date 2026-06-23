"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

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
 *
 * IMPORTANT: Only tracks sections that belong to the CURRENT page.
 * This prevents the URL from changing to another subpage when scrolling
 * (the bug where /plataforma scroll would redirect to /empresa).
 *
 * - Updates the URL hash as the user scrolls (within the same page)
 * - Synces the active section state for nav highlighting
 * - Supports deep-linking (loads /#section or /page#section)
 * - Smooth scroll to section on nav click
 * - Pauses briefly after programmatic scroll so the URL doesn't get overwritten
 */
export function useScrollSpy({ sections, offset = 120, debounceMs = 60 }: UseScrollSpyOptions) {
  const pathname = usePathname();
  const [activeId, setActiveId] = React.useState<string>("");
  const [activePage, setActivePage] = React.useState<string>(pathname);
  const isScrolling = React.useRef(false);
  const paused = React.useRef(false);

  // Only consider sections on the CURRENT page
  const currentPageSections = React.useMemo(() => {
    return sections.filter((s) => s.page === pathname);
  }, [sections, pathname]);

  const pause = React.useCallback((ms: number) => {
    paused.current = true;
    window.setTimeout(() => {
      paused.current = false;
    }, ms);
  }, []);

  // Reset active section when page changes
  React.useEffect(() => {
    if (currentPageSections.length > 0) {
      setActiveId(currentPageSections[0].id);
      setActivePage(pathname);
    }
  }, [pathname, currentPageSections]);

  // Compute active section based on scroll position
  React.useEffect(() => {
    if (currentPageSections.length === 0) return;

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
      let current = currentPageSections[0];
      for (const s of currentPageSections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.offsetTop;
        if (top <= scrollY) current = s;
      }
      // Bottom of page → last section OF THE CURRENT PAGE
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = currentPageSections[currentPageSections.length - 1];
      }

      if (current.id !== activeId) {
        setActiveId(current.id);
        setActivePage(pathname);
        // Update URL hash WITHOUT navigating to another page
        if (!isScrolling.current) {
          const target = `#${current.id}`;
          history.replaceState(null, "", target);
        }
      }
      raf = requestAnimationFrame(compute);
    };

    raf = requestAnimationFrame(compute);
    return () => cancelAnimationFrame(raf);
  }, [currentPageSections, offset, debounceMs, activeId, pathname]);

  // Smooth scroll helper — pauses spy so programmatic scroll wins
  const scrollTo = React.useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      isScrolling.current = true;
      pause(1000);
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
      const section = currentPageSections.find((s) => s.id === id);
      if (section) {
        setActiveId(id);
        setActivePage(pathname);
        const target = `#${id}`;
        history.replaceState(null, "", target);
      }
      window.setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    },
    [currentPageSections, pause, pathname]
  );

  return { activeId, activePage, scrollTo, pause };
}
