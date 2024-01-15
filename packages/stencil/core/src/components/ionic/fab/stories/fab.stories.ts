import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementFab } from '@ionic/core/components/ion-fab';
import {
  defineCustomElement as defineCustomElementFabButton,
  IonFabButton,
} from '@ionic/core/components/ion-fab-button';
import {
  defineCustomElement as defineCustomElementFabList,
  IonFabList,
} from '@ionic/core/components/ion-fab-list';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonFab } from '../utils/fab.type';

defineCustomElementFab();
defineCustomElementFabList();
defineCustomElementFabButton();
defineCustomElementIcon();

const meta: Meta<Components.IonFab & IonFabButton & IonFabList & TpIonFab> = {
  title: 'components/Ionic/Fab',
  argTypes: {},
};

export default meta;

type Story = StoryObj<Components.IonFab & IonFabButton & IonFabList & TpIonFab>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-fab slot="fixed" horizontal="center" vertical="center">
      <ion-fab-button color="${args.color}">
        <ion-icon src="./assets/tp-plus.svg"></ion-icon>
      </ion-fab-button>

      <ion-fab-list side="top">
        <ion-fab-button>
          <ion-icon src="./assets/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./assets/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./assets/tp-star.svg"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon src="./assets/tp-star.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-fab/gi)).toBeTruthy();
  }, */
};
