// Edite este arquivo pra ajustar textos, projetos e contato.

export const perfil = {
  nome: "Guilherme Mendes",
  // O hero usa só o sobrenome. Seis letras cabem em qualquer largura.
  sobrenome: "Mendes",
  monograma: "",
  titulo: "Desenvolvedor & Técnico de TI",
  local: "Recife — PE",
  // Usado na metadata da página (título da aba e descrição no Google).
  resumo:
    "Desenvolvedor e técnico de TI em Recife. Sistemas web, otimização de Windows e montagem de máquinas.",
  // Linha embaixo do MENDES.
  posicionamento: "Invista no seu negócio ou melhore sua máquina.",
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
  titulo: "Quem sou",
  texto: `Me chamo Guilherme Mendes, Tecnólogo formado em Análise e Desenvolvimento de Sistemas, cursando bacharelado em Engenharia de Software. 19 anos, Recife.

Escrevo o software e mexo na máquina que roda ele. São duas rotinas diferentes que no fim tem o mesmo propósito: achar o que está no caminho e tirar.

Atualmente sou estagiário de TI na Fundação CAS - Centro de Assistência social à PMPE.`,
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
  imagens?: { src: string; alt: string }[];
  link?: string;
  repositorio?: string;
};

// Os 4 projetos da grade usam o mesmo card, no mesmo tamanho — sem destaque
// maior. Dex Tweaks ocupa a primeira posição por ser o mais pronto, não por
// ganhar um tratamento visual diferente.
export const projetos: Projeto[] = [
  {
    titulo: "Dex Tweaks",
    descricao:
      "Painel administrativo em Batch para Windows 10 e 11, num arquivo só, sem instalação. Seis perfis prontos: Safe, Balanced, Competitive, Streaming, Laptop e Privacy. Ajustes de CPU, GPU, rede, memória, serviços e privacidade. Toda alteração passa por prévia, snapshot e verificação antes de ser gravada, com BCD e Defender atrás de um Modo Especialista, com confirmação extra.",
    tecnologias: ["Batch", "PowerShell", "Windows 10/11"],
    imagens: [
      {
        src: "/casos/dex-tweaks-capa.webp",
        alt: "Captura real do painel principal do Dex Tweaks, em modo texto, com o menu numerado de perfis, otimizações, hardware e backup.",
      },
      {
        src: "/casos/dex-tweaks-inicio.webp",
        alt: "Tela inicial do Dex Tweaks com banner ASCII, hardware detectado (GPU e CPU) e o menu completo de otimizações.",
      },
      {
        src: "/casos/dex-tweaks-toolbox.webp",
        alt: "Submenu Dex Toolbox do Dex Tweaks, com boosters de jogo, agendamento de tarefas, debloat de programas e otimização de captura.",
      },
    ],
    repositorio: "https://github.com/mxndex7/Dex-Tweeks",
  },
];

// Slots de produção. Preenchem o resto da grade de quatro — cada projeto que
// entrar em `projetos` toma o lugar de um slot.
export const projetosEmProducao = [
  { rotulo: "Em produção" },
  { rotulo: "Em produção" },
  { rotulo: "Em produção" },
];

/*
  PLANO DE OTIMIZAÇÃO — cabeçalho e intro da seção.

  O cabeçalho próprio que "O que você ganha" tinha (eyebrow + título) saiu:
  o <h2> da seção, vindo do Section, já cobre esse papel.
*/
export const otimizacao = {
  eyebrow: "Serviços",
  titulo: "Plano de Otimização",
  intro:
    "Existe muito otimizador de PC que promete dobrar FPS e não diz o que faz. Aqui é o contrário: uso o Dex Tweaks, o painel que eu mesmo escrevo, pra aplicar cada ajuste por perfil com snapshot antes e benchmark depois + Ajuste na BIOS. Além da opção de realizar uma instalação limpa sem bloatware do sistema operacional. Se algo não compensar na sua máquina, eu falo antes de mexer.",
};

/*
  "O QUE VOCÊ GANHA"

  Duas regras governam esta seção:

  1. REGRA DE ESCRITA. Cada item tem uma AÇÃO (o que é feito na máquina,
     verificável) e um EFEITO (o que muda pra quem usa). Nenhum item pode
     existir só com o efeito — benefício sem mecanismo é o que todo
     "otimizador de PC" escreve, e é por isso que ninguém acredita.

  2. AGRUPAMENTO POR MÉTODO, NÃO POR PRODUTO. Antes os grupos eram Windows /
     painel / BIOS, que é o mesmo eixo dos cards de Serviços — então a seção
     lia como uma segunda versão da lista de serviços, dizendo os mesmos fatos
     de novo. Agrupado por verbo (sai / ajusto / volta), ela passa a explicar
     COMO o trabalho é feito, o que os cards não dizem.

  Os cards de preço não têm lista de recursos justamente por isso: o detalhe
  vive aqui, uma vez só.
*/

