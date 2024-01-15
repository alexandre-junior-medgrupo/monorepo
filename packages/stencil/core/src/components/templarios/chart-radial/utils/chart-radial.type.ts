import type { TpColor } from '../../../../utils/types/color.type';
import { TpChartRadialSize } from '../utils/chart-radial.enum';

export type TpChartRadial = {
  color?: `${TpColor}`;
  size?: `${TpChartRadialSize}`;
  items: TpChartRadialItem[];
};

export type TpChartRadialItem = {
  color: `${TpColor}`;
  label: string;
  quantity: number;
  ignore: boolean;
};
