let a: unknown

let b
b = a

// Function Overload（函式超載）
// 函式超載指的是擴充一個函式可以被執行的形式（例如，介面）。簡單來說就是針對同一個函式提供多個不同的 type definition

// overload signatures：也就是 type definition 的部分
// function implementation：實際上執行的 function，它的型別需要滿足所有的 overload signatures


function sendPhone(info: HasPhoneNumber) {
  console.log('send phone : ' + info.phone)
}
function sendEmail(info: HasEmail) {
  console.log('send email : ' + info.email)
}

type HasPhoneNumber = {
  name: string,
  phone: number
}
type HasEmail = {
  name: string,
  email: string
}
// "overload signatures"
function contactPeople(methods: 'phone', ...people: HasPhoneNumber[]): void
function contactPeople(methods: 'email', ...people: HasEmail[]): void
// function implementation

function contactPeople(methods: 'phone' | 'email', ...people: (HasPhoneNumber | HasEmail)[]) {
  if (methods === 'phone') {
    (people as HasPhoneNumber[]).forEach(sendPhone)
  } else {
    (people as HasEmail[]).forEach(sendEmail)
  }
}

contactPeople('email', { name: 'danny', email: 'hiunji64@gmail.com' })
contactPeople('phone', { name: 'danny', phone: 0963802367 })



const default_callBack = '-'
type Nullable<T> = T | null
type NullableType = null | undefined | unknown | ''
type Value = string | number | boolean | any[] | Record<any, any> | null | undefined;
function formatFallback(value: NullableType): typeof default_callBack
function formatFallback<Tdata extends Value>(value: Tdata): Tdata
function formatFallback<Tdata extends Value, E>(value: Tdata, select: (value: Tdata) => E): E
function formatFallback<Tdata extends Value, E>(value: Tdata, select?: (value: Tdata) => E) {
  if (value === null || value === undefined) {
    return default_callBack
  }
  if (select) return select(value) as ReturnType<typeof select>
  return value
}
const value = formatFallback(null) // unknown
const value555 = formatFallback(undefined) // unknown
const value2 = formatFallback({ a: '11', b: '22' })
const value3 = formatFallback({ a: '11', b: '22' }, ({ b }) => b) // string



