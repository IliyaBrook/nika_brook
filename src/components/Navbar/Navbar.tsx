'use client'
import RouteTemplate from '@/components/Navbar/routeTemplate'
import React, { useMemo } from 'react'
import { Menubar } from 'primereact/menubar'
import styles from './Navbar.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import classNames from 'classnames'
import { MenuItem } from 'primereact/menuitem'
import { setActivePath } from '@/utils/setActivePath'
import Image from 'next/image'


const Navbar = () => {
	const pathname = usePathname()
	
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
				template: () => {
					return 	<Image
						src="/logoHorizontal.svg"
						alt="Volume"
						width={235}
						height={35}
					/>
				}
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
		</div>
	)
}

export default Navbar
