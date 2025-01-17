import NavBarLogo from '@/components/Navbar/components/navBarLogo/NavBarLogo'
import { setActivePath } from '@/utils/setActivePath'
import classNames from 'classnames'
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { MenuItem, type MenuItemOptions } from 'primereact/menuitem'
import React from 'react'

const RouteTemplate = (item: MenuItem, options:MenuItemOptions, pathname: string, router: AppRouterInstance) => {
	const routeName = item.id;
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

const getNavBarItems = (pathname: string, router: AppRouterInstance): MenuItem[] => {
	const template = (item: MenuItem, options: MenuItemOptions) => RouteTemplate(item, options, pathname, router)
	return [
		{
			label: 'Home',
			id: '/',
			template
		},
		{
			label: 'Biography',
			id: '/biography',
			template
		},
		{
			className: 'logo',
			template: NavBarLogo
		},
		{
			label: 'Media',
			id: '/media',
			className: classNames(
				setActivePath(pathname, '/media/video'),
				setActivePath(pathname, '/media/photo')
			),
			items: [
				{
					label: 'Video',
					id: '/media/video',
					className: 'sub-route-link',
					template
					
				},
				{
					label: 'Photo',
					id: '/media/photo',
					className: 'sub-route-link photo-link',
					template
				}
			]
		},
		{
			label: 'Contact',
			id: '/contact',
			template
		},
	]
}

export default getNavBarItems