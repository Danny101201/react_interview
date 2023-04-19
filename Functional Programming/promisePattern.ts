class Deferred<T, E = unknown>{
  promise: Promise<T>
  resolve: (value: T | Promise<T>) => void = () => null
  reject: (reason?: E) => void = () => null

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}

export function getUserMicrophoneStream(): Promise<MediaStream> {
  return navigator.mediaDevices.getDisplayMedia({
    audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
    }
  })
}


export function recordStreamBlob(stream: MediaStream) {
  const mediaRecoder = new MediaRecorder(stream)

  const chunks: Array<BlobPart> = []
  const deferredBlob = new Deferred<Blob, Error>()

  mediaRecoder.addEventListener('dataavailable', (e) => {
    chunks.push(e.data)
  })
  mediaRecoder.addEventListener('stop', (e) => {
    const blob = new Blob(chunks, { type: 'audio/ogg;codes=opus' })
    deferredBlob.resolve(blob)
  })

  mediaRecoder.start()

  return () => {
    mediaRecoder.stop()
    return deferredBlob.promise
  }

}