import type { TpColor } from '../../../../utils/types/color.type';
import { TpHorizontalChartBarSize } from './horizontal-chart-bar.enum';

export type TpHorizontalChartBar = {
  color?: `${TpColor}`;
  size?: `${TpHorizontalChartBarSize}`;
  value: number;
  maxCount: number;
  noLabel: boolean;
  loading?: boolean;
};
