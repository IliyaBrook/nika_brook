import { setActivePath } from '@/utils/setActivePath'
import classNames from 'classnames'
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Link from 'next/link'
import { MenuItem, type MenuItemOptions } from 'primereact/menuitem'
import { Skeleton } from 'primereact/skeleton'
import styles from './Navbar.module.scss'
import React from 'react'

interface IGetNavBarItems {
	pathname: string;
	router: AppRouterInstance;
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


const getNavBarItems = ({pathname, router}: IGetNavBarItems): MenuItem[] => {
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
			className: 'nav-bar-artist-name',
			template: (
				<div
					className={styles.navBarArtistNameDesktop}
					onClick={() => router.push('/')}
				>
					<div className={styles.text}>Veronika Brook</div>
				</div>
			)
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
		}
	]
}

export const navBarSkeleton = [
	{
		template: <Skeleton className={styles.navSkeletonLink} />
	},
	{
		template: <Skeleton className={styles.navSkeletonLink}  />
	},
	{
		template: <Skeleton className={styles.navSkeletonArtistName} />
	},
	{
		template: <Skeleton className={styles.navSkeletonLink}  />
	},
	{
		template: <Skeleton className={styles.navSkeletonLink}  />
	}
]

export default getNavBarItems