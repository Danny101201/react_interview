import { getUsers, User } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'


export type WithAuthProps = {
  user: User
}
export function WithAuth<P extends WithAuthProps,>(WrapperComponent: React.ComponentType<P>) {
  return async function AuthenticatedComponent(
    props: Omit<P, keyof WithAuthProps>
  ) {
    const user = await getUsers()
    if (!user) {
      redirect('/login')
    }
    return (
      <WrapperComponent {...(props as P)} user={user} />
    )
  }
}
