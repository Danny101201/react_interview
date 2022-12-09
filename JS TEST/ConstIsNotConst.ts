
const InMutableArray = ['a', 'b', 'c'] as const
const MutableArray = ['a', 'b', 'c']
// 因為 InMutableArray 為唯讀屬性，所以無法push
InMutableArray.push('a')
MutableArray.push('a')

const InMutableObj = { a: '1', b: '2' } as const
const MutableObj = { a: '1', b: '2' }
// 因為 'a' 為唯讀屬性，所以無法指派至 'a'
InMutableObj.a = '3'
MutableObj.a = '3'

