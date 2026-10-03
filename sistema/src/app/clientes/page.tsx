"use client";

import { useCallback, useMemo, useState } from "react";
import { IconeBusca } from "@/components/Icones";
import { BotaoNovo, Cabecalho, Campo, Cartao, Modal, Vazio } from "@/components/ui";
import { excluirCliente, salvarCliente, useDados } from "@/lib/store";
import type { Cliente } from "@/lib/types";

type Form = Omit<Cliente, "id" | "criadoEm">;
const FORM_VAZIO: Form = { nome: "", empresa: "", email: "", telefone: "" };

export default function ClientesPage() {
  const { clientes, projetos } = useDados();
  const [busca, setBusca] = useState("");
  const [editando, setEditando] = useState<Cliente | null>(null);
  const [aberto, setAberto] = useState(false);
  const [form, setForm] = useState<Form>(FORM_VAZIO);

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return [...clientes]
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))
      .filter((c) => !termo || [c.nome, c.empresa, c.email].some((v) => v.toLowerCase().includes(termo)));
  }, [clientes, busca]);

  const qtdProjetos = (id: string) => projetos.filter((p) => p.clienteId === id).length;

  const abrir = (cliente?: Cliente) => {
    setEditando(cliente ?? null);
    setForm(cliente ? { nome: cliente.nome, empresa: cliente.empresa, email: cliente.email, telefone: cliente.telefone } : FORM_VAZIO);
    setAberto(true);
  };
  const fechar = useCallback(() => setAberto(false), []);

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    salvarCliente({ ...form, nome: form.nome.trim() }, editando?.id);
    fechar();
  };

  const remover = (cliente: Cliente) => {
    const qtd = qtdProjetos(cliente.id);
    const aviso = qtd ? `\n\n${qtd} projeto(s) deste cliente também serão excluídos.` : "";
    if (confirm(`Excluir o cliente "${cliente.nome}"?${aviso}`)) excluirCliente(cliente.id);
  };

  const campo = (chave: keyof Form) => ({
    value: form[chave],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [chave]: e.target.value }),
  });

  return (
    <>
      <Cabecalho
        titulo="Clientes"
        descricao={`${clientes.length} cliente(s) cadastrado(s)`}
        acao={<BotaoNovo onClick={() => abrir()}>Novo cliente</BotaoNovo>}
      />

      <Cartao>
        {clientes.length > 0 && (
          <div className="border-b border-slate-200 p-4">
            <div className="relative max-w-sm">
              <IconeBusca className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
              <input
                className="entrada pl-9"
                placeholder="Buscar por nome, empresa ou e-mail"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>
        )}

        {filtrados.length === 0 ? (
          <Vazio
            titulo={clientes.length ? "Nenhum cliente encontrado" : "Nenhum cliente cadastrado"}
            texto={clientes.length ? "Tente outro termo de busca." : "Cadastre o primeiro cliente para começar a organizar seus projetos."}
            acao={!clientes.length && <BotaoNovo onClick={() => abrir()}>Novo cliente</BotaoNovo>}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs tracking-wide text-slate-500 uppercase">
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-3 font-medium">Nome</th>
                  <th className="hidden px-5 py-3 font-medium md:table-cell">Contato</th>
                  <th className="px-5 py-3 font-medium">Projetos</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtrados.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="px-5 py-3.5">
                      <p className="font-medium">{c.nome}</p>
                      {c.empresa && <p className="text-slate-500">{c.empresa}</p>}
                    </td>
                    <td className="hidden px-5 py-3.5 text-slate-600 md:table-cell">
                      <p>{c.email || "—"}</p>
                      {c.telefone && <p className="text-slate-500">{c.telefone}</p>}
                    </td>
                    <td className="px-5 py-3.5 tabular-nums">{qtdProjetos(c.id)}</td>
                    <td className="px-5 py-3.5 text-right whitespace-nowrap">
                      <button type="button" className="link-acao" onClick={() => abrir(c)}>
                        Editar
                      </button>
                      <button type="button" className="ml-4 text-sm font-medium text-red-600 hover:text-red-700" onClick={() => remover(c)}>
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

      <Modal titulo={editando ? "Editar cliente" : "Novo cliente"} aberto={aberto} aoFechar={fechar}>
        <form onSubmit={enviar} className="grid gap-4 sm:grid-cols-2">
          <Campo rotulo="Nome *" className="sm:col-span-2">
            <input className="entrada" required autoFocus {...campo("nome")} />
          </Campo>
          <Campo rotulo="Empresa" className="sm:col-span-2">
            <input className="entrada" {...campo("empresa")} />
          </Campo>
          <Campo rotulo="E-mail">
            <input className="entrada" type="email" {...campo("email")} />
          </Campo>
          <Campo rotulo="Telefone">
            <input className="entrada" type="tel" {...campo("telefone")} />
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
