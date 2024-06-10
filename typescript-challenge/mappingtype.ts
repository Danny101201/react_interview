type Records = {
  name: string,
  age: number,
  address: {
    region: string
    contractNumber: number,
  }
}
type MyReadonly2<T extends Record<string, any>> = {
  readonly [K in keyof T]: T[K]
}
type MyOptional<T extends Record<string, any>> = {
  [K in keyof T]?: T[K]
}
type MyRequire<T extends Record<string, any>> = {
  [K in keyof T]-?: T[K]
}
type MyRemoveReadonly<T extends Record<string, any>> = {
  -readonly [K in keyof T]: T[K]
}

type ReadOnlyResult = MyReadonly2<Records>
type RemoveReadonlyResult = MyRemoveReadonly<ReadOnlyResult>
type OptionalResult = MyOptional<Records>
type RequiredResult = MyRequire<OptionalResult>
