type Color =
  | string
  | { r: number, g: number, b: number }

let Red: Color = 'red'
let Green = 'Green' as string

const blue = 'blue' satisfies Color
const result = blue.endsWith('bl')

interface User {
  name: string
}
interface Info {
  users: User[]
}

function getInfo(info: Info) {

  console.log(info.users[0].name)

}

const info: Info = { users: [] }