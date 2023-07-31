const waitFor2 = (time: number) => {
  return new Promise((resolve, reject) => setTimeout(resolve, time))
}

const retry2 = async <Tdata>(promise: () => Promise<Tdata>, onRetry: () => void, maxRetries: number) => {
  const retryBackOff = async (retires: number): Promise<Tdata> => {
    try {
      if (retires > 0) {
        const timeToWait = 2 ** retires * 100
        console.log(`waiting for ${timeToWait}ms...`);
        await waitFor2(timeToWait)
      }
      return await promise()
    } catch (e) {
      if (maxRetries > retires) {
        onRetry()
        return await retryBackOff(retires + 1)
      } else {
        console.warn("Max retries reached. Bubbling the error up");
        throw e
      }
    }
  }

  return await retryBackOff(0)
}
interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const mockApi = () => {
  let counter = 0
  return () => {
    if (counter < 3) {
      counter++
      return Promise.reject(new Error('server error'))
    } else {
      return fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json() as Promise<Todos[]>)
    }
  }
}
const test = async () => {
  const api = mockApi()
  const result = await retry2(api, () => console.log('retry'), 3)
  console.log(result.length)
}

test()