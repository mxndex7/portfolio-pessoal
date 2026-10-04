import {
  projetos,
  projetosEmProducao,
  projetosTodos,
  redesSociais,
} from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const github = redesSociais.find((rede) => rede.nome === "GitHub");

export default function Projects() {
  const slotsRestantes = projetosEmProducao.slice(
    0,
    Math.max(0, 4 - projetos.length),
  );

  return (
    <Section id="projetos" eyebrow="Projetos" titulo="O que eu construí">
      <div className="mt-14 flex flex-col gap-16 sm:gap-20">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.titulo} projeto={projeto} />
        ))}

        {/*
          Slots de produção. A seção já nasce no formato final — quando os
          projetos externos ficarem prontos, entram em `projetos` e os slots
          somem sozinhos. Mesma estrutura do card (capa + texto) pra lista
          não pular de altura.
        */}
        {slotsRestantes.map((slot, i) => (
          <div
            key={`slot-${i}`}
            className="grid grid-cols-1 items-start border border-dashed border-rule lg:grid-cols-[3fr_2fr]"
          >
            <div
              aria-hidden="true"
              className="aspect-[16/9] w-full border-b border-dashed border-rule lg:border-b-0 lg:border-r"
            />
            <div className="p-6 sm:p-8 lg:self-center">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-floor">
                {slot.rotulo}
              </span>
            </div>
          </div>
        ))}
      </div>

      {github ? (
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-11 items-center gap-2 text-sm text-foreground-dim underline-offset-4 hover:text-foreground hover:underline"
        >
          {projetosTodos.rotulo}
          <span aria-hidden="true">→</span>
        </a>
      ) : null}
    </Section>
  );
}
