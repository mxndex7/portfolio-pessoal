# portfolio-pessoal — regras do projeto

Portfólio do **Guilherme Mendes** (dev + técnico de TI, Recife-PE).
Next.js 16 · React 19 · Tailwind v4 · TypeScript.

O objetivo declarado do redesign: página autêntica, sem "cara de vibe coding".
Toda decisão abaixo foi tomada em conjunto e tem motivo. Antes de contrariar
uma delas, diga qual é e por quê.

---

## Divisão de ferramentas

- Claude chat e Cowork: análise, verificação, opinião, decisão conjunta e
  redação de prompts. Não escrevem em nenhum arquivo deste repositório.
- Claude Code: única ferramenta que altera código, arquivos e CLAUDE.md.
- Decisão tomada no chat/Cowork chega aqui como bloco de texto colado pelo
  Guilherme. Ao receber um bloco desses, grave no CLAUDE.md antes de aplicar
  no código — o registro vem primeiro, a implementação depois.
- Se um bloco parecer incompleto ou conflitar com o que já está no CLAUDE.md,
  pergunte antes de implementar.
- Registre no CLAUDE.md apenas decisões que valem para todo o projeto
  (cor, tipografia, voz, acessibilidade, processo). Ajuste pontual de
  componente não vai para o CLAUDE.md — entra direto no código.

---

## Design system

**Cor — monocromático total. Não existe cor na página, em nenhum dos temas.**

> **Exceção — decisão de 29/09/2026:** captura real de projeto (console do
> Dex Tweaks, do PC Check Painel e afins) entra com as **cores originais do
> programa**, sem remapeamento. A regra monocromática vale para tudo que o
> site desenha — texto, fundo, fio, controle, mock —, não para print de
> software real. Ver "Capturas de projeto" em Estrutura.

Duas escalas de cinza (`--l-*` clara, `--d-*` escura), ambas sempre declaradas
em `globals.css`. O que troca entre temas é só a **atribuição dos papéis**.

> **Nenhum componente usa a variante `dark:`.** Tudo lê token de papel, então
> trocar de tema é trocar valores num arquivo só. Se você se pegar escrevendo
> `dark:alguma-coisa`, parou — o token certo já existe.

Papéis e contraste medido contra o fundo de cada tema:

| papel | escuro s/ #0a0a0a | claro s/ #fafafa |
|---|---|---|
| `--foreground` | #fafafa 18,97:1 | #0a0a0a 18,97:1 |
| `--foreground-muted` | #d4d4d4 13,36:1 | #404040 9,93:1 |
| `--foreground-dim` | #a3a3a3 7,85:1 | #525252 7,49:1 |
| `--foreground-floor` | #8a8a8a 5,73:1 | #737373 **4,54:1** |
| `--control-border` | #8a8a8a 5,73:1 | #737373 4,54:1 |

**Atenção ao piso no tema claro:** 4,54:1 passa em AA por uma margem mínima.
Só use `--foreground-floor` em texto de 14px ou mais, ou em elemento não
textual. Para eyebrow e rótulo pequeno use `--foreground-dim`.

- Nunca usar `text-white/70`, `border-white/10` e afins. Só tokens.
- Terminal do Dex Tweaks usa `--terminal-*`, que **não** trocam de tema.
  Console é escuro nos dois; inverter seria inventar algo que não existe.

**Mecânica do tema — decisão de 05/10/2026 (Guilherme, direto no Claude
Code).** Substitui o controle de três estados (Auto / Claro / Escuro), em que
Auto seguia o SO e claro era o padrão do `:root`.
- **Escuro é o padrão para todo visitante, independente do SO.** O `:root`
  carrega os papéis escuros; `:root[data-theme="light"]` troca para claro.
  Não existe mais `@media (prefers-color-scheme)` atribuindo papel.
- A escolha fica salva em `localStorage` (`tema`). Sem nada salvo, é escuro.
- O script inline no `<head>` do `layout.tsx` roda **antes da primeira pintura**
  e é obrigatório. Sem ele a página pinta no tema errado e vira depois da
  hidratação — com 19:1 de contraste esse flash é violento. Não mova para um
  `useEffect` nem para arquivo externo.
- `suppressHydrationWarning` no `<html>` é proposital: o script diverge o HTML
  do servidor do cliente de propósito.
