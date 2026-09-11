import { heroNav, perfil } from "@/data/portfolio";
import HeroNav from "./HeroNav";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-5 pb-7 pt-5 sm:px-8 sm:pb-9 lg:px-10"
    >
      {/*
        改善 — kaizen, melhoria contínua.
        Marca d'água: #101010 sobre #0a0a0a dá 1,04:1. É para ser sentida,
        não lida — por isso aria-hidden e nenhum papel semântico.
        Ajuste o valor em --watermark (globals.css) conforme o seu monitor.

        O tamanho é limitado pela altura também, não só pela largura: só com
        `vw` o kanji fica proporcional no celular e estoura no desktop, cortado
        no meio do glifo. `42svh` segura isso nas telas largas e baixas.
      */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[66%] z-0 -translate-x-1/2 -translate-y-1/2 select-none font-jp leading-none text-watermark"
        style={{ fontSize: "min(44vw, 42svh)" }}
      >
        改善
      </span>

      <div className="relative z-10 flex flex-1 flex-col">
        <HeroNav links={heroNav.links} monograma={perfil.monograma} />

        <div className="wordmark-box reveal mt-4">
          {/* Só o sobrenome. Seis letras cabem em qualquer largura — o nome
              completo está na fileira de meta, abaixo. */}
          <h1 className="wordmark">{perfil.sobrenome}</h1>
        </div>

        {/* O vazio. É o elemento mais importante da composição. */}
        <div className="flex-1" />

        {perfil.posicionamento ? (
          <p className="reveal reveal-2 max-w-[34ch] text-lg font-semibold leading-[1.2] tracking-[-0.01em] text-foreground sm:text-2xl">
            {perfil.posicionamento}
          </p>
        ) : null}

        <ul className="reveal reveal-3 mt-6 flex flex-wrap gap-x-10 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-dim sm:text-xs">
          <li>&copy;{new Date().getFullYear()}</li>
          <li>{perfil.nome}</li>
          <li>{perfil.local}</li>
          <li>{perfil.titulo}</li>
        </ul>
      </div>
    </section>
  );
}
