import Image from "next/image";
import { Check, HardDrive, Wrench, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import {
  dexTweaks,
  resultadosOtimizacao,
  servicos,
  statsOtimizacao,
  type IconeServico,
} from "@/data/portfolio";

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
      <p className="max-w-xl font-serif text-3xl sm:text-4xl">
        Serviços
      </p>

      <div className="mt-12">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
          Resultados reais
        </p>
        <h3 className="mt-2 max-w-xl font-medium text-lg sm:text-xl">
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

      <div className="mt-16">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
          Minha ferramenta
        </p>
        <h3 className="mt-2 max-w-xl font-medium text-xl sm:text-2xl">
          {dexTweaks.nome} — o painel que eu mesmo desenvolvo
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {dexTweaks.descricao}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 truncate font-mono text-xs text-white/40">
                {dexTweaks.arquivo} — Painel principal
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 p-5 sm:p-6">
              {dexTweaks.menu.map((item) => (
                <div key={item.key} className="flex items-baseline gap-2 font-mono text-[13px] text-white/75">
                  <span className="text-brand-green">[{item.key}]</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 px-5 py-3.5 font-mono text-[13px] text-white/50 sm:px-6">
              Escolha uma opção <span className="animate-pulse">_</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {statsOtimizacao.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <p className="font-display text-3xl font-extrabold text-white">{stat.valor}</p>
                <p className="mt-1 text-sm font-medium text-white/85">{stat.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.detalhe}</p>
              </div>
            ))}
            <a
              href={dexTweaks.repositorio}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-200 hover:border-white/25 hover:bg-white/10 active:scale-[0.97]"
            >
              <FaGithub className="size-4" />
              Ver no GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
