import type { TpColor } from '../../../../utils/types/color.type';
import type {
  TpIonButtonClearSize,
  TpIonButtonIconSize,
  TpIonButtonSolidSize,
} from '../utils/button.enum';

export type TpIonButton = {
  color: `${TpColor}`;
  solid: `${TpIonButtonSolidSize}`;
  clear: `${TpIonButtonClearSize}`;
  icon: `${TpIonButtonIconSize}`;
  'tp-no-padding': boolean;
};
