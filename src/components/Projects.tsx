import { projetos, projetosEmProducao } from "@/data/portfolio";
import DexTweaksCard from "./DexTweaksCard";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projetos" eyebrow="Projetos" titulo="O que eu construí">
      <div className="mt-14 flex flex-col gap-6">
        <DexTweaksCard />

        {projetos.length > 0 || projetosEmProducao.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto) => (
              <ProjectCard key={projeto.titulo} projeto={projeto} />
            ))}

            {/*
              Slots de produção. Substituem os três cards "Projeto em breve" e a
              instrução de desenvolvedor que era renderizada para o visitante.
              A seção já nasce no formato final — quando os projetos externos
              ficarem prontos, entram em `projetos` e os slots somem sozinhos.
            */}
            {projetosEmProducao.map((slot, i) => (
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
        ) : null}
      </div>
    </Section>
  );
}
