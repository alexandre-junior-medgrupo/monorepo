import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { defineCustomElement as defineCustomElementSkeletonText } from '@ionic/core/components/ion-skeleton-text';
import { defineCustomElement as defineCustomElementText } from '@ionic/core/components/ion-text';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpButtonCluster } from '../button-cluster';

defineCustomElementSkeletonText();
defineCustomElementText();
defineCustomElementIcon();

const meta: Meta<TpButtonCluster> = {
  component: 'TpButtonCluster',
  title: 'components/Templarios/Button cluster',
  decorators: [withActions as any],
  parameters: {
    actions: {
      handles: ['tpButtonClusterCollapsed'],
    },
  },
  argTypes: {
    collapsed: {
      control: 'boolean',
      description: 'Define a variação de estado do componente.',
      table: {
        defaultValue: {
          summary: 'true',
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
    collapsed: true,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`
      <tp-button-cluster
        color="${args.color}"
        ?collapsed="${args.collapsed}"
        ?loading="${args.loading}"
      >
        <tp-text slot="expand-text" tp-type="p12">Expandir a lista</tp-text>
        <tp-text slot="collapse-text" tp-type="p12">Ocultar a lista</tp-text>
      </tp-button-cluster>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-button-cluster/gi)).toBeTruthy();
  }, */
};
