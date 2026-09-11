import { habilidades, sobre } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  return (
    <Section id="sobre" eyebrow="Sobre" titulo={sobre.titulo}>
      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* A idade aparece uma vez só, dentro do texto. */}
        <p className="whitespace-pre-line text-base leading-[1.75] text-foreground-muted sm:text-lg">
          {sobre.texto}
        </p>

        {/*
          Seis cards para seis frases de três palavras era card demais para
          conteúdo de menos. Vira uma lista com fios: mesma informação, um
          nível de hierarquia a menos disputando atenção.
        */}
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground-dim">
            Ferramentas &amp; áreas
          </p>
          <dl className="mt-6 border-t border-hairline">
            {habilidades.map((habilidade) => (
              <div
                key={habilidade.titulo}
                className="grid grid-cols-1 gap-1 border-b border-hairline py-4 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-6"
              >
                <dt className="text-sm font-semibold text-foreground">
                  {habilidade.titulo}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground-dim">
                  {habilidade.descricao}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
