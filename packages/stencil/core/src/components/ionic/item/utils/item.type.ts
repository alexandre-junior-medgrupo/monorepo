import { TpSpacings } from '../../../../utils/types/spacing.type';
import type { TpColor } from '../../../../utils/types/color.type';

export type TpIonItem = {
  color: `${TpColor}`;
  'tp-spacingx': `${TpSpacings}`;
  'tp-spacingy': `${TpSpacings}`;
  'tp-gap': `${TpSpacings}`;
};
