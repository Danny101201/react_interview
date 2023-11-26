type State = {
  count: number,
  text: string,
  someData: string[],
}
export const store = {
  state: {
    count: 0,
    text: 'Danny',
    someData: ["Vue", "React"]
  },
  setState: (fnOrState: ((state: State) => State) | Partial<State>) => {
    const newState = typeof fnOrState === 'function' ? fnOrState(store.state) : fnOrState
    store.state = {
      ...store.state,
      ...newState
    }
    store.listeners.forEach((listener) => {
      (listener as () => void)()
    })

  },
  listeners: new Set(),
  subscribe: (listener: () => void) => {
    store.listeners.add(listener)
    return () => {
      store.listeners.delete(listener)
    }
  },
  getSnapshot: () => store.state
}