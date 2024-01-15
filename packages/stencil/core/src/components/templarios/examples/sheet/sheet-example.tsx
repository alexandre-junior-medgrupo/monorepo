import { Component, Host, getAssetPath, h } from '@stencil/core';
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */

@Component({
  tag: 'sheet-example',
  styleUrl: 'sheet-example.scss',
  scoped: true,
})
export class SheetExample {
  private closeIcon = getAssetPath('./assets/tp-x.svg');

  render() {
    const { closeIcon } = this;

    return (
      <Host>
        <ion-header class="tp-sheet__header">
          <ion-button fill="clear">
            <ion-icon slot="icon-only" src={closeIcon}></ion-icon>
          </ion-button>
        </ion-header>

        <ion-content class="tp-sheet__content">
          <ion-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam,
            at inventore laborum nesciunt adipisci? Voluptas illum omnis
            recusandae quasi, labore soluta voluptate eaque placeat?
          </ion-text>
          <ion-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam,
            at inventore laborum nesciunt adipisci? Voluptas illum omnis
            recusandae quasi, labore soluta voluptate eaque placeat?
          </ion-text>
          <ion-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam,
            at inventore laborum nesciunt adipisci? Voluptas illum omnis
            recusandae quasi, labore soluta voluptate eaque placeat?
          </ion-text>
        </ion-content>

        <ion-footer class="tp-sheet__footer">
          <ion-button class="tp-sheet__button" expand="block">
            Salvar
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
