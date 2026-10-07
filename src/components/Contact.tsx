import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { contato, perfil, redesSociais } from "@/data/portfolio";

const iconesRedes: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

// E-mail e WhatsApp: mesmo peso visual, lado a lado a partir de `sm`.
// `whitespace-nowrap` impede o número de quebrar nos espaços.
const classeCanal =
  "inline-flex min-h-11 items-center gap-3 whitespace-nowrap border-b border-control pb-2 text-lg font-semibold text-foreground transition-colors duration-150 hover:border-foreground sm:text-2xl";

/**
 * Não usa <Section> de propósito: é a última seção antes do rodapé e ganha um
 * ritmo próprio, maior, para fechar a página.
 *
 * Os blobs `blur-[120px]` coloridos que existiam aqui saíram junto com a
 * paleta antiga.
 */
export default function Contact() {
  return (
    <section id="contato" className="border-t border-rule">
      <div className="mx-auto w-full max-w-6xl px-5 py-28 sm:px-8 sm:py-40 lg:px-10 lg:py-52">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground-dim">
          Contato
        </p>
        {/* `min(…, 10vw)`: em 320px, "RESOLVIDO?" a 36px passava 9px da margem. */}
        <h2 className="mt-4 max-w-3xl font-display text-[length:min(2.25rem,10vw)] uppercase leading-[0.92] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
          {contato.chamada}
        </h2>
        <p className="mt-7 max-w-lg text-base leading-relaxed text-foreground-muted sm:text-lg">
          {contato.texto}
        </p>

        <div className="mt-12 flex flex-col items-start gap-y-3 sm:flex-row sm:flex-wrap sm:gap-x-10">
          <a href={`mailto:${perfil.email}`} className={classeCanal}>
            <Mail aria-hidden="true" className="size-5 shrink-0" />
            {perfil.email}
          </a>
          <a
            href={`https://wa.me/${perfil.whatsapp.numero}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conversar no WhatsApp: ${perfil.whatsapp.exibido}`}
            className={classeCanal}
          >
            <FaWhatsapp aria-hidden="true" className="size-5 shrink-0" />
            {perfil.whatsapp.exibido}
          </a>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-8">
          {redesSociais.map((rede) => {
            const Icone = iconesRedes[rede.nome];
            return (
              <li key={rede.nome}>
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground-dim transition-colors duration-150 hover:text-foreground"
                >
                  {Icone ? <Icone aria-hidden="true" className="size-4" /> : null}
                  {rede.nome}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
