import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ICONS_STORYBOOK } from '../../../../utils/constants/icon.constant';
import { TpIonIcon } from '../../../ionic/icon/utils/icon.type';
import { TpAlert } from '../alert';
import { TpAlertType } from '../utils/alert.type';

//
// !IMPORTANT! Antigo med-alert-fixed
//

defineCustomElementSkeletonText();
defineCustomElementText();
defineCustomElementIcon();

const meta: Meta<TpAlert & TpAlertType & TpIonIcon> = {
  title: 'components/Templarios/Alert',
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...TP_ICONS_STORYBOOK],
      description: 'Define o path e nome do icone.',
    },
    loading: {
      control: 'boolean',
      description: 'Define o estado de carregamento do componente.',
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
  args: {
    color: 'provas-4',
    icon: 'tp-alert-triangle.svg',
  },
};

export default meta;

type Story = StoryObj<TpAlert & TpAlertType & TpIonIcon>;

export const Desatualizado: Story = {
  render: ({ ...args }) => {
    const iconUrl = `./assets/${args.icon}`;

    return html`
      <tp-alert color="${args.color}" ?loading="${args.loading}">
        <ion-icon
          class="tp-alert__icon"
          slot="icon"
          tp-size="sm"
          src="${iconUrl}"
        ></ion-icon>
        <ion-text class="tp-alert__text" slot="text" tp-type="p12x">
          <p>Versão desatualizada</p>
        </ion-text>
      </tp-alert>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-alert/gi)).toBeTruthy();
  }, */
};
