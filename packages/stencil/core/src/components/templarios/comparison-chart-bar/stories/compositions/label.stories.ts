import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpComparisonChartBar } from '../../comparison-chart-bar';

defineCustomElementLabel();
defineCustomElementSkeletonText();

//
// !IMPORTANT! Antigo tp-chart-bar
//

const meta: Meta<TpComparisonChartBar> = {
  title: 'components/Templarios/Comparison Chart Bar/Compositions',
  argTypes: {
    containerHeight: {
      control: { type: 'number', min: 1 },
      description: 'Define a altura do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
        },
      },
    },
    barValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
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
    hasMarker: {
      control: 'boolean',
      description: "Se 'true' o componente vai renderizar o marker.",
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    markerValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Define a posição do marker na coluna.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'number',
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
    containerHeight: 200,
    barValue: 0,
    hasMarker: false,
    markerValue: 0,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<TpComparisonChartBar>;

export const Label: Story = {
  render: ({ ...args }) => html`
    <tp-comparison-chart-bar
      color="${args.color}"
      container-height="${args.containerHeight}"
      bar-value="${args.barValue}"
      ?has-marker="${args.hasMarker}"
      marker-value="${args.markerValue}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
    >
      <ion-label tp-type="p10" color="neutral-95">Label</ion-label>
    </tp-comparison-chart-bar>
  `,
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-test/gi)).toBeTruthy();
  }, */
};
