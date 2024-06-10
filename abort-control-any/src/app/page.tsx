'use client'
import { MutableRefObject, useEffect, useRef } from "react";

async function getContext(url: string, signal: AbortSignal) {
  try {
    const signalWithTimeout = AbortSignal.any([signal, AbortSignal.timeout(2000)]);
    const response = await fetch(url, { signal: signalWithTimeout });
    return response.json();
  } catch (e) {
    if (e instanceof Error) {
      if (e.name === 'TimeoutError') {
        console.log('timeOut')
      }
      if (e.name === 'AbortError') {
        console.log('AbortError')
      }
    }
  }
}

export default function Home() {
  const signalRef = useRef<AbortController | null>()
  useGetAbortControlInstance(signalRef)

  useEffect(() => {
    if (signalRef.current) {
      getContext('/api/test', signalRef.current.signal)
    }
  }, [])

  return (
    <>
      <button onClick={() => signalRef.current?.abort()}>abort</button>

    </>
  );
}

const useGetAbortControlInstance = (ref: MutableRefObject<AbortController | null | undefined>) => {
  useEffect(() => {
    const abortController = new AbortController()
    ref.current = abortController
   }, [ref])
}