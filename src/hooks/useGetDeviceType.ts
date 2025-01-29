import { useEffect, useState } from 'react'

export type DeviceType =
	| 'iOS'
	| 'Android'
	| 'Windows'
	| 'MacOS'
	| 'Linux'
	| 'unknown'

export const useGetDeviceType = (): DeviceType => {
	const [deviceType, setDeviceType] = useState<DeviceType>('unknown')

	useEffect(() => {
		const userAgent =
			typeof window !== 'undefined' ? window.navigator.userAgent : ''
		if (/iPad|iPhone|iPod/.test(userAgent)) {
			setDeviceType('iOS')
		} else if (/Android/.test(userAgent)) {
			setDeviceType('Android')
		} else if (/Win(dows)?/.test(userAgent)) {
			setDeviceType('Windows')
		} else if (
			/Mac(OS)?/.test(userAgent) ||
			/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)
		) {
			setDeviceType('MacOS')
		} else if (/Linux/.test(userAgent)) {
			setDeviceType('Linux')
		} else {
			setDeviceType('unknown')
		}
	}, [])

	return deviceType
}
