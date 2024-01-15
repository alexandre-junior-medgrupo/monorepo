import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPE } from '../../../../utils/constants/type.constant';
import { TpIonText } from '../utils/text.type';

defineCustomElement();

const meta: Meta<Components.IonText & TpIonText> = {
  title: 'components/Ionic/Text',
  argTypes: {
    ['tp-type']: {
      control: { type: 'select' },
      options: [...TP_TYPE],
      description: 'Define a estilização do texto do componente.',
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

type Story = StoryObj<Components.IonText & TpIonText>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-text color="${args.color}" tp-type="${args['tp-type']}">
      <h1>Lorem ipsum, dolor sit amet consectetur.</h1>
    </ion-text>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-text/gi)).toBeTruthy();
  }, */
};
