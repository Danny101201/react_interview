type member = {
  id: number
}
function findOrThrow<T>(
  array: T[],
  predicate: (item: T) => boolean,
  msg: string = 'msg'
) {
  const t = array.find(predicate)
  if (t) return t
  throw new Error(msg)
}

const members: member[] = [{ id: 1 }]

const item = findOrThrow(members, (item) => item.id === 1)
const fdg = isMember(item)

function isMember(arg: unknown): arg is member {
  return !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    typeof arg.id === 'number'
}
function isNotNull<T>(arg: T | null | undefined): arg is T {
  return !!arg
}

function hasMemberId(arg: member): arg is (member & { id: string }) {
  return arg.id !== undefined
}

isNotNull(members)

