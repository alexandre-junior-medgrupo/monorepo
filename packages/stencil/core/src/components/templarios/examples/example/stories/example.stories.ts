import { defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { defineCustomElement as defineCustomElementRadio } from '@ionic/core/components/ion-radio';
import { defineCustomElement as defineCustomElementRadioGroup } from '@ionic/core/components/ion-radio-group';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_ICONS_STORYBOOK } from '../../../../../utils/constants/icon.constant';

defineCustomElementButton();
defineCustomElementRadioGroup();
defineCustomElementRadio();
defineCustomElementText();
defineCustomElementIcon();

const meta: Meta = {
  title: 'components/Templarios/Example',
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...TP_ICONS_STORYBOOK],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ ...args }) => {
    const iconUrl = args.icon ? `./assets/${args.icon}` : null;
    return html`<tp-example
      .color="${args.color}"
      .icon="${iconUrl}"
    ></tp-example>`;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/playground/gi)).toBeTruthy();
  }, */
};
