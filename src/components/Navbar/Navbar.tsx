'use client'
import { signOut } from 'next-auth/react'
import React, { useMemo } from 'react'
import { useAppSelector } from '@/store/hooks'
import { Menubar } from 'primereact/menubar'
import styles from './Navbar.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import classNames from 'classnames'
import { MenuItem } from 'primereact/menuitem'
import { setActivePath } from '@/utils/setActivePath'

const Navbar = () => {
	const router = useRouter()
	const pathname = usePathname()
	const isAuthenticated = useAppSelector(state => state.user.isAuthenticated)

	const navBarItems = useMemo(() => {
		const navItems: MenuItem[] = [
			{
				label: 'Home',
				className: setActivePath(pathname, '/'),
				command: () => router.push('/')
			},
			{
				label: 'Biography',
				className: setActivePath(pathname, '/biography'),
				command: () => router.push('/biography')
			},
			{
				template: () => {
					return <div className="navbar_logo">Nika Brook</div>
				}
			},
			{
				label: 'Media',
				className: classNames(
					setActivePath(pathname, '/media/video'),
					setActivePath(pathname, '/media/photo')
				),
				items: [
					{
						label: 'Video',
						className: 'sub-route-link',
						command: () => router.push('/media/video')
					},
					{
						label: 'Photo',
						className: 'sub-route-link photo-link',
						command: () => router.push('/media/photo')
					}
				]
			},
			{
				label: 'Contact',
				className: setActivePath(pathname, '/contact'),
				command: () => router.push('/contact')
			},
			{
				label: 'Analytics',
				visible: isAuthenticated,
				command: () => router.push('/analytics')
			},
			{
				visible: isAuthenticated,
				template: () => {
					return (
						<button onClick={() => signOut()} className="logout_button">
							Logout
						</button>
					)
				}
			}
		]
		return navItems
	}, [pathname, isAuthenticated, router])
	return (
		<div className={styles.root}>
			<Menubar model={navBarItems} />
		</div>
	)
}

export default Navbar
