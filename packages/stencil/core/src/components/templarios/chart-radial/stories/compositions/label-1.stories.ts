import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpChartRadial } from '../../chart-radial';
import { TP_CHART_RADIAL } from '../../utils/chart-radial.constant';

defineCustomElementLabel();

const meta: Meta<TpChartRadial> = {
  title: 'components/Templarios/Chart radial/Compositions',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [...TP_CHART_RADIAL['sizes']],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: TP_CHART_RADIAL['sizes'].join('|') },
      },
    },
    items: {
      description: 'Define os valores representados pelo componente.',
      control: { type: 'array' },
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'TpChartRadialItem[]' },
      },
    },
  },
  args: {
    items: [
      {
        color: 'brand-4',
        label: 'acertos',
        quantity: 65,
        ignore: false,
      },
      {
        color: undefined,
        label: 'restantes',
        quantity: 35,
        ignore: true,
      },
    ],
  },
};

export default meta;

type Story = StoryObj<TpChartRadial>;

export const Label_1: Story = {
  render: ({ ...args }) => {
    setTimeout(() => {
      const host = document.querySelector('tp-chart-radial');
      host.items = args.items;
    }, 0);

    return html`
    <tp-chart-radial color="${args.color}" size="${args.size}">
      <ion-label slot="title">65%</ion-label>
    </tp-chart-radial>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
