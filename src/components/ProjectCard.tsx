import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Projeto } from "@/data/portfolio";

export default function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <article className="flex flex-col border border-hairline transition-colors duration-150 hover:border-control">
      {projeto.imagem ? (
        <div className="relative aspect-video w-full overflow-hidden border-b border-hairline bg-surface">
          <Image
            src={projeto.imagem}
            alt={`Captura do projeto ${projeto.titulo}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-lg uppercase leading-none tracking-[-0.02em] text-foreground">
          {projeto.titulo}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-foreground-dim">
          {projeto.descricao}
        </p>

        <div className="flex flex-wrap gap-2">
          {projeto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="border border-hairline px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-foreground-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        {projeto.link || projeto.repositorio ? (
          <div className="flex flex-wrap gap-5 border-t border-hairline pt-4 text-sm">
            {projeto.link ? (
              <a
                href={projeto.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-foreground underline-offset-4 hover:underline"
              >
                <ExternalLink aria-hidden="true" className="size-3.5" />
                Ver demo
              </a>
            ) : null}
            {projeto.repositorio ? (
              <a
                href={projeto.repositorio}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-foreground-dim underline-offset-4 hover:text-foreground hover:underline"
              >
                <FaGithub aria-hidden="true" className="size-3.5" />
                Código
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
