import React, { useEffect, useState } from 'react'

export const EffectOnline = () => {
  console.log('EffectOnline component render time: ' + performance.now())
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)
  const handleOnlineEvent = () => {
    setIsOnline(true)
    console.log('handleOnlineEvent time: ' + performance.now())
  }
  const handleOfflineEvent = () => {
    setIsOnline(false)
    console.log('handleOfflineEvent time: ' + performance.now())

  }
  useEffect(() => {
    window.addEventListener('online', handleOnlineEvent)
    window.addEventListener('offline', handleOfflineEvent)
    console.log('call useEffect time: ' + performance.now())
    return () => {
      window.removeEventListener('online', handleOnlineEvent)
      window.removeEventListener('offline', handleOfflineEvent)
    }
  }, [])
  return (
    <>
      {isOnline ? 'online' : 'offline'}
      {/* <Form />
      <List />
      <hr />
      <Label />
      <Link /> */}
    </>
  )
}

