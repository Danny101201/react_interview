import { useCallback, useContext, useEffect } from "react"
import { useEmitContext } from "../EventEmitterRC"
import { BaseEvent } from "../EventEmitter"

export const useEmit = <Event extends BaseEvent>() => {
  const em = useEmitContext()
  return useCallback(<E extends keyof Event>(type: E, ...args: Event[E]) => {
    console.log('emitter emit: ', type, args)
    em.emit(type, ...args)
  }, [em])
}

export const useEventEmitter = <Event extends BaseEvent>() => {
  const emit = useEmit()
  const em = useEmitContext()
  return {
    useListener: <E extends keyof Event>(type: E, listener: (...args: Event[E]) => void) => {
      useEffect(() => {
        console.log('emitter add: ', type, listener)
        em.add(type, listener)
        return () => {
          em.remove(type, listener)
          console.log('emitter remove: ', type, listener)
        }
      }, [em, listener, type])
    },
    emit
  }
}