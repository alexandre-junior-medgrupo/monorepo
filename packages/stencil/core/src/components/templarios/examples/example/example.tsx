import { Component, Host, Prop, State, getAssetPath, h } from '@stencil/core';
import { createColorClasses } from '../../../../utils/functions/color.function';
import type { TpColor } from '../../../../utils/types/color.type';

@Component({
  tag: 'tp-example',
  styleUrl: 'example.scss',
  assetsDirs: ['assets'],
  scoped: true,
})
export class TpExample {
  /**
   *
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   *
   */
  @Prop({ reflect: true }) icon?: string;

  @State() defaultIcon = getAssetPath('./assets/tp-x.svg');

  render() {
    const { color, icon, defaultIcon } = this;

    return (
      <Host
        tabindex="0"
        class={createColorClasses(color, {
          'tp-example': true,
        })}
      >
        <div class="tp-example__container">
          <span>Lorem ipsum, dolor sit amet consectetur.</span>
          <ion-button>ion button</ion-button>
          <ion-icon
            class="tp-example__icon"
            src={icon ?? defaultIcon}
            aria-hidden="true"
          ></ion-icon>
        </div>

        <ion-radio-group class="story__ion-radio-group">
          <ion-radio value="1">
            <ion-text>Lorem ipsum, dolor sit amet consectetur.</ion-text>
          </ion-radio>
          <ion-radio value="2">
            <ion-text>Lorem ipsum, dolor sit amet consectetur.</ion-text>
          </ion-radio>
          <ion-radio value="3">
            <ion-text>Lorem ipsum, dolor sit amet consectetur.</ion-text>
          </ion-radio>
        </ion-radio-group>
      </Host>
    );
  }
}
