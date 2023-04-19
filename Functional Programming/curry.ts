let sum2 = (a: number, b: number) => a + b

type Curry2 = <A, B, Z>(f: (a: A, b: B) => Z) => (a: A) => (b: B) => Z
const curry2: Curry2 = f => (a) => (b) => f(a, b)
const count2 = curry2(sum2)
console.log(count2(10)(2))