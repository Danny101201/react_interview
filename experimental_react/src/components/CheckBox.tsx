import React, { useId } from 'react'
import { Url } from '../App'

interface CheckBoxProps {
  isCheck: boolean,
  value: Url,
  label: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function CheckBox({ isCheck, label, value, onChange }: CheckBoxProps) {
  const checkBoxId = useId()
  return (
    <div>
      <label htmlFor={checkBoxId}>{label}</label>
      <input checked={isCheck} type="checkbox" id={checkBoxId} value={value} onChange={onChange} />
    </div>
  )
}