- O controle tem dois estados (Escuro / Claro). Sem Auto.
- O rótulo é palavra, não ícone de sol e lua. A nav inteira é texto em
  caixa-alta pequena; um ícone seria o único da página.

**Tipografia — uma família só, dois eixos**

O Archivo é variável e tem eixo de largura (`wdth`, 62–125). O `layout.tsx`
pede `axes: ["wdth"]`, e o display é o **mesmo Archivo esticado**: peso 900,
largura 125. Archivo Black saiu — não é mais necessário.

- `font-display` = Archivo 900 em `font-stretch: 125%`. Títulos e números.
  É um `@utility` no `globals.css`, não um token de `@theme`, porque
  `font-family` sozinho não seleciona a face esticada: precisa de peso e
  largura junto. Componente continua escrevendo só `font-display`.
- Ajuste a largura em `--display-wdth` (125 = máximo; 112.5 = semi-expanded).
- `font-sans` = Archivo. Texto.
- **`.wordmark` tem tamanho a calibrar no olho.** A face esticada ocupa ~20% a
  mais por caractere que a Archivo Black, então o valor caiu de 24cqw para
  20cqw como ponto de partida. O certo é aquele em que MENDES encosta nas duas
  margens sem estourar — ajuste de 0,5 em 0,5 com o dev server aberto.
- `font-mono` = eyebrows, rótulos, dados tabulares (`tabular-nums`).
- `font-jp` = Noto Sans JP 900, **só** para os dois glifos de 改善 no hero.
  O arquivo contém apenas U+6539 e U+5584 (1,3 KB) — nunca a família
  inteira, que passa de 4 MB.

**Fontes vivem no repositório — nenhuma dependência externa.** Decisão de
27/09/2026: o `next/font/google` falhou ao baixar o Archivo no `npm run dev`
e a página caiu em fonte de sistema, com MENDES fora de calibração. Fonte
não pode depender de rede, nem no dev, nem no build, nem no visitante.
- Os `.woff2` ficam em `src/app/fonts/` e são carregados com
  `next/font/local` no `layout.tsx`. Proibido voltar para `next/font/google`
  ou para `<link>` do Google Fonts.
- `archivo-latin-variable.woff2`: Archivo variável, subset latin (cobre
  português), eixos `wght` 100–900 e `wdth` 62–125. O `font-stretch: 62% 125%`
  é declarado no `localFont` — sem ele o navegador trava a largura em 100% e
  o `font-display` perde a face esticada.
- `noto-sans-jp-900-kaizen.woff2`: só os dois glifos de 改善.
- Trocar ou atualizar uma fonte = substituir o arquivo em `src/app/fonts/` e
  recalibrar o `.wordmark`.
- Vale também para as peças de `public/exemplos/`, sem exceção. As fontes
  de cada peça ficam em `public/exemplos/fonts/` e entram por `@font-face`
  escrito direto no `<style>` da página, com caminho relativo
  (`url('fonts/…')`). Nenhum `@import` nem `<link>` do Google Fonts.
  Ao regerar uma peça a partir do canvas do Claude Design, o HTML exportado
  volta com o `@import` do Google: troque pelos `@font-face` locais antes de
  publicar.

**Forma**
- Cantos retos. `--radius: 0`. Pílula só em chip social.
- Superfícies se distinguem por fio (`--hairline`) e espaço, não por sombra.
- Nem tudo é card. Listas com fio divisório são o padrão preferido.

**Movimento**
- Uma entrada, uma vez, no carregamento (`.reveal`). Nada dispara no scroll.
- Nada roda em loop. Hover muda cor, nunca posição — sem `translate-y`, sem `scale`.
- `prefers-reduced-motion` desliga tudo. Já está no `globals.css`.

---

## Hero

- Só o sobrenome: **MENDES**, ponta a ponta. `.wordmark` a `24cqw` do contêiner
  (não `vw` — `cqw` garante que encosta nas duas margens em qualquer largura).
- 改善 (kaizen) é marca d'água em `--watermark`, `min(44vw, 42svh)`.
  `aria-hidden`, sem papel semântico. Aparece **uma vez só na página inteira** —
  repetir transforma gesto em tema, e tema vira muleta.
- A fileira de meta na base carrega o nome completo. É ela que deixa o `h1`
  honesto sem precisar de `sr-only`.
