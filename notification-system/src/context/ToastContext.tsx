import React, { createContext, useReducer, useContext, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { Toast } from '../components/Toast';

export enum ActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  REMOVE_ALL = 'REMOVE_ALL',
}
const initialState: ToastType[] = [];
// An interface for our actions
interface ToastAction {
  type: ActionType;
  payload: {
    id?: string,
    content?: ContentsType,
    type?: string
  };
}
type ToastContextType = {
  toast: ToastType[];
  toastDispatch: React.Dispatch<ToastAction>;
}
// An interface for our state
export const ToastContext = createContext<ToastContextType>({ toast: initialState, toastDispatch: () => { } });

const toastReducer = (state: ToastType[], action: ToastAction) => {
  switch (action.type) {
    case ActionType.ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          content: action.payload.content,
          type: action.payload.type
        }
      ] as ToastType[]
    case ActionType.REMOVE:
      return state.filter(toast => toast.id !== action.payload.id)
    case ActionType.REMOVE_ALL:
      return initialState
    default:
      return state
  }
}
export const ToastContextWrapper = ({ children }: PropsWithChildren) => {
  const [toast, toastDispatch] = useReducer(toastReducer, initialState);
  const toastData = { toast, toastDispatch };
  return (
    <ToastContext.Provider value={toastData}>
      {children}
      {createPortal(<Toast toast={toast} />, document.body)}
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)

