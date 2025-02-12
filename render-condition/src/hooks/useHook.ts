import { useEffect } from "react"

export const useHook = (cb: () => void) => {
  const eventSignalRef = new AbortController()
  useEffect(() => {
    const handler = () => {
      cb()
    }
    document.addEventListener('click', handler, {
      signal: eventSignalRef.signal
    })
    return () => {
      // document.removeEventListener('click', handler)
      eventSignalRef.abort()
    }
  }, [cb])
}