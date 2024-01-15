import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import {
  defineCustomElement as defineCustomElementTabBar,
  IonTabBar,
} from '@ionic/core/components/ion-tab-bar';
import {
  defineCustomElement as defineCustomElementTabButton,
  IonTabButton,
} from '@ionic/core/components/ion-tab-button';
import { defineCustomElement as defineCustomElementTabs } from '@ionic/core/components/ion-tabs';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonTabBar } from '../utils/tab-bar.type';

defineCustomElementTabs();
defineCustomElementTabBar();
defineCustomElementTabButton();
defineCustomElementLabel();
defineCustomElementIcon();

const meta: Meta<Components.IonTabs & IonTabBar & IonTabButton & TpIonTabBar> =
  {
    title: 'components/Ionic/Tab-bar',
    argTypes: {
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

type Story = StoryObj<
  Components.IonTabs & IonTabBar & IonTabButton & TpIonTabBar
>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-tabs>
      <ion-tab tab="tab1">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab2">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab3">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab4">
        <ion-nav></ion-nav>
      </ion-tab>
      <ion-tab tab="tab5">
        <ion-nav></ion-nav>
      </ion-tab>

      <ion-tab-bar color="${args.color}" slot="bottom">
        <ion-tab-button tab="tab1" ?disabled="${args.disabled}" selected>
          <ion-icon src="./assets/tp-check-square.svg"></ion-icon>
          <ion-label>Questão</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" ?disabled="${args.disabled}">
          <ion-icon src="./assets/tp-chat-2.svg"></ion-icon>
          <ion-label>Gabarito Comentado</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" ?disabled="${args.disabled}">
          <ion-icon src="./assets/tp-grid.svg"></ion-icon>
          <ion-label>Cartão Resposta</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" ?disabled="${args.disabled}">
          <ion-icon src="./assets/tp-help-circle.svg"></ion-icon>
          <ion-label>Dúvidas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" ?disabled="${args.disabled}">
          <ion-icon src="./assets/tp-hourglass.svg"></ion-icon>
          <ion-label>Recursos</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-tab-bar/gi)).toBeTruthy();
  }, */
};
