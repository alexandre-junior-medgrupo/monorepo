import { Component, Host, Prop, h } from '@stencil/core';
import { createColorClasses } from '../../../utils/functions/color.function';
import type { TpColor } from '../../../utils/types/color.type';
import { TpLoaderName } from './utils/loader.enum';
import { TpLoaderType } from './utils/loader.type';

@Component({
  tag: 'tp-loader',
  styleUrl: 'loader.scss',
  shadow: true,
})
export class TpLoader {
  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: TpColor;

  /**
   * Define a posição do componente.
   */
  @Prop({ reflect: true }) fixed = false;

  /**
   * Define a variação do componente.
   */
  @Prop({ reflect: true }) tpName?: TpLoaderType['tp-name'];

  render() {
    const { color, fixed, tpName } = this;

    let content;

    if (tpName === TpLoaderName.SECONDARY) {
      content = (
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    } else {
      content = (
        <div class="loader-container">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle tp-loader-circle cx="50" cy="50" r="47" />

            <polyline tp-loader-polyline points="85,37 63,37 63,15 " />
            <polyline tp-loader-polyline points="63,86 63,64 85,64 " />
            <polyline tp-loader-polyline points="14,64 36,64 36,86 " />
            <polyline tp-loader-polyline points="36,15 36,37 14,37 " />

            <line tp-loader-line x1="45" y1="40" x2="45" y2="15" />
            <line tp-loader-line x1="54" y1="40" x2="54" y2="15" />
            <line tp-loader-line x1="60" y1="46" x2="85" y2="46" />
            <line tp-loader-line x1="60" y1="55" x2="85" y2="55" />
            <line tp-loader-line x1="54" y1="61" x2="54" y2="86" />
            <line tp-loader-line x1="45" y1="61" x2="45" y2="86" />
            <line tp-loader-line x1="39" y1="55" x2="14" y2="55" />
            <line tp-loader-line x1="39" y1="46" x2="14" y2="46" />

            <rect tp-loader-rect x="42" y="43" width="6" height="6" />
            <rect tp-loader-rect x="42" y="52" width="6" height="6" />
            <rect tp-loader-rect x="51" y="43" width="6" height="6" />
            <rect tp-loader-rect x="51" y="52" width="6" height="6" />
          </svg>
        </div>
      );
    }

    return (
      <Host
        class={createColorClasses(color, {
          'tp-loader': true,
          'tp-loader--fixed': tpName !== TpLoaderName.SECONDARY && fixed,
          'tp-loader--secondary': tpName === TpLoaderName.SECONDARY,
        })}
      >
        {content}
      </Host>
    );
  }
}
