import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementToast } from '@ionic/core/components/ion-toast';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_TOAST } from '../../utils/toast.constants';
import { TpIonToast } from '../../utils/toast.type';

defineCustomElementToast();
defineCustomElementButton();

const meta: Meta<Components.IonToast & TpIonToast> = {
  title: 'components/Ionic/Toast/Ionic-7',
  argTypes: {
    'tp-size': {
      control: 'check',
      options: [...TP_ION_TOAST['tp-size']],
      description: `Define o estado warning do componente.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_TOAST['tp-size'].join('|'),
        },
      },
    },
    'tp-reverse': {
      control: 'boolean',
      description: `Define a posição do icon do componente`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    icon: {
      control: 'text',
      description: 'Define o icon a ser exibido no componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'text',
        },
      },
    },
    message: {
      control: 'text',
      description: 'Define o texto a ser exibido no componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'text',
        },
      },
    },
    duration: {
      control: 'number',
      description: 'Define o tempo em milisegundos de exibição do componente.',
      table: {
        defaultValue: {
          summary: '3000',
        },
        type: {
          summary: 'number',
        },
      },
    },
  },
  args: {
    duration: 300000,
    message: 'Este toast desaparecerá em 3 segundos',
    icon: './assets/tp-star.svg',
  },
};

export default meta;

type Story = StoryObj<Components.IonToast & TpIonToast>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-button id="open-toast">Toast</ion-button>
    <ion-toast
      trigger="open-toast"
      icon="${args.icon}"
      message="${args.message}"
      color="${args.color}"
      duration="${args.duration}"
      tp-size="${args['tp-size']}"
      ?tp-reverse="${args['tp-reverse']}"
    ></ion-toast>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-toast/gi)).toBeTruthy();
  }, */
};
