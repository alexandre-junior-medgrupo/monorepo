import chalk from 'chalk';
import { Command } from 'commander';
import { execSync } from 'child_process';
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
    { name: ' api', value: 'templarios-api' },
    { name: ' stencil', value: 'templarios-core' },
    new inquirer.Separator('== websites'),
    { name: ' documentation', value: 'templarios-documentation' },
    { name: ' processos', value: 'templarios-processos' },
];

/**
 * Exibe uma mensagem de boas vindas no terminal.
 * @param message Mensagem a ser exibida.
 */
const printWelcomeMessage = (message) => {
    log(chalk.hex(ThemeColors.base)(figlet.textSync('Templários')));
    log('');
    log(chalk.hex(ThemeColors.base).bold('! Templários Component Library'));
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

/**
 * Executa a inquire de desenvolvimento.
 */
const development = () => {
    printWelcomeMessage('Executa os pacotes escolhidos em modo de desenvolvimento.');
    const inquire = (answer) => {
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
                .then((answer2) => {
                const { inquire2 } = answer2;
                const ionicRelease = inquire2.slice(-1);
                execSync(`lerna run node:replace:package:start:${ionicRelease} --scope=templarios-core`, { stdio: 'inherit' });
                execSync(`lerna run start ${inquire.length > 1
                    ? `--parallel --scope={${inquire}}`
                    : `--scope=${inquire}`}`, { stdio: 'inherit' });
            })
                .catch((error) => log(error));
        }
        else {
            execSync(`lerna run start ${inquire.length > 1
                ? `--parallel --scope={${inquire}}`
                : `--scope=${inquire}`}`, { stdio: 'inherit' });
        }
    };
    inquirer
        .prompt([
        {
            type: 'checkbox',
            name: 'inquire',
            message: 'Escolha uma das opções:',
            choices: development$1,
            validate(answer) {
                if (answer.length < 1) {
                    return 'Escolha pelo menos uma das opções.';
                }
                return true;
            },
        },
    ])
        .then((answer) => inquire(answer))
        .catch((error) => log(error));
};

/**
 * Executa a inquire inicial.
 */
const start = () => {
    printWelcomeMessage();
    const inquire = (answers) => {
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
    .option('-start, --start', 'executa o Templários Monorepo CLI')
    .option('-dev, --development', 'executa os pacotes escolhidos em modo de desenvolvimento.')
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
