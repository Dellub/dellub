import { Home, type LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

// Adicione novos módulos aqui para que apareçam no menu lateral.
export const navItems: NavItem[] = [{ label: "Home", href: "/", icon: Home }];
