import NavBarLogo from '@/components/Navbar/components/navBarLogo/NavBarLogo'
import { setActivePath } from '@/utils/setActivePath'
import classNames from 'classnames'
import Link from 'next/link'
import { MenuItem, type MenuItemOptions } from 'primereact/menuitem'
import { Skeleton } from 'primereact/skeleton'
import React from 'react'

const RouteTemplate = (item: MenuItem, options:MenuItemOptions, pathname: string) => {
	const routeName = item.id;
	return (
		<Link
			className={classNames(
				options.className,
				setActivePath(pathname, routeName)
			)}
			href={routeName}
		>
			{item.label}
		</Link>
	);
}

const getNavBarItems = (pathname: string): MenuItem[] => {
	const template = (item: MenuItem, options: MenuItemOptions) => RouteTemplate(item, options, pathname)
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

export const navBarSkeleton = [
	{
		template: <Skeleton width="100px" height="30px" className="nav-bar-skeleton"/>
	},
	{
		template: <Skeleton width="100px" height="30px" className="nav-bar-skeleton"/>
	},
	{
		template: <Skeleton width={'180px'} height={'30px'} className="nav-bar-skeleton-title"/>
	},
	{
		template: <Skeleton width="100px" height="30px" className="nav-bar-skeleton"/>,
	},
	{
		template: <Skeleton width="100px" height="30px" className="nav-bar-skeleton"/>,
	},
]

export default getNavBarItems