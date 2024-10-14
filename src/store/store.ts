import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { sendMessageThunk } from './thunks/index'
import { contactSlice } from '@/store/contact'
import { RESET_STORE } from '@/store/constants'

const rootReducer = combineReducers({
	[sendMessageThunk.reducerPath]: sendMessageThunk.reducer,
	[contactSlice.name]: contactSlice.reducer,
})

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: true,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(sendMessageThunk.middleware)
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

export const resetStore = () => ({ type: RESET_STORE })
