import type { TpColor } from '../../../../utils/types/color.type';

export type TpChartBar = {
  color: `${TpColor}`;
  value: number;
  width: number;
  height: number;
};
