import { useEffect } from "react"

export const useFetchOnce = <Tdata>(api: () => Promise<Tdata>, onSuccess: (data: Tdata) => void) => {
  let didFetch: boolean
  useEffect(() => {
    if (!didFetch) {
      api().then(onSuccess)
    }
    didFetch = true
  }, [])
}
