# Dellub Sistema

Sistema interno de gestão — Home, Clientes e Projetos.

Next.js 16 (App Router) + React 19 + Tailwind CSS 4. Projeto independente do site na raiz do repositório.

```bash
cd sistema
npm install
npm run dev   # http://localhost:3001
```

## O que já existe

- **Home** — indicadores (clientes, projetos ativos, concluídos, valor em aberto) e projetos recentes.
- **Clientes** — listar, buscar, criar, editar e excluir. Excluir um cliente remove os projetos dele.
- **Projetos** — listar, filtrar por status e cliente, criar, editar e excluir. Todo projeto pertence a um cliente.

## Dados

Por enquanto os dados ficam no `localStorage` do navegador (`src/lib/store.ts`), sem backend.
Toda leitura e escrita passa pelas funções desse arquivo, então trocar por uma API/banco
depois é uma mudança concentrada ali.
