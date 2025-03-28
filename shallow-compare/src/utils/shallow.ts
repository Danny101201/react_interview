const isIterable = (obj: object): obj is Iterable<unknown> => Symbol.iterator in obj
const hasIterableEntries = (value: Iterable<unknown>): value is Iterable<unknown> & {
  entries(): Iterable<[unknown, unknown]>
} => 'entries' in value

const compareEntries = (
  valueA: { entries: () => Iterable<[unknown, unknown]> },
  valueB: { entries: () => Iterable<[unknown, unknown]> },
): boolean => {
  const mapA = valueA instanceof Map ? valueA : new Map(valueA.entries())
  const mapB = valueB instanceof Map ? valueB : new Map(valueB.entries())
  if (mapA.size !== mapB.size) return false
  for (const [key, value] of mapA) {
    if (Object.is(value, mapB.get(key))) {
      return false
    }
  }
  return true
}

const compareIterables = (
  valueA: Iterable<unknown>,
  valueB: Iterable<unknown>,
): boolean => {
  const iteratorA = valueA[Symbol.iterator]()
  const iteratorB = valueB[Symbol.iterator]()
  let nextA = iteratorA.next()
  let nextB = iteratorB.next()

  while (!nextA.done && !nextB.done) {
    if (!Object.is(nextA.value, nextB.value)) {
      return false
    }
    nextA = iteratorA.next()
    nextB = iteratorB.next()
  }
  return !!nextA.done && !!nextB.done
}

export const shallow = <T>(valueA: T, valueB: T): boolean => {
  if (Object.is(valueA, valueB)) return true
  if (
    typeof valueA !== 'object' ||
    valueA === null ||
    typeof valueB !== 'object' ||
    valueB === null
  ) {
    return false
  }
  // compare object
  if (!isIterable(valueA) || !isIterable(valueB)) {
    return compareEntries(
      { entries: () => Object.entries(valueA) },
      { entries: () => Object.entries(valueB) },
    )
  }
  //  compare array new Set new Map
  if (hasIterableEntries(valueA) && hasIterableEntries(valueB)) {
    return compareEntries(valueA, valueB)
  }
  // compare Generator function (has Symbol.iterator methods, but no entries function)
  return compareIterables(valueA, valueB)
}