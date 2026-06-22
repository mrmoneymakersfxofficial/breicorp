"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { NavProvider } from "@/lib/nav-config";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { allSections } from "@/lib/nav-config";

export function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { activeId, activePage, scrollTo, pause } = useScrollSpy({ sections: allSections });

  // When the route changes, check the hash and scroll to that section
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#\/?/, "");
    // Pause spy so it doesn't overwrite the hash while we scroll programmatically
    pause(1200);
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const t = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 350);
    return () => clearTimeout(t);
  }, [pathname, pause]);

  const goToPage = React.useCallback(
    (page: string, sectionId?: string) => {
      const currentPath = window.location.pathname;
      if (page === currentPath) {
        if (sectionId) {
          scrollTo(sectionId);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      if (sectionId) {
        router.push(`${page}#/${sectionId}`);
      } else {
        router.push(page);
      }
    },
    [router, scrollTo]
  );

  return (
    <NavProvider
      value={{
        activeId,
        activePage,
        scrollTo,
        goToPage,
      }}
    >
      <div className="relative min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </NavProvider>
  );
}
