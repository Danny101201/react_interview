import React, { useSyncExternalStore } from 'react'
const subscribe = (callBack: () => void) => {
  window.addEventListener('online', callBack)
  window.addEventListener('offline', callBack)
  return () => {
    window.removeEventListener('online', callBack)
    window.removeEventListener('offline', callBack)
  }
}
const getSnapShot = () => {
  console.log('getSnapShot time: ' + performance.now())
  return navigator.onLine
}
export const SyncExternalStorOnline = () => {
  console.log('SyncExternalStorOnline component render time: ' + performance.now())
  const isOnline = useSyncExternalStore(subscribe, getSnapShot)

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

