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
	
	const pathname = usePathname()
	const navBarItems = useMemo(() => getNavBarItems(pathname), [pathname])
	return (
		<div className={styles.root}>
			<div className={styles.navMenuWrapper}>
				<Menubar
					model={isMenuNavReady ? navBarItems : []}
					pt={{
					
					}}
				/>
				{
					!isMenuNavReady && (
						<div className={styles.skeletonSOcialLinksWrapper}>
							{navBarSkeleton.map((elem, idx) => <div key={`nav-skeleton-${idx}`}>{elem.template}</div>)}
						</div>
					)
				}
			</div>
			<div className={styles.socialLinksWrapper}>
				{isMenuNavReady ? (
					<SocialNavLinks />
				) : (
					<div className={styles.socialLinksSkeleton}>
						<Skeleton
							width={'180px'}
							height={'30px'}
							className={styles.socialLinksSkeleton}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
