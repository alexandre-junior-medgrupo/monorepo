import inquirer from 'inquirer';
import { log, start as options } from '../constants/constants';
import { development } from './development';
import { printWelcomeMessage } from './utilities';

/**
 * Executa a inquire inicial.
 */
export const start = () => {
  printWelcomeMessage();

  const inquire = (answers: any) => {
    const { inquire } = answers;

    if (inquire === 'Desenvolvimento') {
      development();
    }

    /* if (inquire === 'Produção') {
      production();
    } */

    /* if (inquire === 'Distribuição') {
      distribution();
    } */

    /* if (inquire === 'Publicação') {
      publish();
    } */

    /* if (inquire === 'Lint') {
      lint();
    } */
  };

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'inquire',
        message: 'Escolha uma das opções:',
        choices: options,
      },
    ])
    .then((answers: any) => inquire(answers))
    .catch((error: any) => log(error));
};
