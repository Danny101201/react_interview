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
) => {
  const [eventType] = args
  if (eventType === 'Login') {
    const payload = args[1]
    console.log(payload)
  }
}
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


type EventType = {
  type: 'login'
} | {
  type: 'logout',
  payload: {
    name: string
  }
}

const shopEvent = <Event extends EventType['type']>(
  ...args: Extract<EventType, { type: Event }> extends { payload: infer PayloadType }
    ? [type: Event, payload: PayloadType]
    : [type: Event]
) => {
  const [type, payload] = args
}
shopEvent('logout', { name: 'string' })


type EventTYpe = {
  type: 'A'
} | {
  type: 'B',
  payload: {
    info: string
  }
}

const sendEventTYpe = <Event2 extends EventTYpe['type']>(
  ...arg: Extract<EventTYpe, { type: Event2 }> extends { payload: infer Tplayoad } ? [type: Event2, payload: Tplayoad] : [type: Event2]
) => {

}

sendEventTYpe('B', {
  info: '111'
})