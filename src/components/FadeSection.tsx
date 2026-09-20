"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Fade in ao entrar na viewport, fade out ao sair — nas duas direções do
 * scroll. Sem flag "once": se o bloco some rolando pra cima, volta a
 * opacity 0 e refaz o fade ao reentrar. Ver CLAUDE.md, "Movimento".
 */
export default function FadeSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisivel(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "-5% 0px -5% 0px" },
    );

    observer.observe(elemento);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-section ${visivel ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}
