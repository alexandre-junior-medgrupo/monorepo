import type { TpColor } from '../../../../utils/types/color.type';
import type { TpIonBadgeFill, TpIonBadgeSize } from './badge.enum';

export type TpIonBadge = {
  color: `${TpColor}`;
  'tp-size': `${TpIonBadgeSize}`;
  'tp-fill': `${TpIonBadgeFill}`;
};
