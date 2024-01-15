import type { TpColor } from '../../../../utils/types/color.type';
import { TpIonChipSize } from './chip.enum';

export type TpIonChip = {
  color: `${TpColor}`;
  ['tp-size']: `${TpIonChipSize}`;
  'tp-active': boolean;
};
