import Image from "next/image";
import { comoFicariaASua } from "@/data/portfolio";
import Section from "./Section";

export default function ComoFicariaASua() {
  return (
    <Section
      id="criacao-de-sites"
      eyebrow={comoFicariaASua.eyebrow}
      titulo={comoFicariaASua.titulo}
      fade
    >
      <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
        {comoFicariaASua.intro}
      </p>

      <div className="mt-16 flex flex-col gap-16 sm:gap-20">
        {comoFicariaASua.casos.map((caso) => (
          <a
            key={caso.nome}
            href={caso.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-hairline transition-colors duration-150 hover:border-control"
          >
            {/* capa desktop — faixa 2:1, largura inteira */}
            <div className="relative hidden aspect-[2/1] w-full overflow-hidden border-b border-hairline bg-surface sm:block">
              <Image
                src={caso.capa}
                alt={caso.alt}
                fill
                sizes="(min-width: 1152px) 1072px, 100vw"
                className="object-cover object-top"
              />
            </div>

            {/* capa celular — primeira dobra da versão estreita */}
            <div className="relative aspect-[390/560] w-full overflow-hidden border-b border-hairline bg-surface sm:hidden">
              <Image
                src={caso.capaMobile}
                alt={caso.alt}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-12 sm:p-8">
              <div className="flex flex-col gap-2 sm:shrink-0">
                <h3 className="font-display text-xl uppercase leading-tight tracking-[-0.02em] text-foreground sm:text-2xl">
                  {caso.nome}
                </h3>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-dim">
                  {caso.publico}
                </p>
              </div>

              <p className="max-w-[62ch] text-sm leading-relaxed text-foreground-muted sm:text-base">
                {caso.decisao}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
