type ToastType = {
  id: string
  content: ContentsType
  type: string
}
type ContentsType = ReactNode | (() => JSX.Element)