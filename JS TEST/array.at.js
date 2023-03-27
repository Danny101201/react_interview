let array = new Array(5).fill(0).map(() => [])
array[0].push(1)
array[0].push(3)
array.at(-1).push(-1)
console.log(array)// [ [ 1, 3 ], [], [], [], [ -1 ] ]