export type Ganho = { acao: string; efeito: string };
export type GrupoGanho = { titulo: string; itens: Ganho[] };

export const ganhos: GrupoGanho[] = [
  {
    titulo: "O que sai",
    itens: [
      {
        acao: "Mais de 40 apps de fábrica",
        efeito:
          "Copilot, Cortana, Xbox, Teams e OneDrive nunca chegam a existir na máquina.",
      },
      {
        acao: "Telemetria",
        efeito: "Nada enviando dados em segundo plano enquanto você joga.",
      },
      {
        acao: "Indexação e hibernação",
        efeito:
          "O disco para de trabalhar sozinho, e o hiberfil.sys devolve o tamanho da sua RAM.",
      },
      {
        acao: "Edge, de verdade",
        efeito:
          "Sem o navegador voltando sozinho a cada atualização. Chrome como padrão.",
      },
    ],
  },
  {
    titulo: "O que eu ajusto",
    itens: [
      {
        acao: "Perfil pelo uso da máquina",
        efeito:
          "Competitivo, streaming, notebook ou privacidade. Nada de configuração genérica.",
      },
      {
        acao: "Perfil de memória na BIOS",
        efeito:
          "RAM vendida como 3200 MHz costuma rodar a 2133 de fábrica. É desempenho que você já pagou.",
      },
      {
        acao: "Curva de energia e overclock",
        efeito:
          "Com teste de estabilidade antes de entregar. Ganho que trava não é ganho.",
      },
    ],
  },
  {
    titulo: "Como dá pra voltar",
    itens: [
      {
        acao: "Snapshot antes de cada alteração",
        efeito:
          "Deu ruim, volta. É o que separa isso de um otimizador que você baixa e reza.",
      },
      {
        acao: "Histórico item por item",
        efeito: "Você vê exatamente o que foi mexido na sua máquina.",
      },
      {
        acao: "Modo Especialista",
        efeito:
          "BCD e Defender ficam atrás de uma trava. Nada perigoso é aplicado escondido.",
      },
      {
        acao: "Benchmark antes e depois",
        efeito: "Medido na sua máquina. Não é promessa minha, é número seu.",
      },
    ],
  },
];

/*
  Bloco "Windows limpo" — mesma casca visual da capa de "Criação de Sites"
  (imagem desktop 2:1 largura inteira + imagem mobile 390:560), desligado até
  as duas imagens existirem. Substitui o antigo card isolado de medição de RAM
  — o mesmo número não pode viver em dois lugares da página.

  `estatisticas` é uma lista solta: cada item só aparece quando `valor`
  estiver preenchido. Preencha o "antes" restaurando o snapshot pelo próprio
  Dex Tweaks, reiniciando e olhando o Gerenciador de Tarefas.
*/
export type EstatisticaOtimizacao = { rotulo: string; valor: string };

export const provaOtimizacao = {
  titulo: "Windows limpo",
  imagemDesktop: "",
  imagemMobile: "",
  alt: "",
  estatisticas: [
    { rotulo: "RAM em uso após o boot — antes", valor: "" },
    { rotulo: "RAM em uso após o boot — depois", valor: "2,6 GB de 15,9 GB" },
    { rotulo: "Serviços desabilitados", valor: "" },
    { rotulo: "Apps removidos", valor: "" },
  ] satisfies EstatisticaOtimizacao[],
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
  // Rótulo acima do preço. Default "A partir de" quando omitido; "" some com
  // o rótulo — não faz sentido em cima de "Sob consulta".
  precoRotulo?: string;
  precoNota?: string;
};

