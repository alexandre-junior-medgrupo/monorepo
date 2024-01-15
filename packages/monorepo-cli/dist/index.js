import chalk from 'chalk';
import { Command } from 'commander';
import inquirer from 'inquirer';
import figlet from 'figlet';

var ThemeColors;
(function (ThemeColors) {
    ThemeColors["lightest"] = "#f3666b";
    ThemeColors["lighter"] = "#f04148";
    ThemeColors["light"] = "#ef353c";
    ThemeColors["base"] = "#ed1c24";
    ThemeColors["dark"] = "#dd1219";
    ThemeColors["darker"] = "#d11118";
    ThemeColors["darkest"] = "#ac0e14";
})(ThemeColors || (ThemeColors = {}));

const log = console.log;
const start$1 = [
    'Desenvolvimento',
    'Produção',
    'Distribuição',
    'Publish',
    'Lint',
];
const development$1 = [
    { name: ' api', value: 'api' },
    { name: ' stencil', value: 'stencil' },
    new inquirer.Separator('== websites'),
    { name: ' documentation', value: 'documentation' },
    { name: ' processos', value: 'processos' },
];

/**
 * Exibe uma mensagem de boas vindas no terminal.
 * @param message Mensagem a ser exibida.
 */
const printWelcomeMessage = (message) => {
    log(chalk.hex(ThemeColors.base)(figlet.textSync('Templários')));
    log('');
    log(chalk.hex(ThemeColors.base).bold('! Templários Components Library'));
    log('');
    log(chalk.hex(ThemeColors.base).bold('! Website:'), chalk.underline('https://templarios.com'));
    log(chalk.hex(ThemeColors.base).bold('! Documentação:'), chalk.underline('https://templarios.com'));
    log(chalk.hex(ThemeColors.base).bold('! Processos do time:'), chalk.underline('https://templarios.com'));
    log(chalk.hex(ThemeColors.base).bold('! Storybook - Release Ionic 7:'), chalk.underline('https://templarios.com'));
    log(chalk.hex(ThemeColors.base).bold('! Storybook - Release Ionic 6:'), chalk.underline('https://templarios.com'));
    log(chalk.hex(ThemeColors.base).bold('! Design System - Components:'), chalk.underline('https://templarios.com'));
    log(chalk.hex(ThemeColors.base).bold('! Design System - Tokens:'), chalk.underline('https://templarios.com'));
    message && log('');
    message && log(chalk.hex(ThemeColors.base).bold(`! ${message}`));
    log('');
};

const development = () => {
    printWelcomeMessage('Executa os pacotes escolhidos em modo de desenvolvimento.');
    const inquire = (answers) => {
        log(answers);
    };
    inquirer
        .prompt([
        {
            type: 'checkbox',
            name: 'inquire',
            message: 'Escolha uma das opções:',
            choices: development$1,
        },
    ])
        .then((answers) => inquire(answers))
        .catch((error) => log(error));
};

const start = () => {
    printWelcomeMessage();
    const inquire = (answers) => {
        const { inquire } = answers;
        if (inquire === 'Desenvolvimento') {
            development();
        }
    };
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'inquire',
            message: 'Escolha uma das opções:',
            choices: start$1,
        },
    ])
        .then((answers) => inquire(answers))
        .catch((error) => log(error));
};

const program = new Command();
program
    .name('templarios')
    .description(`${chalk.hex(ThemeColors.base).bold('Templários Monorepo CLI')}`)
    .option('-s, --start', 'executa o Templários Monorepo CLI')
    .option('-d, --development', 'executa os pacotes escolhidos em modo de desenvolvimento.')
    .action((option) => {
    if (option.start) {
        start();
    }
    if (option.development) {
        development();
    }
});
program.showHelpAfterError();
program.parse();
