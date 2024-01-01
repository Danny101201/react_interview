const getPost = () => {
  return fetch('someURL').then(res => res.json()) as Promise<{ name: string }>
}

type PromiseReturnType<T> = T extends () => Promise<infer U> ? U : T
type ReturnPromiseType = PromiseReturnType<typeof getPost>

const tabs = ['tabA', 'tabB', 'tabC'] as const
const tabsObject = {
  a: 'aa',
  b: 'bb',
  c: 'cc'
} as const
type Tab = (typeof tabs)[number] // "tabA" | "tabB" | "tabC"
type TabFromObject = (typeof tabsObject)[keyof typeof tabsObject] // "aa" | "bb" | "cc"
type ArrayValue<T> = T extends readonly string[] ? T[number] : T

type MyDashBoard = ArrayValue<typeof tabs>