/*
  O card faz o trabalho de comparação: nome, uma descrição, preço e botão.
  Três coisas comparáveis de relance. Vivem na seção "Preços", no fim da
  página — não mais dentro de "Plano de Otimização", pra "Criação de Sites"
  ter preço no mesmo lugar que os outros dois.

  A lista de recursos saiu de propósito — ela repetia, item por item, o que a
  seção "O que você ganha" já diz. Detalhe em um lugar só.

  Preços como âncora ("a partir de"), não tabela fechada. Referência de mercado
  2026: formatação + Windows + drivers em R$ 100–200, limpeza + otimização em
  R$ 150–300, teto perto de R$ 600. O que sai dessa faixa é o Dex Tweaks e a
  instalação desassistida própria.
*/
export const servicos: Servico[] = [
  {
    titulo: "Montagem de PC",
    descricao:
      "Montagem da máquina, da escolha das peças ao cabeamento. Inclui a instalação do sistema já otimizado e teste de temperatura sob carga.",
    preco: "R$ 200",
    precoNota: "Mão de obra. Peças à parte.",
  },
  {
    titulo: "Otimização Completa",
    descricao:
      "Instalação desassistida de Windows 10/11 que eu mesmo configurei, com o Dex Tweaks aplicado por perfil, mais ajuste de BIOS e overclock de CPU e memória com teste de estabilidade. Sai leve, sem telemetria, com benchmark antes e depois e ponto de restauração antes de qualquer ajuste.",
    preco: "R$ 130",
  },
  {
    titulo: "Criação de Sites",
    descricao:
      "Landing page ou site sob medida, do design ao deploy. Preço varia com escopo — veja os exemplos em Criação de Sites.",
    preco: "Sob consulta",
    precoRotulo: "",
  },
];

/*
  "CRIAÇÃO DE SITES" (era "Como ficaria a sua" — renomeada em 16/09/2026)

  Três landing pages fictícias, uma por público-alvo do serviço de sites.
  Regra que vale sempre: nenhuma pode ser apresentada como cliente real — por
  isso o texto de abertura já chama de "páginas fictícias" e cada peça, ao
  abrir, carrega sua própria faixa de aviso (fora deste repositório). Essa
  frase de abertura é a trava #1 de honestidade agora que o título da seção
  deixou de ser interrogativo.

  Identidade visual das três é deliberadamente sem parentesco entre si e sem
  relação com o estilo deste portfólio — isso é o argumento da seção.
*/
export type CasoDemonstracao = {
  nome: string;
  publico: string;
  decisao: string;
  href: string;
  capa: string;
  capaMobile: string;
  alt: string;
};

export const comoFicariaASua = {
  eyebrow: "Serviços",
  titulo: "Criação de Sites",
  intro:
    "Três páginas fictícias, uma por público. Cada uma tem identidade própria de propósito, o mesmo molde repintado três vezes provaria o contrário do que eu quero provar. Clique para abrir a peça inteira.",
  casos: [
    {
      nome: "Argila",
      publico: "Clínicas",
      decisao:
        "Paleta de argila, serifa editorial e um corte anatômico da pele desenhado do zero, no lugar do azul-clínico e da foto de banco de imagem. Foi feita para explicar o método antes do agendamento, inclusive porque a clínica não publica antes e depois. Para quem tem consultório, isso significa paciente que chega sabendo como funciona a avaliação, e menos conversa sobre preço na recepção.",
      href: "/exemplos/argila.html",
      capa: "/casos/argila-capa.webp",
      capaMobile: "/casos/argila-mobile.webp",
      alt: "Página da clínica fictícia Argila, em tons de argila e tipografia serifada, com corte anatômico da pele mostrando a profundidade de cada protocolo.",
    },
    {
      nome: "Renata Bastos",
      publico: "Profissionais autônomos",
      decisao:
        "Tema escuro, uma única família tipográfica e cor usada só como sinal de risco: vermelho no prazo vencido, âmbar no que está em curso. Foi feita para informar em vez de vender, porque a OAB proíbe anunciar honorário e prometer resultado. Para o profissional liberal, é autoridade construída sem infringir o código da profissão e cliente que chega à primeira reunião com metade das dúvidas já respondidas.",
      href: "/exemplos/renata-bastos.html",
      capa: "/casos/renata-bastos-capa.webp",
      capaMobile: "/casos/renata-bastos-mobile.webp",
      alt: "Página escura da advogada fictícia Renata Bastos, com gráfico da transição tributária de 2026 a 2033 e números grandes de prazo.",
    },
    {
      nome: "Cerne",
      publico: "Pequenos negócios",
      decisao:
        "Campos de cor nos tons reais das madeiras, tipografia de contraste alto e nenhuma foto: o material é a identidade. Foi feita para vender pelo critério técnico, com espécie, densidade, procedência e prazo aparecendo antes do preço. Para o pequeno negócio, é a página que responde o orçamento sozinha e separa quem quer o serviço de quem só queria saber quanto custa.",
      href: "/exemplos/cerne.html",
      capa: "/casos/cerne-capa.webp",
      capaMobile: "/casos/cerne-mobile.webp",
      alt: "Página da marcenaria fictícia Cerne, em campos de cor nos tons das madeiras, com as quatro espécies e seus dados técnicos.",
    },
  ] satisfies CasoDemonstracao[],
};

export const contato = {
  chamada: "O que precisa ser resolvido?",
  texto: "Site, sistema, máquina lenta ou PC novo. Entre em contato comigo que resolvo.",
};
