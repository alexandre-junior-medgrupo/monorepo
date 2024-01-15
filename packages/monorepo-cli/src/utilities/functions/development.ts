import { execSync } from 'child_process';
import inquirer from 'inquirer';
import { log, development as options } from '../constants/constants';
import { printWelcomeMessage } from './utilities';

/**
 * Executa a inquire de desenvolvimento.
 */
export const development = () => {
  printWelcomeMessage(
    'Executa os pacotes escolhidos em modo de desenvolvimento.',
  );

  const inquire = (answers: any) => {
    execSync(
      `lerna run start ${
        answers.inquire.length > 1
          ? `--parallel --scope={${answers.inquire}}`
          : `--scope=${answers.inquire}`
      }`,
      { stdio: 'inherit' },
    );
  };

  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'inquire',
        message: 'Escolha uma das opções:',
        choices: options,
      },
    ])
    .then((answers: any) => inquire(answers))
    .catch((error: any) => log(error));
};
