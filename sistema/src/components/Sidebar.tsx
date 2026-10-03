"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconeClientes, IconeFechar, IconeHome, IconeMenu, IconeProjetos } from "./Icones";

const ITENS = [
  { href: "/", rotulo: "Home", Icone: IconeHome },
  { href: "/clientes", rotulo: "Clientes", Icone: IconeClientes },
  { href: "/projetos", rotulo: "Projetos", Icone: IconeProjetos },
];

export function Sidebar() {
  const caminho = usePathname();
  const [aberto, setAberto] = useState(false);

  useEffect(() => setAberto(false), [caminho]);

  const ativo = (href: string) => (href === "/" ? caminho === "/" : caminho.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
        <Marca />
        <button
          type="button"
          onClick={() => setAberto(true)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          aria-label="Abrir menu"
        >
          <IconeMenu />
        </button>
      </header>

      {aberto && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden" onClick={() => setAberto(false)} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white px-4 py-6 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          aberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between px-2">
          <Marca />
          <button
            type="button"
            onClick={() => setAberto(false)}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Fechar menu"
          >
            <IconeFechar />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {ITENS.map(({ href, rotulo, Icone }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                ativo(href)
                  ? "bg-marca-50 text-marca-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icone />
              {rotulo}
            </Link>
          ))}
        </nav>

        <p className="mt-auto px-3 text-xs text-slate-400">Dados salvos neste navegador.</p>
      </aside>
    </>
  );
}

function Marca() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid size-8 place-items-center rounded-lg bg-marca-600 text-sm text-white">D</span>
      Dellub
    </Link>
  );
}
