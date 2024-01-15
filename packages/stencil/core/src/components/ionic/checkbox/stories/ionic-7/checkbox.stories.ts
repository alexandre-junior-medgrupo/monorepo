import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementCheckbox } from '@ionic/core/components/ion-checkbox';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonCheckbox } from '../../utils/checkbox.type';

defineCustomElementCheckbox();

const meta: Meta<Components.IonCheckbox & TpIonCheckbox> = {
  title: 'components/Ionic/Checkbox/Ionic-7',
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Define a estilização do estado checked do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Define a estilização do estado indeterminate do componente.',
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

type Story = StoryObj<Components.IonCheckbox & TpIonCheckbox>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-checkbox
      color="${args.color}"
      ?checked="${args.checked}"
      ?indeterminate="${args.indeterminate}"
      ?disabled="${args.disabled}"
    ></ion-checkbox>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-checkbox/gi)).toBeTruthy();
  }, */
};
