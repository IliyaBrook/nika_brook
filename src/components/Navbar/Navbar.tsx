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
	const menuBarListRef = useRef<React.Ref<HTMLUListElement>>(null)
	const socialNetLinksRef = useRef<React.Ref<HTMLDivElement>>(null)
	
	// p-menubar-root-list
	useEffect(() => {
		const observer = new MutationObserver(mutationsList => {
		
		})
		if (observer) {
			try {
				observer.observe(document, { attributes: true, childList: true, subtree: true })
			} catch  {}
		}
	}, [])
	
	const pathname = usePathname()
	const router = useRouter()
	const navBarItems = useMemo(() => getNavBarItems(pathname, router), [pathname])
	
	return (
		<div className={styles.root}>
			<Menubar model={navBarItems} />
			<SocialNetLinks socialNetLinksRef={socialNetLinksRef}/>
		</div>
	)
}

export default Navbar
