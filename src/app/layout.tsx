import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { perfil } from "@/data/portfolio";

const montserrat = Montserrat({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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
      className={`${montserrat.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
