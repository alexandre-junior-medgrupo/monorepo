import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-range';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonRange } from '../utils/range.type';

defineCustomElement();

const meta: Meta<Components.IonRange & TpIonRange> = {
  title: 'components/Ionic/Range',
  argTypes: {
    ['tp-secondary']: {
      control: { type: 'boolean' },
      description: 'Define a variação do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'Secondary',
        },
      },
    },
    ticks: {
      control: 'boolean',
      description: 'Define se o componente terá ticks em sua extensão.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    snaps: {
      control: 'boolean',
      description:
        'Se ticks for ativado este atributo deve ser juntamente ativado.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    min: {
      control: 'number',
      description: 'Define o valor inteiro mínimo do intervalo de ticks.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    max: {
      control: 'number',
      description: 'Define o valor inteiro máximo do intervalo de ticks.',
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
    ticks: true,
    snaps: true,
    min: 0,
    max: 10,
  },
};

export default meta;

type Story = StoryObj<Components.IonRange & TpIonRange>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-range
      color="${args.color}"
      ?tp-secondary="${args['tp-secondary']}"
      aria-label="volume"
    ></ion-range>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-range/gi)).toBeTruthy();
  }, */
};

export const Ticks: Story = {
  render: ({ ...args }) => html`
    <ion-range
      color="${args.color}"
      ?tp-secondary="${args['tp-secondary']}"
      aria-label="volume"
      ?ticks="${args.ticks}"
      ?snaps="${args.snaps}"
      min="${args.min}"
      max="${args.max}"
    ></ion-range>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-range/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  ticks: { table: { disable: true } },
  snaps: { table: { disable: true } },
  min: { table: { disable: true } },
  max: { table: { disable: true } },
};
