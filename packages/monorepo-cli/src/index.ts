import chalk from 'chalk';
import { Command } from 'commander';
import { ThemeColors } from './utilities/enums/theme';
import { development } from './utilities/functions/development';
import { distribution } from './utilities/functions/distribution';
import { production } from './utilities/functions/production';
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
  .option('-prod, --production', 'compila os pacotes escolhidos.')
  .option(
    '-dist, --distribution',
    "compila os pacotes escolhidos e move os compilados para a pasta 'dist' no 'root' do monorepo.",
  )
  .option(
    '-publish, --publish',
    "prepara os pacotes relevantes para publicação, incrementando suas versões, compilando-os e movendo os compilados para a pasta 'dist' no 'root' do monorepo.",
  )
  .option('-lint, --lint', 'executa o lint dos pacotes.')
  .action((option: any) => {
    if (option.start) {
      start();
    }

    if (option.development) {
      development();
    }

    if (option.production) {
      production();
    }

    if (option.distribution) {
      distribution();
    }

    if (option.publish) {
      publish();
    }

    if (option.lint) {
      lint();
    }
  });

program.showHelpAfterError();
program.parse();
