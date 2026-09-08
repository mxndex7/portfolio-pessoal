import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Projeto } from "@/data/portfolio";

const acentos = [
  "bg-brand-green glow-green",
  "bg-brand-blue glow-blue",
  "bg-brand-yellow glow-yellow",
];

export default function ProjectCard({
  projeto,
  index = 0,
}: {
  projeto: Projeto;
  index?: number;
}) {
  const acento = acentos[index % acentos.length];

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-white/25">
      <span className={`block h-1 w-full ${acento}`} />
      {projeto.imagem ? (
        <div className="relative aspect-video w-full overflow-hidden bg-white/5">
          <Image
            src={projeto.imagem}
            alt={projeto.titulo}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-gradient-to-br from-white/5 to-white/10" />
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-medium">{projeto.titulo}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {projeto.descricao}
        </p>
        <div className="flex flex-wrap gap-2">
          {projeto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-1 flex gap-5 text-sm">
          {projeto.link && (
            <a
              href={projeto.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
            >
              <ExternalLink className="size-3.5" strokeWidth={1.75} />
              Ver demo
            </a>
          )}
          {projeto.repositorio && (
            <a
              href={projeto.repositorio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground underline-offset-4 hover:underline"
            >
              <FaGithub className="size-3.5" />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
