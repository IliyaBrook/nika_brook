import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { contactSlice } from '@/store/contact'
import { RESET_STORE } from '@/store/constants'

const rootReducer = combineReducers({
	[contactSlice.name]: contactSlice.reducer,
})

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: true
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

export const resetStore = () => ({ type: RESET_STORE })
