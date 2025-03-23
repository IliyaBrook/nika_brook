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

const getNavBarItems = ({pathname, router, isMobile }: IGetNavBarItems): MenuItem[] => {
	const items =  [
		{
			label: 'Home',
			id: '/',
			command: () => router.push('/'),
			className: classNames({ 'active-route': pathname === '/' }),
		},
		{
			label: 'Biography',
			id: '/biography',
			command: () => router.push('/biography'),
			className: classNames({ 'active-route': pathname === '/biography' }),
		},
		{
			label: 'Media',
			id: '/media',
			className: classNames(
				{ 'active-route': pathname.startsWith('/media') }
			),
			items: [
				{
					label: 'Video',
					id: '/media/video',
					className: 'sub-route-link',
					command: () => router.push('/media/video'),
				},
				{
					label: 'Photo',
					id: '/media/photo',
					className: classNames('sub-route-link photo-link', { 'active-route': pathname === '/media/photo' }),
					command: () => router.push('/media/photo'),
				
				}
			]
		},
		{
			label: 'Contact',
			id: '/contact',
			command: () => router.push('/contact'),
			className: classNames({ 'active-route': pathname === '/contact' }),
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