import { Component, Host, Prop, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-comparison-chart-bar',
  styleUrl: 'comparison-chart-bar.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpComparisonChartBar {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a altura do componente.
   */
  @Prop({ reflect: true }) containerHeight = 200;

  /**
   * Define o valor da barra de progresso.
   */
  @Prop({ reflect: true }) barValue = 0;

  /**
   * Se 'true' o componente vai renderizar o marker.
   */
  @Prop({ reflect: true }) hasMarker = false;

  /**
   * Define a posição do marker na coluna.
   */
  @Prop({ reflect: true }) markerValue = 0;

  /**
   * Define a estilização do estado disabled do componente.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Define se um slot será disponibilizado para receber o label do chart.
   */
  @Prop({ reflect: true }) noLabel = false;

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  render() {
    const {
      color,
      containerHeight,
      barValue,
      hasMarker,
      markerValue,
      noLabel,
      disabled,
      loading,
    } = this;

    let content;

    if (loading) {
      content = (
        <div>
          <div class="tp-comparison-chart-bar__container">
            <ion-skeleton-text
              class="tp-comparison-chart-bar__skeleton"
              animated
            ></ion-skeleton-text>
            {hasMarker && (
              <ion-skeleton-text
                class="tp-comparison-chart-bar__marker-skeleton"
                animated
              ></ion-skeleton-text>
            )}
          </div>
          {!noLabel && (
            <ion-skeleton-text
              class="tp-comparison-chart-bar__label-skeleton"
              animated
            ></ion-skeleton-text>
          )}
        </div>
      );
    } else {
      content = (
        <div>
          <div class="tp-comparison-chart-bar__container">
            <div class="tp-comparison-chart-bar__bar"></div>
            {hasMarker && <div class="tp-comparison-chart-bar__marker"></div>}
          </div>

          {!noLabel && (
            <div class="tp-comparison-chart-bar__label">
              <slot></slot>
            </div>
          )}
        </div>
      );
    }

    return (
      <Host
        class={createColorClasses(color, {
          'tp-comparison-chart-bar': true,
          'tp-comparison-chart-bar--disabled': disabled,
          'tp-comparison-chart-bar--has-marker': hasMarker,
          'tp-comparison-chart-bar--loading': loading,
        })}
        style={{
          '--tp-container-height': `${containerHeight}px`,
          '--tp-bar-value': `${barValue}%`,
          '--tp-marker-value': `${markerValue}%`,
        }}
      >
        {content}
      </Host>
    );
  }
}
