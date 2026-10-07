<div align="center">

# Guilherme Mendes

**Desenvolvedor & Técnico de TI — Recife, PE**

Do primeiro commit ao último serviço desativado.

[**mendes-ti.vercel.app**](https://mendes-ti.vercel.app)

![Next.js 16](https://img.shields.io/badge/Next.js-16-0a0a0a?style=flat-square&logo=nextdotjs&logoColor=fafafa)
![React 19](https://img.shields.io/badge/React-19-0a0a0a?style=flat-square&logo=react&logoColor=fafafa)
![TypeScript](https://img.shields.io/badge/TypeScript-5-0a0a0a?style=flat-square&logo=typescript&logoColor=fafafa)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4-0a0a0a?style=flat-square&logo=tailwindcss&logoColor=fafafa)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-0a0a0a?style=flat-square&logo=vercel&logoColor=fafafa)

<br>

<img src="docs/hero.png" alt="Hero do portfólio: o sobrenome MENDES em letras largas de ponta a ponta, os ideogramas 改善 como marca d'água logo abaixo e, na base, a frase de posicionamento e a fileira com nome, cidade e cargo." width="100%">

</div>

<br>

## O que é

Portfólio pessoal e página de serviços numa página só. Mostra o que eu construí
para mim e o que eu faço para cliente, com preço no fim.

| Seção | Conteúdo |
|---|---|
| **Sobre** | Formação, rotina e as ferramentas com que eu trabalho |
| **Projetos** | Quatro projetos com capturas reais, sem mock recriado |
| **Plano de Otimização** | Como o Windows é ajustado, com FPS medido antes e depois em jogo |
| **Criação de Sites** | Três landing pages de demonstração, uma por tipo de cliente |
| **Preços** | Montagem de PC, otimização e criação de sites lado a lado |
| **Contato** | E-mail, WhatsApp, GitHub e LinkedIn |

## Projetos em destaque

| Projeto | O que faz | Stack |
|---|---|---|
| [Dex Tweaks](https://github.com/mxndex7/Dex-Tweeks) | Painel de otimização para Windows 10 e 11 num arquivo só, com prévia, snapshot e verificação antes de gravar cada ajuste | Batch, PowerShell |
| [Sistema de Processos](https://github.com/mxndex7/SistemadeProcessos) | Protocolo e tramitação de processos administrativos, com assinatura eletrônica e trilha de auditoria | React, Express, PostgreSQL, Docker |
| [Dupex](https://github.com/mxndex7/Dupex) | API REST de duplicatas escriturais: emissão, aceite, liquidação e cancelamento | Python, FastAPI, SQLAlchemy, JWT |
| [PC Check Painel](https://github.com/mxndex7/Pc-Check-Painel) | Diagnóstico, reparo e utilitários para Windows, sem telemetria | Batch, PowerShell |

## Decisões de design

A meta do redesign foi uma página com cara de quem fez, não de template.

- **Monocromático nos dois temas.** Duas escalas de cinza e nenhuma cor
  desenhada pelo site. A exceção são as capturas de software real, que entram
  com as cores originais do programa.
- **Uma família tipográfica.** O Archivo variável faz o texto e, esticado no
  eixo de largura (peso 900, `wdth` 125), faz os títulos. Os ideogramas de
  改善 usam um recorte da Noto Sans JP com só esses dois glifos (1,3 KB).
- **Fontes no repositório.** Tudo carrega por `next/font/local`; nada depende
  do Google Fonts, nem no build, nem para quem visita.
- **Tema por token.** Nenhum componente usa a variante `dark:`. Trocar de tema
  é trocar a atribuição de papéis em `globals.css`. Escuro é o padrão, e um
  script no `<head>` aplica a escolha salva antes da primeira pintura.
- **Contraste medido.** Todo texto passa em WCAG AA nos dois temas; os valores
  estão documentados junto dos tokens.
- **Movimento contido.** Uma animação de entrada no carregamento e só. Nada
  roda em loop ou dispara no scroll, e `prefers-reduced-motion` desliga tudo.
- **Acessibilidade.** Foco visível, alvos de toque de 44px, menu mobile que
  fecha no Esc e galeria de imagens com foco preso e navegação por teclado.

## Peças de demonstração

As três landing pages de **Criação de Sites** (Argila, Renata Bastos e Cerne)
são negócios fictícios, criados para mostrar o serviço. Elas ficam em
`public/exemplos/` como HTML estático, cada uma com identidade e fontes
próprias, e:

- carregam uma faixa fixa no topo dizendo que são peças de demonstração;
- são `noindex, nofollow`, para não aparecerem em busca;
- têm registros profissionais e CNPJ preenchidos com zeros, de propósito.

## Estrutura

```
src/
├── app/
│   ├── fonts/          Archivo variável e o recorte de 改善 (.woff2)
│   ├── globals.css     tokens de cor, tema, display e wordmark
│   ├── layout.tsx      fontes, metadata e script de tema
│   └── page.tsx        ordem das seções
├── components/         uma seção por arquivo, mais galeria e controle de tema
└── data/
    └── portfolio.ts    todo o texto editável da página
public/
├── casos/              capturas dos projetos e dos testes em jogo (.webp)
└── exemplos/           as três peças de demonstração e as fontes delas
```

Todo o conteúdo vive em `src/data/portfolio.ts`. Os componentes não têm texto
fixo: mudar um projeto, um preço ou uma frase é editar esse arquivo.

## Rodando localmente

Requer Node.js 20.9 ou mais novo (mínimo do Next.js 16).

```bash
npm install
npm run dev
```

A página abre em [localhost:3000](http://localhost:3000).

| Comando | Faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com recarga automática |
| `npm run build` | Build de produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | ESLint |

## Deploy

Publicado na Vercel. Push na `master` publica sozinho, então `npm run build`
precisa passar antes. Mudança que ainda não deve ir ao ar vai numa branch:
a Vercel gera um link de prévia sem mexer no site principal. O projeto não usa
variáveis de ambiente.

## Contato

- E-mail: [mendex.dev@gmail.com](mailto:mendex.dev@gmail.com)
- LinkedIn: [guilhermemendes7](https://www.linkedin.com/in/guilhermemendes7/)
- GitHub: [mxndex7](https://github.com/mxndex7)
