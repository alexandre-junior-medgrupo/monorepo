import { Component, Element, Host, Listen, h } from '@stencil/core';
import {
  TP_SEGMENT_WRAPPER_CLASS,
  TP_SEGMENT_GRADIENT_SHOW_CLASS,
} from './utils/segment-container.constant';
import { TpSegmentContainerGradient } from './utils/segment-container.enum';
import { TpSegmentContainerType } from './utils/segment-container.type';

@Component({
  tag: 'tp-segment-container',
  styleUrl: 'segment-container.scss',
  shadow: true,
})
export class TpSegmentContainer {
  private wrapperEl: HTMLDivElement;
  private hasScroll: boolean;

  @Element() host!: HTMLElement;

  componentDidLoad() {
    this.wrapperEl = this.host.shadowRoot.querySelector(
      `.${TP_SEGMENT_WRAPPER_CLASS}`,
    ) as HTMLDivElement;

    this.hasScroll = this.wrapperEl.scrollWidth > this.wrapperEl.clientWidth;

    if (this.hasScroll) {
      this.addGradient(TpSegmentContainerGradient.END);
    }

    this.wrapperEl.addEventListener('scroll', this.updateGradient.bind(this));
  }

  addGradient(position: TpSegmentContainerType['position']) {
    if (
      !this.host.classList.contains(
        `${TP_SEGMENT_GRADIENT_SHOW_CLASS}-${position}`,
      )
    ) {
      this.host.classList.add(`${TP_SEGMENT_GRADIENT_SHOW_CLASS}-${position}`);
    }
  }

  removeGradient(position: TpSegmentContainerType['position']) {
    if (
      this.host.classList.contains(
        `${TP_SEGMENT_GRADIENT_SHOW_CLASS}-${position}`,
      )
    ) {
      this.host.classList.remove(
        `${TP_SEGMENT_GRADIENT_SHOW_CLASS}-${position}`,
      );
    }
  }

  updateGradient() {
    if (!this.hasScroll) {
      this.removeGradient(TpSegmentContainerGradient.START);
      this.removeGradient(TpSegmentContainerGradient.END);
      return;
    }

    const isAtStart = this.wrapperEl.scrollLeft === 0;
    const isAtEnd =
      this.wrapperEl.scrollWidth ===
        Math.floor(this.wrapperEl.clientWidth + this.wrapperEl.scrollLeft) ||
      this.wrapperEl.scrollWidth ===
        Math.ceil(this.wrapperEl.clientWidth + this.wrapperEl.scrollLeft);

    if (isAtStart) {
      this.removeGradient(TpSegmentContainerGradient.START);
    }

    if (!isAtStart) {
      this.addGradient(TpSegmentContainerGradient.START);
    }

    if (isAtEnd) {
      this.removeGradient(TpSegmentContainerGradient.END);
    }

    if (!isAtEnd) {
      this.addGradient(TpSegmentContainerGradient.END);
    }
  }

  @Listen('resize', { target: 'window' })
  onWindowReize() {
    this.hasScroll = this.wrapperEl.scrollWidth > this.wrapperEl.clientWidth;
    this.updateGradient();
  }

  disconnectedCallback() {
    this.wrapperEl.removeEventListener(
      'scroll',
      this.updateGradient.bind(this),
    );
  }

  render() {
    return (
      <Host class="tp-segment-container">
        <div class="tp-segment-container__wrapper">
          <slot />
          <div class="tp-segment-container__gradient"></div>
        </div>
      </Host>
    );
  }
}
