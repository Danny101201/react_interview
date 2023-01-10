// 機率分配不均
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

let result = {}
for (let i = 0; i < 1000; i++) {
  let array = [1, 2, 3]
  shuffle(array)
  if (result[array.join('')] >= 1) {
    result[array.join('')]++;
    continue
  }
  result[array.join('')] = 1

}

console.log(result)
console.log(result)

// 機率分配較均勻
function shuffle2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}