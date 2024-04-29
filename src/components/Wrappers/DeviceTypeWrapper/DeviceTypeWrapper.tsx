'use client'
import React, { ReactElement } from 'react'
import { useGetDeviceType } from '@/hooks/useGetDeviceType'
import { classNameType } from '@/types/sharable.types.ts'

interface DeviceTypeWrapperInt extends Partial<classNameType> {
	children?: React.ReactNode
}

export const DeviceTypeWrapper = ({
	children,
	...rest
}: DeviceTypeWrapperInt): ReactElement => {
	const deviceType = useGetDeviceType()
	const classNameByDeviceType = () =>
		Object.entries(rest).filter(([key, value]) => {
			if (key.includes(deviceType)) {
				return value
			}
		})[0]?.[1]

	return (
		<div style={classNameByDeviceType()}>
			<h1>{children}</h1>
		</div>
	)
}
