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

**Mecânica do tema**
- Claro é o padrão do `:root`. `@media (prefers-color-scheme: dark)` com
  `:root:not([data-theme="light"])` cobre o SO escuro. `:root[data-theme="dark"]`
  cobre a escolha explícita.
- O script inline no `<head>` do `layout.tsx` roda **antes da primeira pintura**
  e é obrigatório. Sem ele a página pinta no tema errado e vira depois da
  hidratação — com 19:1 de contraste esse flash é violento. Não mova para um
  `useEffect` nem para arquivo externo.
- `suppressHydrationWarning` no `<html>` é proposital: o script diverge o HTML
  do servidor do cliente de propósito.
- O controle tem três estados (Auto / Claro / Escuro), não dois. Auto respeita
  o SO, que é o que a maioria quer sem tocar em nada.
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
  Carregado por `<link>` com subset `&text=` no `layout.tsx` — não trocar por
  `next/font`, que baixaria a família inteira (4 MB+).

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
As duas pontas → O que eu construí → O que eu resolvo → O que precisa ser resolvido?

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
- Projetos: seção aberta de propósito. Dex Tweaks ocupa a primeira posição sem
  definir a seção; `projetosEmProducao` preenche o resto da grade de quatro.
  Projeto que entra em `projetos` toma o lugar de um slot.

---

## Acessibilidade — não regredir

- Nav mobile existe e fecha no Esc (`HeroNav.tsx`). Antes ela simplesmente
  sumia abaixo de `md`.
- `:focus-visible` com anel de 2px em `--ring`. Alvos de toque ≥44px.
- Hero em `svh`, nunca `vh`.
- `next/image` com `fill` sempre acompanhado de `sizes`.

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
- [ ] `medicaoRepouso.antes` está vazio, esperando a medição de RAM em repouso
      antes da otimização (restaurar snapshot → reiniciar → Gerenciador de
      Tarefas).
- [ ] `provaVisual` está desligado. Renderiza sozinho quando as duas imagens
      forem preenchidas. Requisitos da captura estão comentados no
      `portfolio.ts`.
- [ ] Domínio, `metadataBase`, OG image e favicon com o monograma GM.
- [ ] Preços são âncoras iniciais, não tabela fechada.

**Verificação que só roda na máquina dele**
- [ ] `npm run dev` e conferir: MENDES encostando nas duas margens, kanji
      discreto, nav mobile abrindo e fechando no Esc, foco visível no Tab,
      largura de 400px sem scroll horizontal.
- [ ] `npm run build` — o ambiente do Cowork tem o registro npm bloqueado para
      vários pacotes deste projeto, então o build nunca rodou de verdade lá.
      Só o typecheck foi validado.

---

## Histórico

Plano de design completo, com diagnóstico e os contrastes medidos:
`claude/plano-design-landing.md` no projeto "Landing" do claude.ai.
