import { useCallback, useReducer, useState } from "react"


export const useToggle = (defaultValue?: boolean) => {
  const [boolean, setBoolean] = useState(defaultValue ?? false)
  const toggle = useCallback(() => setBoolean(pre => !pre), [])
  const setTrue = useCallback(() => setBoolean(true), [])
  const setFalse = useCallback(() => setBoolean(false), [])
  return { toggle, setTrue, setFalse, result: boolean }
}

export const toggleReducer = (state: boolean, nextValue?: unknown) => {
  return typeof nextValue === 'boolean' ? nextValue : !state
}

export const useToggleWithReducer = (initialState: boolean): [state: boolean, setState: (nextValue?: unknown) => void] =>
  useReducer(toggleReducer, initialState)