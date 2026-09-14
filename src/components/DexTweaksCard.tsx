import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { dexTweaks, statsOtimizacao } from "@/data/portfolio";

/**
 * Destaque de Projetos. Migrou de Serviços — é a peça mais convincente da
 * página e estava enterrada três seções abaixo.
 *
 * Ocupa a primeira posição sem definir a seção: é o primeiro projeto, não o
 * conteúdo dela.
 */
export default function DexTweaksCard() {
  return (
    <article className="border border-hairline">
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]">
        {/*
          Captura real do painel, não mock recriado em HTML. Proporção nativa
          (~2,02:1) mantida sem recorte — real sem cortar informação vale mais
          que padronizado. Cores remapeadas para os tokens --terminal-* na
          origem do arquivo (public/casos/dex-tweaks-capa.webp), não aqui.
        */}
        <div className="relative aspect-[519/257] w-full overflow-hidden border-b border-hairline bg-terminal lg:border-b-0 lg:border-r">
          <Image
            src="/casos/dex-tweaks-capa.webp"
            alt="Captura real do Dex Tweaks: painel principal em modo texto, com o menu numerado de perfis, otimizações, hardware e backup."
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-contain"
          />
        </div>

        {/* Texto e números */}
        <div className="flex flex-col p-6 sm:p-8">
          <h3 className="font-display text-2xl uppercase leading-none tracking-[-0.02em] text-foreground">
            {dexTweaks.nome}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground-dim">
            {dexTweaks.descricao}
          </p>
          <p className="mt-3 border-l border-rule pl-4 text-sm leading-relaxed text-foreground-dim">
            {dexTweaks.metodologia}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-hairline pt-6">
            {statsOtimizacao.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl leading-none tracking-[-0.02em] text-foreground">
                    {stat.valor}
                  </span>
                  <span className="mt-2 block text-xs font-semibold text-foreground-muted">
                    {stat.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-foreground-dim">
                    {stat.detalhe}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-2">
            {dexTweaks.tecnologias.map((tech) => (
              <span
                key={tech}
                className="border border-hairline px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-foreground-dim"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={dexTweaks.repositorio}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start border border-control px-5 text-sm font-semibold text-foreground transition-colors duration-150 hover:bg-foreground hover:text-background"
          >
            <FaGithub aria-hidden="true" className="size-4" />
            Ver no GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
