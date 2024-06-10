// 7.readyOnly.ts
interface Todo {
  title: string
  description: string
}
type MyReadonly<T extends Record<string, any>> = {
  readonly [K in keyof T]: T[K]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}
// todo.title = '132' // Error: cannot reassign a readonly property
// todo.description = 'barFoo'  // Error: cannot reassign a readonly property