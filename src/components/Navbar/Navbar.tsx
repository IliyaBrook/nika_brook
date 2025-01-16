'use client'
import NavBarLogo from '@/components/Navbar/components/navBarLogo/NavBarLogo'
import SocialNetLinks from '@/components/Navbar/components/socialNetLinks/socialNetLinks'
import { setActivePath } from '@/utils/setActivePath'
import classNames from 'classnames'
import { Menubar } from 'primereact/menubar'
import { MenuItem, type MenuItemOptions } from 'primereact/menuitem'
import React, { useMemo } from 'react'
import styles from './Navbar.module.scss'
import { usePathname, useRouter } from 'next/navigation'


const Navbar = () => {
	const pathname = usePathname()
	const router = useRouter()
	
	
	const RouteTemplate = (item: MenuItem, options:MenuItemOptions) => {
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
	
	const navBarItems = useMemo(() => {
		const navItems: MenuItem[] = [
			{
				label: 'Home',
				id: '/',
				template: RouteTemplate
			},
			{
				label: 'Biography',
				id: '/biography',
				template: RouteTemplate
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
						template: RouteTemplate
						
					},
					{
						label: 'Photo',
						id: '/media/photo',
						className: 'sub-route-link photo-link',
						template: RouteTemplate
					}
				]
			},
			{
				label: 'Contact',
				id: '/contact',
				template: RouteTemplate
			},
		]
		return navItems
	}, [pathname])
	
	return (
		<div className={styles.root}>
			<Menubar model={navBarItems} />
			<SocialNetLinks/>
		</div>
	)
}

export default Navbar
