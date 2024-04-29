import { createSlice } from '@reduxjs/toolkit'
import { RESET_STORE } from '@/store/constants'

interface initialStateInterface {
	username: string
	password: string
	formValid: boolean
	isError: boolean
}

const initialState: initialStateInterface = {
	username: '',
	password: '',
	formValid: false,
	isError: false
}

export const authFormSlice = createSlice({
	name: 'authForm',
	initialState,
	reducers: {
		setAuthForm: (
			state,
			action: { type: string; payload: { username: string; password: string } }
		) => {
			const { username, password } = action.payload
			if (
				username.trim() === '' ||
				username.length < 3 ||
				password.trim() === '' ||
				password.length < 6
			) {
				state.isError = true
			} else {
				state.isError = false
				state.formValid = true
				state.username = username
				state.password = password
			}
		}
	},
	extraReducers: builder => {
		builder.addCase(RESET_STORE, () => initialState)
	}
})
