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
  texto: `Me chamo Guilherme Mendes. Ingressei aos 16 anos no curso de Análise e Desenvolvimento de Sistemas, no qual me formei. Hoje, aos 19, curso o bacharelado em Engenharia de Software.

Escrevo o software e mexo na máquina que roda ele. São duas rotinas diferentes que no fim têm o mesmo propósito: achar o que está no caminho e tirar.

Atualmente sou estagiário de TI na Fundação CAS - Centro de Assistência Social à PMPE.`,
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
  // Linha curta de onde o projeto veio, entre a descrição e as tags.
  origem?: string;
  tecnologias: string[];
  imagens?: { src: string; alt: string }[];
  link?: string;
  repositorio?: string;
};

// Os 4 projetos da lista usam o mesmo card, no mesmo tamanho — sem destaque
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
        src: "/casos/dex-tweaks-menu.webp",
        alt: "Menu principal do Dex Tweaks no console, com o status de Defender, rede e reinício e as opções agrupadas em Manage, Tweak e Tools.",
      },
      {
        src: "/casos/dex-tweaks-otimizacoes.webp",
        alt: "Menu Optimizations do Dex Tweaks, com os 12 ajustes, o que cada um faz e o selo de risco de cada um (MOD, HIGH, CRIT).",
      },
      {
        src: "/casos/dex-tweaks-avancado.webp",
        alt: "Menu Advanced do Dex Tweaks, com Dex Toolbox, Game Boosters, Scheduled Tasks, Program Debloat e os demais ajustes, cada um com o selo de risco.",
      },
    ],
    repositorio: "https://github.com/mxndex7/Dex-Tweeks",
  },
  {
    titulo: "Sistema de Processos",
    descricao:
      "Sistema web de protocolo e tramitação de processos administrativos, feito para a Fundação CAS. Documentos com editor e papel timbrado, assinatura eletrônica, tramitação entre setores com despacho público ou restrito, controle de leitura e trilha de auditoria. Login por CPF com senha em scrypt, bloqueio por tentativas e permissão por perfil e setor. As capturas são da versão de demonstração, com dados fictícios.",
    tecnologias: ["React", "TypeScript", "Express", "PostgreSQL", "Docker"],
    imagens: [
      {
        src: "/casos/sistema-processos-mesa.webp",
        alt: "Mesa de processos do SGI FCAS no tema escuro, com os processos recebidos e gerados pela unidade de T.I., cada um com número de protocolo, setor de origem, situação e etiquetas.",
      },
      {
        src: "/casos/sistema-processos-processo.webp",
        alt: "Detalhe de um processo: árvore de documentos à esquerda, metadados e número de protocolo no centro, registro de quem abriu o envio e painel de comentários à direita.",
      },
      {
        src: "/casos/sistema-processos-documento.webp",
        alt: "Memorando aberto no visualizador, com papel timbrado, número de protocolo e o selo de assinatura eletrônica com data e hora.",
      },
      {
        src: "/casos/sistema-processos-tramitacao.webp",
        alt: "Diálogo de tramitação, com a busca da unidade de destino e a escolha do nível de acesso do despacho: público ou restrito.",
      },
      {
        src: "/casos/sistema-processos-auditoria.webp",
        alt: "Aba Auditoria Geral do painel de T.I., com contadores de acessos, alterações, exclusões e logins recusados acima da trilha de eventos registrada pelo servidor.",
      },
    ],
    repositorio: "https://github.com/mxndex7/SistemadeProcessos",
  },
  {
    titulo: "Dupex",
    descricao:
      "API RESTful para duplicatas escriturais: a empresa emite, o cliente aceita e o título é liquidado, ou cancelado antes disso. Autenticação com JWT, cada usuário vê só as próprias duplicatas, valores em centavos inteiros, migrações versionadas e testes automatizados, com painel web incluído.",
    origem:
      "Da época de ADS: minha avaliação de Desenvolvimento Back-End, reestruturado em 2026.",
    tecnologias: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "SQLite",
      "JWT",
      "Docker",
    ],
    imagens: [
      {
        src: "/casos/dupex-capa.webp",
        alt: "Painel do Dupex com a lista de duplicatas: abas por situação (todas, emitidas, aceitas, liquidadas e canceladas) e tabela com número, sacado, vencimento, valor e barra de situação.",
      },
      {
        src: "/casos/dupex-detalhe.webp",
        alt: "Gaveta de detalhes da duplicata DUP-2026-0004 aberta sobre a lista, mostrando valor, situação aceita, partes, datas e as ações de liquidar, cancelar e excluir.",
      },
      {
        src: "/casos/dupex-mobile.webp",
        alt: "Painel do Dupex no celular: lista de duplicatas em cartões, com o botão de emitir e os filtros por situação.",
      },
    ],
    repositorio: "https://github.com/mxndex7/Dupex",
  },
  {
    titulo: "PC Check Painel",
    descricao:
      "Painel de diagnóstico, reparo e utilitários para Windows num arquivo .bat só, sem instalação. Quatro menus: Diagnóstico de saúde e segurança, Reparos, Utilitários de rede e sistema, e atalhos para as ferramentas do Windows. Diagnósticos e utilitários só leem; todo reparo exige administrador e confirmação antes de mexer no sistema. Sem telemetria: não envia dados para lugar nenhum.",
    tecnologias: ["Batch", "PowerShell", "Windows"],
    imagens: [
      {
        src: "/casos/pc-check-painel-menu.webp",
        alt: "Menu principal do PC Check Painel v1.0 no console, com Diagnóstico, Reparos, Utilitários e Ferramentas do Windows.",
      },
      {
        src: "/casos/pc-check-painel-saude.webp",
        alt: "Final do relatório de Saúde do PC no console: atualizações do Windows e eventos críticos das últimas 24 h, terminando no resumo de itens Críticos e de Atenção.",
      },
      {
        src: "/casos/pc-check-painel-reparos.webp",
        alt: "Menu de Reparos do PC Check Painel, com ponto de restauração, DISM e SFC, verificação de disco e reset de rede.",
      },
    ],
    repositorio: "https://github.com/mxndex7/Pc-Check-Painel",
  },
];

