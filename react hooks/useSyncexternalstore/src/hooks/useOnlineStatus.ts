import { useSyncExternalStore } from "react"

export const useOnlineStatus = () => {
  return useSyncExternalStore(subscribe, () => navigator.onLine, () => true)
}
const subscribe = (callBack: () => void) => {
  window.addEventListener('online', callBack)
  window.addEventListener('offline', callBack)
  return () => {
    window.removeEventListener('online', callBack)
    window.removeEventListener('offline', callBack)
  }
}