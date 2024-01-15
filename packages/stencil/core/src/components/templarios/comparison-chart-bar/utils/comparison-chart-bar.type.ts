import type { TpColor } from '../../../../utils/types/color.type';

export type TpComparisonChartBar = {
  color: `${TpColor}`;
  containerHeight: number;
  barValue: number;
  hasMarker: boolean;
  markerValue: number;
  disabled: boolean;
  noLabel: boolean;
};
