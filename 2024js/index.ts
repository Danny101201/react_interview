let a = [1, 3, 2] as (string | number)[]
console.log(a.sort((a, b) => b - a))
console.log(a.sort())
a[2] = "a"
let b = a.with(2, "b") // change second value with array

const people = [
  { name: 'Danny', age: 20 },
  { name: 'Wayz', age: 25 },
]
// {
//   Danny: [ { name: 'Danny', age: 20 } ],
//   Wayz: [ { name: 'Wayz', age: 25 } ]
// }
Object.groupBy(people, people => people.name)

const { promise, resolve, reject } = Promise.withResolvers();
