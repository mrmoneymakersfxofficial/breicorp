"use client";

import * as React from "react";

export interface NavSection {
  id: string;
  label: string;
  page: string;
}

export interface NavGroup {
  label: string;
  page: string;
  sections: NavSection[];
}

/**
 * Definición central de las 3 subpáginas + secciones scroll-spy.
 * Estructura: cada subpágina tiene su propia ruta y múltiples secciones internas.
 */
export const navGroups: NavGroup[] = [
  {
    label: "Inicio",
    page: "/",
    sections: [
      { id: "inicio", label: "Hero", page: "/" },
      { id: "beneficios", label: "Beneficios", page: "/" },
      { id: "modulos", label: "Módulos", page: "/" },
      { id: "dashboard", label: "Dashboard", page: "/" },
    ],
  },
  {
    label: "Plataforma",
    page: "/plataforma",
    sections: [
      { id: "como-funciona", label: "Cómo funciona", page: "/plataforma" },
      { id: "planes", label: "Planes", page: "/plataforma" },
      { id: "industrias", label: "Industrias", page: "/plataforma" },
      { id: "integraciones", label: "Integraciones", page: "/plataforma" },
    ],
  },
  {
    label: "Empresa",
    page: "/empresa",
    sections: [
      { id: "nosotros", label: "Nosotros", page: "/empresa" },
      { id: "testimonios", label: "Clientes", page: "/empresa" },
      { id: "faq", label: "FAQ", page: "/empresa" },
    ],
  },
];

export const allSections: NavSection[] = navGroups.flatMap((g) => g.sections);

interface NavContextValue {
  activeId: string;
  activePage: string;
  scrollTo: (id: string) => void;
  goToPage: (page: string, sectionId?: string) => void;
}

const NavContext = React.createContext<NavContextValue | null>(null);

export function NavProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: NavContextValue;
}) {
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = React.useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
