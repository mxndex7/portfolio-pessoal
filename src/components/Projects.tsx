import { FolderGit2 } from "lucide-react";
import { projetos } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const acentos = [
  "bg-brand-green glow-green",
  "bg-brand-blue glow-blue",
  "bg-brand-yellow glow-yellow",
];

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="sr-only">Projetos</h2>
      <p className="max-w-xl font-serif text-3xl italic sm:text-4xl">
        O que venho construindo
      </p>

      {projetos.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projetos.map((projeto, i) => (
            <ProjectCard key={projeto.titulo} projeto={projeto} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {acentos.map((dot, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <FolderGit2 className="size-6 text-white/70" strokeWidth={1.75} />
              </div>
              <p className="text-sm text-muted-foreground">Projeto em breve</p>
              <span className={`h-1 w-6 rounded-full ${dot}`} />
            </div>
          ))}
        </div>
      )}

      {projetos.length === 0 && (
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Adicione seus projetos em{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5">
            src/data/portfolio.ts
          </code>
        </p>
      )}
    </section>
  );
}
