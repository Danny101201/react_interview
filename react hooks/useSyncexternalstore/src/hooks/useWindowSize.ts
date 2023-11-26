import { useSyncExternalStore } from "react"

const useWindowWidthSize = () => {
  return useSyncExternalStore(subscribe, () => window.innerWidth)
}
const useWindowHeightSize = () => {
  return useSyncExternalStore(subscribe, () => window.innerWidth)
}
const subscribe = (callBack: () => void) => {
  window.addEventListener('resize', callBack)
  return () => {
    window.removeEventListener('resize', callBack)
  }
}
export const useWindowSize = () => {
  const width = useWindowWidthSize()
  const height = useWindowHeightSize()
  return {
    width,
    height
  }
}