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
  { name: ' stencil', value: 'templarios-core' },
  new inquirer.Separator('== websites'),
  { name: ' documentation', value: 'templarios-documentation' },
  { name: ' processos', value: 'templarios-processos' },
];
