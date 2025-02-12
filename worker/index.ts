import { Worker } from 'node:worker_threads';

const shareBuffer = new SharedArrayBuffer(4)
const bufferArray = new Uint8Array(shareBuffer)
bufferArray.fill(5)

console.log(`buffer modify before:`, bufferArray)

let result = null as unknown as Int32Array
const w = new Worker('./worker.js', {
  workerData: {
    shareBuffer
  },
})

w.addListener('message', () => {
  console.log(`buffer modify after:`, bufferArray)
})


// setTimeout(() => {
//   Atomics.store(result, 0, 1)
//   Atomics.notify(result, 0, 1)
// })
