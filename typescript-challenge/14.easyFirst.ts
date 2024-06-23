type First<T extends ReadonlyArray<PropertyKey>> = T[0]

const a = ['a', 'b', 'c'] as const

type Result = First<typeof a>