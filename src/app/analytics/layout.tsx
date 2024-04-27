'use server'
import React from 'react'
import { protectedRoute } from '@/utils/protectedRoute'
import { openDb } from '@/utils/databaseUtils/sqLiteDb'

import ClientLayout from '../../components/AnalyticsLayout/ClientLayout'

export default async function AnalyticsLayout({ children }) {
	await protectedRoute()

	try {
		const db = await openDb()
		const pagesData = await db.all(
			`SELECT pageName, COUNT(*) as count
       FROM visits
       GROUP BY pageName
       ORDER BY CASE pageName
                    WHEN 'home' THEN 1
                    WHEN 'biography' THEN 2
                    WHEN 'media' THEN 3
                    WHEN 'contact' THEN 4
                    WHEN 'analytics' THEN 5
                    ELSE 6
                    END`
		)
		// get last3 months pages data by visitTime column
		const last3MonthsPagesData = await db.all(
			`SELECT pageName, COUNT(*) as count
			 FROM visits
			 WHERE visitTime >= datetime('now', '-3 months')
			 GROUP BY pageName
			 ORDER BY CASE pageName
										WHEN 'home' THEN 1
										WHEN 'biography' THEN 2
										WHEN 'media' THEN 3
										WHEN 'contact' THEN 4
										WHEN 'analytics' THEN 5
										ELSE 6
										END`
		)
		// get last1 month pages data by visitTime column
		const last1MonthPagesData = await db.all(
			`SELECT pageName, COUNT(*) as count
			 FROM visits
			 WHERE visitTime >= datetime('now', '-1 months')
			 GROUP BY pageName
			 ORDER BY CASE pageName
										WHEN 'home' THEN 1
										WHEN 'biography' THEN 2
										WHEN 'media' THEN 3
										WHEN 'contact' THEN 4
										WHEN 'analytics' THEN 5
										ELSE 6
										END`
		)
		const countriesData = await db.all(
			`SELECT country, COUNT(*) as count
       FROM visits
       GROUP BY country
       ORDER BY CASE country
                    WHEN 'USA' THEN 1
                    WHEN 'Germany' THEN 2
                    WHEN 'India' THEN 3
                    WHEN 'Japan' THEN 4
                    WHEN 'Canada' THEN 5
                    WHEN 'Local' THEN 6
                    WHEN 'Israel' THEN 7
                    ELSE 8
                    END`
		)
		// get last3 months countries data by visitTime column
		const last3MonthsCountriesData = await db.all(
			`SELECT country, COUNT(*) as count
       FROM visits
       WHERE visitTime >= datetime('now', '-3 months')
       GROUP BY country
       ORDER BY CASE country
                    WHEN 'USA' THEN 1
                    WHEN 'Germany' THEN 2
                    WHEN 'India' THEN 3
                    WHEN 'Japan' THEN 4
                    WHEN 'Canada' THEN 5
                    WHEN 'Local' THEN 6
                    WHEN 'Israel' THEN 7
                    ELSE 8
                    END`
		)
		// get last1 month countries data by visitTime column
		const last1MonthsCountriesData = await db.all(
			`SELECT country, COUNT(*) as count
       FROM visits
       WHERE visitTime >= datetime('now', '-1 months')
       GROUP BY country
       ORDER BY CASE country
                    WHEN 'USA' THEN 1
                    WHEN 'Germany' THEN 2
                    WHEN 'India' THEN 3
                    WHEN 'Japan' THEN 4
                    WHEN 'Canada' THEN 5
                    WHEN 'Local' THEN 6
                    WHEN 'Israel' THEN 7
                    ELSE 8
                    END`
		)

		let pagesLabels = pagesData.map(page => page.pageName)

		const pagesCount = pagesData.map(page => page.count)
		const countriesLabels = countriesData.map(page => {
			if (page.country === 'Local' || page.country === null) {
				return 'Unknown'
			}
			return page.country
		})

		const countriesCount = countriesData.map(page => page.count)

		return (
			<ClientLayout
				data={{
					pagesCount,
					pagesLabels,
					countriesCount,
					countriesLabels
				}}
			>
				{children}
			</ClientLayout>
		)
	} catch (e) {
		throw new Error(e)
	}
}
