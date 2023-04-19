const DivideTwo = (x: number): number => 2 / x
const IncrementOne = (x: number): number => x + 1

const compose = (...args: ((...args: any[]) => any)[]) => (x: number) => args.reduceRight((acc, fn) => fn(acc), x)

const mathsFactory = compose(
  IncrementOne,
  DivideTwo
)

console.log(mathsFactory(0))
console.log(mathsFactory(8))


type Option<A> = Some<A> | None
type None = { _tag: 'None' }

const none: None = { _tag: 'None' }
type Some<A> = { _tag: 'Some', value: A }

const some = <A>(x: A): Some<A> => ({ _tag: 'Some', value: x })

const isNone = <A>(x: Option<A>): x is None => x._tag === 'None'

const DivideTwo2 = (x: number): Option<number> => x === 0 ? none : some(DivideTwo(x))
const IncrementOne2 = (x: Option<number>): Option<number> => isNone(x) ? none : some(IncrementOne(x.value))
const mathsFactory2 = compose(
  IncrementOne2,
  DivideTwo2
)

console.log(mathsFactory2(8))
console.log(mathsFactory2(0))


interface Info {
  name: string,
  address?: {
    street: string;
    city: string;
    state: string;
  }
}


const DannyInfo: Info = {
  name: 'Danny'
}
const hasAddress = (person: Info): person is (Info & { address: object }) => {
  if (person.address) return true
  throw new Error('do not have address')
}
const getAddress = (person: Info) => {
  if (hasAddress(person)) {
    return `${person.address.street}, ${person.address.city}, ${person.address.state}`;
  }
}
