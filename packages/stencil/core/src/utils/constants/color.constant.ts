import {
  TpColorAula,
  TpColorBrand,
  TpColorFeedback,
  TpColorMaterial,
  TpColorNeutral,
  TpColorOrange,
  TpColorProvas,
  TpColorQuestoes,
  TpColorRevalida,
} from '../enums/color.enum';

export const TP_COLOR_BRAND = Object.values(TpColorBrand);
export const TP_COLOR_FEEDBACK = Object.values(TpColorFeedback);
export const TP_COLOR_NEUTRAL = Object.values(TpColorNeutral);

export const TP_COLOR_AULA = Object.values(TpColorAula);
export const TP_COLOR_MATERIAL = Object.values(TpColorMaterial);
export const TP_COLOR_QUESTOES = Object.values(TpColorQuestoes);
export const TP_COLOR_REVALIDA = Object.values(TpColorRevalida);
export const TP_COLOR_PROVAS = Object.values(TpColorProvas);

export const TP_COLOR_ORANGE = Object.values(TpColorOrange);

export const TP_COLORS = [
  ...TP_COLOR_BRAND,
  ...TP_COLOR_FEEDBACK,
  ...TP_COLOR_NEUTRAL,
];

export const TP_COLORS_MEDSOFT = [
  ...TP_COLOR_AULA,
  ...TP_COLOR_MATERIAL,
  ...TP_COLOR_QUESTOES,
  ...TP_COLOR_REVALIDA,
  ...TP_COLOR_PROVAS,
];

export const TP_COLORS_RECURSOS = [...TP_COLOR_ORANGE];
