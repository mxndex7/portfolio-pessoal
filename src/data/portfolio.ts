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

/*
  "O QUE VOCÊ GANHA"

  Sem as capturas de jogo, a seção corre o risco de virar promessa. A defesa
  contra isso é uma regra de escrita: cada item tem uma AÇÃO (o que eu faço na
  máquina, verificável) e um EFEITO (o que muda pra quem usa).

  Nenhum item pode existir só com o efeito. "Máquina mais rápida" sem a ação ao
  lado é exatamente o que todo "otimizador de PC" escreve — e é por isso que
  ninguém acredita mais.
*/

export type Ganho = { acao: string; efeito: string };
export type BlocoGanho = { titulo: string; resumo: string; itens: Ganho[] };

export const ganhos = {
  eyebrow: "O que você ganha",
  titulo: "Tudo que eu mexo, você consegue desfazer",
  intro:
    "Existe muito otimizador de PC que promete dobrar FPS e não diz o que faz. Aqui é o contrário: cada alteração é listada, medida e reversível. Se algo não compensar na sua máquina, eu falo antes de mexer.",
  blocos: [
    {
      titulo: "Windows sem o que sobra",
      resumo:
        "Não é limpeza depois. É uma instalação que nunca chega a ter o que atrapalha.",
      itens: [
        {
          acao: "Mais de 40 apps de fábrica fora já na instalação",
          efeito:
            "Copilot, Cortana, Xbox, Teams e OneDrive nunca chegam a existir na máquina. Não tem o que desinstalar depois.",
        },
        {
          acao: "Telemetria desligada desde o primeiro boot",
          efeito:
            "Nada coletando e enviando dados em segundo plano enquanto você joga ou trabalha.",
        },
        {
          acao: "Indexação de busca desativada",
          efeito: "O disco para de trabalhar sozinho no meio da partida.",
        },
        {
          acao: "Hibernação desativada",
          efeito:
            "Devolve o espaço do hiberfil.sys, que ocupa o tamanho da sua memória RAM.",
        },
        {
          acao: "Edge removido de verdade, Chrome como padrão",
          efeito: "Sem o navegador voltando sozinho a cada atualização.",
        },
      ],
    },
    {
      titulo: "O painel que eu desenvolvo",
      resumo:
        "Dex Tweaks não é script achado na internet. Toda alteração passa por prévia, snapshot e verificação antes de ser gravada.",
      itens: [
        {
          acao: "Seis perfis prontos",
          efeito:
            "A máquina é ajustada pro que você faz — competitivo, streaming, notebook ou privacidade — em vez de receber uma configuração genérica.",
        },
        {
          acao: "Snapshot antes de cada alteração",
          efeito:
            "Deu ruim, volta. É o que separa isso de um otimizador que você baixa e reza.",
        },
        {
          acao: "Histórico de alterações",
          efeito:
            "Você vê exatamente o que foi mexido na sua máquina, item por item.",
        },
        {
          acao: "Modo Especialista para BCD e Defender",
          efeito:
            "O que é arriscado fica atrás de uma trava, com confirmação. Nada perigoso é aplicado escondido.",
        },
        {
          acao: "Benchmark integrado",
          efeito:
            "O ganho é medido antes e depois, na sua máquina. Não é promessa minha, é número seu.",
        },
      ],
    },
    {
      titulo: "Ajuste de BIOS",
      resumo:
        "A configuração de fábrica é conservadora de propósito. Ela protege a placa, não o seu desempenho.",
      itens: [
        {
          acao: "Perfil de memória ativado",
          efeito:
            "Muita RAM vendida como 3200 MHz roda a 2133 direto da caixa. Ativar o perfil é desempenho que você já pagou e não está usando.",
        },
        {
          acao: "Curva de energia da CPU",
          efeito:
            "A CPU deixa de ser segurada por um limite conservador de fábrica.",
        },
        {
          acao: "Overclock com teste de estabilidade",
          efeito: "Ganho que trava não é ganho. Só entrego o que passou no teste.",
        },
        {
          acao: "Diagnóstico de gargalo antes de mexer",
          efeito:
            "Onde a máquina está presa — e se compensa mexer. Às vezes a resposta é não, e eu digo.",
        },
      ],
    },
  ] satisfies BlocoGanho[],
};

/*
  Medição de memória em repouso. É a prova mais honesta que existe aqui:
  mesma máquina, mesmo momento depois do boot, nada aberto. Não tem cena,
  clima nem placa de vídeo pra atrapalhar — só medir duas vezes.

  Preencha `antes` com o valor medido ANTES da otimização (restaure o snapshot
  pelo Dex Tweaks, reinicie, e olhe o Gerenciador de Tarefas). Enquanto estiver
  vazio, o bloco não renderiza.
*/
export const medicaoRepouso = {
  rotulo: "Memória em uso após o boot, sem nada aberto",
  antes: "",
  depois: "2,6 GB",
  total: "15,9 GB",
  nota: "Medido numa instalação feita com o autounattend.xml + Dex Tweaks.",
};

/*
  PROVA VISUAL — desligada até existir captura legítima.

  Renderiza só quando as duas imagens estiverem preenchidas. O slot já está
  montado e posicionado; é só apontar os arquivos.

  O que a captura precisa ter, pra valer como prova em vez de ilustração:

  1. MESMA CENA nos dois lados. Use o benchmark integrado do RDR2 — cinco
     cenas, sendo a quinta (assalto + cavalgada pela cidade, 130s) a única
     pesada e a única representativa. Clima, horário e câmera ficam travados.
  2. MESMO INSTANTE da sequência. Grave as duas rodadas em vídeo e extraia o
     frame do mesmo timestamp — acertar o print na mão não funciona.
  3. DOIS ARQUIVOS separados, não uma imagem composta. O layout empilha no
     celular e separa no desktop.
  4. Sem lupa no print. O número grande vive aqui na interface; o contador
     pequeno do jogo fica na imagem como comprovante.
  5. Preset e resolução no campo `cena`, pra fechar a brecha do "e se ele
     baixou os gráficos?".

  Pra ter o estado "antes": restaure o snapshot pelo Backup/Restore do próprio
  Dex Tweaks, rode o benchmark, aplique o perfil, rode de novo.
*/
export const provaVisual = {
  jogo: "Red Dead Redemption 2",
  cena: "", // ex.: "Benchmark integrado · cena 5 · Preset Alto · 1080p"
  antes: { imagem: "", fps: 0 },
  depois: { imagem: "", fps: 0 },
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
