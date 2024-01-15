import { execSync } from 'child_process';
import inquirer from 'inquirer';
import { log, production as options } from '../constants/constants';
import { printWelcomeMessage } from './utilities';

/**
 * Executa a inquire de produção.
 */
export const production = () => {
  printWelcomeMessage('Compila os pacotes escolhidos.');

  const inquire = (answer: any) => {
    const { inquire } = answer;

    if (inquire.includes('templarios-core')) {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'inquire2',
            message: 'Escolha uma das opções:',
            choices: ['Ionic 7', 'Ionic 6'],
          },
        ])
        .then((answer2: any) => {
          const { inquire2 } = answer2;
          const ionicRelease = inquire2.slice(-1);

          execSync(
            `lerna run node:replace:package:build:${ionicRelease} --scope=templarios-core`,
            { stdio: 'inherit' },
          );

          execSync(
            `lerna run build ${
              inquire.length > 1
                ? `--parallel --scope={${inquire}}`
                : `--scope=${inquire}`
            }`,
            { stdio: 'inherit' },
          );
        })
        .catch((error: any) => log(error));
    } else {
      execSync(
        `lerna run build ${
          inquire.length > 1
            ? `--parallel --scope={${inquire}}`
            : `--scope=${inquire}`
        }`,
        { stdio: 'inherit' },
      );
    }
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
