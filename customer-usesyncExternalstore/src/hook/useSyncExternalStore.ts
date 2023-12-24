import { useDebugValue, useEffect, useLayoutEffect, useState } from "react"
type InstType<T> = {
  inst: {
    value: T;
    getSnapshot: () => T;
  }
}
export const useSyncExternalStore = <T>(
  subscribe: (fn: () => void) => () => void,
  getSnapshot: () => T,
) => {

  const value = getSnapshot()

  const [{ inst }, forceUpdate] = useState<InstType<T>>({ inst: { value, getSnapshot } })
  useLayoutEffect(() => {
    inst.value = value
    inst.getSnapshot = getSnapshot
    if (checkIfSnapshotChanged({ inst })) {
      forceUpdate({ inst })
    }
  }, [getSnapshot, inst, value])
  useEffect(() => {
    // before subscribe
    if (checkIfSnapshotChanged({ inst })) {
      forceUpdate({ inst })
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged({ inst })) {
        forceUpdate({ inst })
      }
    }

    subscribe(handleStoreChange)
  }, [inst, subscribe])
  useDebugValue(value)
  return value
}

const checkIfSnapshotChanged = <T>({ inst }: InstType<T>) => {
  const lastValue = inst.getSnapshot()
  const preValue = inst.value
  console.log({ lastValue, preValue })
  try {
    return !is(preValue, lastValue)
  } catch (e) {
    return true
  }
}
const is = (x: unknown, y: unknown) => {
  return Object.is(x, y)
}