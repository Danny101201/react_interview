export type User = {
  name: string
}
export const getUsers: () => User = () => {
  return {
    name: 'Danny'
  }
}