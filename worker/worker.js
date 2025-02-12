import { parentPort, workerData } from 'node:worker_threads';


const bufferFromWorker = new Uint8Array(workerData.shareBuffer)
bufferFromWorker.fill(7)
parentPort.postMessage(bufferFromWorker)
// worker thread
// const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
// const i32a = new Int32Array(sab);
// postMessage(i32a);

// const wait = Atomics.waitAsync(i32a, 0, 0);
// { async: false; value: "not-equal" | "timed-out"; }
// or
// { async: true; value: Promise<"ok" | "timed-out">; }

// if (wait.async) {
//   wait.value.then((value) => console.log(value));
// } else {
//   console.log(wait.value);
// }

// const fibonacci = ()=>{}
parentPort?.postMessage('hi')