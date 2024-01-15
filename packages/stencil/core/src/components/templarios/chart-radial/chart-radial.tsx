import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';
import { TpChartRadialSize } from './utils/chart-radial.enum';
import { TpChartRadialItem } from './utils/chart-radial.type';

@Component({
  tag: 'tp-chart-radial',
  styleUrl: 'chart-radial.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpChartRadial {
  @Element() host: HTMLElement;

  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a variação de tamanho do componente.
   */
  @Prop({ reflect: true }) size?: TpChartRadialSize;

  /**
   * Define os valores representados pelo componente.
   */
  @Prop({ reflect: true }) items: TpChartRadialItem[] = [];

  @Watch('items')
  updateTrackColors() {
    const progresses = this.host.shadowRoot.querySelectorAll<HTMLElement>(
      '.tp-chart-radial__progress',
    );

    progresses.forEach((progress) => {
      const itemIndex = Number(progress.dataset['index']);
      const item = this.items[itemIndex];
      progress.style.stroke = `var(--tp-color-${item.color})`;
    });
  }

  componentDidLoad() {
    this.updateTrackColors();
  }

  render() {
    const { color, size, items } = this;

    const progressesData = {
      total: 0,
      singles: [] as number[],
    };

    items.forEach((item: TpChartRadialItem) => {
      progressesData.total += item.quantity;
      progressesData.singles.push(progressesData.total);
    });

    const reversedItems = items.slice(0).reverse();

    return (
      <Host
        class={createColorClasses(color, {
          'tp-chart-radial': true,
          [`tp-chart-radial--${size}`]: Boolean(size),
        })}
      >
        <svg class="tp-chart-radial__container" viewBox="0 0 36 36">
          <circle class="tp-chart-radial__track" cx="18" cy="18" r="16" />
          {reversedItems.map((item: TpChartRadialItem, index: number) => {
            const originalIndex = items.length - index - 1;
            const progressPercentage =
              (progressesData.singles[originalIndex] / progressesData.total) *
              100;

            if (!item.ignore && item.quantity) {
              return (
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  data-index={originalIndex}
                  class="tp-chart-radial__progress"
                  style={{
                    '--tp-progress-percentage': `${progressPercentage}`,
                  }}
                />
              );
            }
          })}
        </svg>

        <div class="tp-chart-radial__text-container">
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </div>
      </Host>
    );
  }
}
