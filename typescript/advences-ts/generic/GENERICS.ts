type Obj = {
  a: "a",
  a2: "a2",
  a3: "a3",
  b: "b",
  b1: "b1",
  b2: "b2"
}
type OriginalType = string | number | bigint | boolean | null | undefined
// before
type ValuesOfKeysStartingWithABefore<
  Obj extends Record<string, unknown>
> = {
  [k in Extract<keyof Obj, `a${string}`>]: Obj[k]
}[Extract<keyof Obj, `a${string}`>]

type result = ValuesOfKeysStartingWithABefore<Obj>  // "Foo" | "a2" | "a3"

// after
type ValuesOfKeysStartingWithStartKeyAfter<
  Obj extends Record<string, unknown>,
  keyAlias extends OriginalType,
  _ExactedKeys extends keyof Obj = Extract<
    keyof Obj, `${keyAlias}${string}`
  >
> = {
  [k in _ExactedKeys]: Obj[k]
}[_ExactedKeys]

type ResultWithBKey = ValuesOfKeysStartingWithStartKeyAfter<Obj, 'b'> // "b" | "b1" | "b2"

type MySelfBefore<
  Obj extends Record<string, unknown>,
  keyAlign extends string | number | bigint | boolean | null | undefined,
  _ExtractKey extends keyof Obj = Extract<keyof Obj, `${keyAlign}${string}`>
> = {
  [k in _ExtractKey]: Obj[k]
}[_ExtractKey]

type AAA = MySelfBefore<Obj, 'a'>


type ExactSpecObjKey<
  Obj extends Record<string, unknown>,
  keyAlign extends string | number | bigint | boolean | null | undefined,
  _ExtractKey extends keyof Obj = Extract<keyof Obj, `${keyAlign}${string}`>
> = {
  [K in _ExtractKey]: Obj[K]
}[_ExtractKey]


type JOI = ExactSpecObjKey<Obj,'a'>

