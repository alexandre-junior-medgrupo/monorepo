import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementCheckbox } from '@ionic/core/components/ion-checkbox';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TP_TYPE } from '../../../../../../utils/constants/type.constant';
import { TpIonText } from '../../../../text/utils/text.type';
import { TpIonCheckbox } from '../../../utils/checkbox.type';

defineCustomElementCheckbox();
defineCustomElementText();

const meta: Meta<Components.IonCheckbox & TpIonCheckbox & TpIonText> = {
  title: 'components/Ionic/Checkbox/Ionic-7/Compositions',
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Define a estilização do estado checked do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Define a estilização do estado indeterminate do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
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

type Story = StoryObj<Components.IonCheckbox & TpIonCheckbox & TpIonText>;

export const Label: Story = {
  render: ({ ...args }) => html`
    <ion-checkbox
      color="${args.color}"
      ?checked="${args.checked}"
      ?indeterminate="${args.indeterminate}"
      ?disabled="${args.disabled}"
    >
      <ion-text tp-type="${args['tp-type']}">
        Lorem ipsum, dolor sit amet consectetur.
      </ion-text>
    </ion-checkbox>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-checkbox/gi)).toBeTruthy();
  }, */
};
