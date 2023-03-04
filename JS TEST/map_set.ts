const demoMap = new Map();

const key = { a: 1, b: 2 }
demoMap.set(key, 'aaa')
// console.log(demoMap.has(key))
for (const [key, value] of demoMap) {
  // console.log({ key, value })
}

// const myMap = new Map([['key', 'value'], ['keyTwo', 'valueTwo']])
const myMap = new Map(Object.entries({
  key: 1,
  key2: 2
}))

// console.log(myMap.get('key'))//1
const makeObjToMap = <T extends {}>(obj: T) => {
  return new Map<keyof T, { [k in keyof T]: T[k] }[keyof T]>(Object.entries(obj) as any)
}

const MapValue = makeObjToMap({ a: "1", b: 2 })
console.log(MapValue.get('a')) //

type ObjectEntry<T extends {}> =
  T extends object ?
  Exclude<{ [K in keyof T]: [K, Exclude<T[K], undefined>] }[keyof T], undefined>
  : never
type ContainsOptional = {
  a: number,
  b?: string,
  c: number | undefined,
  d?: string | undefined
}

type ContainsOptionalEntry = ObjectEntry<ContainsOptional>
// => Map<string, string>

const makeObjToMap2 = <T extends {}>(obj: T) => {
  return new Map<ObjectEntry<T>[0], ObjectEntry<T>[1]>(Object.entries(obj) as any)
}
const MapValue2 = makeObjToMap2({ a: "1", b: 2 })
console.log(MapValue2.get('a')) //


const MapToJsonStringfy = JSON.stringify(myMap, (key, value) => {
  if (value instanceof Map) {
    return Object.fromEntries(value)
  }
  return value
}, 2)
console.log(MapToJsonStringfy)

const mapToObj = (map: Map<string, any>) => Object.fromEntries(map)
// console.log(mapToObj(myMap))

console.log(Object.fromEntries(new Map([['a', '1']])))






