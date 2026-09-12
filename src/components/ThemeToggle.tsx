"use client";

import { useEffect, useState } from "react";

type Tema = "auto" | "light" | "dark";

const CICLO: Tema[] = ["auto", "light", "dark"];
const ROTULO: Record<Tema, string> = {
  auto: "Auto",
  light: "Claro",
  dark: "Escuro",
};

function aplicar(tema: Tema) {
  const raiz = document.documentElement;
  if (tema === "auto") {
    raiz.removeAttribute("data-theme");
  } else {
    raiz.setAttribute("data-theme", tema);
  }
}

/**
 * Três estados, não dois: Auto respeita a preferência do sistema, que é o que
 * a maioria das pessoas quer sem nunca tocar no controle. Um botão de dois
 * estados ignora o SO e obriga todo mundo a escolher.
 *
 * O rótulo é palavra, não ícone de sol e lua. A nav inteira é texto em
 * caixa-alta pequena — um ícone seria o único da página e denunciaria que veio
 * de fora do sistema.
 */
export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [tema, setTema] = useState<Tema | null>(null);

  useEffect(() => {
    let salvo: Tema = "auto";
    try {
      const v = localStorage.getItem("tema");
      if (v === "light" || v === "dark") salvo = v;
    } catch {
      // localStorage bloqueado (janela anônima, cookies desativados).
      // Fica em auto, que é o comportamento correto mesmo.
    }
    setTema(salvo);
  }, []);

  function proximo() {
    const atual = tema ?? "auto";
    const novo = CICLO[(CICLO.indexOf(atual) + 1) % CICLO.length];
    setTema(novo);
    aplicar(novo);
    try {
      if (novo === "auto") localStorage.removeItem("tema");
      else localStorage.setItem("tema", novo);
    } catch {
      // Sem persistência, mas a troca da sessão atual continua valendo.
    }
  }

  return (
    <button
      type="button"
      onClick={proximo}
      // Só o estado é dinâmico; o nome do controle é estável para leitor de tela.
      aria-label="Alternar tema"
      className={`inline-flex min-h-11 items-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground-dim transition-colors duration-150 hover:text-foreground ${className}`}
    >
      {/*
        Largura mínima fixa: sem isso a nav pula de posição quando o rótulo
        muda de "Auto" para "Escuro". E o texto só aparece depois de montar,
        senão o servidor renderiza um valor e o cliente outro.
      */}
      <span className="inline-block min-w-[4.5ch] text-left">
        {tema ? ROTULO[tema] : " "}
      </span>
    </button>
  );
}