// Slots de produção. Preenchem o resto da lista de quatro — cada projeto que
// entrar em `projetos` toma o lugar de um slot.
export const projetosEmProducao = [
  { rotulo: "Em produção" },
  { rotulo: "Em produção" },
  { rotulo: "Em produção" },
];

// Linha de texto abaixo dos 4 itens — não é card nem slot. A URL vem de
// `redesSociais`, pra não existir em dois lugares.
export const projetosTodos = {
  rotulo: "Ver todos os repositórios no GitHub",
};

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
      {
        acao: "Otimização de disco",
        efeito:
          "Limpeza de cache, temporários e resíduos de instalação. Mais espaço livre e menos disco cheio disputando leitura com o sistema.",
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
  PROVAS VISUAIS — uma por jogo, empilhadas na seção "Plano de Otimização".
  Ver CLAUDE.md (decisão de 19/09/2026): Black Myth: Wukong veio sem
  metodologia de benchmark com cena fixa, por isso `cena` fica vazio.
  Decisão de 20/09/2026 (Cowork): passou de item único pra lista — os jogos
  se somam, não se substituem.
*/
type ProvaJogo = {
  jogo: string;
  cena: string;
  antes: { imagem: string; fps: number };
  depois: { imagem: string; fps: number };
};

export const provasVisuais: ProvaJogo[] = [
  {
    jogo: "Black Myth: Wukong",
    cena: "",
    antes: { imagem: "/casos/otimizacao-jogo-antes.webp", fps: 52 },
    depois: { imagem: "/casos/otimizacao-jogo-depois.webp", fps: 89 },
  },
  {
    jogo: "Marvel's Spider-Man 2",
    cena: "",
    antes: { imagem: "/casos/otimizacao-spiderman2-antes.webp", fps: 56 },
    depois: { imagem: "/casos/otimizacao-spiderman2-depois.webp", fps: 91 },
  },
];

export type Servico = {
  titulo: string;
  resumo: string;
  pontos: [string, string, string];
  preco: string;
  // Rótulo acima do preço. Default "A partir de" quando omitido; "" some com
  // o rótulo — não faz sentido em cima de "Sob consulta".
  precoRotulo?: string;
  precoNota?: string;
};

/*
  O card faz o trabalho de comparação: nome, resumo, 3 pontos, preço e botão.
  Três coisas comparáveis de relance. Vivem na seção "Preços", no fim da
  página — não mais dentro de "Plano de Otimização", pra "Criação de Sites"
  ter preço no mesmo lugar que os outros dois.

  Decisão de 20/09/2026 (Cowork): o card estava raso demais (nome + preço +
  uma frase corrida). `descricao` virou `resumo` (1 frase de abertura) e
  ganhou `pontos`, exatamente 3 frases curtas com bolinha, sem rótulo antes
  da frase. Os pontos não repetem "O que você ganha" item por item — são o
  resumo de cada serviço, não a lista completa do que é mexido.

  Preços como âncora ("a partir de"), não tabela fechada. Referência de mercado
  2026: formatação + Windows + drivers em R$ 100–200, limpeza + otimização em
  R$ 150–300, teto perto de R$ 600. O que sai dessa faixa é o Dex Tweaks e a
  instalação desassistida própria.
*/
export const servicos: Servico[] = [
  {
    titulo: "Montagem de PC",
    resumo:
      "Montagem da máquina, da escolha de peças até o cabeamento. Já inclui o sistema otimizado.",
    pontos: [
      "Curadoria de peças",
      "Montagem e cabeamento",
      "Windows limpo, sem bloatware, com Dex Tweaks aplicado",
    ],
    preco: "R$ 200",
  },
  {
    titulo: "Otimização Completa",
    resumo:
      "Instalação desassistida do Windows 10/11, otimizado, mais ajustes do Dex Tweaks.",
    pontos: [
      "Sistema operacional sem bloatware",
      "Ajustes de GPU, CPU e RAM",
      "Ponto de restauração antes de qualquer ajuste",
    ],
    preco: "R$ 130",
  },
  {
    titulo: "Criação de Sites",
    resumo:
      "Criação de landing page e site sob medida, atendendo à necessidade de cada empresa e cliente.",
    pontos: [
      "Protótipo navegável antes de aprovar",
      "Identidade própria, sem molde genérico",
      "Suporte e manutenção pós-venda",
    ],
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
