import type { DeviceType } from '@/types/sharable.types.ts'
import { getDeviceType } from '@/utils/getDeviceType'
import { useEffect, useState } from 'react'

export const useGetDeviceType = (): DeviceType => {
	const [deviceType, setDeviceType] = useState<DeviceType>('unknown')
	
	useEffect(() => {
		const userAgent =
			typeof window !== 'undefined' ? window.navigator.userAgent : ''
		getDeviceType(userAgent, setDeviceType)
	}, [])
	
	return deviceType
}
