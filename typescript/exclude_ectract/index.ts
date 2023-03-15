import { useQuery, UseQueryResult, DefinedQueryObserverResult } from "@tanstack/react-query"



function filterByType<
  T extends { type: string },
  U extends T['type']
>(arr: T[], type: U) {
  type R = Extract<T, { type: U }>
  return arr.filter((item): item is R => item.type === type)
}

type StandardUser = { type: 'user', id: number }
type AdminUser = { type: 'admin', id: number }
type Users = StandardUser | AdminUser
type SU = Extract<Users, { type: string }>

declare const users: Users[]
const admins = filterByType(users, 'admin')


function useUser() {
  return useQuery(["key"], () => {
    return {
      id: 1,
      name: "andrew"
    }
  })
}

type R = ReturnType<typeof useUser>

type UserDataType = Exclude<
  R, { isSuccess: false }>['data']