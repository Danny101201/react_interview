const array = [1, 2, 3, '1']
type ArrayTYpeCanNotExcludeType = Exclude<typeof array, string> //(string | number)[] ????

//before
const filterArray = array.filter(item => typeof item === 'string')

// but we get const filterArray: (string | number)[]


//after
type Arr = typeof array
type Result = ExcludeArray<Arr, string>

type ExcludeArray<T extends any[], ToExclude> = Exclude<
  T[number], ToExclude
>[]

type ExcludeArrays<T extends any[], ToExclude> = Exclude<T[number], ToExclude>[]

