'use client'
import { useGetDeviceType } from '@/hooks/useGetDeviceType'
import { useEffect } from 'react'

export const Initializer = ({}) => {
	const deviceType = useGetDeviceType()
	useEffect(() => {
		if (deviceType === 'iOS') {
			document.documentElement.style.setProperty('--ios-bottom-padding', '24px')
		}
	}, [])
	return null
}