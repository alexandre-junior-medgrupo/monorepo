import inquirer from 'inquirer';

export const log = console.log;
export const error = console.error;

export const start = [
  'Desenvolvimento',
  'Produção',
  'Distribuição',
  'Publish',
  'Lint',
];

export const development = [
  { name: ' api', value: 'templarios-api' },
  { name: ' monorepo-cli', value: 'templarios-cli' },
  { name: ' stencil', value: 'templarios-core' },
  new inquirer.Separator('== websites'),
  { name: ' documentation', value: 'templarios-documentation' },
  { name: ' processos', value: 'templarios-processos' },
];

export const production = [
  { name: ' api', value: 'templarios-api' },
  { name: ' monorepo-cli', value: 'templarios-cli' },
  new inquirer.Separator('== stencil'),
  { name: ' core', value: 'templarios-core' },
  { name: ' angular-library', value: 'angular-library' },
  { name: ' react-library', value: 'react-library' },
  { name: ' vue-library', value: 'vue-library' },
  new inquirer.Separator('== websites'),
  { name: ' documentation', value: 'templarios-documentation' },
  { name: ' processos', value: 'templarios-processos' },
];

export const distribution = [
  { name: ' elementor', value: 'elementor' },
  { name: ' web components', value: 'webcomponents' },
  { name: ' websites', value: 'websites' },
];

export const publish = [
  { name: ' api', value: 'templarios-api' },
  { name: ' monorepo-cli', value: 'templarios-cli' },
  { name: ' web components', value: 'webcomponents' },
  { name: ' websites', value: 'websites' },
];