- Sem CTA no hero: o nav já leva a Projetos e Contato na mesma tela.

---

## Voz

**Declaração curta e técnica.** Vocabulário que só quem faz o trabalho usaria.
Linha do hero: *"Do primeiro commit ao último serviço desativado."*

Títulos de seção formam um conjunto, nesta ordem:
As duas pontas → O que eu construí → Plano de Otimização → Criação de Sites →
Quanto custa → O que precisa ser resolvido?

**Proibido:** "transformar ideias em", "vamos conversar", "soluções",
"investimento" como eufemismo de preço, e qualquer adjetivo sem ação ao lado.

**Regra da seção "O que você ganha":** todo item tem uma AÇÃO (o que é feito na
máquina, verificável) e um EFEITO (o que muda pra quem usa). Nenhum item pode
existir só com o efeito — benefício sem mecanismo é o que todo "otimizador de
PC" escreve, e é por isso que ninguém acredita.

**Um fato aparece na página uma vez só.** A seção já teve os mesmos itens duas
vezes: comprimidos nos recursos dos cards de Serviços e expandidos em "O que
você ganha". Dava a impressão de ênfase exagerada, mas era só duplicação
ocupando o dobro do espaço. Por isso os cards não têm lista de recursos: eles
fazem comparação (nome, descrição, preço, botão) e o detalhe vive em um lugar.

**"O que você ganha" agrupa por MÉTODO, não por produto** — O que sai / O que
eu ajusto / Como dá pra voltar. Agrupar por produto (Windows / painel / BIOS)
repete o eixo dos cards e a seção vira uma segunda lista de serviços. Por verbo,
ela explica como o trabalho é feito, que é o que os cards não dizem.
Três colunas lado a lado, não blocos empilhados: empilhado ocupava o triplo da
altura e cada bloco arrastava uma coluna esquerda vazia.

---

## Estrutura

- `Section.tsx` é a casca das seções. **O título visível É o `<h2>`.**
  Nunca voltar ao padrão de `<h2 class="sr-only">` com um `<p>` fazendo o papel
  visual — quebra leitor de tela e SEO ao mesmo tempo.
- Todo conteúdo editável vive em `src/data/portfolio.ts`. Componente não tem
  texto hardcoded.
- Ordem das seções: Hero → Sobre → Projetos → Plano de Otimização → Criação
  de Sites → Preços → Contato → Footer. Decisão de 16/09/2026 (Cowork):
  otimização de máquina e criação de sites são dois serviços distintos, cada
  um com sua própria seção e sua própria prova visual — antes eles viviam
  misturados numa só "Serviços" (cards de preço + "O que você ganha"), e
  "Como ficaria a sua" não tinha preço nenhum. Os preços dos dois agora vivem
  juntos, na seção "Preços", no fim da página: assim o visitante já viu as
  duas provas antes de comparar valor, e comparar as três opções lado a lado
  (Montagem, Otimização, Sites) é o que fecha a decisão.
- Projetos: seção aberta de propósito. Os 4 projetos usam o mesmo
  `ProjectCard`, no mesmo tamanho, em **lista de uma coluna** — sem card
  "featured" maior. Dex Tweaks ocupa a primeira posição por ser o mais pronto,
  não por ganhar tratamento visual diferente; `projetosEmProducao` preenche o
  resto até quatro. Projeto que entra em `projetos` toma o lugar de um slot.
