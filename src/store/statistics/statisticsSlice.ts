import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { statisticsInitialInterface } from '@/types/statistics'
import { RESET_STORE } from '@/store/constants'

const initialState: statisticsInitialInterface = {
	countriesCount: [],
	countriesLabels: [],
	pagesCount: [],
	pagesLabels: []
}

export const statisticsSlice = createSlice({
	name: 'statistics',
	initialState: initialState,
	reducers: {
		setStatisticsData: (
			state,
			action: PayloadAction<statisticsInitialInterface>
		) => {
			state.pagesCount = action.payload.pagesCount
			state.pagesLabels = action.payload.pagesLabels
			state.countriesCount = action.payload.countriesCount
			state.countriesLabels = action.payload.countriesLabels
		}
	},
	extraReducers: builder => {
		builder.addCase(RESET_STORE, () => initialState)
	}
})
