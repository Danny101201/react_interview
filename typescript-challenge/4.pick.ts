const getProperty1 = <T>(obj: T, key:keyof T) => obj[key]
const getProperty2 = <T,K extends keyof T>(obj: T, key:K) => obj[key]

const obj = {
  x: '123',
  y: 123,
  z: true
}
const result = getProperty2(obj, 'x')
//  ^?  string

type MyPick<T extends Record<string, any>, K extends keyof T> = {
  [k in K]: T[k]
}

type Input = {
  name: string,
  age: number,
  address: {
    region: string,
    contractNo: number
  }
}

type OutPut1 = MyPick<Input, 'address'>
//   ^?
type OutPut2 = MyPick<Input, 'age' | 'name'>
//   ^?