type FormResponse = {
  id: string,
  type: 'text',
  value: string
} | {
  id: string,
  type: 'checkbox',
  value: boolean
}
type DistributiveOmit<T, K extends string | number | symbol> = T extends T ? Omit<T, K> : never
type RenderFormFormResponse = Omit<FormResponse, 'id'>
type RenderFormFormResponse2 = DistributiveOmit<FormResponse, 'id'>

declare const f: RenderFormFormResponse
declare const f2: RenderFormFormResponse2

if (f.type == 'checkbox') {
  f.value //string | boolean
} else {
  f.value //string | boolean
}
if (f2.type == 'checkbox') {
  f2.value //boolean
} else {
  f2.value //string
}

type ASimpleUnion = "checkbox" | undefined | "text" | undefined

type A1 = Array<ASimpleUnion>

type A2 = Array<string | number>
type A3 = Array<string> | Array<number>

type A4 = ASimpleUnion extends string ? ASimpleUnion : never

type OnlyStrings<T> = T extends string ? T : never

type A5 = OnlyStrings<ASimpleUnion>

type ToArray<T> = T extends T ? T[] : never


type preventToArray<T> = [T] extends [T] ? T[] : never

type A6 = ToArray<ASimpleUnion>
type A7 = preventToArray<ASimpleUnion>

