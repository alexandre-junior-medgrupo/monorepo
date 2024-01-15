import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-badge';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_BADGE } from '../utils/badge.constant';
import { TpIonBadge } from '../utils/badge.type';

defineCustomElement();

const meta: Meta<Components.IonBadge & TpIonBadge> = {
  title: 'components/Ionic/Badge',
  argTypes: {
    'tp-size': {
      control: { type: 'check' },
      options: [...TP_ION_BADGE['tp-size']],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_BADGE['tp-size'].join('|'),
        },
      },
    },
    'tp-fill': {
      control: { type: 'check' },
      options: [...TP_ION_BADGE['tp-fill']],
      description: 'Define o preenchimento do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_BADGE['tp-fill'].join('|'),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonBadge & TpIonBadge>;

export const Default: Story = {
  render: ({ ...args }) =>
    html`
    <ion-badge
      color="${args.color}"
      tp-size="${args['tp-size']}"
      tp-fill="${args['tp-fill']}"
      >ion-badge</ion-badge
    >
    `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};
