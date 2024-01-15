import type { TpColor } from '../../../../utils/types/color.type';
import type { TpIonBackButtonSize } from './back-button.enum';

export type TpIonBackButton = {
  color: `${TpColor}`;
  'tp-size': `${TpIonBackButtonSize}`;
};
