import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpLoader } from '../loader';
import { TP_LOADER } from '../utils/loader.constants';
import { TpLoaderName } from '../utils/loader.enum';
import { TpLoaderType } from '../utils/loader.type';

const meta: Meta<TpLoader & TpLoaderType> = {
  title: 'components/Templarios/Loader',
  argTypes: {
    ['tp-name']: {
      control: { type: 'select' },
      options: [...TP_LOADER['tp-name']],
      description: 'Define a variação do componente.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'secondary',
        },
      },
    },
    fixed: {
      control: 'boolean',
      description: `Define a posição do componente.

**OBS**: O atributo **fixed** não está disponível quando o **tp-name="${TpLoaderName.SECONDARY}"** .`,
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
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ ...args }) => {
    return html`
    <tp-loader
      color="${args.color}"
      ?fixed="${args.fixed}"
      tp-name="${args['tp-name']}"
    ></tp-loader>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tp-loader/gi)).toBeTruthy();
  }, */
};
