import React from 'react'
import styles from './Spinner.module.scss'
import classNames from 'classnames'
import {
	ProgressSpinner,
	ProgressSpinnerProps
} from 'primereact/progressspinner'

interface SpinnerProps {
	spinnerStyle?: React.CSSProperties
	wrapperStyle?: React.CSSProperties
	spinnerClassName?: string
	wrapperClassName?: string
	spinnerProps?: ProgressSpinnerProps
}

export const Spinner: React.FC<SpinnerProps> = ({
	spinnerStyle,
	spinnerClassName,
	wrapperClassName,
	wrapperStyle,
	spinnerProps
}) => {
	return (
		<div
			className={classNames(styles.root, wrapperClassName)}
			style={wrapperStyle}
		>
			<ProgressSpinner
				style={spinnerStyle}
				className={spinnerClassName}
				{...spinnerProps}
			/>
		</div>
	)
}
