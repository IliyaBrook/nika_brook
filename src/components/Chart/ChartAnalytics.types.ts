import { ChartProps as primeChartProps } from 'primereact/chart'

export interface ChartOptions {
	responsive?: boolean
	maintainAspectRatio?: boolean
	aspectRatio?: number
	cutout?: string | number
	indexAxis?: 'x' | 'y'
	stacked?: boolean
	scales?: {
		x?: AxisOptions
		y?: AxisOptions
		r?: AxisOptions
		[axisId: string]: AxisOptions | undefined
	}
	plugins?: {
		legend?: {
			display?: boolean
			position?: 'top' | 'left' | 'bottom' | 'right'
			onClick?: (event: MouseEvent, legendItem: any, legend: any) => void
			labels?: {
				color?: string
				font?: {
					size?: number
					style?: string
					weight?: string
				}
				usePointStyle?: boolean
			}
		}
		tooltip?: {
			enabled?: boolean
			mode?: string
			intersect?: boolean
			callbacks?: {
				label?: (tooltipItem: any) => string
			}
		}
	}
	animation?: {
		duration?: number
		easing?:
			| 'linear'
			| 'easeInQuad'
			| 'easeOutQuad'
			| 'easeInOutQuad'
			| 'easeInCubic'
			| 'easeOutCubic'
			| 'easeInOutCubic'
			| 'easeInQuart'
			| 'easeOutQuart'
			| 'easeInOutQuart'
	}
	layout?: {
		padding?:
			| number
			| { top?: number; right?: number; bottom?: number; left?: number }
	}
	title?: {
		display?: boolean
		text?: string
		font?: {
			size?: number
			style?: string
			weight?: string
		}
		padding?: number
		position?: 'top' | 'left' | 'bottom' | 'right'
	}
	legend?: {
		display?: boolean
		position?: 'top' | 'left' | 'bottom' | 'right'
	}
	elements?: {
		point?: {
			radius?: number
			pointStyle?: string
		}
		line?: {
			tension?: number
			backgroundColor?: string
			borderColor?: string
			borderWidth?: number
		}
		bar?: {
			backgroundColor?: string
			borderColor?: string
			borderWidth?: number
			borderRadius?: number
			borderSkipped?:
				| 'start'
				| 'end'
				| 'middle'
				| 'bottom'
				| 'left'
				| 'top'
				| 'right'
				| false
				| true
		}
	}
}

export interface AxisOptions {
	type?: 'linear' | 'logarithmic' | 'time' | 'category' | 'radialLinear'
	display?: boolean
	position?: 'top' | 'left' | 'bottom' | 'right'
	grid?: {
		display?: boolean
		drawOnChartArea?: boolean
		color?: string
		borderColor?: string
		borderWidth?: number
		circular?: boolean
		drawBorder?: boolean
	}
	scaleLabel?: {
		display?: boolean
		labelString?: string
		fontColor?: string
		fontFamily?: string
		fontSize?: number
		fontStyle?: string
	}
	ticks?: {
		min?: number
		max?: number
		stepSize?: number
		callback?: (value: any) => string
		color?: string
		font?: {
			weight?: string | number
		}
	}
	beginAtZero?: boolean
}

type ChartPropsOmitOpt = Omit<primeChartProps, 'options' | 'data'>

export interface ChartAnalyticsProps extends ChartPropsOmitOpt {
	customOptions?: ChartOptions
	labels: string[]
	counts: number[]
	chartsBackgroundColors?: string[]
	wrapperClassName?: string
}
