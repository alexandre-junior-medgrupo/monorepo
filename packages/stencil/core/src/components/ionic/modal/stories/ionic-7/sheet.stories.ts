import { Components, modalController } from '@ionic/core';
import {
  IonButton,
  defineCustomElement as defineCustomElementButton,
} from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { defineCustomElement as defineCustomElementModal } from '@ionic/core/components/ion-modal';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BreakPointPixelEnum } from '../../../../../utils/enums/breakpoint.enum';
import { BreakpointUtils } from '../../../../../utils/functions/breakpoint.function';
import {
  sheetEnterAnimationDesktop,
  sheetEnterAnimationMobile,
  sheetLeaveAnimationDesktop,
  sheetLeaveAnimationMobile,
} from '../../utils/modal.functions';

defineCustomElementModal();
defineCustomElementButton();
defineCustomElementIcon();

const meta: Meta<Components.IonModal & IonButton> = {
  title: 'components/Ionic/Modal/Ionic-7/Sheet',
  argTypes: {},
};

export default meta;

type Story = StoryObj<Components.IonModal & IonButton>;

const openSheet = async () => {
  const modal = await modalController.create({
    component: 'sheet-example',
    cssClass: 'tp-sheet',
    enterAnimation: BreakpointUtils.mediaQueryDown(BreakPointPixelEnum.SM)
      ? sheetEnterAnimationMobile
      : sheetEnterAnimationDesktop,
    leaveAnimation: BreakpointUtils.mediaQueryDown(BreakPointPixelEnum.SM)
      ? sheetLeaveAnimationMobile
      : sheetLeaveAnimationDesktop,
  });

  await modal.present();
};

export const Default: Story = {
  render: () => {
    return html`
      <ion-button id="open-modal" @click="${openSheet}">
        Abrir Sheet
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
