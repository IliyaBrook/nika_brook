'use client'
import getNavBarItems from '@/components/Navbar/navBarItems'
import SocialNavLinks from '@/components/socialNavLinks/socialNavLinks'
import useMediaQuery from '@/hooks/useMediaQuery'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { usePathname, useRouter } from 'next/navigation'
import { Menubar as MenubarComponent } from 'primereact/menubar'
import React, { type RefObject, useEffect, useMemo, useRef, useState } from 'react'
import styles from './Navbar.module.scss'

const Menubar = (dynamic(
	() => import('primereact/menubar').then(({ Menubar }) => Menubar),
	{ ssr: false }
) as typeof MenubarComponent)

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false)
	const navBarRef = useRef<HTMLDivElement>(null)
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
	
	useEffect(() => {
		const observer = new MutationObserver((mutations: MutationRecord[]) => {
			mutations.forEach(mutation => {
				if (mutation.type === 'attributes' && mutation.attributeName) {
					const attr = mutation.attributeName;
					if (['aria-level'].includes(attr)) {
						(mutation.target as Element).removeAttribute(attr);
					}
				}

				if (mutation.type === 'childList') {
					if (mutation.target instanceof Element) {
						mutation.target.querySelectorAll('[aria-level]').forEach(el =>
							el.removeAttribute('aria-level')
						);
					}
				}
			});
		});

		if (navBarRef.current) {
			observer.observe(navBarRef.current, {
				childList: true,
				subtree: true,
				attributes: true,
				attributeFilter: ['aria-level', 'aria-setsize', 'aria-posinset']
			});
		}
		return () => observer.disconnect();
	}, []);

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
