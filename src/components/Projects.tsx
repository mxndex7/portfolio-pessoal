import { projetos, projetosEmProducao } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  const slotsRestantes = projetosEmProducao.slice(
    0,
    Math.max(0, 4 - projetos.length),
  );

  return (
    <Section id="projetos" eyebrow="Projetos" titulo="O que eu construí" fade>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.titulo} projeto={projeto} />
        ))}

        {/*
          Slots de produção. A seção já nasce no formato final — quando os
          projetos externos ficarem prontos, entram em `projetos` e os slots
          somem sozinhos.
        */}
        {slotsRestantes.map((slot, i) => (
          <div
            key={`slot-${i}`}
            className="flex min-h-48 flex-col justify-end border border-dashed border-rule p-6"
          >
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-floor">
              {slot.rotulo}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
