import { useCallback, useEffect } from "react"
import { useEmitContext } from "../EventEmitterContext"
import { BaseEvent } from "../EventEmitter"

export const useEmit = <Event extends BaseEvent>() => {
  const em = useEmitContext()
  return useCallback(<K extends keyof Event>(type: K, ...args: Event[K]) => {
    em.emit(type, ...args)
  }, [em])
}

export const useEventEmitter = <Event extends BaseEvent>() => {
  const emit = useEmit<Event>()
  const em = useEmitContext()
  return {
    useListener: <K extends keyof Event>(type: K, callBack: (...arg: Event[K]) => void) => {
      useEffect(() => {
        console.log('emitter add', type)
        em.addEvent(type, callBack)
        return () => {
          em.removeEvent(type, callBack)
          console.log('emitter remove: ', type, callBack)
        }
      }, [callBack, type, em])
    },
    emit
  }

}