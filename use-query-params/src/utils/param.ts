import { ArrayParam, NumericArrayParam, createEnumParam, withDefault } from "serialize-query-params"

export enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green'
}


export const ColorArrayEnumParam = createEnumParam<Color>([Color.Blue, Color.Green])
export const NeverNullArrayParam = withDefault(ArrayParam, [])
export const NeverUndefinedArrayParam = withDefault(ArrayParam, [], false)
export const NumbedArrayParam = withDefault(NumericArrayParam, [1, 2, 3])
export const ColorArrayParam = withDefault(ColorArrayEnumParam, Color.Blue)