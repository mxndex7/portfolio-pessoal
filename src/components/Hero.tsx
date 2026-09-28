import { heroNav, perfil } from "@/data/portfolio";
import HeroNav from "./HeroNav";

export default function Hero() {
  return (
    /*
      Abaixo de md a altura também é limitada pela largura. MENDES e o kanji
      escalam em cqw; se só a viewport mandasse, o vão do meio cresceria quanto
      mais estreita a tela (416px em 390×830). 130vw deixa o vão perto da
      proporção do desktop (~15–20% da altura do hero contra ~13%).
      No desktop 130vw é sempre maior que a altura, então nada muda.
    */
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-5 pb-7 pt-5 max-md:min-h-[min(100svh,130vw)] sm:px-8 sm:pb-9 lg:px-10"
    >
      <div className="relative z-10 flex flex-1 flex-col">
        <HeroNav links={heroNav.links} monograma={perfil.monograma} />

        <div className="wordmark-box reveal mt-4">
          {/*
            改善 — kaizen, melhoria contínua. Marca d'água: é para ser sentida,
            não lida, por isso aria-hidden e nenhum papel semântico.

            Mora DENTRO do wordmark-box de propósito: a distância até o nome é
            medida a partir do rodapé dele, então fica igual em qualquer tela.
            Regras de tamanho e posição em `.kanji-mark`, no globals.css.
          */}
          <span aria-hidden="true" className="kanji-mark">
            改善
          </span>

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
