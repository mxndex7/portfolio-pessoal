"use client";

import { useEffect, useState } from "react";

type Tema = "dark" | "light";

const ROTULO: Record<Tema, string> = {
  dark: "Escuro",
  light: "Claro",
};

function temaAtual(): Tema {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

/**
 * Dois estados. Escuro é o padrão para todo visitante, independente do SO;
 * claro só entra por escolha explícita, que fica salva.
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
    // O script do <head> já aplicou o tema salvo; aqui só lê o resultado.
    // Existem dois controles (nav desktop e menu mobile): o observer mantém
    // os dois rótulos em dia quando qualquer um deles troca o tema.
    const raiz = document.documentElement;
    const ler = () => setTema(temaAtual());
    ler();
    const observer = new MutationObserver(ler);
    observer.observe(raiz, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  function alternar() {
    const novo: Tema = temaAtual() === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", novo);
    try {
      localStorage.setItem("tema", novo);
    } catch {
      // Sem persistência, mas a troca da sessão atual continua valendo.
    }
  }

  return (
    <button
      type="button"
      onClick={alternar}
      // Só o estado é dinâmico; o nome do controle é estável para leitor de tela.
      aria-label="Alternar tema"
      className={`inline-flex min-h-11 items-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground-dim transition-colors duration-150 hover:text-foreground ${className}`}
    >
      {/*
        Largura mínima fixa: sem isso a nav pula de posição quando o rótulo
        muda de "Claro" para "Escuro". E o texto só aparece depois de montar,
        senão o servidor renderiza um valor e o cliente outro.
      */}
      <span className="inline-block min-w-[8ch] text-left">
        {tema ? ROTULO[tema] : " "}
      </span>
    </button>
  );
}
