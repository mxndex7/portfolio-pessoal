import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { perfil } from "@/data/portfolio";

/*
  Uma família só, dois eixos.

  O Archivo é variável e tem eixo de largura (wdth, 62 a 125). Pedindo o eixo
  aqui, o display deixa de precisar do Archivo Black: vira o mesmo Archivo em
  peso 900 e largura 125 — literalmente "a mesma fonte, esticada".

  `axes` exige fonte variável, então não se passa `weight` junto: vem a faixa
  inteira de pesos.
*/
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
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
      className={`${archivo.variable} h-full`}
      // O script acima mexe no data-theme antes da hidratação, então o HTML do
      // servidor e o do cliente divergem de propósito.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
        {/*
          Noto Sans JP só para os dois glifos de 改善 (U+6539 U+5584).
          O parâmetro `text` devolve um arquivo de poucos KB em vez da
          família inteira, que passa de 4 MB. next/font não aceita esse
          parâmetro, por isso o link é manual.
        */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&text=%E6%94%B9%E5%96%84&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
