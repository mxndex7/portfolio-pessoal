// Edite este arquivo pra ajustar textos, projetos e contato.

export const perfil = {
  nome: "Guilherme Mendes",
  // O hero usa só o sobrenome. Seis letras cabem em qualquer largura.
  sobrenome: "Mendes",
  monograma: "GM",
  titulo: "Desenvolvedor & Técnico de TI",
  local: "Recife — PE",
  // Usado na metadata da página (título da aba e descrição no Google).
  resumo:
    "Desenvolvedor e técnico de TI em Recife. Sistemas web, otimização de Windows e montagem de máquinas.",
  // Linha embaixo do MENDES.
  posicionamento: "Do primeiro commit ao último serviço desativado.",
  email: "mendex.dev@gmail.com",
};

export const heroNav = {
  links: [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

export const redesSociais = [
  { nome: "GitHub", url: "https://github.com/mxndex7" },
  { nome: "LinkedIn", url: "https://www.linkedin.com/in/guilhermemendes7/" },
] as const;

export const sobre = {
  titulo: "As duas pontas",
  texto: `Tecnólogo em Análise e Desenvolvimento de Sistemas, cursando bacharelado
em Engenharia de Software. 19 anos, Recife.

Escrevo o software e mexo na máquina que roda ele. São duas rotinas diferentes
— uma termina em deploy, a outra em benchmark — mas o trabalho é o mesmo:
achar o que está no caminho e tirar.`,
};

export type Habilidade = {
  titulo: string;
  descricao: string;
};

export const habilidades: Habilidade[] = [
  { titulo: "Desenvolvimento Web", descricao: "React, Next.js, Tailwind CSS" },
  { titulo: "Backend & APIs", descricao: "Node.js, PostgreSQL, APIs REST" },
  {
    titulo: "Sistemas Operacionais",
    descricao: "Windows e Linux configurados sem bloatware",
  },
  { titulo: "Hardware", descricao: "Montagem e upgrade de computadores" },
  { titulo: "Manutenção", descricao: "Diagnóstico e otimização de performance" },
  { titulo: "Linguagens", descricao: "TypeScript, JavaScript, Python, SQL" },
];

export type Projeto = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem?: string;
  link?: string;
  repositorio?: string;
};

// Projetos externos entram aqui conforme forem ficando prontos.
// O Dex Tweaks é renderizado separado, como destaque da seção.
export const projetos: Projeto[] = [];

// Slots de produção. Com o Dex Tweaks no destaque, três slots fecham a grade
// de quatro. Cada projeto que entrar em `projetos` toma o lugar de um slot.
export const projetosEmProducao = [
  { rotulo: "Em produção" },
  { rotulo: "Em produção" },
  { rotulo: "Em produção" },
];

export type DexTweaksMenuItem = { key: string; label: string };

export const dexTweaks = {
  nome: "Dex Tweaks",
  arquivo: "Dex-Tweeks.bat",
  descricao:
    "Painel administrativo em Batch para Windows 10 e 11, num arquivo só, sem instalação. Seis perfis prontos — Safe, Balanced, Competitive, Streaming, Laptop e Privacy — mais ajustes de CPU, GPU, rede, memória, serviços e privacidade.",
  metodologia:
    "Toda alteração passa por prévia, snapshot e verificação antes de ser gravada. BCD e Defender ficam atrás de um Modo Especialista, com confirmação extra.",
  repositorio: "https://github.com/mxndex7/Dex-Tweeks",
  tecnologias: ["Batch", "PowerShell", "Windows 10/11"],
  menu: [
    { key: "1", label: "Dashboard" },
    { key: "2", label: "Profiles" },
    { key: "3", label: "Optimizations" },
    { key: "4", label: "Hardware" },
    { key: "5", label: "Windows" },
    { key: "6", label: "Privacy" },
    { key: "7", label: "Advanced" },
    { key: "8", label: "Change Center" },
    { key: "9", label: "Backup / Restore" },
    { key: "A", label: "System Health" },
    { key: "B", label: "Benchmark" },
    { key: "C", label: "Global Search" },
    { key: "D", label: "History" },
    { key: "E", label: "Restart Center" },
  ] satisfies DexTweaksMenuItem[],
};

export type StatOtimizacao = { valor: string; label: string; detalhe: string };

// Números reais medidos numa instalação feita com o autounattend.xml + Dex Tweaks.
export const statsOtimizacao: StatOtimizacao[] = [
  {
    valor: "16%",
    label: "de RAM em repouso",
    detalhe: "2,6 GB de 15,9 GB em uso logo após a instalação, sem nada aberto",
  },
  {
    valor: "40+",
    label: "itens removidos na instalação",
    detalhe:
      "Copilot, Cortana, Xbox, Teams, OneDrive e outros apps de fábrica, fora",
  },
];

export type ResultadoOtimizacao = {
  jogo: string;
  // Descreve a cena capturada. Com a mesma cena nos dois lados, o par vira
  // prova; com cenas diferentes, vira só duas capturas.
  cena?: string;
  antes: { imagem: string; fps: number };
  depois: { imagem: string; fps: number };
};

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

export const provaOtimizacao = {
  eyebrow: "Resultados reais",
  titulo: "Mesma máquina, mesmo jogo, antes e depois",
};

export type Servico = {
  titulo: string;
  descricao: string;
  preco: string;
  precoNota?: string;
  recursos: string[];
};

/*
  Preços como âncora ("a partir de"), não como tabela fechada.
  Referência de mercado 2026: formatação + Windows + drivers fica em
  R$ 100–200 e limpeza + otimização em R$ 150–300, com teto de mercado
  perto de R$ 600. O que sai dessa faixa é o Dex Tweaks e a instalação
  desassistida própria — ninguém mais entrega isso por R$ 150.
*/
export const servicos: Servico[] = [
  {
    titulo: "Sistema Operacional Otimizado",
    descricao:
      "Instalação desassistida de Windows 10/11 que eu mesmo configurei, mais o Dex Tweaks aplicado por perfil. A máquina sai leve, previsível e sem telemetria — e com ponto de restauração antes de qualquer ajuste.",
    preco: "R$ 280",
    recursos: [
      "Instalação desassistida: Chrome como padrão, Edge removido de verdade",
      "Mais de 40 apps e serviços de fábrica fora (Copilot, Cortana, Xbox, Teams...)",
      "Telemetria, indexação e hibernação desativadas desde o primeiro boot",
      "Perfil do Dex Tweaks escolhido pelo uso da máquina",
      "Snapshot e ponto de restauração antes de gravar qualquer alteração",
    ],
  },
  {
    titulo: "Otimização & Overclock",
    descricao:
      "Ajuste de BIOS e overclock de CPU e memória, com teste de estabilidade antes de entregar. Benchmark antes e depois, pra você ver o que mudou em número.",
    preco: "R$ 180",
    recursos: [
      "Ajustes de BIOS e curva de energia",
      "Overclock de CPU/RAM com teste de estabilidade",
      "Benchmark antes e depois, registrado",
      "Diagnóstico de gargalo: onde a máquina está presa e por quê",
    ],
  },
  {
    titulo: "Montagem de PC",
    descricao:
      "Montagem da máquina, da escolha das peças ao cabeamento. Inclui a instalação do sistema já otimizado.",
    preco: "R$ 200",
    precoNota: "Mão de obra. Peças à parte.",
    recursos: [
      "Escolha de peças compatíveis pro seu orçamento",
      "Montagem organizada e cabeamento limpo",
      "Teste de estabilidade e temperatura sob carga",
      "Sistema operacional otimizado já incluso",
    ],
  },
];

export const contato = {
  chamada: "O que precisa ser resolvido?",
  texto: "Site, sistema, máquina lenta ou PC novo. Manda o caso.",
};
