import { Components } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPE } from '../../../../utils/constants/type.constant';
import { TpIonLabel } from '../utils/label.type';

defineCustomElement();

const meta: Meta<Components.IonLabel & TpIonLabel> = {
  title: 'components/Ionic/Label',
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

type Story = StoryObj<Components.IonLabel & TpIonLabel>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-label color="${args.color}" tp-type="${args['tp-type']}">
      Lorem ipsum, dolor sit amet consectetur.
    </ion-label>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-label/gi)).toBeTruthy();
  }, */
};
