import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import { defineCustomElement as defineCustomElementToggle } from '@ionic/core/components/ion-toggle';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPE } from '../../../../../../utils/constants/type.constant';
import { TpIonText } from '../../../../text/utils/text.type';
import { TpIonToggle } from '../../../utils/toggle.type';

defineCustomElementToggle();
defineCustomElementText();

const meta: Meta<Components.IonToggle & TpIonToggle & TpIonText> = {
  title: 'components/Ionic/Toggle/Ionic-7/Compositions',
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

type Story = StoryObj<Components.IonToggle & TpIonToggle & TpIonText>;

export const Text: Story = {
  render: ({ ...args }) => html`
    <ion-toggle mode="ios" color="${args.color}" ?disabled="${args.disabled}">
      <ion-text tp-type="${args['tp-type']}">
        Lorem ipsum, dolor sit amet consectetur.
      </ion-text>
    </ion-toggle>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-toggle/gi)).toBeTruthy();
  }, */
};
