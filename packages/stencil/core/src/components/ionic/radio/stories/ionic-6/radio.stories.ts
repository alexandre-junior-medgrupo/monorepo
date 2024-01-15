import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementRadio } from '@ionic/core/components/ion-radio';
import {
  defineCustomElement as defineCustomElementRadioGroup,
  IonRadioGroup,
} from '@ionic/core/components/ion-radio-group';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElementRadio();
defineCustomElementRadioGroup();

const meta: Meta<Components.IonRadio & IonRadioGroup> = {
  title: 'components/Ionic/Radio/Ionic-6',
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

type Story = StoryObj<Components.IonRadio & IonRadioGroup>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-radio-group>
      <ion-radio
        color="${args.color}"
        ?disabled="${args.disabled}"
        value="1"
      ></ion-radio>
      <ion-radio
        color="${args.color}"
        ?disabled="${args.disabled}"
        value="2"
      ></ion-radio>
    </ion-radio-group>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-radio/gi)).toBeTruthy();
  }, */
};
