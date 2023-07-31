/** 
 * Wait for the given milliseconds
 * @param {number} milliseconds The given time to wait
 * @return {Promise} A fulfilled promise after the given time has passed
 */
const waitFor = (milliseconds: number) => {
  return new Promise((resolve, reject) => setTimeout(resolve, milliseconds))
}

/**
 * Execute a promise and retry with exponential backoff
 * based on the maximum retry attempts it can perform  
 * @param {Promise} promise promise to be executed
 * @param {function} onRetry callback executed when retry
 * @param {number} maxRetries the maximum number of retries
 */
const retry = async <Tdata,>(promise: () => Promise<Tdata>, onRetry: () => void, maxRetries: number) => {
  // Notice that we declare an inner function here
  // so we can encapsulate the retries and don't expose
  // it to the caller. This is also a recursive function
  const retryBackOff = async (retries: number): Promise<Tdata> => {
    try {
      if (retries > 0) {
        // Here is where the magic happens.
        // on every retry, we exponentially increase the time to wait.
        // Here is how it looks for a `maxRetries` = 4
        // (2 ** 1) * 100 = 200 ms
        // (2 ** 2) * 100 = 400 ms
        // (2 ** 3) * 100 = 800 ms
        const timeToWait = 2 ** retries * 100
        console.log(`waiting for ${timeToWait}ms...`);
        await waitFor(timeToWait)
      }

      return await promise()
    } catch (e) {
      // only retries if we don't reach the limit

      if (maxRetries > retries) {
        onRetry()
        return await retryBackOff(retries + 1)
      } else {
        console.warn("Max retries reached. Bubbling the error up");
        throw e
      }

      // this will not throw error 
      // if(0){
      //   throw e
      // }
    }
  }

  return await retryBackOff(0)
}
const generateFailableAPICall = () => {
  let counter = 0
  return () => {
    if (counter < 3) {
      counter++
      return Promise.reject('error reject');
    } else {
      return Promise.resolve({ status: "ok" });
    }
  }
}
const main = async () => {

  const apiCall = generateFailableAPICall()
  const result = await retry(
    apiCall,
    () => console.log('retry'),
    4
  )
  console.log(result?.status)
}
main()
