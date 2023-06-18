
import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

type Person = {
  id: number
  firstName: string
  lastName: string
  age: number
}
type SortInfo<T> = {
  id: keyof T,
  desc: boolean
}
const createPerson = (index: number): Person => {
  return {
    id: index + 1,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 20, max: 28 })
  }
}
const mokeData = (count: number) => {
  const result: Person[] = []
  for (let i = 0; i < count; i++) {
    result.push(createPerson(i))
  }
  return result
}
const data = mokeData(2)
const sortData = <T>(items: T[], sortInfo: SortInfo<T>) => {
  const { desc, id } = sortInfo
  const copyData = [...items]
  return copyData.sort((a, b) => {
    if (desc) {
      return a[id] > b[id] ? 1 : -1
    } else {

      return a[id] < b[id] ? 1 : -1
    }
  })
}



