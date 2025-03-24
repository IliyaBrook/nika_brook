import { setActivePath } from '@/utils/setActivePath'
import classNames from 'classnames'
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Link from 'next/link'
import { MenuItem, type MenuItemOptions } from 'primereact/menuitem'
import React from 'react'
import styles from './Navbar.module.scss'

interface IGetNavBarItems {
	pathname: string;
	router: AppRouterInstance;
	isMobile: boolean;
}

const RouteTemplate = (item: MenuItem, options: MenuItemOptions, pathname: string) => {
	const routeName = item.id
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
	)
}

const getNavBarItems = ({pathname, router, isMobile }: IGetNavBarItems): MenuItem[] => {
	const template = (item: MenuItem, options: MenuItemOptions) => RouteTemplate(item, options, pathname)
	
	const items =  [
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
					template,
				},
				{
					label: 'Photo',
					id: '/media/photo',
					template,
				}
			]
		},
		{
			label: 'Contact',
			id: '/contact',
			template,
		}
	]
	if (!isMobile) {
		items.splice(2, 0, {
			className: 'nav-bar-artist-name',
			// @ts-ignore
			template: (
				<Link href="/" className={styles.navBarArtistNameDesktop}>
					<div className={styles.text}>Veronika Brook</div>
				</Link>
			)
		})
	}
	return items;
}

export default getNavBarItems