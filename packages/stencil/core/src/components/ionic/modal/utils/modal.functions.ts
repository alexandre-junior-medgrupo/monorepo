import { createAnimation } from '@ionic/core';

const MODAL_ANIMATION_DURATION = 500;
const MODAL_ANIMATION_DURATION_OPACITY = 100;

export function sheetEnterAnimationMobile(baseEl: any) {
  const root = baseEl.shadowRoot;

  const backdropAnimation = createAnimation();

  const wrapperAnimation = createAnimation()
    .addElement(root.querySelector('.modal-wrapper'))
    .easing('ease-in-out')
    .duration(MODAL_ANIMATION_DURATION)
    .fromTo('opacity', '0.01', '1')
    .keyframes([
      { offset: 0, transform: 'translateY(100%)' },
      { offset: 1, transform: 'translateY(0)' },
    ]);

  return createAnimation()
    .addAnimation(backdropAnimation)
    .addAnimation(wrapperAnimation);
}

export function sheetEnterAnimationDesktop(baseEl: any) {
  const root = baseEl.shadowRoot;

  const backdropAnimation = createAnimation()
    .addElement(root.querySelector('ion-backdrop'))
    .duration(MODAL_ANIMATION_DURATION_OPACITY)
    .fromTo('opacity', '0.01', '0.65');

  const wrapperAnimation = createAnimation()
    .addElement(root.querySelector('.modal-wrapper'))
    .easing('ease-in-out')
    .duration(MODAL_ANIMATION_DURATION)
    .keyframes([
      { offset: 0, transform: 'translateX(100%)' },
      { offset: 1, transform: 'translateX(0)' },
    ]);

  return createAnimation()
    .addAnimation(backdropAnimation)
    .addAnimation(wrapperAnimation);
}

export function sheetLeaveAnimationMobile(baseEl: any) {
  return sheetEnterAnimationMobile(baseEl).direction('reverse');
}

export function sheetLeaveAnimationDesktop(baseEl: any) {
  return sheetEnterAnimationDesktop(baseEl).direction('reverse');
}
