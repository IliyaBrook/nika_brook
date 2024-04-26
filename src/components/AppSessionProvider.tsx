'use client'
import { SessionProvider } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { setUser } from '@/store/user'

export const AppSessionProvider = ({ children, session }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (session?.user) {
      dispatch(
        setUser({
          username: session.user.name,
          email_verified: session.user.email,
          isAdmin: session.user.isAdmin
        })
      )
    }
  }, [session, dispatch])

  return <SessionProvider session={session}>{children}</SessionProvider>
}
