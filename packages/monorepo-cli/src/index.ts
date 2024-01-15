import chalk from 'chalk';
import { Command } from 'commander';
import { ThemeColors } from './utilities/enums/theme';
import { development } from './utilities/functions/development';
import { start } from './utilities/functions/start';
const program = new Command();

program
  .name('templarios')
  .description(`${chalk.hex(ThemeColors.base).bold('Templários Monorepo CLI')}`)
  .option('-start, --start', 'executa o Templários Monorepo CLI')
  .option(
    '-dev, --development',
    'executa os pacotes escolhidos em modo de desenvolvimento.',
  )
  .action((option: any) => {
    if (option.start) {
      start();
    }

    if (option.development) {
      development();
    }
  });

program.showHelpAfterError();
program.parse();
