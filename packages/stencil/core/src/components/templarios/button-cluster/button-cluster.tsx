import {
  Component,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  getAssetPath,
  h,
} from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-button-cluster',
  styleUrl: 'button-cluster.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpButtonCluster {
  private arrowIcon = getAssetPath('./assets/tp-chevron-down.svg');

  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a variação de estado do componente.
   */
  @Prop({ reflect: true, mutable: true }) collapsed = true;

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  /**
   * Emitido quando a propriedade collapsed é alterada.
   */
  @Event() tpButtonClusterCollapsed!: EventEmitter<boolean>;

  toggleInternal(event?: Event) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
    this.tpButtonClusterCollapsed.emit(this.collapsed);
  }

  @Method()
  async toggleExternal() {
    this.collapsed = !this.collapsed;
    this.tpButtonClusterCollapsed.emit(this.collapsed);
  }

  render() {
    const { arrowIcon, collapsed, color, loading } = this;

    let content;

    if (loading) {
      content = (
        <div class="tp-button-cluster__container">
          <ion-skeleton-text
            class="tp-button-cluster__skeleton-text"
            animated
          ></ion-skeleton-text>
          <ion-skeleton-text
            class="tp-button-cluster__skeleton-icon"
            animated
          ></ion-skeleton-text>
        </div>
      );
    } else {
      content = (
        <div
          class="tp-button-cluster__container"
          onClick={(event: any) => {
            this.toggleInternal(event);
          }}
        >
          <slot name="expand-text"></slot>
          <ion-icon
            class="tp-button-cluster__icon"
            src={arrowIcon}
            aria-hidden="true"
          ></ion-icon>
          <slot name="collapse-text"></slot>
        </div>
      );
    }

    return (
      <Host
        class={createColorClasses(color, {
          'tp-button-cluster': true,
          'tp-button-cluster--collapsed': collapsed,
          'tp-button-cluster--loading': loading,
        })}
      >
        {content}
      </Host>
    );
  }
}
