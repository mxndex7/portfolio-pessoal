import { perfil } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-green via-brand-blue to-brand-yellow opacity-[0.08] blur-2xl"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {perfil.nome}. Todos os direitos reservados.
        </p>
        <a href="#" className="transition-colors hover:text-foreground">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
