const assertInArrwoFunction: (value: unknown, message?: string) => asserts value = (value: unknown, message?: string) => {
  if (!value) {
    throw new Error(message);
  }
}
function assert(value: unknown, message?: string): asserts value {
  if (!value) {
    throw new Error(message);
  }
}
function assertNonNull<T>(obj: T): asserts  obj is NonNullable<T> { }
function assertNumberArray(value: unknown): asserts value is number[] {
  if (!(value as any[]).every(item => typeof item === 'number')) {
    throw new Error('array items must be number')
  }
}
const f1 = (n: number | string): number => {
  assert(typeof n === 'string', 'n is not string');
  return n.length; // n 一定是 string類型
}
const f2 = (value: unknown) => {
  assertNumberArray(value)

}
const f3 = (n: null | string) => {
  assertNonNull(n)
  n.length // n ->string
}

const result = f1('10')


const createPosts = (id: string, title: string) => {
  console.log(id + title)
}
class SDK {
  constructor(public loggedUserId?: string) { }
  createPost(title: string) {
    this.assertUsersIsLoggedIn()
    createPosts(this.loggedUserId, title)
  }

  assertUsersIsLoggedIn(): asserts this is this & { loggedUserId: string } {
    if (!this.loggedUserId) {
      throw new Error('User not logged in ')
    }
  }
}