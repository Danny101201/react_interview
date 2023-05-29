import { FC, InputHTMLAttributes, useEffect, useState, forwardRef, useRef, ChangeEvent, useImperativeHandle } from 'react'
import { useDebounce } from '../hook/useDebounce'


export type InputRefImperativeHandleProps = {
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void
  clearInput: () => void
  focusInput: () => void
  inputValue: string | number
}

interface DebounceInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: string | number) => void,
  delay?: number
}
export const DebounceInput = forwardRef<
  InputRefImperativeHandleProps,
  DebounceInputProps
>
  (
    ({ onChange, delay = 1000, ...rest }, ref) => {

      const [value, setValue] = useState('')
      const inputRef = useRef<HTMLInputElement | null>(null)
      const deferValue = useDebounce({ value, delay })
      const focusInput = () => {
        inputRef.current?.focus()
      }
      const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
      }
      const clearInput = () => {
        setValue('')
      }
      useEffect(() => {
        onChange(deferValue as string)
      }, [deferValue])

      useImperativeHandle(ref, () => {
        return {
          changeInput,
          clearInput,
          focusInput,
          inputValue: inputRef.current?.value as string,
        }
      })
      return <input ref={inputRef} type="text" value={value} onChange={changeInput} {...rest} />

    })
