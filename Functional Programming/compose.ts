const WHOLE_CHICKEN = ["leg", "wing", "breast", "buttock", "breast strips", "land", "bug"]
type ChickenTYpe = typeof WHOLE_CHICKEN
// 全雞上取出雞胸肉

const mustHave = <T>(arry: T[], predicate: (item: T) => boolean) => {

  const item = arry.find(predicate)
  if (item) return item
  throw new Error('item not found')
  // if (WHOLE_CHICKEN.includes(part)) { }

}

const grab = (part: ChickenTYpe[number], chicken: ChickenTYpe): ChickenTYpe[number] => {

  const findChickenPart = mustHave(chicken, (item) => item === part)
  return findChickenPart
}

// 口味調配
const addFlavor = (flavor: string, part: ChickenTYpe[number]) => {

  return `${flavor} ${part}`;
}
const wrapIt = (item: string) => `Wrapped(${item})`
const chickenFactory = (flavor: string, part: ChickenTYpe[number], chicken: ChickenTYpe) => wrapIt(addFlavor(flavor, grab(part, chicken)))

console.log(chickenFactory('11', 'leg', WHOLE_CHICKEN))
