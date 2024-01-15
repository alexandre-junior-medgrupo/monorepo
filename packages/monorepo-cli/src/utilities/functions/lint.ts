import { execSync } from 'child_process';
import { printWelcomeMessage } from './utilities';

/**
 * Executa a o lint dos pacotes.
 */
export const lint = () => {
  printWelcomeMessage('Executa o lint dos pacotes.');

  execSync(`npm run lint`, { stdio: 'inherit' });
};
