const waitFor3 = (delay: number) => {
  return new Promise((r) => setTimeout(r, delay))
}

const aaa = async () => {
  console.log(10)
  await waitFor3(5000)
  console.log(20)
}

const mockApi3 = () => {
  let count = 0
  return async () => {
    if (count < 3) {
      count++
      throw new Error('server error')
    } else {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      return await res.json() as Todos[]
    }
  }
}

const exponentialBackOff = async <Tdata>(api: () => Promise<Tdata[]>, onRetry: () => void, maxRetries: number) => {
  const retryBackOff = async (retry: number) => {
    try {
      if (retry > 0) {
        const delayTime = retry ** 2 * 100
        await waitFor3(delayTime)
      }
      await api()
    } catch (e) {
      if (retry < maxRetries) {
        onRetry()
        retryBackOff(retry + 1)
      } else {
        console.warn("Max retries reached. Bubbling the error up");
        throw e
      }
    }
  }
  retryBackOff(0)
}
const main3 = async () => {
  const api = mockApi3()
  const result = await exponentialBackOff(api, () => console.log('onRetry'), 2)
}
main3()