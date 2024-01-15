import { Component, Host, Prop, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';
import { TpHorizontalChartBarSize } from './utils/horizontal-chart-bar.enum';

@Component({
  tag: 'tp-horizontal-chart-bar',
  styleUrl: 'horizontal-chart-bar.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpHorizontalChartBar {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a variação de tamanho do componente.
   */
  @Prop({ reflect: true }) size?: TpHorizontalChartBarSize;

  /**
   * Define o valor da barra de progresso.
   */
  @Prop({ reflect: true }) value = 0;

  /**
   * Define o valor máximo da barra de progresso.
   */
  @Prop({ reflect: true }) maxCount = 100;

  /**
   * Define se um slot será disponibilizado para receber o label do chart.
   */
  @Prop({ reflect: true }) noLabel = false;

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  render() {
    const { color, size, value, maxCount, noLabel, loading } = this;
    const percentage = Math.min(Math.max(0, (value / maxCount) * 100), 100);

    const content = loading ? (
      <div class="tp-horizontal-chart-bar__container">
        <ion-skeleton-text
          class="tp-horizontal-chart-bar__track tp-horizontal-chart-bar__track--skeleton"
          animated
        ></ion-skeleton-text>

        {!noLabel && (
          <ion-skeleton-text
            class="tp-horizontal-chart-bar__label-container tp-horizontal-chart-bar__label-container--skeleton"
            animated
          ></ion-skeleton-text>
        )}
      </div>
    ) : (
      <div class="tp-horizontal-chart-bar__container">
        <div class="tp-horizontal-chart-bar__track">
          <div class="tp-horizontal-chart-bar__progress"></div>
        </div>

        {!noLabel && (
          <div class="tp-horizontal-chart-bar__label-container">
            <slot></slot>
          </div>
        )}
      </div>
    );

    return (
      <Host
        class={createColorClasses(color, {
          'tp-horizontal-chart-bar': true,
          'tp-horizontal-chart-bar--spill': percentage >= 100,
          [`tp-horizontal-chart-bar--${size}`]: Boolean(size),
        })}
        style={{ '--tp-fill-percentage': `${percentage}%` }}
      >
        {content}
      </Host>
    );
  }
}
