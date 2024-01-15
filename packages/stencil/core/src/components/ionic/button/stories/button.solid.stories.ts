import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_BUTTON } from '../utils/button.constant';
import { TpIonButton } from '../utils/button.type';

defineCustomElementButton();
defineCustomElementIcon();

const meta: Meta<Components.IonButton & Components.IonIcon & TpIonButton> = {
  title: 'components/Ionic/Button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_ION_BUTTON.solid.size],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_BUTTON.solid.size.join('|'),
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

type Story = StoryObj<Components.IonButton & Components.IonIcon & TpIonButton>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-button
      color="${args.color}"
      size="${args.size}"
      ?disabled="${args.disabled}"
    >
      ion-button
    </ion-button>

    <ion-button
      color="${args.color}"
      size="${args.size}"
      ?disabled="${args.disabled}"
    >
      <ion-icon slot="start" src="./assets/tp-chevron-left.svg"></ion-icon>
      ion-button
    </ion-button>

    <ion-button
      color="${args.color}"
      size="${args.size}"
      ?disabled="${args.disabled}"
    >
      <ion-icon slot="end" src="./assets/tp-chevron-right.svg"></ion-icon>
      ion-button
    </ion-button>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};
