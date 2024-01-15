import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-toggle';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonToggle } from '../../utils/toggle.type';

defineCustomElement();

const meta: Meta<Components.IonToggle & TpIonToggle> = {
  title: 'components/Ionic/Toggle/Ionic-7',
  argTypes: {
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

type Story = StoryObj<Components.IonToggle & TpIonToggle>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-toggle
      mode="ios"
      color="${args.color}"
      ?disabled="${args.disabled}"
    ></ion-toggle>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-toggle/gi)).toBeTruthy();
  }, */
};
