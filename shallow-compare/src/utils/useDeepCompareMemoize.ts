import { dequal as deepEqual } from "dequal"
import { DependencyList, useMemo, useRef } from "react"


export const useDeepCompareMemoize = (value: DependencyList) => {

  const ref = useRef<DependencyList>(value)
  const signalRef = useRef<number>(0)
  if (!deepEqual(value, ref.current)) {
    ref.current = value
    signalRef.current += 1
  }

  return useMemo<DependencyList>(() => ref.current, [signalRef.current])

}


const isPrimitive = (val: unknown) => {
  return val == null || /^[snb]/.test(typeof val)
}

const checkDeps = (deps: DependencyList) => {
  if (!deps || !deps.length) {
    throw new Error(
      'useDeepCompareMemoize should not be used with no dependencies.',
    )
  }
  if (deps.every(isPrimitive)) {
    throw new Error(
      'useDeepCompareMemoize should not be used with dependencies that are all primitive values.',
    )
  }
}