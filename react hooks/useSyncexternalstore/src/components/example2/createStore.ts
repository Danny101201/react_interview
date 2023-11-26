export type State = {
  count: number,
  text: string,
  someData: string[],
}
export const createStore = (initionalState: State) => {
  let state = initionalState
  const listeners = new Set()
  const setState = (fnOrState: ((state: State) => State) | Partial<State>) => {
    const newState = typeof fnOrState === 'function' ? fnOrState(state) : fnOrState
    state = {
      ...state,
      ...newState
    }
    listeners.forEach((listener) => {
      (listener as () => void)()
    })
  }

  const subscribe = (listener: () => void) => {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }
  const getSnapshot = () => state
  return {
    setState,
    subscribe,
    getSnapshot
  }

}