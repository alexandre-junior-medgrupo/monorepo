import { Component, Host, h } from '@stencil/core';
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */

@Component({
  tag: 'dialog-example',
  styleUrl: 'dialog-example.scss',
  scoped: true,
})
export class DialogExample {
  render() {
    return (
      <Host>
        <ion-header class="tp-dialog__header">
          <ion-button fill="clear">
            <ion-icon
              class="tp-dialog__icon"
              slot="icon-only"
              src="./assets/tp-x.svg"
            ></ion-icon>
          </ion-button>
        </ion-header>

        <div class="tp-dialog__content">
          <ion-text tp-type="p16b">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              corrupti cumque adipisci, voluptatibus facilis odio tenetur. In
              deleniti aliquam, unde facilis reiciendis suscipit laudantium
              numquam!
            </p>
          </ion-text>
        </div>

        <ion-footer class="tp-dialog__footer">
          <ion-button class="tp-dialog__button" fill="outline">
            Cancelar
          </ion-button>
          <ion-button class="tp-dialog__button">Salvar</ion-button>
        </ion-footer>
      </Host>
    );
  }
}
