type DropDownOption = { value: string }


type DropdownPropsBefore = {
  options: Array<DropDownOption>,
  onSelect: (option: DropDownOption) => void
}
type DropdownProps<T extends ReadonlyArray<DropDownOption>> = {
  options: T,
  onSelect: (option: T[number]) => void
}

declare function Dropdown<
  T extends ReadonlyArray<DropDownOption>
>(props: DropdownProps<T>): void
declare function DropdownBefore(props: DropdownPropsBefore): void

Dropdown({
  options: [
    { value: 'gadget' as const },
    { value: 'widget' as const },
  ] as const,
  onSelect: (arg) => {
    console.log(arg.value)
  }
})
DropdownBefore({
  options: [
    { value: 'gadget' },
    { value: 'widget' },
  ],
  onSelect: (arg) => {
    console.log(arg.value)
  }
})