import Image from "next/image";
import { ganhos, otimizacao, provaOtimizacao, provaVisual } from "@/data/portfolio";
import Section from "./Section";

export default function Otimizacao() {
  const temImagemOtimizacao =
    provaOtimizacao.imagemDesktop !== "" && provaOtimizacao.imagemMobile !== "";
  const estatisticasPreenchidas = provaOtimizacao.estatisticas.filter(
    (estatistica) => estatistica.valor !== "",
  );

  const temProvaVisual =
    provaVisual.antes.imagem !== "" && provaVisual.depois.imagem !== "";

  return (
    <Section id="servicos" eyebrow={otimizacao.eyebrow} titulo={otimizacao.titulo} fade>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
        {otimizacao.intro}
      </p>

      {/*
        Bloco "Windows limpo". Mesma casca visual da capa de "Criação de
        Sites" — desligado até as duas imagens existirem.
      */}
      {temImagemOtimizacao ? (
        <figure className="mt-14 border border-hairline">
          <figcaption className="border-b border-hairline px-6 py-4 font-display text-base uppercase tracking-[-0.01em] text-foreground">
            {provaOtimizacao.titulo}
          </figcaption>

          <div className="relative hidden aspect-[2/1] w-full overflow-hidden bg-surface sm:block">
            <Image
              src={provaOtimizacao.imagemDesktop}
              alt={provaOtimizacao.alt}
              fill
              sizes="(min-width: 1152px) 1072px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-[390/560] w-full overflow-hidden bg-surface sm:hidden">
            <Image
              src={provaOtimizacao.imagemMobile}
              alt={provaOtimizacao.alt}
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>

          {estatisticasPreenchidas.length > 0 ? (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-hairline px-6 py-6 sm:grid-cols-4">
              {estatisticasPreenchidas.map((estatistica) => (
                <div key={estatistica.rotulo}>
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foreground-dim">
                    {estatistica.rotulo}
                  </dt>
                  <dd className="mt-1 font-display text-2xl leading-none tabular-nums text-foreground">
                    {estatistica.valor}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </figure>
      ) : null}

      {/*
        Prova visual em jogos. O slot já está montado — renderiza assim que
        as duas imagens existirem em `provaVisual`. Ver o comentário no
        portfolio.ts para o que a captura precisa ter.
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
                  imagem. O contador do jogo fica no print como comprovante.
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

      {/*
        Três grupos lado a lado, agrupados por VERBO (sai / ajusto / volta) e
        não por produto. Empilhados em linhas, a seção ocupava cerca de três
        vezes esta altura para dizer o mesmo — e cada bloco arrastava uma
        coluna esquerda vazia.

        O título de grupo é mono com fio embaixo: lê como cabeçalho de coluna,
        na mesma língua dos rótulos técnicos do resto da página.
      */}
      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {ganhos.map((grupo) => (
          <div key={grupo.titulo}>
            <h3 className="border-b border-hairline pb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground">
              {grupo.titulo}
            </h3>
            <dl className="mt-6 flex flex-col gap-7">
              {grupo.itens.map((item) => (
                <div key={item.acao}>
                  <dt className="text-[0.95rem] font-semibold leading-snug text-foreground">
                    {item.acao}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-foreground-dim">
                    {item.efeito}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Section>
  );
}
