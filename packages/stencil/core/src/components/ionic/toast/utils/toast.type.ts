import type { TpColor } from '../../../../utils/types/color.type';
import { TpIonToastSize } from './toast.enum';

export type TpIonToast = {
  color: `${TpColor}`;
  'tp-size': `${TpIonToastSize}`;
  'tp-reverse': boolean;
};
