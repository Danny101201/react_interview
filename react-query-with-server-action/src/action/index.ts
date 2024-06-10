'use server'
export const getUser = async ({ age }: { age: number }) => {
  return {
    id: crypto.randomUUID(),
    name: 'Danny',
    age
  }
}