import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  getAssetPath,
  h,
} from '@stencil/core';
import { TpRateLikeStatus } from './utils/rate-like.enum';

@Component({
  tag: 'tp-rate-like',
  styleUrl: 'rate-like.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class TpRateLike {
  private thumbsUpIcon = getAssetPath('./assets/tp-thumbs-up.svg');
  private thumbsDownIcon = getAssetPath('./assets/tp-thumbs-down.svg');

  /**
   * Define o status do componente.
   */
  @Prop({ reflect: true, mutable: true }) status?: 'like' | 'dislike';

  /**
   * Define o estado de carregamento do componente.
   */
  @Prop({ reflect: true, mutable: true }) loading?: boolean;

  /**
   * Emitido quando a propriedade status é alterada.
   */
  @Event() tpChange!: EventEmitter<'like' | 'dislike'>;

  private onClick = (status: 'like' | 'dislike') => {
    if (this.status === undefined) {
      return;
    }

    this.status = status;
    this.tpChange.emit(this.status);
  };

  render() {
    const { loading, status, thumbsUpIcon, thumbsDownIcon } = this;

    let content;

    if (loading) {
      content = (
        <div class="tp-rate-like__container">
          <ion-skeleton-text
            class="tp-rate-like__skeleton"
            animated
          ></ion-skeleton-text>
          <ion-skeleton-text
            class="tp-rate-like__skeleton"
            animated
          ></ion-skeleton-text>
        </div>
      );
    } else {
      content = (
        <div class="tp-rate-like__container">
          <button
            class={`tp-rate-like__button
          ${
            status === TpRateLikeStatus.LIKE ? 'tp-rate-like__button--like' : ''
          }
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `}
            onClick={() => this.onClick(TpRateLikeStatus.LIKE)}
          >
            <ion-icon
              class="tp-rate-like__icon"
              src={thumbsUpIcon}
              aria-hidden="true"
            ></ion-icon>
          </button>
          <button
            class={`tp-rate-like__button
          ${
            status === TpRateLikeStatus.DISLIKE
              ? 'tp-rate-like__button--dislike'
              : ''
          }
          ${status ? 'tp-rate-like__button--disabled' : ''}
        `}
            onClick={() => this.onClick(TpRateLikeStatus.DISLIKE)}
          >
            <ion-icon
              class="tp-rate-like__icon"
              src={thumbsDownIcon}
              aria-hidden="true"
            ></ion-icon>
          </button>
        </div>
      );
    }

    return <Host class="tp-rate-like">{content}</Host>;
  }
}
