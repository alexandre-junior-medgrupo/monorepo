<p align="center">
  <img src=".github/assets/templarios.svg?raw=true" alt="Templarios Design System logo" width="150" height="150">
</p>

<h3 align="center">Templários Monorepo</h3>

<p align="center">
<a href="#"><strong>Website</strong></a> | <a href="#"><strong>Documentação</strong></a> | <a href="#"><strong>Processos do time</strong></a>
<br>
<a href="http://desenv.ordomederi.com/templarios-7/"><strong>Storybook - Release Ionic 7</strong></a> |
<a href="http://desenv.ordomederi.com/templarios-6/"><strong>Storybook - Release Ionic 6</strong></a>
<br>
<a href="https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?type=design&node-id=18757-35083&mode=design&t=he9ExAwIzge98ikf-0"><strong>Design System - Components</strong></a> |
<a href="https://www.figma.com/file/4QvnRfhttlJ2hIKQbuEPZl/02.-Tokens?type=design&node-id=5154-11248&mode=design&t=N2qqxm5agDlNVzOB-0"><strong>Design System - Tokens</strong></a>
<br>
<br>

</p>

<p align="center">
  <a href="http://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly" />
  </a>
</p>

## Índice

- [Sobre o Projeto](#)
- [Onde é Utlizado](#)
- [Utilização do Monorepo](#)
- [Style Guides](#)

## Sobre o Projeto

Monorepo utilizando [Lerna](https://lerna.js.org/) e [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) contendo os projetos do time **Templários**.

## Onde é Utilizado

Aplicações que utilizam nossa biblioteca de [Web Components](https://www.webcomponents.org/).

**Release Ionic 7:**

- [Inscrições Cardápio](https://github.com/MEDGRUPOGIT/site-inscricoes-cardapio)

## Utilização do Monorepo

Você pode utilizar a extensão [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) para executar os scripts dos pacotes, porém recomendamos a utilização do nosso CLI para um direcionamento mais intuitivo.

### Instalação

Instalação feita com npm pois o projeto utiliza [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces).

```bash
npm install
```

### CLI

Executa o [Templários Monorepo CLI](link-para-pacote-github)

```bash
npm run start
```

### Desenvolvimento

Executa os pacotes escolhidos em modo de desenvolvimento.

```bash
npm run dev
```

### Produção

Compila os pacotes escolhidos.

```bash
npm run build
```

- api
- monorepo-cli
- stencil
  - core
  - angular-library (core + angular-library)
  - react-library (core + angular-library)
  - vue-library (core + angular-library)
- websites
  - docs
  - processos

### Distribuição

Compila os pacotes escolhidos e move os compilados para a pasta `dist` no `root` do monorepo.

```bash
npm run dist
```

elementor

- all
- ecommerce
- institucional
- website

web-components

- all
- core
- angular-library
- react-library
- vue-library

websites

- all
- docs
- processos
- storybook-templarios-7
- storybook-templarios-6

### Publish

Prepara os pacotes relevantes para publicação, incrementando suas versões, compilando-os e movendo os compilados para a pasta `dist` no `root` do monorepo.

```bash
npm run publish
```

- elementor
  - all
- web-components
  - all
- websites
  - docs
  - storybook-templarios-7
  - storybook-templarios-6

### Linting

Executa o lint dos pacotes escolhidos.

```bash
npm run lint
```

- root
- api
- elementor
- monorepo-cli
- stencil
  - com..
  - core
- websites
  - ...

### Committing

Executa o [commitzen](https://commitizen-tools.github.io/commitizen/) CLI para padronização de commits conforme [ conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) e para que possamos gerar changelogs semânticos, inteligíveis e consistentes.

```bash
npm run commit
```

## Style Guides

Style Guides utilizados no monorepo e seus pacotes.

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) - A specification for adding human and machine readable meaning to commit messages.
