import { perfil } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-10 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-dim sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>
          &copy; {new Date().getFullYear()} {perfil.nome}
        </p>
        {/* Antes apontava para href="#", que não volta ao topo de forma confiável. */}
        <a
          href="#topo"
          className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-foreground sm:min-h-0"
        >
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