- **Lista de 1 coluna, não grade 2×2 — decisão de 03/10/2026 (chat).** Em duas
  colunas a capa recebia pouco mais de metade da largura e captura de terminal
  virava mancha cinza — o mesmo problema já resolvido em "Criação de Sites".
  A partir de `lg` o card é capa à esquerda (~60%, `lg:grid-cols-[3fr_2fr]`) e
  texto à direita; abaixo, empilhado. Capa **sempre** à esquerda — zigue-zague
  é padrão de template. A grade usa `items-start`: `stretch` esticava a caixa
  da imagem até a altura do texto e quebrava o aspect-ratio (o "vão" antigo).
  Mesma proporção de caixa nos 4 (16:9), `object-contain`, sem cortar a
  captura. Entre 1024 e ~1300px o texto fica mais alto que a capa: quem estica
  é a moldura em `--surface` em volta da caixa, nunca a caixa.
  **Capa sem faixa (04–05/10/2026):** a faixa em `--surface` em volta da
  captura parecia borda dela. Nenhum card mostra mais essa faixa:
  - App web (Dupex, Sistema de Processos): `capaPreenche` — `object-cover`
    cobrindo a moldura inteira, ancorado no topo; o valor é a âncora
    horizontal do corte (25% no Dupex, 10% no Sistema), escolhida pra manter
    logo e menu lateral. Custa um pouco de baixo no celular e das laterais
    entre 1024 e ~1300px.
  - Console (Dex Tweaks, PC Check Painel): `capaFundo: "#0c0c0c"` — continua
    `contain`, mas a moldura pinta o fundo do próprio console. Cortar não
    serve: o texto encosta nas margens da captura. É a mesma cor da margem
    que já faz parte da captura, não cor desenhada pelo site.
  Slots "Em produção" repetem a estrutura (capa tracejada + texto) para a
  lista não pular de altura. Abaixo dos 4, uma linha de texto para o perfil
  do GitHub — não é card nem slot.
- Card de projeto mostra capa, nome, descrição, tags de tecnologia e link do
  GitHub. Cada projeto carrega `imagens: { src, alt }[]` — capa é a primeira.
  Com mais de uma imagem, a capa vira botão (`ProjectGallery.tsx`): abre um
  lightbox com `role="dialog"`, foco preso, Esc/clique-fora fecham, setas de
  teclado navegam, contador em mono. Com uma imagem só, a capa é estática, sem
  affordance de clique.

**Card do Dex Tweaks — captura real, não mock recriado.** O painel do antigo
`DexTweaksCard` era um mock em HTML/CSS (grade de menu numerado desenhada com
tokens `--terminal-*`). Trocado por capturas reais do painel — pelo mesmo
motivo de "Como ficaria a sua": real sem cortar informação vale mais que
recriado. Hoje o Dex Tweaks é só o primeiro item de `projetos`, com três
capturas (`dex-tweaks-menu`, `-otimizacoes`, `-avancado`) navegáveis pela galeria
comum a todo card, em `aspect-[3/2]` e `object-contain` — sem componente nem
proporção dedicados.

**Capturas de projeto — cores originais (decisão de 29/09/2026).** Substitui
a regra antiga de remapeamento, em que cada cor da captura (fundo `#0c0c0c`,
texto `#cccccc`, azul `#3b78ff`, vermelho `#e74856` no Dex Tweaks) era trocada
1:1 por um token `--terminal-*` antes de virar `.webp`. Agora a captura entra
como o programa pinta: é print de software real, e a cor faz parte do que
está sendo mostrado. Vale para todos os cards de projeto ao mesmo tempo —
um card colorido ao lado de um cinza pareceria erro, não escolha.
- Só recorte (conteúdo + margem) e exportação `.webp` sem perda; nenhum
  filtro, dessaturação ou troca de paleta.
- Console em Consolas nas capturas de todos os projetos. O `chcp` que os
  painéis rodam derruba o conhost para a fonte raster "Terminal"; a fonte é
  reposta antes de cada captura, pra os cards terem a mesma cara.
- **Resolução — decisão de 03/10/2026.** As capturas de ~750px borravam no
  card (tela com escala de 125–150% e celular pedem mais pixels do que
  isso). Captura nova sai com a **maior fonte Consolas que cabe no monitor**
  para aquela tela (37–54px em 1080p), direto da janela do conhost
  (`PrintWindow`, sem captura de tela redimensionada) — resultado entre
  ~1400 e ~1900px de largura, 20–40 KB em `.webp` sem perda.
- A margem em volta do conteúdo é o próprio fundo do console (`#0c0c0c`)
  estendido — não é cor desenhada pelo site.
