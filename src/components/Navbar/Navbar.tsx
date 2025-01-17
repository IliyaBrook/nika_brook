'use client'
import SocialNetLinks from '@/components/Navbar/components/socialNetLinks/socialNetLinks'
import getNavBarItems from '@/components/Navbar/navBarItems'
import { usePathname, useRouter } from 'next/navigation'
import { Menubar } from 'primereact/menubar'
import React, { useMemo } from 'react'
import styles from './Navbar.module.scss'


const Navbar = () => {
	
	const pathname = usePathname()
	const router = useRouter()
	const navBarItems = useMemo(() => getNavBarItems(pathname, router), [pathname])
	
	return (
		<div className={styles.root}>
			<Menubar model={navBarItems} />
			<SocialNetLinks/>
		</div>
	)
}

export default Navbar
