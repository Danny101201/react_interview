const deciveTwo = (x: number) => 2 / x
const addOne = (x: number) => x + 1

const compose3 = (...args: ((...args: any[]) => any)[]) => (x: number) => args.reduceRight((acc, fn) => fn(acc), x)

const MathFactory = compose3(
  addOne,
  deciveTwo
)
console.log(MathFactory(8))
console.log(MathFactory(0))


type Options<T> = None2 | Some2<T>
type None2 = {
  _tag: 'None'
}
type Some2<T> = {
  _tag: 'some',
  value: T
}
const none2: None2 = { _tag: 'None' }

const some2 = <T>(x: T): Some2<T> => ({ _tag: 'some', value: x })
const isNone2 = <T>(x: Options<T>): x is None2 => x._tag === 'None'

const deciveTwos = (x: number) => x === 0 ? none2 : some2(deciveTwo(x))
const addOne2 = (x: Options<number>) => isNone2(x) ? none2 : some2(addOne(x.value))

const MathFactory2 = compose3(
  addOne2,
  deciveTwos
)
console.log(MathFactory2(8))
console.log(MathFactory2(0))