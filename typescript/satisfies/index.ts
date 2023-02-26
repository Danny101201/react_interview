type Color =
  | string
  | { r: number, g: number, b: number }

let Red: Color = 'red'
let Green = 'Green' as string

const blue = 'blue' satisfies Color
const result = blue.endsWith('bl')
