function randomWithCrypto() {
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)
  return Math.floor(array[0] / Math.pow(2, 32) * 100) // 1-100
}
function randomWithMathRandom() {
  return Math.floor(Math.random() * 100)
}

function crypto1000() {
  let result = {}
  let key
  for (let i = 0; i < 10000; i++) {
    key = randomWithCrypto()
    if (result[key]) {
      result[key]++
    } else {
      result[key] = 1
    }
  }

  return result
}
function mathRandom1000() {
  let result = {}
  for (let i = 0; i < 10000; i++) {
    key = randomWithMathRandom()
    if (result[key]) {
      result[key]++
    } else {
      result[key] = 1
    }
  }
  return result
}

console.time('crypto')
crypto1000()
console.timeEnd('crypto') //crypto: 20.324ms

console.time('Math')
mathRandom1000()
console.timeEnd('Math') 