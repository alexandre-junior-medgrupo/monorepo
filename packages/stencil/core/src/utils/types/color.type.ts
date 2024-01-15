import type {
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

import type { TpLiteralUnion } from './utils.type';

export type TpColors =
  | `${TpColorBrand}`
  | `${TpColorNeutral}`
  | `${TpColorFeedback}`;

export type TpColorsMedgrupo =
  | `${TpColorAula}`
  | `${TpColorMaterial}`
  | `${TpColorQuestoes}`
  | `${TpColorRevalida}`
  | `${TpColorProvas}`;

export type TpColorsRecursos = `${TpColorOrange}`;

export type TpColor = TpLiteralUnion<
  TpColors | TpColorsMedgrupo | TpColorsRecursos,
  string
>;
