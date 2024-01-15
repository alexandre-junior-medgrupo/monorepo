import { Component, Host, Prop, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-chart-bar',
  styleUrl: 'chart-bar.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpChartBar {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define o valor do preenchimento do componente.
   */
  @Prop({ reflect: true }) value = 0;

  /**
   * Define a largura do componente.
   */
  @Prop({ reflect: true }) width = 32;

  /**
   * Define a altura do componente.
   */
  @Prop({ reflect: true }) height = 50;

  /**
   * Define se um slot será disponibilizado para receber o label do chart.
   */
  @Prop({ reflect: true }) noLabel = false;

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  render() {
    const { color, value, height, width, noLabel, loading } = this;

    const percentage = (height * Math.min(Math.max(0, value), 100)) / 100;

    let content;

    if (loading) {
      content = (
        <div class="tp-chart-bar__container">
          {!noLabel && (
            <ion-skeleton-text
              class="tp-chart-bar__label-skeleton"
              animated
            ></ion-skeleton-text>
          )}
          <ion-skeleton-text
            class="tp-chart-bar__skeleton"
            animated
          ></ion-skeleton-text>
        </div>
      );
    } else {
      content = (
        <div class="tp-chart-bar__container">
          {!noLabel && (
            <div class="tp-chart-bar__label">
              <slot></slot>
            </div>
          )}

          <div class="tp-chart-bar__progress"></div>
        </div>
      );
    }

    return (
      <Host
        class={createColorClasses(color, {
          'tp-chart-bar': true,
          'tp-chart-bar--no-label': noLabel,
          'tp-chart-bar--loading': loading,
        })}
        style={{
          '--value': `${percentage}`,
          '--height': `${height}`,
          '--width': `${width}`,
        }}
      >
        {content}
      </Host>
    );
  }
}
