import { servicos } from "@/data/portfolio";
import Section from "./Section";

export default function Precos() {
  return (
    <Section id="precos" eyebrow="Orçamento" titulo="Quanto custa">
      {/*
        O card faz o trabalho de comparação: nome, descrição, preço, botão.
        Junta os preços de "Plano de Otimização" e "Criação de Sites" num
        lugar só, no fim da página — ver CLAUDE.md.
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
              {servico.resumo}
            </p>

            <ul className="mt-5 flex flex-1 flex-col gap-2.5">
              {servico.pontos.map((ponto) => (
                <li
                  key={ponto}
                  className="flex items-baseline gap-2.5 text-sm leading-snug text-foreground-muted"
                >
                  <span aria-hidden="true" className="text-foreground-floor">
                    •
                  </span>
                  {ponto}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-hairline pt-6">
              {(servico.precoRotulo ?? "A partir de") !== "" ? (
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim">
                  {servico.precoRotulo ?? "A partir de"}
                </p>
              ) : null}
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
    </Section>
  );
}
