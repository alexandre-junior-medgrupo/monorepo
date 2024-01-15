import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  Implementação: [
    'implementacao/monorepo/project-initialization',
    {
      type: 'category',
      label: 'Scripts',
      items: ['implementacao/scripts/bash'],
    },
    {
      type: 'category',
      label: 'templarios-monorepo-cli',
      items: [
        'implementacao/templarios-monorepo-cli/project-initialization',
        'implementacao/templarios-monorepo-cli/implementation',
      ],
    },
  ],
};

export default sidebars;
