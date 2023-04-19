type DiveTwo = (x: number) => number
type Increment = (x: number) => number
const increment: Increment = (x) => x + 1

const diveTwo: DiveTwo = (x) => 2 / x

const compose = (...arg: ((...args: any) => any)[]) => (x: number) => arg.reduceRight((acc, fn) => fn(acc), x)

const composeTest = compose(increment, diveTwo)
console.log(composeTest(8))
console.log(composeTest(0))

type Option<A> = Some<A> | None
interface Some<A> {
  _tag: 'Some',
  value: A
}
interface None {
  _tag: 'None',
}

const some = <A>(x: A): Some<A> => ({ _tag: 'Some', value: x })

// const none: Option<never> = { _tag: 'None' }
const none: None = { _tag: 'None' }

const isNone = <A>(x: Option<A>): x is None => x._tag === 'None'

type DivideTwo2 = (x: number) => Option<number>
const divideTwo2: DivideTwo2 = (x: number) => x === 0 ? none : some(diveTwo(x))

type Increment2 = (x: Option<number>) => Option<number>
const increment2: Increment2 = (x) => isNone(x) ? none : some(increment(x.value))

const compose2 = compose(
  increment2,
  divideTwo2
)
console.log(compose2(8))
console.log(compose2(0))

