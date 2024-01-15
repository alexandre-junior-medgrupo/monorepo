import { Component, Host, Prop, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class TpAlert {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  render() {
    const { color, loading } = this;

    let content;

    if (loading) {
      content = (
        <ion-skeleton-text
          class="tp-alert__skeleton"
          animated
        ></ion-skeleton-text>
      );
    } else {
      content = (
        <div class="tp-alert__container">
          <slot name="icon" />
          <slot name="text" />
        </div>
      );
    }

    return (
      <Host
        class={createColorClasses(color, {
          'tp-alert': true,
          'tp-alert--loading': loading,
        })}
      >
        {content}
      </Host>
    );
  }
}
