import { Components, modalController } from '@ionic/core';
import {
  IonButton,
  defineCustomElement as defineCustomElementButton,
} from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementModal } from '@ionic/core/components/ion-modal';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElementModal();
defineCustomElementButton();

const meta: Meta<Components.IonModal & IonButton> = {
  title: 'components/Ionic/Modal/Ionic-6/Dialog',
  argTypes: {},
};

export default meta;

type Story = StoryObj<Components.IonModal & IonButton>;

const openDialog = async () => {
  const modal = await modalController.create({
    component: 'dialog-example',
    cssClass: 'tp-dialog',
  });

  await modal.present();
};

export const Default: Story = {
  render: () => {
    return html`
      <ion-button id="open-modal" @click="${openDialog}">
        Abrir Dialog
      </ion-button>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-modal/gi)).toBeTruthy();
  }, */
};
Default.argTypes = {
  color: { table: { disable: true } },
};
