import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementItem } from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementList } from '@ionic/core/components/ion-list';
import { defineCustomElement as defineCustomElementSearchbar } from '@ionic/core/components/ion-searchbar';
import { defineCustomElement as defineCustomElementTextarea } from '@ionic/core/components/ion-textarea';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_SPACING } from '../../../../../../utils/constants/spacing.constants';
import { TpIonItem } from '../../../utils/item.type';

defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementList();
defineCustomElementSearchbar();
defineCustomElementTextarea();

const meta: Meta<Components.IonItem & TpIonItem> = {
  title: 'components/Ionic/Item/Ionic-7/Compositions',
  argTypes: {
    lines: {
      control: { type: 'check' },
      options: ['full'],
      description: 'Define se o componente terá um border bottom.',
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
      description:
        'Define qual o espaçamento entre o icone e o texto do componente.',
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
      description:
        'Define qual o espaçamento das bordas horizontais para o conteudo do componente.',
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
      description:
        'Define qual o espaçamento das bordas verticais para o conteudo do componente.',
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
      description: 'Define a estilização do estado button do componente.',
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

export const Searchbar: Story = {
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
        lines="${args.lines}"
        ?button="${args.button}"
        ?disabled="${args.disabled}"
      >
        <tp-input-container>
          <ion-label slot="label" tp-type="p14">Searchbar</ion-label>
          <ion-searchbar
            mode="md"
            search-icon="./../../../../assets/tp-search.svg"
            clear-icon="./../../../../assets/tp-x.svg"
            placeholder="Lorem ipsum dolor"
          ></ion-searchbar>
        </tp-input-container>
      </ion-item>
    </ion-list>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-item/gi)).toBeTruthy();
  }, */
};
Searchbar.argTypes = {
  color: { table: { disable: true } },
};
