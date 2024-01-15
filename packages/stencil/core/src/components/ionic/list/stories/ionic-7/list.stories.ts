import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import {
  defineCustomElement as defineCustomElementItem,
  IonItem,
} from '@ionic/core/components/ion-item';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementList } from '@ionic/core/components/ion-list';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ION_LIST } from '../../utils/list.constant';
import { TpIonList } from '../../utils/list.type';

defineCustomElementList();
defineCustomElementItem();
defineCustomElementLabel();
defineCustomElementIcon();

const meta: Meta<Components.IonList & IonItem & TpIonList> = {
  title: 'components/Ionic/List/Ionic-7',
  argTypes: {
    lines: {
      control: { type: 'check' },
      options: [...TP_ION_LIST.lines],
      description: 'Define uma borda no bottom do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_ION_LIST.lines.join('|'),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonList & IonItem & TpIonList>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-list lines="${args.lines}">
      <ion-item color="${args.color}">
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item color="${args.color}">
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
      </ion-item>

      <ion-item color="${args.color}">
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>

      <ion-item color="${args.color}">
        <ion-icon slot="start" src="./assets/tp-star.svg"></ion-icon>
        <ion-label>Ion Item</ion-label>
        <ion-icon slot="end" src="./assets/tp-star.svg"></ion-icon>
      </ion-item>
    </ion-list>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-list/gi)).toBeTruthy();
  }, */
};
