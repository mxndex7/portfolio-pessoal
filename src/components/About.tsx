import { Code, Cpu, Database, Monitor, Terminal, Wrench } from "lucide-react";
import { perfil, sobre, habilidades, type IconeHabilidade } from "@/data/portfolio";

const icones: Record<IconeHabilidade, typeof Code> = {
  code: Code,
  database: Database,
  monitor: Monitor,
  cpu: Cpu,
  wrench: Wrench,
  terminal: Terminal,
};

const aneisHover = [
  "hover:border-brand-green/60 hover:shadow-[0_0_28px_-4px_rgba(0,230,118,0.55)]",
  "hover:border-brand-blue/60 hover:shadow-[0_0_28px_-4px_rgba(47,123,255,0.55)]",
  "hover:border-brand-yellow/60 hover:shadow-[0_0_28px_-4px_rgba(255,230,0,0.55)]",
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="sr-only">Sobre mim</h2>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <p className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
            {perfil.nome}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {perfil.idade} anos &middot; {perfil.titulo}
          </p>

          <p className="mt-8 whitespace-pre-line border-l-2 border-white/10 pl-6 text-base leading-relaxed text-white/85">
            {sobre.texto}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
            Ferramentas &amp; áreas
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {habilidades.map((habilidade, i) => {
              const Icone = icones[habilidade.icon];
              const anel = aneisHover[i % aneisHover.length];
              return (
                <div
                  key={habilidade.titulo}
                  className={`group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.04] ${anel}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                    <Icone className="size-5 text-white/80" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-sm font-medium">{habilidade.titulo}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {habilidade.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
