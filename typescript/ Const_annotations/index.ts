const Routes = <const T>(routes: T[]) => {
  const addRedirect = (from: T, to: T) => { }
  return {
    addRedirect
  }
}


const router = Routes(['/users', '/posts', '/admin/users'])
router.addRedirect('/admin/users', '/posts')