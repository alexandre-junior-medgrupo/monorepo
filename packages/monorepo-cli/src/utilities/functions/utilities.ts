import chalk from 'chalk';
import figlet from 'figlet';
import { log } from '../constants/constants';
import { ThemeColors } from '../enums/theme';

/**
 * Exibe uma mensagem de boas vindas no terminal.
 * @param message Mensagem a ser exibida.
 */
export const printWelcomeMessage = (message?: string) => {
  log(chalk.hex(ThemeColors.base)(figlet.textSync('Templários')));
  log('');
  log(chalk.hex(ThemeColors.base).bold('! Templários Component Library'));
  log('');
  log(
    chalk.hex(ThemeColors.base).bold('! Website:'),
    chalk.underline('https://templarios.com'),
  );
  log(
    chalk.hex(ThemeColors.base).bold('! Documentação:'),
    chalk.underline('https://templarios.com'),
  );
  log(
    chalk.hex(ThemeColors.base).bold('! Processos do time:'),
    chalk.underline('https://templarios.com'),
  );
  log(
    chalk.hex(ThemeColors.base).bold('! Storybook - Release Ionic 7:'),
    chalk.underline('https://templarios.com'),
  );
  log(
    chalk.hex(ThemeColors.base).bold('! Storybook - Release Ionic 6:'),
    chalk.underline('https://templarios.com'),
  );
  log(
    chalk.hex(ThemeColors.base).bold('! Design System - Components:'),
    chalk.underline('https://templarios.com'),
  );
  log(
    chalk.hex(ThemeColors.base).bold('! Design System - Tokens:'),
    chalk.underline('https://templarios.com'),
  );
  message && log('');
  message && log(chalk.hex(ThemeColors.base).bold(`! ${message}`));
  log('');
};
