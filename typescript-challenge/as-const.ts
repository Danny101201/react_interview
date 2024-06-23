// 首先我們先訂一組 const route 記錄所有會使用到的 const
const route = {
  home: "/",
  admin: "/admin",
  users: "/users",
  newUser: '/newUser'
} as const

type Route = (typeof route)[keyof typeof route]

const goToRoute = (route: Route) => { }

goToRoute('/')

goToRoute(route.admin)


