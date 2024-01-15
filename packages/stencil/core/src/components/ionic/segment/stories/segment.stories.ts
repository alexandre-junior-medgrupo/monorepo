import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementLabel } from '@ionic/core/components/ion-label';
import { defineCustomElement as defineCustomElementSegment } from '@ionic/core/components/ion-segment';
import { defineCustomElement as defineCustomElementSegmentButton } from '@ionic/core/components/ion-segment-button';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { TpIonSegment } from '../utils/segment.type';

defineCustomElementSegment();
defineCustomElementSegmentButton();
defineCustomElementLabel();

const meta: Meta<Components.IonSegment & TpIonSegment> = {
  title: 'components/Ionic/Segment',
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Define a estilização do estado disabled do componente.',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Components.IonSegment & TpIonSegment>;

export const Default: Story = {
  render: ({ ...args }) => {
    setTimeout(() => {
      const setTpColor = () => {
        const segments = document.querySelectorAll('ion-segment');

        segments.forEach((segment) => {
          if (args['color']) {
            segment.setAttribute('color', args['color']);
          }

          if (!args['color']) {
            segment.removeAttribute('color');
          }
        });
      };

      const removeClassSegmentButton = () => {
        const segmentsButtons = document.querySelectorAll('ion-segment-button');

        segmentsButtons.forEach((segmentButton) => {
          if (segmentButton.parentElement.hasAttribute('color')) {
            segmentButton.classList.add('in-segment-color');
          }

          if (!segmentButton.parentElement.hasAttribute('color')) {
            segmentButton.classList.remove('in-segment-color');
          }
        });
      };

      if (args['color'] || !args['color']) {
        setTpColor();
        removeClassSegmentButton();
      }
    }, 100);

    return html`
      <tp-segment-container>
        <ion-segment ?disabled="${args.disabled}" value="segment-1">
          <ion-segment-button value="segment-1">
            <ion-label>Tabs 1</ion-label>
          </ion-segment-button>

          <ion-segment-button value="segment-2">
            <ion-label>Tabs 2</ion-label>
          </ion-segment-button>

          <ion-segment-button value="segment-3">
            <ion-label>Tabs 3</ion-label>
          </ion-segment-button>

          <ion-segment-button value="segment-4">
            <ion-label>Tabs 4</ion-label>
          </ion-segment-button>

          <ion-segment-button value="segment-5">
            <ion-label>Tabs 5</ion-label>
          </ion-segment-button>

          <ion-segment-button value="segment-6">
            <ion-label>Tabs 6</ion-label>
          </ion-segment-button>

          <ion-segment-button value="segment-7">
            <ion-label>Tabs 7</ion-label>
          </ion-segment-button>

          <ion-segment-button value="segment-8">
            <ion-label>Tabs 8</ion-label>
          </ion-segment-button>

          <ion-segment-button value="segment-9">
            <ion-label>Tabs 9</ion-label>
          </ion-segment-button>
        </ion-segment>
      </tp-segment-container>
    `;
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ion-segment/gi)).toBeTruthy();
  }, */
};
