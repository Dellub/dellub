"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ collapsed }: { collapsed: boolean }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  const Icon = dark ? Sun : Moon;
  const label = dark ? "Tema claro" : "Tema escuro";

  return (
    <button
      type="button"
      onClick={toggle}
      title={collapsed ? label : undefined}
      className={[
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-hover hover:text-ink",
        collapsed ? "md:justify-center md:px-0" : "",
      ].join(" ")}
    >
      <Icon className="size-[18px] shrink-0" />
      <span className={collapsed ? "md:hidden" : ""}>{label}</span>
    </button>
  );
}
