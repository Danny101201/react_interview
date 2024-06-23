let tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
let tuple2 = ['tesla', 'model 3', 'model X', 'model Y']

type TupleToObject<T extends ReadonlyArray<string>> = {
  [K in T[number]]: K
}
type result = TupleToObject<typeof tuple2>

// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


let teamMembers: Array<string> = ['Danny', 'Ways', 'Steve']
teamMembers[0] = 'Emma'
console.log(teamMembers)

let teamMembers2: ReadonlyArray<string> = ['Danny', 'Ways', 'Steve']
teamMembers2[0] = 'Emma'
console.log(teamMembers2)

// type Item = [string, number]
// type ArrayItem = Item[number]

// as const 會直接型別推論指定的型別
const foo = ['a', 'b'] as const // const foo:['a','b'] = ['a','b']
