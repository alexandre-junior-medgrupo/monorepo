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
  { name: ' api', value: 'api' },
  { name: ' stencil', value: 'stencil' },
  new inquirer.Separator('== websites'),
  { name: ' documentation', value: 'documentation' },
  { name: ' processos', value: 'processos' },
];
