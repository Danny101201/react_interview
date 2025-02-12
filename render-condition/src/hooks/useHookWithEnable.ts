import { useEffect } from "react"

export const useHookWithEnable = (enable: boolean, cb: () => void) => {
  const eventSignalRef = new AbortController()
  useEffect(() => {
    if (!enable) return
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
  }, [cb, enable])
}