import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpHorizontalChartBar } from '../../horizontal-chart-bar';
import { TP_HORIZONTAL_CHART_BAR } from '../../utils/horizontal-chart-bar.constant';

defineCustomElementLabel();
defineCustomElementSkeletonText();

//
// !IMPORTANT! med-chart-bar-horizontal
//

const meta: Meta<TpHorizontalChartBar> = {
  title: 'components/Templarios/Horizontal-Chart-bar/Compositions',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 150, step: 1 },
      description: 'Define o valor da barra de progresso.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    maxCount: {
      control: { type: 'number', min: 1, max: 150 },
      description: 'Define o valor máximo da barra de progresso.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    size: {
      control: { type: 'check' },
      options: [...TP_HORIZONTAL_CHART_BAR['sizes']],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: TP_HORIZONTAL_CHART_BAR['sizes'].join('|'),
        },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Define o estado de carregamento do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  args: {
    value: 0,
    maxCount: 100,
  },
};

export default meta;

type Story = StoryObj<TpHorizontalChartBar>;

export const Label: Story = {
  render: ({ ...args }) => {
    const renderedValue = Math.round((args.value / args.maxCount) * 100);

    return html`
    <tp-horizontal-chart-bar
      value="${args.value}"
      .size="${args.size}"
      .color="${args.color}"
      max-count="${args.maxCount}"
      ?loading="${args.loading}"
    >
      <ion-label
        tp-type="${args.size ? 'p12b' : 'p10b'}"
        color="${args.color ? args.color : 'brand-4'}"
      >
        ${renderedValue}%
      </ion-label>
    </tp-horizontal-chart-bar>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
