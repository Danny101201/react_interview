const wait = (time: number) => new Promise(r => setTimeout(r, time))
const memorize = (fn: (...arg: any[]) => any) => {
  const cache = new Map()
  return (...arg: any[]) => {

    const key = JSON.stringify(arg)
    if (!cache.get(key)) {
      cache.set(key, fn(...arg))
    }
    return cache.get(key)

  }
}
const beforeMemoizeFn = async (id: string) => {
  await wait(2000)
  return `id: ${id}`
}
const afterMemoizeFn = memorize(async (id: string) => {
  await wait(2000)
  return `id: ${id}`
})

const main = async () => {
  console.time('beforeMemoizeFn')
  await beforeMemoizeFn('132')
  await beforeMemoizeFn('132')
  console.timeEnd('beforeMemoizeFn')// 4.004s

  console.time('afterMemoizeFn')
  await afterMemoizeFn('456')
  await afterMemoizeFn('456')
  console.timeEnd('afterMemoizeFn') // 2.001s
}
main()

