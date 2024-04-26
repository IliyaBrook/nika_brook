import { combineReducers } from 'redux'
import { userSlice } from '@/store/user'
import { configureStore } from '@reduxjs/toolkit'
import { authFormSlice } from '@/store/authForm'
import { sendMessageThunk } from './thunks/index'
import { contactSlice } from '@/store/contact'
import { statisticsSlice } from '@/store/statistics'

const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[authFormSlice.name]: authFormSlice.reducer,
	[sendMessageThunk.reducerPath]: sendMessageThunk.reducer,
	[contactSlice.name]: contactSlice.reducer,
	[statisticsSlice.name]: statisticsSlice.reducer
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
