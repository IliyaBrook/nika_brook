import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { statisticsInitialInterface } from '@/types/statistics'

const statisticsInitial: statisticsInitialInterface = {
	countriesCount: [],
	countriesLabels: [],
	pagesCount: [],
	pagesLabels: []
}

export const statisticsSlice = createSlice({
	name: 'statistics',
	initialState: statisticsInitial,
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
	}
})
