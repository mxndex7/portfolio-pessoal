import type { ReactNode } from "react";
import FadeSection from "./FadeSection";

/**
 * Casca comum das seções.
 *
 * Existe por três motivos:
 *  - O título visível É o <h2>. Antes cada seção tinha um <h2 class="sr-only">
 *    invisível e um <p> fazendo o papel visual — leitor de tela recebia um
 *    cabeçalho que ninguém via e o Google não encontrava nenhum h2.
 *  - O ritmo vertical passa a ser decidido aqui, em dois tamanhos, em vez de
 *    `py-16 sm:py-20` repetido igual em todas.
 *  - `fade`, quando ligado, trata heading + conteúdo como um bloco só que
 *    faz fade in/out reversível no scroll — ver CLAUDE.md, "Movimento".
 */
export default function Section({
  id,
  eyebrow,
  titulo,
  tamanho = "normal",
  fade = false,
  children,
}: {
  id: string;
  eyebrow: string;
  titulo: string;
  tamanho?: "normal" | "amplo";
  fade?: boolean;
  children: ReactNode;
}) {
  const conteudo = (
    <>
      <header>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground-dim">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-[-0.03em] text-foreground sm:text-5xl">
          {titulo}
        </h2>
      </header>
      {children}
    </>
  );

  return (
    <section id={id} className="border-t border-rule">
      <div
        className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 ${
          tamanho === "amplo"
            ? "py-28 sm:py-40 lg:py-52"
            : "py-20 sm:py-28 lg:py-36"
        }`}
      >
        {fade ? <FadeSection>{conteudo}</FadeSection> : conteudo}
      </div>
    </section>
  );
}
