'use client'
import React, { ReactNode, useLayoutEffect } from 'react'
import type { statisticsInitialInterface } from '@/types/statistics'
import { useAppDispatch } from '@/store/hooks'
import { setStatisticsData } from '@/store/statistics'
import styles from './clientLayout.module.scss'
import Navigation from '@/components/AnalyticsNavigation/navigation'

interface ClientLayoutProps {
	children?: ReactNode
	data?: statisticsInitialInterface
}

const ClientLayout = ({
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

export default ClientLayout
