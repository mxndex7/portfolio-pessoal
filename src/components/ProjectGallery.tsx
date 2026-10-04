"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Imagem = { src: string; alt: string };

/**
 * Só existe no DOM enquanto a galeria estiver aberta — o pai monta e
 * desmonta este componente (em vez de passar uma prop `aberta`), o que
 * garante o índice zerado a cada abertura de graça, sem efeito reajustando
 * estado.
 */
export default function ProjectGallery({
  imagens,
  titulo,
  indiceInicial = 0,
  onFechar,
}: {
  imagens: Imagem[];
  titulo: string;
  indiceInicial?: number;
  onFechar: () => void;
}) {
  const [indice, setIndice] = useState(indiceInicial);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    function aoTeclar(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onFechar();
        return;
      }
      if (e.key === "ArrowRight") {
        setIndice((i) => (i + 1) % imagens.length);
      }
      if (e.key === "ArrowLeft") {
        setIndice((i) => (i - 1 + imagens.length) % imagens.length);
      }
      if (e.key === "Tab") {
        const focaveis = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focaveis || focaveis.length === 0) return;
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    }

    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [imagens.length, onFechar]);

  const atual = imagens[indice];
  const temVarias = imagens.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 sm:p-8"
      onClick={onFechar}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Imagens do projeto ${titulo}`}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-4xl flex-col gap-4 outline-none"
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden border border-hairline bg-surface">
          <Image
            key={atual.src}
            src={atual.src}
            alt={atual.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            // Mesmo motivo do ProjectCard: sem recompressão em captura de console.
            unoptimized
            className="object-contain transition-opacity duration-150"
          />

          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar galeria"
            className="absolute right-2 top-2 flex size-11 items-center justify-center border border-control bg-background text-foreground transition-colors duration-150 hover:bg-foreground hover:text-background"
          >
            <X aria-hidden="true" className="size-5" />
          </button>

          {temVarias ? (
            <>
              <button
                type="button"
                onClick={() => setIndice((i) => (i - 1 + imagens.length) % imagens.length)}
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-control bg-background text-foreground transition-colors duration-150 hover:bg-foreground hover:text-background"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setIndice((i) => (i + 1) % imagens.length)}
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-control bg-background text-foreground transition-colors duration-150 hover:bg-foreground hover:text-background"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </>
          ) : null}
        </div>

        <div className="flex items-start justify-between gap-4">
          <p className="text-sm leading-relaxed text-foreground-dim">{atual.alt}</p>
          {temVarias ? (
            <span className="shrink-0 font-mono text-xs tabular-nums text-foreground-dim">
              {indice + 1} / {imagens.length}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
