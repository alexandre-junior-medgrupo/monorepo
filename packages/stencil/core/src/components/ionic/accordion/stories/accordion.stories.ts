import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementAccordion } from '@ionic/core/components/ion-accordion';
import { defineCustomElement as defineCustomElementAccordionGroup } from '@ionic/core/components/ion-accordion-group';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import {
  TP_COLORS,
  TP_COLORS_MEDSOFT,
  TP_COLORS_RECURSOS,
} from '../../../../utils/constants/color.constant';
import { TP_SPACING } from '../../../../utils/constants/spacing.constants';
import { TP_TYPE } from '../../../../utils/constants/type.constant';
import {
  TpColorAula,
  TpColorMaterial,
  TpColorOrange,
  TpColorProvas,
  TpColorQuestoes,
  TpColorRevalida,
} from '../../../../utils/enums/color.enum';
import { TpIonItem } from '../../item/utils/item.type';
import { TpIonLabel } from '../../label/utils/label.type';
import { TpIonAccordion } from '../utils/accordion.type';

defineCustomElementAccordionGroup();
defineCustomElementAccordion();
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementText();

const meta: Meta<
  Components.IonAccordionGroup &
    Components.IonAccordion &
    Components.IonItem &
    Components.IonLabel &
    Components.IonText &
    TpIonAccordion &
    TpIonItem &
    TpIonLabel
> = {
  title: 'components/Ionic/Accordion',
  argTypes: {
    'tp-color': {
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
    ['tp-spacingx']: {
      control: { type: 'select' },
      options: [...TP_SPACING['tp-spacingx']],
      description: `Define o padding horizontal do componente`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_SPACING['tp-spacingx'].join('|'),
        },
      },
    },
    ['tp-spacingy']: {
      control: { type: 'select' },
      options: [...TP_SPACING['tp-spacingy']],
      description: `Define o padding vertical do componente`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_SPACING['tp-spacingy'].join('|'),
        },
      },
    },
    ['tp-type']: {
      control: { type: 'select' },
      options: [...TP_TYPE],
      description: `Define a estilização de fonte do componente **'ion-label'**.

**OBS**: Atributo referente ao componente **'ion-label'**.
`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_TYPE.join('|'),
        },
      },
    },
  },
  args: {
    ['tp-type']: 'p16xb',
  },
};

export default meta;

type Story = StoryObj<
  Components.IonAccordionGroup &
    Components.IonAccordion &
    Components.IonItem &
    Components.IonLabel &
    Components.IonText &
    TpIonAccordion &
    TpIonItem &
    TpIonLabel
>;

export const Default: Story = {
  render: ({ ...args }) => {
    setTimeout(() => {
      const setTpColor = () => {
        const accordions = document.querySelectorAll('ion-accordion');

        accordions.forEach((accordion) => {
          if (args['tp-color']) {
            accordion.setAttribute('tp-color', args['tp-color']);
          }

          if (!args['tp-color']) {
            accordion.removeAttribute('tp-color');
          }
        });
      };

      const setTpSpacingX = () => {
        const accordions = document.querySelectorAll('ion-accordion');

        accordions.forEach((accordion) => {
          if (args['tp-spacingx']) {
            accordion.setAttribute('tp-spacingx', args['tp-spacingx']);
          }

          if (!args['tp-spacingx']) {
            accordion.removeAttribute('tp-spacingx');
          }
        });
      };

      const setTpSpacingY = () => {
        const accordions = document.querySelectorAll('ion-accordion');

        accordions.forEach((accordion) => {
          if (args['tp-spacingy']) {
            accordion.setAttribute('tp-spacingy', args['tp-spacingy']);
          }

          if (!args['tp-spacingy']) {
            accordion.removeAttribute('tp-spacingy');
          }
        });
      };

      if (args['tp-color'] || !args['tp-color']) {
        setTpColor();
      }

      if (args['tp-spacingx'] || !args['tp-spacingx']) {
        setTpSpacingX();
      }

      if (args['tp-spacingy'] || !args['tp-spacingy']) {
        setTpSpacingY();
      }
    }, 100);

    return html`
    <ion-accordion-group>
      <ion-accordion value="first" toggle-icon="./assets/tp-chevron-down.svg">
        <ion-item slot="header" lines="none">
          <ion-label tp-type="${args['tp-type']}">First Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis nemo, cupiditate labore,
              dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia.
            </p>
          </ion-text>
          <ion-text>
            <p>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis
            </p>
          </ion-text>
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis nemo, cupiditate labore,
              dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>

      <ion-accordion
        value="second"
        toggle-icon="./assets/tp-chevron-down.svg"
      >
        <ion-item slot="header" lines="none">
          <ion-label tp-type="${args['tp-type']}">Second Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis nemo, cupiditate labore,
              dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia.
            </p>
          </ion-text>
          <ion-text>
            <p>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis
            </p>
          </ion-text>
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis nemo, cupiditate labore,
              dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>

      <ion-accordion value="third" toggle-icon="./assets/tp-chevron-down.svg">
        <ion-item slot="header" lines="none">
          <ion-label tp-type="${args['tp-type']}">Third Accordion</ion-label>
        </ion-item>
        <div slot="content">
          <ion-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis nemo, cupiditate labore,
              dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia.
            </p>
          </ion-text>
          <ion-text>
            <p>
              veniam repudiandae sed quas optio quos placeat? Eaque saepe id
              modi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet reiciendis nemo, cupiditate labore, dicta corporis
              quaerat earum voluptatem mollitia veniam repudiandae sed quas
              optio quos placeat? Eaque saepe id modi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet reiciendis nemo,
              cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis
            </p>
          </ion-text>
          <ion-text>
            <p>
              nemo, cupiditate labore, dicta corporis quaerat earum voluptatem
              mollitia veniam repudiandae sed quas optio quos placeat? Eaque
              saepe id modi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet reiciendis nemo, cupiditate labore,
              dicta corporis quaerat earum voluptatem mollitia veniam
              repudiandae sed quas optio quos placeat? Eaque saepe id modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              reiciendis nemo, cupiditate labore, dicta corporis quaerat earum
              voluptatem mollitia veniam repudiandae sed quas optio quos
              placeat? Eaque saepe id modi?
            </p>
          </ion-text>
        </div>
      </ion-accordion>
    </ion-accordion-group>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-accordion/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  color: { table: { disable: true } },
};
