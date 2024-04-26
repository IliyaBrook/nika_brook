import { RootState } from '@/store/store'
import { createSelector } from '@reduxjs/toolkit'

const selectSelf = (state: RootState) => state.statistics

export const getByPageSelector = createSelector(selectSelf, statistics => ({
	pagesLabels: statistics.pagesLabels,
	pagesCount: statistics.pagesCount
}))

export const getByCountriesSelector = createSelector(
	selectSelf,
	statistics => ({
		countriesLabels: statistics.countriesLabels,
		countriesCount: statistics.countriesCount
	})
)
