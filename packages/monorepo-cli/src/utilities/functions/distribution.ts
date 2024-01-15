import { execSync } from 'child_process';
import concurrently from 'concurrently';
import inquirer from 'inquirer';
import { log, distribution as options } from '../constants/constants';
import { printWelcomeMessage } from './utilities';

/**
 * Executa a inquire de distribuição.
 */
export const distribution = () => {
  printWelcomeMessage(
    "Compila os pacotes escolhidos e move os compilados para a pasta 'dist' no 'root' do monorepo.",
  );

  const inquire = (answer: any) => {
    const { inquire } = answer;

    inquire.forEach((element: any) => {
      concurrently([`sh .scripts/distribution/${element}.sh`]);
    });
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
