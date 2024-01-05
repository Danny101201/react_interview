import { useRef, useEffect } from "react"
// reload window will not trigger callBacl again ，but if you close tab and reopen page，callBack will trigger again
// ex. webPage Visits | analytics web performance
export const useRunFirstRender = (fn: () => void, sessionKey: string) => {
  const triggered = useRef<boolean>(false)
  useEffect(() => {
    const isTriggered = sessionStorage.getItem(sessionKey) ?? triggered.current
    if (!isTriggered) {
      triggered.current = true
      sessionStorage.setItem(sessionKey, 'true')
      fn()
    }
  }, [fn, sessionKey])
}