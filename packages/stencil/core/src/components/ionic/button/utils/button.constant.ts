import {
  TpIonButtonClearSize,
  TpIonButtonIconSize,
  TpIonButtonOutlineSize,
  TpIonButtonSolidSize,
} from './button.enum';

export const TP_ION_BUTTON = {
  solid: {
    size: Object.values(TpIonButtonSolidSize),
  },
  outline: {
    size: Object.values(TpIonButtonOutlineSize),
  },
  clear: {
    size: Object.values(TpIonButtonClearSize),
  },
  icon: {
    size: Object.values(TpIonButtonIconSize),
  },
};
