import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { perfil } from "@/data/portfolio";

/*
  Uma família só, dois eixos.

  O Archivo é variável e tem eixo de largura (wdth, 62 a 125). O display não
  precisa do Archivo Black: é o mesmo Archivo em peso 900 e largura 125 —
  literalmente "a mesma fonte, esticada".

  As fontes moram em ./fonts e não dependem de rede em momento nenhum.
  O font-stretch precisa ser declarado: sem a faixa no @font-face, o
  navegador trava a largura em 100% e a face esticada nunca aparece.
*/
const archivo = localFont({
  src: "./fonts/archivo-latin-variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  style: "normal",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  display: "swap",
});

/*
  Noto Sans JP 900 só com os dois glifos de 改善 (U+6539 U+5584): 1,3 KB em
  vez da família inteira, que passa de 4 MB.
*/
const notoJp = localFont({
  src: "./fonts/noto-sans-jp-900-kaizen.woff2",
  variable: "--font-noto-jp",
  weight: "900",
  style: "normal",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: `${perfil.nome} — ${perfil.titulo}`,
  description: perfil.resumo,
};

/*
  Roda antes da primeira pintura, de forma bloqueante. Sem isso a página
  pinta no tema errado e vira pro escolhido só depois que o React hidrata —
  num design de 19:1 de contraste esse flash é violento.

  Precisa ser inline. Um script externo (ou um useEffect) já chega tarde.
*/
const scriptTema = `(function(){try{var t=localStorage.getItem('tema');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${notoJp.variable} h-full`}
      // O script acima mexe no data-theme antes da hidratação, então o HTML do
      // servidor e o do cliente divergem de propósito.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
