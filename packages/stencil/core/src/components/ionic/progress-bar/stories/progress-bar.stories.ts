import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-progress-bar';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonProgressBar } from '../utils/progress-bar.type';

defineCustomElement();

const meta: Meta<Components.IonProgressBar & TpIonProgressBar> = {
  title: 'components/Ionic/Progress Bar',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: `Define a estilização do progresso do componente.`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
  },
  args: {
    value: 50,
  },
};

export default meta;

type Story = StoryObj<Components.IonProgressBar & TpIonProgressBar>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-progress-bar
      color="${args.color}"
      value="${args.value / 100}"
    ></ion-progress-bar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
  }, */
};
