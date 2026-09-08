import Hero15 from "@/components/hero15";
import { perfil, heroNav } from "@/data/portfolio";

export default function Hero() {
  return (
    <Hero15
      navLinks={heroNav.links}
      headingLine1={perfil.heroLinha1}
      headingLine2={perfil.heroLinha2}
      description={perfil.resumo}
      primaryCtaLabel={heroNav.primaryCtaLabel}
      primaryCtaHref="#projetos"
      secondaryCtaLabel={heroNav.secondaryCtaLabel}
      secondaryCtaHref="#contato"
    />
  );
}
