export type Cliente = {
  id: string;
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  criadoEm: string;
};

export const STATUS_PROJETO = {
  planejamento: "Planejamento",
  andamento: "Em andamento",
  pausado: "Pausado",
  concluido: "Concluído",
} as const;

export type StatusProjeto = keyof typeof STATUS_PROJETO;

export type Projeto = {
  id: string;
  nome: string;
  clienteId: string;
  status: StatusProjeto;
  prazo: string;
  valor: number;
  descricao: string;
  criadoEm: string;
};
