import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ICONS_STORYBOOK } from '../../../../utils/constants/icon.constant';
import { TP_ION_ICON } from '../utils/icon.constant';
import { TpIonIcon } from '../utils/icon.type';

defineCustomElementIcon();

const meta: Meta<Components.IonIcon & TpIonIcon> = {
  title: 'components/Ionic/Icon',
  argTypes: {
    src: {
      control: { type: 'select' },
      options: [...TP_ICONS_STORYBOOK],
      description: 'Define o path e nome do icone.',
    },
    'tp-size': {
      control: { type: 'select' },
      options: [...TP_ION_ICON['tp-size']],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_ICON['tp-size'].join('|'),
        },
      },
    },
  },
  args: {
    src: `${TP_ICONS_STORYBOOK[0]}`,
  },
};

export default meta;

type Story = StoryObj<Components.IonIcon & TpIonIcon>;

export const Icons: Story = {
  render: ({ ...args }) => {
    const iconUrl = `./assets/${args.src}`;

    return html`
    <ion-icon
      color="${args.color}"
      tp-size="${args['tp-size']}"
      src="${iconUrl}"
    ></ion-icon>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-icon/gi)).toBeTruthy();
  }, */
};
