type HumanInfo = {
  firstName: string
  lastName: string
}

type AnimateInfo = {
  name: string
}

const isHumanName = (items: HumanInfo | AnimateInfo): items is HumanInfo => {
  return 'firstName' in items
}
const getName = <TItem extends HumanInfo | AnimateInfo>
  (items: TItem): TItem extends HumanInfo ? { humanName: string } : { animalName: string } => {
  if (isHumanName(items)) {
    return {
      humanName: items.firstName
    } as TItem extends HumanInfo ? { humanName: string } : { animalName: string }
  }
  return {
    animalName: items.name
  } as TItem extends HumanInfo ? { humanName: string } : { animalName: string }
}

const result2 = getName({ name: 'Danny' })
const result3 = getName({ firstName: 'Danny', lastName: 'Wu' })