'use client'
import SocialNavLinks from '@/components/Navbar/socialNavLinks/socialNavLinks'
import getNavBarItems, { navBarSkeleton } from '@/components/Navbar/navBarItems'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { Menubar as MenubarComponent } from 'primereact/menubar'
import { Skeleton } from 'primereact/skeleton'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './Navbar.module.scss'

const Menubar = (dynamic(
	() => import('primereact/menubar').then(({ Menubar }) => Menubar),
	{ ssr: false }
) as typeof MenubarComponent)

const Navbar = () => {
	const [isMenuNavReady, setMenuNavReady] = useState<boolean>(false)
	const navBarRef = React.createRef<HTMLDivElement>()
	
	useEffect(() => {
		const observer = new MutationObserver(mutationsList => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes') {
					if ((mutation?.target as Element).classList.contains('p-menubar-root-list')) {
						setTimeout(() => setMenuNavReady(true), 1000)
					}
				}
			}
		})
		if (observer) {
			try {
				observer.observe(document, { attributes: true, childList: true, subtree: true })
			} catch  {}
		}
	}, [])
	
	useEffect(() => {
		if (navBarRef?.current){
			const navBarHeight = navBarRef?.current?.clientHeight;
			document.documentElement.style.setProperty('--navbar-height', `${navBarHeight || 102.8}px`);
		}
	}, [navBarRef?.current])
	
	const pathname = usePathname()
	const navBarItems = useMemo(() => getNavBarItems(pathname), [pathname])
	return (
		<div className={styles.root} ref={navBarRef}>
			<Menubar
				model={isMenuNavReady ? navBarItems : []}
			/>
			{isMenuNavReady && <div className={styles.navBarArtistNameMobile}>Veronika Brook</div>}
			{!isMenuNavReady && <Skeleton
				className={styles.mobileMenuSkeleton}
			/>}
			{
				!isMenuNavReady && (
					<div className={styles.navSekeletonsWrapper}>
						<div className={styles.navSkeletonLinksWrapper}>
							{navBarSkeleton.map((elem, idx) => <div key={`nav-skeleton-${idx}`}>{elem.template}</div>)}
						</div>
						<div className={styles.socialLinksSkeletonWrap}>
							{Array.from({ length: 5 }).map((_, idx) =>
								<Skeleton
									key={`social-skeleton-${idx}`}
									className={styles.socialLinksSkeleton}
								/>)}
						</div>
						<div className={styles.navSkeletonArtistNameWrapperSm}>
							<Skeleton
								className={styles.navSkeletonArtistNameSm}
							/>
						</div>
					</div>
				)
			}
			{
				isMenuNavReady && (
					<div className={styles.socialLinksWrapper}>
							<SocialNavLinks />
					</div>
				)
			}
		</div>
	)
}

export default Navbar
