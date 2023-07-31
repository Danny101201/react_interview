type AddOne = (count: number) => number
const addOne: AddOne = (count) => count + 1
type NumToString = (num: number) => string
const numToString: NumToString = (number) => String(number)

type Compose = <A, B, C>(
  a: (item: B) => C,
  b: (item: A) => B,
) => (item: A) => C

function compose<Input, firstArg>(
  fun1: (input: Input) => firstArg
): (input: Input) => firstArg
function compose<Input, firstArg, secondArg>(
  fun1: (input: Input) => firstArg,
  fun2: (input: firstArg) => secondArg,
): (input: Input) => secondArg
function compose<Input, firstArg, secondArg, thirdArg>(
  fun1: (input: Input) => firstArg,
  fun2: (input: firstArg) => secondArg,
  fun3: (input: secondArg) => thirdArg
): (input: Input) => thirdArg
function compose(...args: any[]) {
  return (input) => args.reduce((acc, fn) => fn(acc), input)
}
const result = compose(addOne, addOne, numToString)
console.log(result(1))