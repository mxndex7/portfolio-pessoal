import Image from "next/image";
import { Check } from "lucide-react";
import { provaOtimizacao, resultadosOtimizacao, servicos } from "@/data/portfolio";
import Section from "./Section";

export default function Services() {
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

      {/* A prova, depois da oferta. */}
      <div className="mt-20 border-t border-rule pt-14">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground-dim">
          {provaOtimizacao.eyebrow}
        </p>
        <h3 className="mt-3 max-w-xl font-display text-2xl uppercase leading-[0.95] tracking-[-0.02em] text-foreground sm:text-3xl">
          {provaOtimizacao.titulo}
        </h3>

        <div className="mt-10 flex flex-col gap-8">
          {resultadosOtimizacao.map((resultado) => {
            const ganho = resultado.depois.fps - resultado.antes.fps;
            return (
              <figure key={resultado.jogo} className="border border-hairline">
                <figcaption className="flex flex-wrap items-baseline justify-between gap-3 border-b border-hairline px-6 py-4">
                  <span className="font-display text-base uppercase tracking-[-0.01em] text-foreground">
                    {resultado.jogo}
                    {resultado.cena ? (
                      <span className="ml-3 font-sans text-xs font-normal normal-case tracking-normal text-foreground-dim">
                        {resultado.cena}
                      </span>
                    ) : null}
                  </span>
                  <span className="font-mono text-sm tabular-nums text-foreground-muted">
                    {resultado.antes.fps} → {resultado.depois.fps} FPS
                    <span className="ml-3 text-foreground">+{ganho}</span>
                  </span>
                </figcaption>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {(
                    [
                      ["Antes", resultado.antes],
                      ["Depois", resultado.depois],
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
                        O número vive na interface, em tipo grande — não dentro
                        da imagem. É por isso que a lupa não precisa existir: o
                        contador do jogo continua no print como comprovante, e
                        a leitura fica aqui, no tamanho que a gente quiser.
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
                          alt={`${resultado.jogo} ${rotulo.toLowerCase()} da otimização — ${dados.fps} FPS`}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
