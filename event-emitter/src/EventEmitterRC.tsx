import { PropsWithChildren, createContext, useContext } from "react";
import { EventEmitter } from "./EventEmitter";

export const EventEmitterContext = createContext<EventEmitter<any>>(null as any)

export const EventEmitterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <EventEmitterContext.Provider value={new EventEmitter()}>{children}</EventEmitterContext.Provider>
  )
}

export const useEmitContext = () => useContext(EventEmitterContext)