const obj = {
  a: '1',
  b: '2',
  c: '3'
}
const getObjKeyOf = <Obj extends Record<string, any>>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[]
}
Object.keys(obj).forEach(f => {
  console.log(obj[f])
})
getObjKeyOf(obj).forEach(f => {
  console.log(obj[f]) // a | b | c
})

const makeKeyRemover =
  <Key extends string>(keys: Key[]) =>
    <Obj>(obj: Obj): Omit<Obj, Key> => {
      return {} as any
    }
const keyRemover = makeKeyRemover(['a', 'b'])
const newObj = keyRemover({
  a: 1,
  b: 1,
  c: 1
})

type CheckForBadArg<Arg> = Arg extends any[]
  ? "You cannot compare tow arrays using deepEqualCompare"
  : Arg

const deepEqualCompare = <Arg>(
  a: CheckForBadArg<Arg>,
  b: CheckForBadArg<Arg>
) => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error('You cannot compare tow arrays using deepEqualCompare')
  }
  return a === b
}

deepEqualCompare(1, 2)
deepEqualCompare([], []) // <never[]>(a: never[], b: never[]) => boolean
