import { useEffect } from "react"
import { ActionType, useToast } from "../context/ToastContext"

interface ToastProps {
  toast: ToastType[]
}

const isReactNode = (value: ContentsType): value is () => JSX.Element => typeof value === 'function'
export const Toast = ({ toast }: ToastProps) => {

  if (toast.length === 0) return null
  return (
    <div className="fixed top-0 right-0 ">
      <div className="p-4 border border-red-500 rounded-md w-[200px]">
        {/* Displaying each element of the toast */}
        {toast.map(t => {
          return (
            <ToastItem t={t} key={t.id} />
          );
        })}
      </div>
    </div>
  )
}

const ToastItem = ({ t }: { t: ToastType }) => {
  const { toastDispatch } = useToast()
  const renderItem = (content: ContentsType) => {
    const Context = content
    if (isReactNode(Context)) {
      return <Context />
    }
    return Context

  }
  useEffect(() => {
    const id = setTimeout(() => {
      toastDispatch({ type: ActionType.REMOVE, payload: { id: t.id } })
    }, 2000)
    return () => {
      clearTimeout(id)
    }
  }, [])
  return (
    <div
      className={`flex gap-5 ${t.type ? t.type : ''}`}
    >
      <span role="img" aria-label="close toast" className="toast-close" >
        &times;
      </span>
      {renderItem(t.content)}
    </div>)
}

