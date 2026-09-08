import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { contato, perfil, redesSociais } from "@/data/portfolio";

const iconesRedes: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
};

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80">
        <div className="absolute left-1/4 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-green/8 blur-[120px]" />
        <div className="absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue/8 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 translate-x-1/2 rounded-full bg-brand-yellow/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
        <h2 className="sr-only">Contato</h2>
        <h3 className="mx-auto max-w-xl font-serif text-4xl italic sm:text-5xl">
          {contato.chamada}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          {contato.texto}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${perfil.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-200 hover:border-white/25 hover:bg-white/10 active:scale-[0.97]"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            {perfil.email}
          </a>
          {redesSociais.map((rede) => {
            const Icone = iconesRedes[rede.nome];
            return (
              <a
                key={rede.nome}
                href={rede.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-200 hover:border-white/25 hover:bg-white/10 active:scale-[0.97]"
              >
                {Icone && <Icone className="size-4" />}
                {rede.nome}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
