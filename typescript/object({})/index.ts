// 在 ts 中 {} 是一個很特別的型別，我們可會會預期他是一個空的 obj 型別，但實際上他代表的是一個  any non-nullish value
// 請看一下的例子

interface AAA {
  aaa: {}
}

const example: AAA = {
  aaa: true
}

// 你會發現並不會發生 ts error
// 以目前來說 ts 並沒有一個 type 是專門定義空的 object ，但我們可以模擬他

type EmptyObject = Record<string, never>
const A: EmptyObject = { a: 1 }// expect error
const B: EmptyObject = 1 // expect error
const C: EmptyObject = () => { } // expect error
const D: EmptyObject = undefined // expect error
const E: EmptyObject = null // expect error
const F: EmptyObject = {} // no error

// {} 還有一個很奇怪的特性在交叉類型中，{} 是沒有意義的宣告會被忽視
type T1 = { a: 1 } & {};
const t11: T1 = { a: 1 };
const t12: T1 = true; // expected error
const t13: T1 = {}; // expected error

type T2 = true & {};
const t21: T2 = true;
const t22: T2 = false; // expected error
const t23: T2 = {}; // expected error


// 有時候我們會需要
type ColumnType = 'unAssign' | 'assign' | (string & {})
type ColumnType2 = 'unAssign' | 'assign' | Omit<string, 'unAssign' | 'assign'>
