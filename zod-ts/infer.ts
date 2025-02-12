type Result = boolean extends true ? 1 : 0

const fun = () => 132
type ReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
type Test = ReturnType2<typeof fun>

declare function createFSM<TState extends string>(config: {
  initial: NoInfer<TState>,
  states: TState[]
}): TState


const example1 = createFSM({
  initial: 'close',
  states: ['open', 'close']
})