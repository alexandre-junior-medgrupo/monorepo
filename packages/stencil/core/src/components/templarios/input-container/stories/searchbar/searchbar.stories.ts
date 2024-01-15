import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementSearchbar } from '@ionic/core/components/ion-searchbar';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from '../../input-container';
import { TP_INPUT_CONTAINER } from '../../utils/input-container.constants';

defineCustomElementSearchbar();
defineCustomElementLabel();

const meta: Meta<Components.IonSearchbar & TpInputContainer> = {
  title: 'components/Templarios/Input Container/Searchbar',
  component: 'ion-searchbar',
  argTypes: {
    state: {
      control: { type: 'select' },
      options: [...TP_INPUT_CONTAINER.state],
      description: 'Define o estado do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_INPUT_CONTAINER.state.join('|'),
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Define a estilização do estado disabled do componente.',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonSearchbar & TpInputContainer>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <tp-input-container
      color="${args.color}"
      state="${args.state}"
      ?disabled="${args.disabled}"
    >
      <ion-label slot="label" tp-type="p14">Descrição Searchbar</ion-label>
      <ion-searchbar
        mode="md"
        search-icon="./../../../../assets/tp-search.svg"
        clear-icon="./../../../../assets/tp-x.svg"
        placeholder="Lorem ipsum dolor"
      ></ion-searchbar>
      <ion-label slot="feedback-error" tp-type="p14">
        *Caracteres invalidos.
      </ion-label>
      <ion-label slot="feedback-success" tp-type="p14">
        *Caracteres validos
      </ion-label>
    </tp-input-container>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-searchbar/gi)).toBeTruthy();
  }, */
};
