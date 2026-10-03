"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { BotaoNovo, Cabecalho, Campo, Cartao, Modal, SeloStatus, Vazio } from "@/components/ui";
import { excluirProjeto, formatarData, formatarMoeda, salvarProjeto, useDados } from "@/lib/store";
import { STATUS_PROJETO, type Projeto, type StatusProjeto } from "@/lib/types";

type Form = Omit<Projeto, "id" | "criadoEm" | "valor"> & { valor: string };
const FORM_VAZIO: Form = { nome: "", clienteId: "", status: "planejamento", prazo: "", valor: "", descricao: "" };

export default function ProjetosPage() {
  const { clientes, projetos } = useDados();
  const [filtroStatus, setFiltroStatus] = useState<StatusProjeto | "">("");
  const [filtroCliente, setFiltroCliente] = useState("");
  const [editando, setEditando] = useState<Projeto | null>(null);
  const [aberto, setAberto] = useState(false);
  const [form, setForm] = useState<Form>(FORM_VAZIO);

  const nomeCliente = (id: string) => clientes.find((c) => c.id === id)?.nome ?? "—";
  const clientesOrdenados = useMemo(
    () => [...clientes].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR")),
    [clientes],
  );

  const filtrados = useMemo(
    () =>
      [...projetos]
        .sort((a, b) => b.criadoEm.localeCompare(a.criadoEm))
        .filter((p) => (!filtroStatus || p.status === filtroStatus) && (!filtroCliente || p.clienteId === filtroCliente)),
    [projetos, filtroStatus, filtroCliente],
  );

  const abrir = (projeto?: Projeto) => {
    setEditando(projeto ?? null);
    setForm(
      projeto
        ? { ...projeto, valor: projeto.valor ? String(projeto.valor) : "" }
        : { ...FORM_VAZIO, clienteId: filtroCliente || clientesOrdenados[0]?.id || "" },
    );
    setAberto(true);
  };
  const fechar = useCallback(() => setAberto(false), []);

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, clienteId, status, prazo, descricao } = form;
    salvarProjeto(
      { nome: nome.trim(), clienteId, status, prazo, descricao, valor: Number(form.valor.replace(",", ".")) || 0 },
      editando?.id,
    );
    fechar();
  };

  const remover = (projeto: Projeto) => {
    if (confirm(`Excluir o projeto "${projeto.nome}"?`)) excluirProjeto(projeto.id);
  };

  const atualizar =
    (chave: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [chave]: e.target.value });

  const semClientes = clientes.length === 0;

  return (
    <>
      <Cabecalho
        titulo="Projetos"
        descricao={`${projetos.length} projeto(s) no total`}
        acao={!semClientes && <BotaoNovo onClick={() => abrir()}>Novo projeto</BotaoNovo>}
      />

      <Cartao>
        {projetos.length > 0 && (
          <div className="flex flex-wrap gap-3 border-b border-slate-200 p-4">
            <select className="entrada w-auto" value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value as StatusProjeto | "")}>
              <option value="">Todos os status</option>
              {Object.entries(STATUS_PROJETO).map(([valor, rotulo]) => (
                <option key={valor} value={valor}>
                  {rotulo}
                </option>
              ))}
            </select>
            <select className="entrada w-auto" value={filtroCliente} onChange={(e) => setFiltroCliente(e.target.value)}>
              <option value="">Todos os clientes</option>
              {clientesOrdenados.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nome}
                </option>
              ))}
            </select>
          </div>
        )}

        {semClientes ? (
          <Vazio
            titulo="Cadastre um cliente primeiro"
            texto="Todo projeto pertence a um cliente."
            acao={
              <Link href="/clientes" className="botao-primario">
                Ir para Clientes
              </Link>
            }
          />
        ) : filtrados.length === 0 ? (
          <Vazio
            titulo={projetos.length ? "Nenhum projeto com esses filtros" : "Nenhum projeto ainda"}
            texto={projetos.length ? "Ajuste os filtros acima." : "Crie o primeiro projeto e acompanhe o andamento por aqui."}
            acao={!projetos.length && <BotaoNovo onClick={() => abrir()}>Novo projeto</BotaoNovo>}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs tracking-wide text-slate-500 uppercase">
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-3 font-medium">Projeto</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="hidden px-5 py-3 font-medium md:table-cell">Prazo</th>
                  <th className="hidden px-5 py-3 text-right font-medium md:table-cell">Valor</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtrados.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="px-5 py-3.5">
                      <p className="font-medium">{p.nome}</p>
                      <p className="text-slate-500">{nomeCliente(p.clienteId)}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <SeloStatus status={p.status} />
                    </td>
                    <td className="hidden px-5 py-3.5 text-slate-600 md:table-cell">{formatarData(p.prazo)}</td>
                    <td className="hidden px-5 py-3.5 text-right tabular-nums md:table-cell">{formatarMoeda(p.valor)}</td>
                    <td className="px-5 py-3.5 text-right whitespace-nowrap">
                      <button type="button" className="link-acao" onClick={() => abrir(p)}>
                        Editar
                      </button>
                      <button type="button" className="ml-4 text-sm font-medium text-red-600 hover:text-red-700" onClick={() => remover(p)}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Cartao>

      <Modal titulo={editando ? "Editar projeto" : "Novo projeto"} aberto={aberto} aoFechar={fechar}>
        <form onSubmit={enviar} className="grid gap-4 sm:grid-cols-2">
          <Campo rotulo="Nome do projeto *" className="sm:col-span-2">
            <input className="entrada" required autoFocus value={form.nome} onChange={atualizar("nome")} />
          </Campo>
          <Campo rotulo="Cliente *">
            <select className="entrada" required value={form.clienteId} onChange={atualizar("clienteId")}>
              {clientesOrdenados.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nome}
                </option>
              ))}
            </select>
          </Campo>
          <Campo rotulo="Status">
            <select className="entrada" value={form.status} onChange={atualizar("status")}>
              {Object.entries(STATUS_PROJETO).map(([valor, rotulo]) => (
                <option key={valor} value={valor}>
                  {rotulo}
                </option>
              ))}
            </select>
          </Campo>
          <Campo rotulo="Prazo">
            <input className="entrada" type="date" value={form.prazo} onChange={atualizar("prazo")} />
          </Campo>
          <Campo rotulo="Valor (R$)">
            <input className="entrada" inputMode="decimal" placeholder="0,00" value={form.valor} onChange={atualizar("valor")} />
          </Campo>
          <Campo rotulo="Descrição" className="sm:col-span-2">
            <textarea className="entrada min-h-24" value={form.descricao} onChange={atualizar("descricao")} />
          </Campo>
          <div className="mt-2 flex justify-end gap-3 sm:col-span-2">
            <button type="button" className="botao-secundario" onClick={fechar}>
              Cancelar
            </button>
            <button type="submit" className="botao-primario">
              Salvar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
