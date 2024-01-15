import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementDatetime } from '@ionic/core/components/ion-datetime';
import {
  defineCustomElement as defineCustomElementDatetimeButton,
  IonDatetimeButton,
} from '@ionic/core/components/ion-datetime-button';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from 'src/components/templarios/input-container/input-container';
import { TP_INPUT_CONTAINER } from '../../../utils/input-container.constants';

defineCustomElementDatetime();
defineCustomElementDatetimeButton();
defineCustomElementButton();
defineCustomElementIcon();
defineCustomElementLabel();

const meta: Meta<
  Components.IonDatetime & IonDatetimeButton & TpInputContainer
> = {
  title: 'components/Templarios/Input Container/Datetime/Ionic-6',
  argTypes: {
    presentation: {
      control: 'select',
      options: ['time'],
      description: 'Define o mode de apresentação do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'Time',
        },
      },
    },
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
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  args: {
    presentation: 'date',
  },
};

export default meta;

type Story = StoryObj<
  Components.IonDatetime & IonDatetimeButton & TpInputContainer
>;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`
    <tp-input-container
      color="${args.color}"
      state="${args.state}"
      ?disabled="${args.disabled}"
    >
      <ion-label slot="label" tp-type="p14">Descrição Datetime</ion-label>
      <ion-datetime-button
        mode="ios"
        datetime="datetime"
      ></ion-datetime-button>
      <ion-icon src="./assets/tp-calendar.svg"></ion-icon>
      <ion-label slot="feedback-error" tp-type="p14">
        *Caracteres invalidos.
      </ion-label>
      <ion-label slot="feedback-success" tp-type="p14">
        *Caracteres validos
      </ion-label>
      <ion-modal keepContentsMounted="true">
        <ion-datetime
          mode="md"
          id="datetime"
          presentation=${args.presentation}
          prefer-wheel="true"
        >
          <div slot="title">
            <ion-button fill="clear" size="xxs">
              <ion-label tp-type="p12b">CANCELAR</ion-label>
            </ion-button>
            <ion-button fill="clear" size="xxs">
              <ion-label tp-type="p12b">SELECIONAR</ion-label>
            </ion-button>
          </div>
        </ion-datetime>
      </ion-modal>
    </tp-input-container>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-datetime/gi)).toBeTruthy();
  }, */
};
