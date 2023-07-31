type EventFun =
  | {
    type: "Login";
    payload: {
      userId: string
    }
  }
  | {
    type: "Logout";
  }

const sendEventAfter2 = <Type extends EventFun['type']>(
  ...args: Extract<EventFun, { type: Type }> extends { payload: infer Payload }
    ? [type: Type, payload: Payload]
    : [type: Type]
) => { }
const sendEventBefore = (eventType: EventFun['type'], payload?: any) => { }
const sendEventAfter = <Type extends EventFun['type']>(
  ...args: Extract<EventFun, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => { }

sendEventBefore("Login", {
  userId: '1'
})
sendEventBefore("Logout")

sendEventAfter("Login", {
  userId: '112'
})


type ShowButtonType = {
  type: 'show',
}
type HiddenButtonType = {
  type: 'hidden',
  isHidden: boolean
}

type ButtonType = ShowButtonType | HiddenButtonType
interface ButtonPropsType {
  Button: ButtonType
}


const Button = <TType extends ButtonType['type']>(
  ...args: Extract<ButtonType, { type: TType }> extends { isHidden: boolean }
    ? [TType, boolean]
    : [TType]
) => { }

Button('hidden', true)
Button('show')

