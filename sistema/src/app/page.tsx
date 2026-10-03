"use client";

import Link from "next/link";
import { Cabecalho, Cartao, SeloStatus, Vazio } from "@/components/ui";
import { formatarData, formatarMoeda, useDados } from "@/lib/store";

export default function Home() {
  const { clientes, projetos } = useDados();

  const ativos = projetos.filter((p) => p.status === "andamento" || p.status === "planejamento");
  const concluidos = projetos.filter((p) => p.status === "concluido");
  const valorAtivo = ativos.reduce((soma, p) => soma + p.valor, 0);
  const nomeCliente = (id: string) => clientes.find((c) => c.id === id)?.nome ?? "—";
  const recentes = [...projetos].sort((a, b) => b.criadoEm.localeCompare(a.criadoEm)).slice(0, 5);

  const indicadores = [
    { rotulo: "Clientes", valor: clientes.length, href: "/clientes" },
    { rotulo: "Projetos ativos", valor: ativos.length, href: "/projetos" },
    { rotulo: "Concluídos", valor: concluidos.length, href: "/projetos" },
    { rotulo: "Valor em aberto", valor: formatarMoeda(valorAtivo), href: "/projetos" },
  ];

  return (
    <>
      <Cabecalho titulo="Home" descricao="Visão geral dos seus clientes e projetos." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {indicadores.map((i) => (
          <Link key={i.rotulo} href={i.href}>
            <Cartao className="p-5 transition-colors hover:border-marca-500">
              <p className="text-sm text-slate-500">{i.rotulo}</p>
              <p className="mt-2 text-2xl font-semibold tabular-nums">{i.valor}</p>
            </Cartao>
          </Link>
        ))}
      </div>

      <Cartao className="mt-6">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold">Projetos recentes</h2>
          <Link href="/projetos" className="link-acao">
            Ver todos
          </Link>
        </div>
        {recentes.length === 0 ? (
          <Vazio
            titulo="Nenhum projeto ainda"
            texto="Cadastre um cliente e depois crie o primeiro projeto para ele."
            acao={
              <Link href={clientes.length ? "/projetos" : "/clientes"} className="botao-primario">
                {clientes.length ? "Criar projeto" : "Cadastrar cliente"}
              </Link>
            }
          />
        ) : (
          <ul className="divide-y divide-slate-100">
            {recentes.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5">
                <div className="min-w-0">
                  <p className="truncate font-medium">{p.nome}</p>
                  <p className="text-sm text-slate-500">
                    {nomeCliente(p.clienteId)} · prazo {formatarData(p.prazo)}
                  </p>
                </div>
                <SeloStatus status={p.status} />
              </li>
            ))}
          </ul>
        )}
      </Cartao>
    </>
  );
}
