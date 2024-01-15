import { Component, h, Host, Method, Prop } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-tooltip',
  styleUrl: 'tooltip.scss',
  scoped: true,
})
export class TpTooltip {
  /**
   * todo
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Habilita o toggle no hover.
   */
  @Prop() hover?: boolean;

  /**
   * Define posicionamento em relação ao componente parent.
   */
  @Prop({ reflect: true }) placement?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Define posicionamento horizontal do componente.
   */
  @Prop({ reflect: true }) position?: 'start' | 'center' | 'end';

  /**
   * Define a variação de estado do componente.
   */
  @Prop({ reflect: true, mutable: true }) collapsed = true;

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  /**
   * todo
   */
  @Method()
  async toggle(event?: any) {
    if (!this.hover) {
      event?.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  }

  /**
   * todo
   */
  @Method()
  async toggleOnHover(event?: any) {
    if (this.hover) {
      event?.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  }

  render() {
    const { color, placement, position, collapsed, loading } = this;

    let skeleton;

    if (loading) {
      skeleton = (
        <div class="tp-tooltip__content-skeleton">
          <ion-skeleton-text
            class="tp-tooltip__skeleton"
            animated
          ></ion-skeleton-text>
        </div>
      );
    }

    return (
      <Host
        onMouseenter={(event: any) => {
          this.toggleOnHover(event);
        }}
        onMouseleave={(event: any) => {
          this.toggleOnHover(event);
        }}
        class={createColorClasses(color, {
          'tp-tooltip': true,
          [`tp-tooltip--${placement}`]: placement !== undefined,
          [`tp-tooltip--${position}`]: position !== undefined,
          'tp-tooltip--collapsed': collapsed,
          'tp-tooltip--loading': loading,
        })}
      >
        <div
          class="tp-tooltip__trigger-container"
          onClick={(event: any) => {
            this.toggle(event);
          }}
        >
          <slot name="trigger"></slot>
        </div>

        <div class="tp-tooltip__content">
          <slot></slot>
        </div>

        {skeleton}
      </Host>
    );
  }
}
