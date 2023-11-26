type Todo = {
  id: number,
  text: string
}

let todos: Todo[] = []
let listeners: (() => void)[] = []


export const counterStore = {
  addTodo: (text: string) => {
    todos = [...todos, { id: Math.floor(Math.random()), text }]
    emit()
  },
  subscribe: (listener: () => void) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  },
  getSnapShot: () => {
    return todos
  }
}

const emit = () => {
  for (const listener of listeners) {
    listener()
  }
}