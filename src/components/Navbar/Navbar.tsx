'use client'
import getNavBarItems from '@/components/Navbar/navBarItems'
import SocialNavLinks from '@/components/socialNavLinks/socialNavLinks'
import useMediaQuery from '@/hooks/useMediaQuery'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menubar as MenubarComponent } from 'primereact/menubar'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './Navbar.module.scss'

const Menubar = (dynamic(
	() => import('primereact/menubar').then(({ Menubar }) => Menubar),
	{ ssr: false }
) as typeof MenubarComponent)

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false)
	const navBarRef = React.createRef<HTMLDivElement>()
	const router = useRouter()
	const pathname = usePathname()
	const isMedia = pathname.includes('/media')
	const isMobile = useMediaQuery('(max-width: 768px)')
	
	const navBarItems = useMemo(() => getNavBarItems({ pathname, router, isMobile }), [pathname])
	
	useEffect(() => {
		setIsVisible(true)
	}, [])
	
	useEffect(() => {
		if (navBarRef?.current) {
			const navBarHeight = navBarRef?.current?.clientHeight
			document.documentElement.style.setProperty('--navbar-height', `${navBarHeight}px`)
		}
	}, [navBarRef?.current, isVisible])
	
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		if (!isMobile) {
	// 			const mobileNav = document.querySelector('.p-menubar-button');
	// 			if (mobileNav) mobileNav.remove();
	// 		}
	// 	}, 3000)
	// }, [isMobile])
	useEffect(() => {
		if (!isMobile) {
			const observer = new MutationObserver(() => {
				const mobileNav = document.querySelector('.p-menubar-button')
				if (mobileNav) {
					if (mobileNav) {
						mobileNav.style.display = 'none';
						observer.disconnect()
					}
				}
			})
			
			observer.observe(document, {
				attributes: true,
				childList: true,
				subtree: true
			})
			
			return () => observer.disconnect()
		}
	}, [])
	
	
	return (
		<div
			className={classNames(styles.root, {
				[styles.mediaRoutes]: isMedia,
				[styles.visible]: isVisible
			})}
			ref={navBarRef}
		>
			<Menubar
				model={navBarItems}
				className={styles.menuBar}
			/>
			{/* <div */}
			{/* 	className={styles.navBarArtistNameMobile} */}
			{/* 	onClick={() => router.push('/')} */}
			{/* > */}
			{/* 	Veronika Brook */}
			{/* </div> */}
			{isMobile && (
				<div
					className={styles.navBarArtistNameMobile}
					onClick={() => router.push('/')}
				>
					Veronika Brook
				</div>
			)}
			<div className={styles.socialLinksWrapper}>
				<SocialNavLinks />
			</div>
		</div>
	)
}

export default Navbar
