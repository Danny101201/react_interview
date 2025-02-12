import { useState } from "react"

export const useCopy = () => {
  const [copied, setCopied] = useState<boolean>(false)
  return [
    copied,
    async (text: string) => {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    }
  ] as const
}


