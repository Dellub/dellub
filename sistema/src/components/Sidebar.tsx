"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeft, X } from "lucide-react";
import { navItems } from "@/lib/nav";
import { ThemeToggle } from "./ThemeToggle";

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapsed: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

export function Sidebar({
  collapsed,
  onToggleCollapsed,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-sidebar transition-[width,transform] duration-200",
          "md:sticky md:top-0 md:h-dvh md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          collapsed ? "md:w-16" : "md:w-64",
        ].join(" ")}
      >
        <div className="flex h-14 items-center justify-between px-3">
          {!collapsed && (
            <Link href="/" className="flex items-center gap-2 px-1">
              <Logo />
              <span className="font-serif text-lg tracking-tight">Dellub</span>
            </Link>
          )}
          <button
            type="button"
            onClick={onToggleCollapsed}
            className="hidden rounded-lg p-2 text-muted hover:bg-hover hover:text-ink md:block"
            aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
          >
            <PanelLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={onCloseMobile}
            className="rounded-lg p-2 text-muted hover:bg-hover hover:text-ink md:hidden"
            aria-label="Fechar menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-2 py-2">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                title={collapsed ? label : undefined}
                className={[
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-hover font-medium text-ink"
                    : "text-muted hover:bg-hover hover:text-ink",
                  collapsed ? "md:justify-center md:px-0" : "",
                ].join(" ")}
              >
                <Icon
                  className={["size-[18px] shrink-0", active ? "text-accent" : ""].join(" ")}
                />
                <span className={collapsed ? "md:hidden" : ""}>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-2">
          <ThemeToggle collapsed={collapsed} />
        </div>
      </aside>
    </>
  );
}

function Logo() {
  return (
    <span className="grid size-7 place-items-center rounded-lg bg-accent text-sm font-semibold text-white">
      D
    </span>
  );
}
