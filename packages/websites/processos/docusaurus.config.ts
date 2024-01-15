import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  baseUrl: '/processos/',
  favicon: 'img/templarios.svg',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: '',
  presets: [
    [
      'classic',

      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/variables.css'),

            require.resolve('./src/css/base/base.css'),

            require.resolve('./src/css/custom/footer.css'),
            require.resolve('./src/css/custom/hero.css'),
            require.resolve('./src/css/custom/highlight.css'),
            require.resolve('./src/css/custom/markdown.css'),
            require.resolve('./src/css/custom/navbar-sidebar.css'),
            require.resolve('./src/css/custom/navbar.css'),
            require.resolve('./src/css/custom/table.css'),

            require.resolve('./src/css/components/button.css'),
            require.resolve('./src/css/components/markdown-code.css'),
            require.resolve('./src/css/components/navbar-icon.css'),

            require.resolve('./src/css/pages/home.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  tagline: '',
  projectName: '',
  themeConfig: {
    announcementBar: {
      content:
        ' <p style="margin: 0;">🚧🚧🚧 Under Construction... 🚧🚧🚧</p> ',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    footer: {
      copyright: `Built with ❤️ and ☕ by <strong><a class="footer__copyright-link" href="#" target="_blank">Templários</a></strong>.`,
      links: [
        {
          title: 'Example',
          items: [
            {
              label: 'Example',
              to: 'docs/example',
            },
          ],
        },
      ],
      style: 'dark',
    },
    image: 'img/templarios.svg',
    navbar: {
      hideOnScroll: true,
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          to: 'docs/example',
          label: 'Example',
          position: 'left',
        },
      ],
      logo: {
        alt: 'Templários',
        src: 'img/templarios.svg',
      },
      title: 'Templários',
    },
    prism: {
      theme: prismThemes.dracula,
      additionalLanguages: ['json', 'bash', 'scss'],
    },
  } satisfies Preset.ThemeConfig,
  title: 'Templários',
  titleDelimiter: '·',
  url: 'https://google.com/',
};

export default config;
