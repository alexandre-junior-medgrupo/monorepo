import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementList } from '@ionic/core/components/ion-list';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_SPACING } from '../../../../../utils/constants/spacing.constants';
import { TpIonItem } from '../../utils/item.type';

defineCustomElementIcon();
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementList();

const meta: Meta<Components.IonItem & TpIonItem> = {
  title: 'components/Ionic/Item/Ionic-7',
  argTypes: {
    lines: {
      control: { type: 'check' },
      options: ['full'],
      description: 'Define uma borda no bottom do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: ['full'].join('|'),
        },
      },
    },
    ['tp-gap']: {
      control: { type: 'select' },
      options: [...TP_SPACING['tp-gap']],
      description: 'Define o espaçamento entre os slots do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_SPACING['tp-gap'].join('|'),
        },
      },
    },
    ['tp-spacingx']: {
      control: { type: 'select' },
      options: [...TP_SPACING['tp-spacingx']],
      description: 'Define o padding horizontal do componente.',
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
      description: 'Define o padding vertical do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_SPACING['tp-spacingy'].join('|'),
        },
      },
    },
    button: {
      control: 'boolean',
      description:
        'Se **true**, uma tag **button** será renderizada e o item terá a ação de **touch** ou **click**.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Define a estilização do estado disabled do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonItem & TpIonItem>;

export const Default: Story = {
  render: ({ ...args }) => {
    setTimeout(() => {
      const setTpGap = () => {
        const itens = document.querySelectorAll('ion-item');

        itens.forEach((item) => {
          if (args['tp-gap']) {
            item.setAttribute('tp-gap', args['tp-gap']);
          }

          if (!args['tp-gap']) {
            item.removeAttribute('tp-gap');
          }
        });
      };

      const setTpSpacingX = () => {
        const itens = document.querySelectorAll('ion-item');

        itens.forEach((item) => {
          if (args['tp-spacingx']) {
            item.setAttribute('tp-spacingx', args['tp-spacingx']);
          }

          if (!args['tp-spacingx']) {
            item.removeAttribute('tp-spacingx');
          }
        });
      };

      const setTpSpacingY = () => {
        const itens = document.querySelectorAll('ion-item');

        itens.forEach((item) => {
          if (args['tp-spacingy']) {
            item.setAttribute('tp-spacingy', args['tp-spacingy']);
          }

          if (!args['tp-spacingy']) {
            item.removeAttribute('tp-spacingy');
          }
        });
      };

      if (args['tp-gap'] || !args['tp-gap']) {
        setTpGap();
      }

      if (args['tp-spacingx'] || !args['tp-spacingx']) {
        setTpSpacingX();
      }

      if (args['tp-spacingy'] || !args['tp-spacingy']) {
        setTpSpacingY();
      }
    }, 100);

    return html`
    <ion-list>
      <ion-item
        color="${args.color}"
        lines="${args.lines}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item
        color="${args.color}"
        lines="${args.lines}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item
        color="${args.color}"
        lines="${args.lines}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>

      <ion-item
        color="${args.color}"
        lines="${args.lines}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
