'use client'
import { setActivePath } from '@/utils/setActivePath'
import classNames from 'classnames'
import { usePathname, useRouter } from 'next/navigation'
import { MenuItem, type MenuItemOptions } from 'primereact/menuitem'
import React from 'react'

const RouteTemplate = (item: MenuItem, options:MenuItemOptions) => {
	
	const pathname = usePathname()
	const routeName = item.id;
	const router = useRouter()
	
	return (
		<a
			className={classNames(
				options.className,
				setActivePath(pathname, routeName)
			)}
			onClick={() => router.push(routeName)}
		>
			{item.label}
		</a>
	);
}

export default RouteTemplate