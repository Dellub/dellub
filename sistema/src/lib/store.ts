"use client";

import { useSyncExternalStore } from "react";
import type { Cliente, Projeto } from "./types";

type Estado = { clientes: Cliente[]; projetos: Projeto[] };

const CHAVE = "dellub-sistema:v1";
const VAZIO: Estado = { clientes: [], projetos: [] };

let estado: Estado | null = null;
const ouvintes = new Set<() => void>();

function carregar(): Estado {
  if (estado) return estado;
  try {
    const salvo = window.localStorage.getItem(CHAVE);
    estado = salvo ? { ...VAZIO, ...JSON.parse(salvo) } : VAZIO;
  } catch {
    estado = VAZIO;
  }
  return estado!;
}

function salvar(proximo: Estado) {
  estado = proximo;
  try {
    window.localStorage.setItem(CHAVE, JSON.stringify(proximo));
  } catch {
    // Armazenamento indisponível: mantém só em memória.
  }
  ouvintes.forEach((ouvinte) => ouvinte());
}

function assinar(ouvinte: () => void) {
  ouvintes.add(ouvinte);
  const aoMudarOutraAba = (e: StorageEvent) => {
    if (e.key !== CHAVE) return;
    estado = null;
    ouvinte();
  };
  window.addEventListener("storage", aoMudarOutraAba);
  return () => {
    ouvintes.delete(ouvinte);
    window.removeEventListener("storage", aoMudarOutraAba);
  };
}

export function useDados(): Estado {
  return useSyncExternalStore(assinar, carregar, () => VAZIO);
}

const novoId = () => crypto.randomUUID();
const agora = () => new Date().toISOString();

export function salvarCliente(dados: Omit<Cliente, "id" | "criadoEm">, id?: string) {
  const atual = carregar();
  const clientes = id
    ? atual.clientes.map((c) => (c.id === id ? { ...c, ...dados } : c))
    : [...atual.clientes, { ...dados, id: novoId(), criadoEm: agora() }];
  salvar({ ...atual, clientes });
}

export function excluirCliente(id: string) {
  const atual = carregar();
  salvar({
    clientes: atual.clientes.filter((c) => c.id !== id),
    projetos: atual.projetos.filter((p) => p.clienteId !== id),
  });
}

export function salvarProjeto(dados: Omit<Projeto, "id" | "criadoEm">, id?: string) {
  const atual = carregar();
  const projetos = id
    ? atual.projetos.map((p) => (p.id === id ? { ...p, ...dados } : p))
    : [...atual.projetos, { ...dados, id: novoId(), criadoEm: agora() }];
  salvar({ ...atual, projetos });
}

export function excluirProjeto(id: string) {
  const atual = carregar();
  salvar({ ...atual, projetos: atual.projetos.filter((p) => p.id !== id) });
}

export const formatarMoeda = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const formatarData = (iso: string) =>
  iso ? new Date(`${iso.slice(0, 10)}T12:00:00`).toLocaleDateString("pt-BR") : "—";
