import { PropsWithChildren, createContext, useContext } from "react";
import { BaseEventType, EventEmitter } from "./EventEmitter";


const EventEmitterContext = createContext<EventEmitter<BaseEventType>>(null as any)
export const EventEmitterProvider = ({ children }: PropsWithChildren) => {
  return (
    <EventEmitterContext.Provider value={new EventEmitter()}>{children}</EventEmitterContext.Provider>
  )
}
export const useEmitContext = () => useContext(EventEmitterContext)