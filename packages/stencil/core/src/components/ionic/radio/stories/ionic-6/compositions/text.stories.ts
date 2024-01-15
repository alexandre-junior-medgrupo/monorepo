import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementRadio } from '@ionic/core/components/ion-radio';
import {
  defineCustomElement as defineCustomElementRadioGroup,
  IonRadioGroup,
} from '@ionic/core/components/ion-radio-group';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPE } from '../../../../../../utils/constants/type.constant';
import { TpIonText } from '../../../../text/utils/text.type';

defineCustomElementRadio();
defineCustomElementRadioGroup();
defineCustomElementText();

const meta: Meta<Components.IonRadio & IonRadioGroup & TpIonText> = {
  title: 'components/Ionic/Radio/Ionic-6/Compositions',
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
    ['tp-type']: {
      control: { type: 'select' },
      options: [...TP_TYPE],
      description: `Define a estilização do texto do componente **'ion-text'**.

**OBS**: Atributo referente ao componente **'ion-text'**.
`,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_TYPE.join('|'),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonRadio & IonRadioGroup & TpIonText>;

export const Text: Story = {
  render: ({ ...args }) => html`
    <ion-radio-group>
      <ion-item>
        <ion-radio
          slot="start"
          color="${args.color}"
          ?disabled="${args.disabled}"
          value="1"
        ></ion-radio>
        <ion-label tp-type="${args['tp-type']}">
          Lorem ipsum, dolor sit amet consectetur.
        </ion-label>
      </ion-item>

      <ion-item>
        <ion-radio
          slot="start"
          color="${args.color}"
          ?disabled="${args.disabled}"
          value="2"
        ></ion-radio>
        <ion-label tp-type="${args['tp-type']}">
          Lorem ipsum, dolor sit amet consectetur.
        </ion-label>
      </ion-item>

      <ion-item>
        <ion-radio
          slot="start"
          color="${args.color}"
          ?disabled="${args.disabled}"
          value="3"
        ></ion-radio>
        <ion-label tp-type="${args['tp-type']}">
          Lorem ipsum, dolor sit amet consectetur.
        </ion-label>
      </ion-item>
    </ion-radio-group>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-radio/gi)).toBeTruthy();
  }, */
};
