export type TpLiteralUnion<T extends U, U = string> =
  | T
  | (U & Record<never, never>);

export type TpCssClassMap = { [className: string]: boolean };
