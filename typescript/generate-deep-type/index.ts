const getDeeppValue = <
  TObj extends Record<string, unknown>,
  TFirstKey extends keyof TObj,
  TSecondKey extends keyof TObj[TFirstKey]
>(obj: TObj, key: TFirstKey, secondkey: TSecondKey) => {
  return obj[key][secondkey]
}
const inputObj = {
  a: {
    b: "I'm B",
    c: "I'm C",
  }
} as const


const bValue = getDeeppValue(inputObj, 'a', 'b')