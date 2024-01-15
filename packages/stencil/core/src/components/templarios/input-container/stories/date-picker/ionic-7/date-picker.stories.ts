import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementDatetime } from '@ionic/core/components/ion-datetime';
import {
  defineCustomElement as defineCustomElementDatetimeButton,
  IonDatetimeButton,
} from '@ionic/core/components/ion-datetime-button';
import { defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpInputContainer } from '../../../input-container';
import { TP_INPUT_CONTAINER } from '../../../utils/input-container.constants';

defineCustomElementDatetime();
defineCustomElementDatetimeButton();
defineCustomElementButton();
defineCustomElementIcon();
defineCustomElementLabel();

const meta: Meta<
  Components.IonDatetime & IonDatetimeButton & TpInputContainer
> = {
  title: 'components/Templarios/Input Container/Date-picker/Ionic-7',
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

type Story = StoryObj<
  Components.IonDatetime & IonDatetimeButton & TpInputContainer
>;

const openDatetime = () => {
  const datetime = document.getElementById('input-container');
  datetime.classList.add('tp-datetime-visible');
};

export const Default: Story = {
  render: ({ ...args }) => {
    return html`
      <tp-input-container
        id="input-container"
        state="${args.state}"
        ?disabled="${args.disabled}"
        @click=${openDatetime}
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

        <ion-datetime mode="md" id="datetime" presentation="date">
          <div slot="buttons">
            <ion-button fill="clear" size="xxs">
              <ion-label tp-type="p12b">Cancelar</ion-label>
            </ion-button>
            <ion-button fill="clear" size="xxs">
              <ion-label tp-type="p12b">Ok</ion-label>
            </ion-button>
          </div>
        </ion-datetime>
      </tp-input-container>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-badge/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  color: { table: { disable: true } },
};
