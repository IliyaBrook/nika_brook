'use client'
import React, { ReactNode, useLayoutEffect } from 'react'
import type { statisticsInitialInterface } from '@/types/statistics'
import { useAppDispatch } from '@/store/hooks'
import { setStatisticsData } from '@/store/statistics'
import styles from './AnalyticsClientLayout.scss'
import Navigation from '@/app/analytics/components/AnalyticsNavigation/navigation'

interface ClientLayoutProps {
	children?: ReactNode
	data?: statisticsInitialInterface
}

const AnalyticsClientLayout = ({
	children,
	data: { pagesCount, pagesLabels, countriesCount, countriesLabels }
}: ClientLayoutProps) => {
	const dispatch = useAppDispatch()

	useLayoutEffect(() => {
		dispatch(
			setStatisticsData({
				pagesCount,
				pagesLabels,
				countriesCount,
				countriesLabels
			})
		)
	}, [])

	return (
		<div className={styles.root}>
			<Navigation />

			<div className={styles.childrenWrapper}>{children}</div>
		</div>
	)
}

export default AnalyticsClientLayout
