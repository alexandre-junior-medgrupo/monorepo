import type { Preview } from '@storybook/web-components';
import { html } from 'lit';

// ionic
import { initialize } from '@ionic/core/components';
import { defineCustomElement as defineCustomElementIonApp } from '@ionic/core/components/ion-app';
import { defineCustomElement as defineCustomElementIonContent } from '@ionic/core/components/ion-content';
import '@ionic/core/css/core.css';
import '@ionic/core/css/display.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/padding.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/typography.css';
import { defineCustomElement as defineCustomElementIonIcon } from 'ionicons/components/ion-icon';

initialize();
defineCustomElementIonContent();
defineCustomElementIonApp();
defineCustomElementIonIcon();
// !ionic

// templarios
import {
  TP_COLORS,
  TP_COLORS_MEDSOFT,
  TP_COLORS_RECURSOS,
} from '../src/utils/constants/color.constant';
import {
  TpColorAula,
  TpColorMaterial,
  TpColorOrange,
  TpColorProvas,
  TpColorQuestoes,
  TpColorRevalida,
} from '../src/utils/enums/color.enum';

import '../styles/css/templarios.css';
import '../styles/css/templarios.themes.css';

import '../www/build/templarios.esm';
// !templarios

// storybook
import './assets/storybook.css';
import { list7 } from './utils/release-7.constants';
import { list6 } from './utils/release-6.constants';
// !storybook

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    staticDirs: ['../www', '../icons'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    options: {
      storySort: {
        order: ['Templarios', 'Core', 'Components'],
      },
    },
    themes: {
      target: 'root',
      default: 'MedSoft',
      onChange: () => {},
      list: [...list7],
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [...TP_COLORS, ...TP_COLORS_MEDSOFT, ...TP_COLORS_RECURSOS],
      description: `Define a cor do componente.

**OBS**: As cores **'${TpColorAula.Aula}'**, **'${TpColorMaterial.Material}'**, **'${TpColorQuestoes.Questoes}'**, **'${TpColorRevalida.Revalida}'** e **'${TpColorProvas.Provas}'** estão disponiveis apenas no theme **MedSoft**.

**OBS**: A cor **'${TpColorOrange.Orange}'** está disponivel apenas no theme **Recursos**.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: [
            ...TP_COLORS,
            ...TP_COLORS_MEDSOFT,
            ...TP_COLORS_RECURSOS,
          ].join('|'),
        },
      },
    },
  },
  decorators: [
    (story) => html`
<ion-app>
  <ion-content class="story">
    <!-- story markdown -->
    ${story()}
    <!-- story markdown -->
  </ion-content>
</ion-app>
    `,
  ],
};

export default preview;
