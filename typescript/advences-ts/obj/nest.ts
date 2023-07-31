const getDeepValue = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey],
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
) => {
  return obj[firstKey][secondKey]
}


const obj = {
  foo: {
    a: 1,
    b: '1'
  },
  bar: {
    c: null,
    d: false
  }
}

const result = getDeepValue(obj, 'bar', 'd')