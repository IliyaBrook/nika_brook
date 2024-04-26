'use client'
import React, { ReactElement, useMemo, useState } from 'react'
import { MenuItem } from 'primereact/menuitem'
import { usePathname, useRouter } from 'next/navigation'
import { Menubar } from 'primereact/menubar'
import styles from './navigation.module.scss'
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton'
import { setActivePath } from '@/utils/setActivePath'

const Navigation = (): ReactElement => {
	const router = useRouter()
	const pathname = usePathname()

	const navItems: MenuItem[] = useMemo(() => {
		return [
			{
				label: 'By Pages',
				className: setActivePath(pathname, '/analytics/byPages'),
				command: () => router.push('/analytics/byPages')
			},
			{
				label: 'By Countries',
				className: setActivePath(pathname, '/analytics/byCountries'),
				command: () => router.push('/analytics/byCountries')
			},
			{
				label: 'Logs',
				className: setActivePath(pathname, '/analytics/logs'),
				command: () => router.push('/analytics/logs')
			}
		]
	}, [pathname])

	const selectOptions = ['Show last month', 'Show last 3 month']
	const [value, setValue] = useState(selectOptions[0])

	return (
		<div className={styles.root}>
			<Menubar
				model={navItems}
				end={
					<div className={styles.chartSelectWrapper}>
						<SelectButton
							value={value}
							onChange={(e: SelectButtonChangeEvent) => setValue(e.value)}
							// optionLabel="name"
							options={selectOptions}
							// dataKey="value"
						/>
					</div>
				}
			/>
		</div>
	)
}

export default Navigation
