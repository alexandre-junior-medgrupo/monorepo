import { Component, Host, h } from '@stencil/core';
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */

@Component({
  tag: 'snackbar-example',
  styleUrl: 'snackbar-example.scss',
  scoped: true,
})
export class SnackbarExample {
  render() {
    return (
      <Host>
        <div class="tp-snackbar__container">
          <ion-avatar tp-color="brand-3" tp-size="xxs">
            <ion-label>AB</ion-label>
          </ion-avatar>

          <ion-text class="tp-snackbar__text" tp-type="p16b">
            <p>1.341 alunos fizeram o simulado</p>
          </ion-text>

          {/* <ion-button fill="clear">
            <ion-icon slot="icon-only" src="./assets/tp-x.svg"></ion-icon>
          </ion-button> */}
        </div>
      </Host>
    );
  }
}
