import type { TpColor } from '../../../../utils/types/color.type';
import type { TpLoaderName } from './loader.enum';

export type TpLoaderType = {
  color: `${TpColor}`;
  ['tp-name']: `${TpLoaderName}`;
};
