"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

function greeting(hour: number) {
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

export default function HomePage() {
  const [hello, setHello] = useState("Olá");
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    setHello(greeting(now.getHours()));
    setToday(
      now.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
    );
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-4 py-16 sm:px-6 md:py-24">
      <div className="flex items-center gap-3">
        <Sparkles className="size-7 text-accent" />
        <h1 className="font-serif text-3xl tracking-tight sm:text-4xl">
          {hello}, equipe Dellub
        </h1>
      </div>
      <p className="mt-3 text-muted first-letter:uppercase">
        {today || " "}
      </p>

      <section className="mt-10 rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <h2 className="font-medium">Bem-vindo ao sistema interno</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Este é o ponto de partida da agência. Os próximos módulos vão
          aparecer no menu lateral conforme forem sendo criados.
        </p>
      </section>
    </div>
  );
}