- **Sistema web (Sistema de Processos, 03/10/2026):** captura da versão de
  demonstração (`docker compose`, dados fictícios, faixa amarela "AMBIENTE
  DE DEMONSTRAÇÃO" visível) num Chrome headless em **1600×900 a 2x**
  (3200×1800) — 16:9, a mesma proporção da caixa da capa, então a capa
  preenche sem faixa. Tema escuro do próprio sistema, pra conversar com os
  cards de console. Nunca capturar o repositório institucional
  (`fundacaocas/sistema-processos`), só o de demonstração (`mxndex7`).
- `next/image` com `unoptimized` nos cards e na galeria de projeto: o
  otimizador recomprimia o `.webp` sem perda em `q=75` e redimensionava, o que
  borra texto de console. Não remover.
- Dex Tweaks recapturado em 29/09/2026 no layout novo (commit `cf75c35` do
  repositório dele + correção do `:DexHeader`), com a cor de destaque salva
  no painel. Se o layout do Dex mudar de novo, as capturas precisam ser
  refeitas — são cópias publicadas, não a origem.

---

## Seção "Plano de Otimização"

Substitui a antiga `Services.tsx` (eyebrow "Serviços", título "O que eu
resolvo"). Decisão de 16/09/2026 (Cowork): os 3 cards de preço saíram daqui —
foram pra "Preços", no fim da página — porque misturar preço com a explicação
do serviço duplicava o mesmo fato em dois lugares da seção.

- Intro nomeia o Dex Tweaks (a ferramenta própria, já mostrada em Projetos)
  como o que aplica o ajuste — a otimização não é um script genérico baixado
  da internet.
- Cabeçalho próprio "O que você ganha" / "Tudo que eu mexo, você consegue
  desfazer" saiu: o `<h2>` da seção ("Plano de Otimização", via `Section`) já
  cobre esse papel. `ganhos` deixou de carregar `eyebrow`/`titulo` — só os
  `grupos` (O que sai / O que eu ajusto / Como dá pra voltar) continuam, na
  mesma posição de antes.
- **Bloco "Windows limpo"** substitui o antigo card de medição de RAM
  (`medicaoRepouso`) — mesma regra de "um fato aparece na página uma vez só":
  o número não pode viver em dois lugares. Formato espelha o da capa de
  "Criação de Sites" (imagem desktop `aspect-[2/1]` largura inteira + imagem
  mobile `aspect-[390/560]`, borda `hairline`, sem cor) e fica desligado até a
  imagem existir — mesmo padrão de `provaVisual`. Abaixo da imagem, uma lista
  de estatísticas (RAM após o boot, nº de serviços desabilitados, nº de apps
  removidos); cada uma só aparece quando o valor estiver preenchido.
- Bloco de resultado em jogos (`provaVisual`) mantém posição e formato
  exatamente como estava — duas imagens lado a lado, desligado até as duas
  existirem.

**`provaVisual` preenchido — decisão de 19/09/2026.** O jogo mudou de Red Dead
Redemption 2 (planejado originalmente, com metodologia de benchmark integrado
— cena 5, mesmo timestamp nas duas rodadas) para **Black Myth: Wukong**, sem
essa metodologia: as capturas entregues não vêm de um benchmark com cena fixa,
então o campo `cena` fica vazio. 52 FPS antes → 89 FPS depois, capturas em
`public/casos/`. A forma do bloco não mudou — sem legenda textual combinada
tipo "ANTES — 52 FPS" e sem linha de delta (`+37 FPS`): o número grande já
cobre isso, e a regra fechada é não alterar a forma do `provaVisual`.

---

## Seção "Criação de Sites"

Seção nova, dedicada ao serviço de landing pages e sites. **Não** fica dentro
de "O que eu construí" — aquela seção é sobre o que eu construí para mim; esta
é sobre o que eu faço para cliente. Misturar as duas confunde trabalho próprio
com peça de demonstração.

**Posição:** logo depois de "Plano de Otimização" — o outro serviço da
página, sob o mesmo eyebrow "Serviços". A prova chega no momento em que o
visitante acabou de ler um serviço e está em dúvida sobre o outro.

**Título:** era "Como ficaria a sua" — interpelava o visitante e já deixava
implícito que eram demonstrações, não carteira de clientes. Mudou pra
"Criação de Sites" na reestruturação de 16/09/2026 (Cowork), pareado com
"Plano de Otimização" sob o mesmo eyebrow "Serviços". O preço dos dois passou
a viver junto, na seção "Preços", no fim.

**As três peças** — landing pages fictícias, uma por público-alvo do serviço:

| Peça | Público | A decisão que a peça carrega |
|---|---|---|
| Argila | Clínicas | A página explica por que não tem antes e depois (Resolução CFM 2.336/2023) |
| Renata Bastos | Profissionais autônomos | Não vende nem mostra preço, porque a OAB proíbe — então informa (Provimento 205/2021) |
| Cerne | Pequenos negócios | Abre admitindo que a madeira se move, em vez de prometer que não |

Cada uma tem identidade visual própria e deliberadamente sem parentesco com as
outras — paleta, tipografia, arquitetura de página e tipo de peça gráfica são
diferentes nas três. **Isso é o argumento da seção**: a mesma pessoa entrega
registros visuais distintos conforme o cliente, sem molde repetido. O estilo
do portfólio (monocromático, Archivo, kaizen) não influencia nenhuma delas e
nenhuma delas influencia o portfólio.

**Honestidade — são peças de demonstração, não clientes.** Regra que vale
para sempre neste projeto: nenhuma das três pode ser apresentada como cliente
real, em nenhum texto, legenda, alt ou metadata. Três travas, todas
obrigatórias:

1. O parágrafo de abertura da seção já diz que são "páginas fictícias" antes
   de qualquer clique — desde a reestruturação de 16/09/2026 (Cowork) o
   título da seção é "Criação de Sites" (não mais interrogativo), então essa
   trava passou a viver no texto de intro, não no `<h2>`.
2. Cada peça, quando aberta, carrega uma faixa fixa no topo: "Peça de
   demonstração — negócio fictício, criada para exemplificar o serviço · por
   Guilherme Mendes". A faixa fica fixa, visível em qualquer ponto da
   rolagem, e o nome é link de volta para a raiz do portfólio.
3. As três páginas são `noindex, nofollow`. Elas têm endereço, telefone e
   número de registro profissional fictícios — uma clínica de dermatologia
   indexada no Google pode fazer alguém tentar marcar consulta.

Os dados fictícios (CRM, RQE, OAB, CNPJ) ficam preenchidos com zeros de
propósito. São placeholders explícitos, não credenciais inventadas que
parecem reais.

**Formato da seção**
- Uma faixa por peça, empilhadas, capa em 2:1 ocupando a largura inteira,
  texto abaixo. Não são três cards lado a lado: em grade de três colunas a
  capa cai para ~336px e a página vira mancha ilegível a 23% do tamanho real.
  Na faixa larga ela aparece a 74%, que é o mínimo para o visitante entender
  do que a página trata antes de decidir clicar.
- Clique abre a peça ao vivo, em nova aba, em `/exemplos/<nome>.html`. Não
  existe galeria de prints: a peça navegável é o próprio "livro".
- No celular, uma segunda captura em proporção de telefone. A captura
  desktop encolhida vira mancha ilegível, e boa parte do público chega por
  celular — mostrar a versão mobile também prova que a peça é responsiva.
- Legenda: nome + público + uma decisão de design. Nunca só nome e público —
  galeria sem raciocínio é exatamente o que o resto da página evita.

**Hospedagem das peças.** HTML estático em `public/exemplos/`, servido
direto. Não vira rota React: as três páginas são estáticas, têm CSS global
próprio (`body`, `*`) que vazaria no site se fosse importado, e carregam as
próprias fontes, hospedadas em `public/exemplos/fonts/`. Converter para JSX seria trabalho grande sem
ganho nenhum.

A fonte editável de cada peça continua sendo o canvas do Claude Design, no
Cowork. Se uma peça mudar lá, os arquivos de `public/exemplos/` e as capturas
precisam ser regerados — eles são cópias publicadas, não a origem.

---

## Seção "Preços"

Nova, criada em 16/09/2026 (Cowork). Eyebrow "Orçamento", título "Quanto
custa". Fica depois de "Criação de Sites" e antes de "Contato" — é a última
parada antes do fechamento, com as duas provas (otimização e sites) já
vistas.

Junta os preços que antes viviam espalhados: os 2 cards que saíram de "Plano
de Otimização" mais "Criação de Sites", que antes não tinha preço nenhum na
página. Mesmo componente de card usado antes em `Services.tsx` (nome,
descrição, preço, nota opcional, botão "Pedir orçamento") — só o conteúdo de
`servicos` mudou:

1. Montagem de PC — sem mudança.
2. Otimização (fusão de "Sistema Operacional Otimizado" + "Otimização &
   Overclock") — preço R$ 280 "a partir de", o menor dos dois valores antigos
   como âncora. Decisão fechada: não soma os dois preços, porque agora é uma
   entrega só.
3. Criação de Sites — "Sob consulta", sem valor fixo por enquanto (pendência
   em aberto).

---

## Acessibilidade — não regredir

- Nav mobile existe e fecha no Esc (`HeroNav.tsx`). Antes ela simplesmente
  sumia abaixo de `md`.
- `:focus-visible` com anel de 2px em `--ring`. Alvos de toque ≥44px.
- Hero em `svh`, nunca `vh`.
- `next/image` com `fill` sempre acompanhado de `sizes`.

---

## Deploy

Publicado na Vercel desde 27/09/2026, conta do Guilherme (plano Hobby),
projeto `portfolio-pessoal`, ligado ao repositório `mxndex7/portfolio-pessoal`.
Endereço atual: https://portfolio-pessoal-two-lac.vercel.app (gerado pela
Vercel — domínio próprio segue em Pendências).

**`git push` na `master` é publicação.** A Vercel builda e troca o site no ar
sozinha, em um ou dois minutos, sem nenhum passo manual. Consequências:
- Nada vai para a `master` sem `npm run build` passando antes — build
  quebrado na Vercel mantém a versão anterior no ar, mas o erro só aparece lá.
- Mudança que ainda não deve ir ao ar vai numa branch. Push de branch gera
  um link de prévia na Vercel e não mexe no site principal.
- Não precisa de variável de ambiente: o projeto não usa nenhuma. Se um dia
  usar, ela tem que ser cadastrada no painel da Vercel também.

**O plano Hobby proíbe uso comercial** (Fair Use Guidelines da Vercel,
conferido em 27/09/2026). A própria Vercel cita "anunciar a venda de produto
ou serviço" como exemplo de uso comercial — e o site tem seção de preços e
botão "Pedir orçamento". Ver Pendências.

---

## Pendências

Antes de qualquer remoção: **`git commit` do estado atual.** É o mesmo
princípio do snapshot no Dex Tweaks — dá pra voltar.

**Remoções — FEITAS e commitadas**

`hero15.tsx`, `public/resultados/`, `ui/button.tsx`, `lib/utils.ts` e
`components.json` foram apagados. O `package.json` ficou com cinco
dependências: `next`, `react`, `react-dom`, `lucide-react`, `react-icons`.

> **Ao editar `globals.css`, leia o arquivo atual antes de reescrever.**
> Uma reescrita feita a partir de cópia antiga já reintroduziu o
> `@import "shadcn/tailwind.css"` depois do pacote ter saído do
> `package.json` — o build quebra e o erro não é óbvio.
> A regra vale para qualquer arquivo aqui: ler, depois escrever.

**Conteúdo**
- [ ] `provaOtimizacao` está sem imagem — bloco "Windows limpo" desligado até
      `imagemDesktop`/`imagemMobile` existirem. Estatísticas pendentes: RAM em
      repouso antes da otimização (restaurar snapshot → reiniciar →
      Gerenciador de Tarefas), nº de serviços desabilitados, nº de apps
      removidos.
- [ ] `provaVisual` está desligado. Renderiza sozinho quando as duas imagens
      forem preenchidas. Requisitos da captura estão comentados no
      `portfolio.ts`.
- [ ] Domínio, `metadataBase`, OG image e favicon com o monograma GM.
- [ ] Hospedagem compatível com uso comercial: o site anuncia serviços com
      preço, o que o plano Hobby da Vercel não permite. Decidir entre Vercel
      Pro (US$ 20/mês por usuário) ou outra hospedagem.
- [ ] Preços são âncoras iniciais, não tabela fechada.
- [ ] Preço de "Criação de Sites" está "Sob consulta" — sem valor fixo por
      enquanto.
**Verificação que só roda na máquina dele**
- [ ] `npm run dev` e conferir: MENDES encostando nas duas margens, kanji
      discreto, nav mobile abrindo e fechando no Esc, foco visível no Tab,
      largura de 400px sem scroll horizontal.
- [x] `npm run build` — rodado direto pelo Claude Code na máquina dele
      (16/09/2026), passou limpo. O ambiente do Cowork continua com o
      registro npm bloqueado para vários pacotes deste projeto, então lá o
      build segue sem rodar de verdade — só o typecheck é validado nele.

---

## Histórico

Plano de design completo, com diagnóstico e os contrastes medidos:
`claude/plano-design-landing.md` no projeto "Landing" do claude.ai.
