import { execSync } from 'child_process';
import inquirer from 'inquirer';
import { log, publish as options } from '../constants/constants';
import { printWelcomeMessage } from './utilities';

/**
 * Executa a inquire de publicação.
 */
export const publish = () => {
  printWelcomeMessage(
    "Prepara os pacotes relevantes para publicação, incrementando suas versões, compilando-os e movendo os compilados para a pasta 'dist' no 'root' do monorepo.",
  );

  const inquire = (answer: any) => {
    const { inquire } = answer;
  };

  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'inquire',
        message: 'Escolha uma das opções:',
        choices: options,
        loop: false,
        validate(answer) {
          if (answer.length < 1) {
            return 'Escolha pelo menos uma das opções.';
          }
          return true;
        },
      },
    ])
    .then((answer: any) => inquire(answer))
    .catch((error: any) => log(error));
};
