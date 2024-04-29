import React from 'react'

export type DeviceType =
	| 'iOS'
	| 'Android'
	| 'Windows'
	| 'MacOS'
	| 'Linux'
	| 'unknown'

export type classNameType = {
	[key in DeviceType as `${Capitalize<key>}ClassName`]: React.CSSProperties
}
