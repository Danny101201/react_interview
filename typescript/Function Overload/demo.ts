function shuffleArray(array: unknown[]) {
  return array.sort((a, b) => Math.random() - 0.5)
}

type Zip<One extends unknown[], Another extends unknown[]> =
  One extends [infer OneFirst, ...infer Rest1]
  ? Another extends [infer AnotherFirst, ...infer Rest2]
  ? [[OneFirst, AnotherFirst], ...Zip<Rest1, Rest2>]
  : []
  : []


type MutateReadOnly<Obj> = {
  -readonly [key in keyof Obj]: Obj[key]
}

function zip(target: unknown[], source: unknown[]): unknown[]
function zip<Target extends readonly unknown[], Source extends readonly unknown[]>
(target: Target, source: Source): Zip<MutateReadOnly<Target>, MutateReadOnly<Source>>

function zip(target: unknown[], source: unknown[]) {
  if (target.length === 0 || source.length === 0) return []
  const [one, ...rest] = shuffleArray(target)
  const [two, ...rest2] = shuffleArray(source)


  return [[one, two], ...zip(rest, rest2)]
}

const array1 = [1, 2, 3] as const
const array2 = [4, '5', 6] as const
const res = zip(array1, array2)