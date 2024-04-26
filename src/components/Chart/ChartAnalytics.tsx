import React, { useEffect, useState } from 'react'
import {
	ChartAnalyticsProps,
	ChartOptions
} from '@/components/Chart/ChartAnalytics.types'
import { Chart } from 'primereact/chart'

export const ChartAnalytics: React.FC<ChartAnalyticsProps> = props => {
	const {
		labels,
		customOptions,
		counts,
		chartsBackgroundColors,
		wrapperClassName,
		...rest
	} = props
	const [chartData, setChartData] = useState({})
	const [chartOptions, setChartOptions] = useState({})

	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement)
		const textColorSecondary = documentStyle.getPropertyValue(
			'--text-color-secondary'
		)
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border')
		const data = {
			labels: labels,
			datasets: [
				{
					data: counts,
					backgroundColor: chartsBackgroundColors || [
						'rgba(255, 159, 64, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 99, 132, 0.2)'
					],
					borderColor: chartsBackgroundColors || [
						'rgb(255, 159, 64)',
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
						'rgb(153, 102, 255)',
						'rgb(255, 99, 132)'
					],
					borderWidth: 1
				}
			]
		}
		const options: ChartOptions = {
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: {
				legend: {
					display: false
				}
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
						font: {
							weight: 500
						}
					},
					grid: {
						display: false,
						drawBorder: false
					}
				},
				y: {
					ticks: {
						color: textColorSecondary
					},
					grid: {
						color: surfaceBorder,
						drawBorder: false
					}
				}
			}
		}

		setChartData(data)
		setChartOptions(customOptions || options)
	}, [])

	return (
		<div className={wrapperClassName}>
			<Chart type="bar" data={chartData} options={chartOptions} {...rest} />
		</div>
	)
}
