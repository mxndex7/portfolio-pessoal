import type { Metadata } from "next";
import { Archivo, Domine } from "next/font/google";
import "./globals.css";
import { perfil } from "@/data/portfolio";

const archivo = Archivo({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${perfil.nome} — ${perfil.titulo}`,
  description: perfil.resumo,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${domine.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
