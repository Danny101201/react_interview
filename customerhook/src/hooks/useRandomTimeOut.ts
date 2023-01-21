import { useRef, useState, useEffect } from "react"

interface useRandomTimeOutProps {
  callBack: () => void
  minDelay: number
  maxDelay: number
}
const random = (max: number, min: number) => Math.floor(Math.random() * (max - min)) + min
export const useRandomTimeOut = ({ callBack, minDelay, maxDelay }: useRandomTimeOutProps) => {
  const TimerId = useRef<number | null>(null)
  const saveCallBack = useRef(callBack)
  useEffect(() => {
    saveCallBack.current = callBack
  }, [callBack])
  useEffect(() => {

    const handlTick = () => {
      let nextTick = random(maxDelay, minDelay)
      TimerId.current = setTimeout(() => {
        saveCallBack.current()
        handlTick()
      }, nextTick)
    }
    handlTick()
    return () => {
      clearTimeout(TimerId.current as number)
    }
  }, [minDelay, maxDelay])
  const cancel = () => {
    if (TimerId.current == null) return
    clearTimeout(TimerId.current)
  }

  return cancel

}