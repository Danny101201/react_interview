import { useSyncExternalStore } from "react";
import { State, createStore } from "./createStore";
const initialState: State = {
  count: 0,
  text: "milkmidi",
  someData: []
};

const store = createStore(initialState)
const loop = (v: State) => v
export const useMyStore = <T>(select: (value: State) => T = loop as (value: State) => T) => {
  return useSyncExternalStore(store.subscribe, () => select(store.getSnapshot()))
}

export const { setState } = store