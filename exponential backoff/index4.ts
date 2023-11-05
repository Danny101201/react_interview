const waitTime = (delay = 1000) => new Promise((r) => setTimeout(r, delay))
const mockAPI = () => {
  let time = 0
  return async () => {
    if (time < 3) {
      time += 1
      throw new Error('server error')
    }
    return Promise.resolve('success api')
  }
}
const exponentialBackOff3 = <Tdata>(fn: () => Promise<Tdata>, onRetry: () => void, maxRetries: number) => {
  const retryBackOff = async (retry: number): Promise<Tdata> => {
    try {
      if (retry > 0) {
        let delay = 100 * 2 ** retry
        console.log(`wait for: ${delay} ms`)
        await waitTime(delay)
      }
      return await fn()
    } catch (e) {
      if (retry <= maxRetries) {
        onRetry()
        return await retryBackOff(retry + 1)
      } else {
        console.log('Max retries reached. Bubbling the error up')
        throw e
      }
    }
  }
  return retryBackOff(0)
}
const testAPI = async () => {
  try {
    const api = mockAPI()
    const result = await exponentialBackOff3(api, () => console.log('retry'), 3)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

testAPI()