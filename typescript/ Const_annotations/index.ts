let routes = ['/users', '/posts', '/admin/users'] as const


const Routes = <const T>(routes: readonly T[]) => {
  const addRedirect = (form: T, to: T) => { }
  return {
    addRedirect
  }
}

const router = Routes(routes)
router.addRedirect('/posts', '/admin/users')