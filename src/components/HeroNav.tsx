"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavLink = { label: string; href: string };

export default function HeroNav({
  links,
  monograma,
}: {
  links: readonly NavLink[];
  monograma: string;
}) {
  const [aberto, setAberto] = useState(false);

  // Fecha no Esc e trava o scroll do fundo enquanto o menu está aberto.
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", onKey);
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = anterior;
    };
  }, [aberto]);

  return (
    <nav
      aria-label="Navegação principal"
      className="relative z-20 flex items-center justify-between"
    >
      {monograma ? (
        <a
          href="#topo"
          aria-label={`${monograma} — ir para o topo`}
          className="font-display text-sm tracking-tight text-foreground"
        >
          {monograma}
        </a>
      ) : null}

      {/* Desktop */}
      <div className="hidden items-center gap-8 md:flex">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground-dim transition-colors duration-150 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle className="border-l border-hairline pl-8" />
      </div>

      {/* Mobile — antes a navegação simplesmente não existia abaixo de md. */}
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls="menu-mobile"
        // `ml-auto`: sem o monograma, o botão é o único filho visível da nav e
        // o justify-between o deixava colado à esquerda.
        className="-mr-2 ml-auto inline-flex h-11 w-11 items-center justify-center md:hidden"
      >
        <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute left-0 block h-[1.5px] w-5 bg-foreground transition-transform duration-200 ${
              aberto ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 block h-[1.5px] w-5 bg-foreground transition-transform duration-200 ${
              aberto ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      <div
        id="menu-mobile"
        hidden={!aberto}
        // `overflow-y-auto`: com o celular deitado (375px de altura) a lista e
        // o tema passam da tela, e o fundo está travado.
        className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background px-5 pb-10 pt-5 md:hidden"
      >
        <div className="flex items-center justify-between">
          {monograma ? (
            <span className="font-display text-sm tracking-tight text-foreground">
              {monograma}
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setAberto(false)}
            className="-mr-2 ml-auto inline-flex h-11 w-11 items-center justify-center"
          >
            <span className="sr-only">Fechar menu</span>
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span className="absolute left-0 top-1.5 block h-[1.5px] w-5 rotate-45 bg-foreground" />
              <span className="absolute left-0 top-1.5 block h-[1.5px] w-5 -rotate-45 bg-foreground" />
            </span>
          </button>
        </div>

        <ul className="mt-16 flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setAberto(false)}
                className="block py-3 font-display text-3xl uppercase tracking-tight text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-hairline pt-6">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground-dim">
            Tema
          </span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
