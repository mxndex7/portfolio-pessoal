# portfolio-pessoal — regras do projeto

Portfólio do **Guilherme Mendes** (dev + técnico de TI, Recife-PE).
Next.js 16 · React 19 · Tailwind v4 · TypeScript.

O objetivo declarado do redesign: página autêntica, sem "cara de vibe coding".
Toda decisão abaixo foi tomada em conjunto e tem motivo. Antes de contrariar
uma delas, diga qual é e por quê.

---

## Design system

**Cor — monocromático total. Não existe cor na página.**
Escala de cinza em `globals.css`, com os contrastes medidos comentados no
arquivo. A regra que governa tudo:

> Sobre `--background` (#0a0a0a), nada abaixo de `--gray-500` (#8a8a8a, 5,73:1)
> carrega texto. Do 400 pra baixo os tons só desenham limite e superfície.

- Texto: `--foreground` (18,97:1) · `--foreground-muted` (13,36:1) ·
  `--foreground-dim` (7,85:1) · `--foreground-floor` (5,73:1, piso)
- Borda de controle e anel de foco: ≥3:1 por WCAG 1.4.11 —
  `--control-border` e `--ring`
- Nunca usar `text-white/70`, `border-white/10` e afins. Só tokens.

**Tipografia**
- `font-display` = Archivo Black. Títulos e números grandes.
- `font-sans` = Archivo. Texto.
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

**Remoções**
- [ ] `src/components/hero15.tsx` — bloco de template não adaptado, com defaults
      em inglês. Nada importa dele. Era o achado nº 1 do diagnóstico e só fecha
      quando o arquivo deixa de existir.
- [ ] `public/resultados/` — 9,7 MB de PNG sem nenhuma referência no código.
- [ ] Opcional: `src/components/ui/button.tsx` e `src/lib/utils.ts` não são
      importados em lugar nenhum. Se saírem, sai junto o `@import
      "shadcn/tailwind.css"` do `globals.css`, o bloco "compat shadcn" dos
      tokens, o `components.json` e a dependência `shadcn` do `package.json`
      — que aliás está em `dependencies` sendo uma CLI, o lugar errado.

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
