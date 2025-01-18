'use client'
import SocialNetLinks from '@/components/Navbar/components/socialNetLinks/socialNetLinks'
import getNavBarItems from '@/components/Navbar/navBarItems'
import dynamic from 'next/dynamic'
import { usePathname, useRouter } from 'next/navigation'
import { Menubar as MenubarComponent } from 'primereact/menubar'
import React, { type ReactHTMLElement, type RefObject, useEffect, useMemo, useRef } from 'react'
import styles from './Navbar.module.scss'

const Menubar = (dynamic(
	() => import('primereact/menubar').then(({ Menubar }) => Menubar),
	{ ssr: false }
) as typeof MenubarComponent)

const Navbar = () => {
	const menuBarListRef = useRef<HTMLUListElement | null>(null);
	const socialNetLinksRef = useRef<HTMLDivElement | null>(null);
	
	// p-menubar-root-list
	useEffect(() => {
		const observer = new MutationObserver(mutationsList => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes') {
					if ((mutation?.target as Element).classList.contains('p-menubar-root-list')) {
						// console.log("is menu exist:", mutation?.target)
						menuBarListRef.current = mutation.target as HTMLUListElement
					}
					// if ((mutation?.target as Element).classList.contains('socialNetLinks')) {
					// 	// console.log("is menu socialNetLinks exist:", socialNetLinksRef.current)
					// 	menuBarListRef.current = mutation.target as HTMLUListElement
					// }
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
		console.log("menuBarListRef.current:", menuBarListRef.current) 
		console.log("socialNetLinksRef.current:", socialNetLinksRef.current)
		
		
	}, [menuBarListRef.current, socialNetLinksRef.current])
	
	const pathname = usePathname()
	const router = useRouter()
	const navBarItems = useMemo(() => getNavBarItems(pathname, router), [pathname])
	
	return (
		<div className={styles.root}>
			<Menubar model={navBarItems} />
			<SocialNetLinks  ref={socialNetLinksRef}/>
		</div>
	)
}

export default Navbar
