import { createSlice } from '@reduxjs/toolkit'
import { UserTypes } from '@/types/user.types'

const initialState: UserTypes = {
  email_verified: '',
  username: '',
  isAdmin: false,
  isAuthenticated: false
}

export const userSlice = createSlice({
  initialState: initialState,
  name: 'user',
  reducers: {
    setUser: (
      state,
      action: {
        type: string
        payload: { email_verified: string; username: string; isAdmin: boolean }
      }
    ) => {
      const { email_verified, isAdmin, username } = action.payload
      if (email_verified && username && isAdmin) {
        state.username = action.payload.username
        state.isAdmin = action.payload.isAdmin
        state.email_verified = action.payload.email_verified
        state.isAuthenticated = true
      }
    }
  }
})
