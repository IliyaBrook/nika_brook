import { botUserAgents, screenReaderUserAgents } from '@/data'
import type { DeviceType } from '@/types/sharable.types.ts'

export type DeviceCallback<T = void> = (device: DeviceType) => T
export const getDeviceType = <T = void>(
	userAgent: string,
	callback: DeviceCallback<T>
): void => {
	
	const ua = userAgent.toLowerCase();
	for (const botUA of botUserAgents) {
		if (ua.includes(botUA.toLowerCase())) {
			callback('bot');
			return;
		}
	}
	
	for (const screenReaderUA of screenReaderUserAgents) {
		if (new RegExp(screenReaderUA, 'i').test(userAgent)) {
			callback('screenReader');
			return;
		}
	}
	
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		callback('iOS')
	} else if (/Android/.test(userAgent)) {
		callback('Android')
	} else if (/Win(dows)?/.test(userAgent)) {
		callback('Windows')
	} else if (
		/Mac(OS)?/.test(userAgent) ||
		/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)
	) {
		callback('MacOS')
	} else if (/Linux/.test(userAgent)) {
		callback('Linux')
	} else {
		callback('unknown')
	}
}