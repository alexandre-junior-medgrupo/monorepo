import type { TpColor } from '../../../../utils/types/color.type';
import { TpInputContainerState } from './input-container.enum';

export type TpInputContainer = {
  'tp-color': `${TpColor}`;
  state: `${TpInputContainerState}`;
  disabled: boolean;
};
