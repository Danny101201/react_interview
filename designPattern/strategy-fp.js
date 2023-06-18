const a = 10
const b = 15

//curring
const operation = (operator) => (a) => (b) => operator(a, b)

const add = operation((a, b) => a + b)
const subtract = operation((a, b) => a - b)
const multiply = operation((a, b) => a * b)


console.log(add(a)(b))
console.log(subtract(a)(b))
console.log(multiply(a)(b))