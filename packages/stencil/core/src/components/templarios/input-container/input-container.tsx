import {
  Component,
  Element,
  Host,
  Listen,
  Prop,
  State,
  getAssetPath,
  h,
} from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';

@Component({
  tag: 'tp-input-container',
  styleUrl: 'input-container.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpInputContainer {
  private alertTriangleIcon = getAssetPath('./assets/tp-alert-triangle.svg');
  private CheckIcon = getAssetPath('./assets/tp-check.svg');
  private selectIcon = getAssetPath('./assets/tp-chevron-down.svg');

  /**
   * Quando usado em conjunto com 'select', representa a largura do 'select' definida dinamicamente.
   */
  private hostWidth: number | undefined;

  /**
   * Referência ao componente no DOM.
   */
  @Element() host!: HTMLElement;

  /**
   * Alvo do evento de click. Evita bugs nos casos em que há mais de um 'select na mesma página.
   */
  @State() clickTarget!: Node;

  /**
   * Monitoria se o 'select' foi clicado e está ativo. A propriedade é usada para aplicar estilização e evitar processamentos desnecessários em alguns métodos.
   */
  @State() selectOpen: boolean = false;

  /**
   * ???
   */
  @State() hasSelect: boolean = false;

  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a variação de estado do componente.
   */
  @Prop({ reflect: true }) state?: 'error' | 'success';

  /**
   * Define a estilização do estado disabled do componente.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * ???
   */
  @Prop({ reflect: true }) inverted = false;

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  @Listen('click', { target: 'body' })
  setClickTarget(e: MouseEvent) {
    if (this.disabled) return;

    this.clickTarget = e.target as Node;
  }

  @Listen('click')
  catchSelectIconClick(e: MouseEvent) {
    const target = e.target as Node;
    const ionSelect = this.host.querySelector(
      'ion-select',
    ) as HTMLIonSelectElement;

    if (!ionSelect) return;

    const shouldOpenOverlay =
      this.host.contains(target) &&
      ionSelect.hasAttribute('interface') &&
      (target.nodeName === 'ION-ICON' ||
        target.nodeName === 'TP-INPUT-CONTAINER');

    if (shouldOpenOverlay) {
      ionSelect.open(e);
    }
  }

  @Listen('resize', { target: 'window' })
  setPopoverWidthOnResize() {
    if (!this.selectOpen) return;

    const popoverElement = document.querySelector(
      '.select-popover',
    ) as HTMLElement;

    popoverElement?.style.setProperty('--width', `${this.host.clientWidth}px`);

    this.setPopoverPosition();
  }

  @Listen('ionPopoverWillPresent', { target: 'body' })
  setPopoverCharacteristics() {
    if (!this.host.contains(this.clickTarget)) return;

    this.selectOpen = true;
    this.hostWidth = this.host.clientWidth;

    const popoverElement = document.querySelector(
      '.select-popover',
    ) as HTMLElement;
    popoverElement?.style.setProperty('--width', `${this.hostWidth}px`);

    if (popoverElement.classList.contains('popover-bottom')) {
      this.inverted = true;
    }

    this.setPopoverPosition();
  }

  @Listen('ionPopoverWillDismiss', { target: 'body' })
  unsetClikedState() {
    this.selectOpen = false;
  }

  componentDidLoad() {
    const ionSelect = this.host.querySelector(
      'ION-SELECT',
    ) as HTMLIonSelectElement;

    if (ionSelect) {
      this.hasSelect = true;

      if (!ionSelect.hasAttribute('interface')) {
        ionSelect.interfaceOptions = { cssClass: 'tp-hide' };
      }
    }
  }

  setPopoverPosition() {
    const popoverElement = document.querySelector(
      '.select-popover',
    ) as HTMLElement;
    const selectElement = this.host.querySelector('ion-select');
    const { top, bottom, left } = selectElement.getBoundingClientRect();
    const fixPositionX = 1;

    if (this.inverted) {
      popoverElement.classList.add('tp-popover--inverted');
      popoverElement?.style.setProperty(
        '--offset-x',
        `${Math.round(left) - fixPositionX}px`,
      );
      popoverElement?.style.setProperty(
        '--offset-y',
        `${Math.round(window.innerHeight - top)}px`,
      );
    } else {
      popoverElement?.style.setProperty(
        '--offset-x',
        `${Math.round(left) - fixPositionX}px`,
      );
      popoverElement?.style.setProperty(
        '--offset-y',
        `${Math.round(bottom)}px`,
      );
    }
  }

  render() {
    const {
      color,
      state,
      disabled,
      alertTriangleIcon,
      CheckIcon,
      hasSelect,
      selectIcon,
      selectOpen,
      loading,
    } = this;
    let content;
    let stateContent;
    let selectIconContainer;

    const icon = state === 'error' ? alertTriangleIcon : CheckIcon;

    if (loading) {
      content = (
        <ion-skeleton-text
          class="tp-input-container__skeleton"
          animated
        ></ion-skeleton-text>
      );
    } else {
      if (this.hasSelect) {
        selectIconContainer = (
          <div class="tp-input-container__select-container">
            <ion-icon
              class={{
                'tp-input-container__select-icon': true,
                'tp-input-container__select-icon--open': selectOpen,
              }}
              src={selectIcon}
              aria-hidden="true"
            ></ion-icon>
          </div>
        );
      }

      if (state) {
        stateContent = (
          <div class="tp-input-container__state-container">
            <ion-icon
              class="tp-input-container__icon"
              src={icon}
              aria-hidden="true"
            ></ion-icon>
          </div>
        );
      }

      content = (
        <div>
          <slot name="label"></slot>
          <div class="tp-input-container__wrapper">
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
            {selectIconContainer}
            {stateContent}
          </div>
          <slot name="feedback-success"></slot>
          <slot name="feedback-error"></slot>
        </div>
      );
    }

    return (
      <Host
        class={createColorClasses(color, {
          'tp-input-container': true,
          'tp-input-container--error': state === 'error',
          'tp-input-container--success': state === 'success',
          'tp-input-container--disabled': disabled,
          'tp-input-container--with-select': hasSelect,
          'tp-input-container--select-open': selectOpen,
        })}
      >
        {content}
      </Host>
    );
  }
}
