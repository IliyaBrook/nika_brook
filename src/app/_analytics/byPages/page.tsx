'use client'

import React, { ReactElement } from 'react'
import { useAppSelector } from '@/store/hooks'
import { getByPageSelector } from '@/store/statistics/statisticsSelectors'
import { ChartAnalytics } from '@/components/Chart/ChartAnalytics'

export default function ByPages(): ReactElement {
	const byPageData = useAppSelector(getByPageSelector)
	console.log('Page (4/16/2024 - 4:56 PM):', byPageData)

	return (
		<ChartAnalytics
			type="bar"
			labels={byPageData.pagesLabels}
			counts={byPageData.pagesCount}
		/>
	)
}
