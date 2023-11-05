const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('value1')
  }, 500)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('value2')
  }, 1000)
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('reject1')
  }, 1000)
})

// all promise resolve
Promise.all([promise1, promise2])
  .then(console.log)
  .catch(e => {
    console.log('some error (1.Promise.all)')

  })
// one promise reject 
Promise.all([promise1, promise3])
  .then(console.log)
  .catch(e => {
    console.log('some error (2.Promise.all)')
  })
Promise.allSettled([promise3, promise3])
  .then(console.log)
  .catch(e => {
    // never call here
    console.log('some error (Promise.allSettled)')
  })
// return first complete promise
Promise.race([promise2, promise3])
  .then(console.log)
  .catch(e => {
    // if all promise failed then return error
    console.log('some error (Promise.race)')
  })

// return first complete promise
Promise.any([promise2, promise3])
  .then(res => {
    console.log('promise any ' + res)
  })
  .catch(e => {
    // if all promise failed then return error
    console.log('some error (Promise.any)')
  })

//  promise.all ： 用處在你希望所有 promise 都是resolve 才會傳結果，只要其中一個reject 全部都fail
//  promise.allSettled ： 你不希望其他 promise 被互相影響導致 failed， 並希望彼此都是獨立的狀況， allSettled 會 return 各自的 status 跟 data 並且使用 allSettled 並不會去觸發 catch 得 callback function
// promise.race : 你希望只回傳第一個 resolve 或 reject 的 promise ，如果所有 promise 都 error 才會去觸發 cache 的 callback function
// promise.any : 你希望只回傳第一個 resolve  的 promise ，如果所有 promise 都 error 才會去觸發 cache 的 callback function


const aaafetch = async () => {
  const abort = new AbortController()
  try {

    await Promise.race([
      fetch('/aa', { signal: abort.signal }),
      fetch('/cc', { signal: abort.signal }),
      fetch('/dd', { signal: abort.signal }),
      new Promise((_, r) => setTimeout(r, 2000))
    ])
  } catch (e) {
    abort.abort()
  }
}