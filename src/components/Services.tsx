import Image from "next/image";
import { Check, HardDrive, Wrench, Zap } from "lucide-react";
import { resultadosOtimizacao, servicos, type IconeServico } from "@/data/portfolio";

const icones: Record<IconeServico, typeof HardDrive> = {
  "hard-drive": HardDrive,
  zap: Zap,
  wrench: Wrench,
};

const barras = [
  "bg-brand-green glow-green",
  "bg-brand-blue glow-blue",
  "bg-brand-yellow glow-yellow",
];

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="sr-only">Serviços</h2>
      <p className="max-w-xl font-serif text-3xl italic sm:text-4xl">
        Serviços
      </p>

      <div className="mt-12">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
          Resultados reais
        </p>
        <h3 className="mt-2 max-w-xl font-medium text-xl sm:text-2xl">
          Antes e depois das otimizações que eu mesmo fiz
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-8">
          {resultadosOtimizacao.map((resultado) => {
            const ganho = resultado.depois.fps - resultado.antes.fps;
            return (
              <div
                key={resultado.jogo}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
              >
                <p className="text-lg font-medium text-white/90">{resultado.jogo}</p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5">
                      <Image
                        src={resultado.antes.imagem}
                        alt={`${resultado.jogo} antes da otimização — ${resultado.antes.fps} FPS`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3.5 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
                        Antes · {resultado.antes.fps} FPS
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5">
                      <Image
                        src={resultado.depois.imagem}
                        alt={`${resultado.jogo} depois da otimização — ${resultado.depois.fps} FPS`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-brand-green/90 px-3.5 py-1.5 text-sm font-medium text-black">
                        Depois · {resultado.depois.fps} FPS
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-muted-foreground">
                  Ganho de <span className="font-medium text-white/90">+{ganho} FPS</span> após a otimização
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {servicos.map((servico, i) => {
          const Icone = icones[servico.icon];
          return (
            <div
              key={servico.titulo}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.04]"
            >
              <span className={`block h-1 w-full ${barras[i % barras.length]}`} />
              <div className="flex flex-1 flex-col p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                  <Icone className="size-5 text-white/80" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-medium">{servico.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {servico.descricao}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {servico.recursos.map((recurso) => (
                    <li key={recurso} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-white/50" strokeWidth={1.75} />
                      {recurso}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                    Investimento
                  </p>
                  <p className="mt-1 font-display text-2xl font-extrabold">
                    {servico.preco}
                  </p>
                  <a
                    href="#contato"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-200 hover:border-white/25 hover:bg-white/10 active:scale-[0.97]"
                  >
                    Solicitar orçamento
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
