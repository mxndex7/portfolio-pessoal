import Image from "next/image";
import { Check } from "lucide-react";
import {
  ganhos,
  medicaoRepouso,
  provaVisual,
  servicos,
} from "@/data/portfolio";
import Section from "./Section";

export default function Services() {
  const temProvaVisual =
    provaVisual.antes.imagem !== "" && provaVisual.depois.imagem !== "";

  return (
    <Section id="servicos" eyebrow="Serviços" titulo="O que eu resolvo">
      {/*
        Cards antes da prova. Antes a seção abria com gráficos de FPS, ou seja,
        mostrava a evidência antes de dizer o que estava sendo oferecido.
      */}
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {servicos.map((servico) => (
          <article
            key={servico.titulo}
            className="flex flex-col border border-hairline p-7 transition-colors duration-150 hover:border-control"
          >
            <h3 className="font-display text-lg uppercase leading-tight tracking-[-0.02em] text-foreground">
              {servico.titulo}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground-dim">
              {servico.descricao}
            </p>

            <ul className="mt-7 flex-1 space-y-3 border-t border-hairline pt-6">
              {servico.recursos.map((recurso) => (
                <li
                  key={recurso}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground-dim"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-foreground-floor"
                    strokeWidth={2}
                  />
                  {recurso}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-hairline pt-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim">
                A partir de
              </p>
              <p className="mt-2 font-display text-2xl uppercase tracking-[-0.02em] text-foreground">
                {servico.preco}
              </p>
              {servico.precoNota ? (
                <p className="mt-1 text-xs text-foreground-dim">
                  {servico.precoNota}
                </p>
              ) : null}
              <a
                href="#contato"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center border border-control px-5 text-sm font-semibold text-foreground transition-colors duration-150 hover:bg-foreground hover:text-background"
              >
                Pedir orçamento
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* O que você ganha — ação de um lado, efeito do outro. */}
      <div className="mt-24 border-t border-rule pt-16">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground-dim">
          {ganhos.eyebrow}
        </p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl uppercase leading-[0.95] tracking-[-0.03em] text-foreground sm:text-4xl">
          {ganhos.titulo}
        </h3>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
          {ganhos.intro}
        </p>

        {medicaoRepouso.antes ? (
          <div className="mt-12 flex flex-col gap-6 border border-hairline p-7 sm:flex-row sm:items-end sm:justify-between sm:p-9">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim">
                {medicaoRepouso.rotulo}
              </p>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-foreground-dim">
                {medicaoRepouso.nota}
              </p>
            </div>
            <div className="flex shrink-0 items-end gap-5 sm:gap-8">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foreground-dim">
                  Antes
                </p>
                <p className="mt-1 font-display text-3xl leading-none tabular-nums text-foreground-dim sm:text-4xl">
                  {medicaoRepouso.antes}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="pb-2 font-display text-2xl leading-none text-foreground-floor"
              >
                →
              </span>
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foreground-dim">
                  Depois
                </p>
                <p className="mt-1 font-display text-3xl leading-none tabular-nums text-foreground sm:text-4xl">
                  {medicaoRepouso.depois}
                </p>
                <p className="mt-1 font-mono text-[0.6rem] text-foreground-dim">
                  de {medicaoRepouso.total}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {/*
          Prova visual. O slot já está montado — renderiza assim que as duas
          imagens existirem em `provaVisual`. Ver o comentário no portfolio.ts
          para o que a captura precisa ter.
        */}
        {temProvaVisual ? (
          <figure className="mt-6 border border-hairline">
            <figcaption className="flex flex-wrap items-baseline justify-between gap-3 border-b border-hairline px-6 py-4">
              <span className="font-display text-base uppercase tracking-[-0.01em] text-foreground">
                {provaVisual.jogo}
              </span>
              {provaVisual.cena ? (
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-foreground-dim">
                  {provaVisual.cena}
                </span>
              ) : null}
            </figcaption>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {(
                [
                  ["Antes", provaVisual.antes],
                  ["Depois", provaVisual.depois],
                ] as const
              ).map(([rotulo, dados], i) => (
                <div
                  key={rotulo}
                  className={
                    i === 0
                      ? "border-b border-hairline sm:border-b-0 sm:border-r"
                      : ""
                  }
                >
                  {/*
                    O número vive na interface, em tipo grande — não dentro da
                    imagem. É por isso que a lupa não precisa existir: o
                    contador do jogo fica no print como comprovante, e a
                    leitura fica aqui, no tamanho que a gente quiser.
                  */}
                  <div className="flex items-end justify-between gap-4 px-6 pt-5">
                    <span className="pb-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground-dim">
                      {rotulo}
                    </span>
                    <span className="font-display text-4xl leading-none tabular-nums text-foreground">
                      {dados.fps}
                      <span className="ml-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-foreground-dim">
                        FPS
                      </span>
                    </span>
                  </div>
                  <div className="relative m-6 aspect-video overflow-hidden bg-surface">
                    <Image
                      src={dados.imagem}
                      alt={`${provaVisual.jogo}, ${rotulo.toLowerCase()} da otimização — ${dados.fps} FPS`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </figure>
        ) : null}

        <div className="mt-14 flex flex-col gap-14">
          {ganhos.blocos.map((bloco) => (
            <div
              key={bloco.titulo}
              className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16"
            >
              <div>
                <h4 className="font-display text-xl uppercase leading-tight tracking-[-0.02em] text-foreground">
                  {bloco.titulo}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground-dim">
                  {bloco.resumo}
                </p>
              </div>

              {/* Ação à esquerda (verificável), efeito à direita (o que se sente). */}
              <dl className="border-t border-hairline">
                {bloco.itens.map((item) => (
                  <div
                    key={item.acao}
                    className="grid grid-cols-1 gap-2 border-b border-hairline py-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8"
                  >
                    <dt className="text-sm font-semibold leading-snug text-foreground">
                      {item.acao}
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground-dim">
                      {item.efeito}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
