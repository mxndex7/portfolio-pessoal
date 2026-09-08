// Edite este arquivo pra ajustar textos, projetos e contato.

export const perfil = {
  nome: "Guilherme Mendes",
  idade: 19,
  titulo: "Desenvolvedor & Técnico de TI",
  heroLinha1: "Do Código à",
  heroLinha2: "Máquina Certa",
  resumo:
    "Transformo ideias em sistemas funcionais e computadores em máquinas otimizadas — da criação de sites à performance da sua máquina.",
  email: "seuemail@exemplo.com",
};

export const heroNav = {
  links: [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],
  primaryCtaLabel: "Ver projetos",
  secondaryCtaLabel: "Fale comigo",
};

export const redesSociais = [
  { nome: "GitHub", url: "https://github.com/seu-usuario" },
  { nome: "LinkedIn", url: "https://linkedin.com/in/seu-usuario" },
  { nome: "Instagram", url: "https://instagram.com/seu-usuario" },
] as const;

export const sobre = {
  texto: `Sou Guilherme Mendes, tenho 19 anos e sou tecnólogo formado em Análise
e Desenvolvimento de Sistemas (ADS). Atualmente estou cursando bacharelado
em Engenharia de Software, aprofundando meus conhecimentos em construção
de sistemas robustos e boas práticas de desenvolvimento.

Do lado prático, atuo tanto no desenvolvimento de software quanto no
suporte e otimização de hardware — uma combinação que me permite entender
o problema de ponta a ponta, do código à máquina que roda ele.`,
};

export type IconeHabilidade =
  | "code"
  | "database"
  | "monitor"
  | "cpu"
  | "wrench"
  | "terminal";

export type Habilidade = {
  titulo: string;
  descricao: string;
  icon: IconeHabilidade;
};

export const habilidades: Habilidade[] = [
  {
    titulo: "Desenvolvimento Web",
    descricao: "React, Next.js, Tailwind CSS",
    icon: "code",
  },
  {
    titulo: "Backend & APIs",
    descricao: "Node.js, PostgreSQL, APIs REST",
    icon: "database",
  },
  {
    titulo: "Sistemas Operacionais",
    descricao: "Windows e Linux configurados sem bloatware",
    icon: "monitor",
  },
  {
    titulo: "Hardware",
    descricao: "Montagem e upgrade de computadores",
    icon: "cpu",
  },
  {
    titulo: "Manutenção",
    descricao: "Diagnóstico e otimização de performance",
    icon: "wrench",
  },
  {
    titulo: "Linguagens",
    descricao: "TypeScript, JavaScript, Python, SQL",
    icon: "terminal",
  },
];

export type Projeto = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem?: string;
  link?: string;
  repositorio?: string;
  destaque?: boolean;
};

// Deixe vazio por enquanto — adicione seus projetos aqui quando estiverem prontos.
export const projetos: Projeto[] = [];

export type ResultadoOtimizacao = {
  jogo: string;
  antes: { imagem: string; fps: number };
  depois: { imagem: string; fps: number };
};

// Prints reais de antes/depois de otimizações feitas — troque ou adicione novos jogos aqui.
export const resultadosOtimizacao: ResultadoOtimizacao[] = [
  {
    jogo: "Red Dead Redemption 2",
    antes: { imagem: "/resultados/rdr2-antes.png", fps: 62 },
    depois: { imagem: "/resultados/rdr2-depois.png", fps: 104 },
  },
  {
    jogo: "Spider-Man 2",
    antes: { imagem: "/resultados/spiderman-antes.png", fps: 54 },
    depois: { imagem: "/resultados/spiderman-depois.png", fps: 114 },
  },
];

export type IconeServico = "hard-drive" | "zap" | "wrench";

export type Servico = {
  titulo: string;
  descricao: string;
  preco: string;
  recursos: string[];
  icon: IconeServico;
};

// Preços como "Sob consulta" — troque pelos seus valores reais quando definir.
export const servicos: Servico[] = [
  {
    titulo: "Sistema Operacional Otimizado",
    descricao:
      "Instalação de uma versão do Windows modificada por mim mesmo, bem mais leve, sem bloatware e com menos processos rodando em segundo plano.",
    preco: "Sob consulta",
    recursos: [
      "Remoção de bloatware e apps pré-instalados",
      "Menos serviços e processos em segundo plano",
      "Ajustes de energia, rede e privacidade",
      "Resumo das modificações incluso",
    ],
    icon: "hard-drive",
  },
  {
    titulo: "Otimização & Overclock",
    descricao:
      "Ajustes na BIOS e overclock seguro pra extrair o máximo de performance do seu PC, com foco em desempenho nos jogos.",
    preco: "Sob consulta",
    recursos: [
      "Ajustes de BIOS",
      "Overclock de CPU/RAM com testes de estabilidade",
      "Ganho de FPS em jogos",
      "Diagnóstico de gargalos de performance",
    ],
    icon: "zap",
  },
  {
    titulo: "Montagem de PC",
    descricao:
      "Montagem organizada e segura da sua máquina, da escolha das peças ao cabeamento final.",
    preco: "Sob consulta",
    recursos: [
      "Escolha de peças compatíveis pro seu orçamento",
      "Montagem organizada e cabeamento limpo",
      "Testes de estabilidade e temperatura",
      "Instalação do sistema incluída",
    ],
    icon: "wrench",
  },
];

export const contato = {
  chamada: "Vamos conversar",
  texto:
    "Precisa de um site, quer otimizar seu computador ou montar uma máquina nova? Me chama.",
};
