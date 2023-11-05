'use client'
import React from 'react'
import { CustomChat, FacebookProvider, Like, ShareButton } from 'react-facebook'

export const FBLink = () => {
  
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <FacebookProvider appId="24180879704861257">
          <CustomChat pageId="144497505417914" minimized={true} />
        </FacebookProvider>
      )}
    </>
  )
}


