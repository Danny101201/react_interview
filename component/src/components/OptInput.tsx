import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'

export const OptInput = () => {

  const [otpValue, setOtpValue] = useState<string>('')
  const inputsRef = useRef<HTMLInputElement[]>([])
  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const value = target.value
    const inputIndex = Number(target.name.split('-').pop())
    const nextInput = inputsRef.current[inputIndex + 1]
    setOtpValue(pre => pre + value)
    if (value !== '' && nextInput) {
      inputsRef.current[inputIndex + 1].value = ''
      inputsRef.current[inputIndex + 1].focus()
    }
  }
  const handlekeyDownInputValue = (e: KeyboardEvent<HTMLInputElement>) => {
    const digitPattern = /^[0-9]$/
    const key = e.key
    if (!digitPattern.test(key) && key !== 'Backspace') return e.preventDefault()
    const target = e.target as EventTarget & HTMLInputElement
    const inputIndex = Number(target.name.split('-').pop())
    const preInput = inputsRef.current[inputIndex - 1]
    if (key === 'Backspace') {
      setOtpValue(pre => pre.slice(0, -1))
      if (preInput) {
        inputsRef.current[inputIndex].value = ''
        preInput.focus()
      }
    }


  }
  const otpInputFields = new Array(4)
    .fill(0)
    .map((item, index) => (
      <input
        ref={ref => inputsRef.current.push(ref as HTMLInputElement)}
        key={index}
        name={`opt-input-${index}`}
        type="text"
        maxLength={1}
        style={{ width: '20px', height: '25px' }}
        onChange={handleChangeInputValue}
        value={otpValue.split('')[index]}
        onKeyDown={handlekeyDownInputValue}
      />
    ))
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <input type="number" />
      {otpInputFields}</div>
  )
}

