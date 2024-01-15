import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpHorizontalChartBar } from '../horizontal-chart-bar';
import { TP_HORIZONTAL_CHART_BAR } from '../utils/horizontal-chart-bar.constant';

defineCustomElementSkeletonText();

//
// !IMPORTANT! med-chart-bar-horizontal
//

const meta: Meta<TpHorizontalChartBar> = {
  title: 'components/Templarios/Horizontal Chart Bar',
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
      control: { type: 'number' },
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

export const Default: Story = {
  render: ({ ...args }) => html`
    <tp-horizontal-chart-bar
      value="${args.value}"
      .size="${args.size}"
      .color="${args.color}"
      max-count="${args.maxCount}"
      no-label
      ?loading="${args.loading}"
    >
    </tp-horizontal-chart-bar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
