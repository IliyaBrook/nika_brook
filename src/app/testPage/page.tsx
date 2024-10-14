'use client'

import Logo from '@/app/testPage/components/logo'
import React from 'react'
import styles from './testPageStyles.module.scss'

export default function Component() {
	return (
		<header className={styles.testPage}>
			<div className={styles.navWrapper}>
				<nav>
					<ul>
						<li>
							<a>
								Home
							</a>
						</li>
						<li
						>
							<a>
								Biography
							</a>
						</li>
						<li>
							<a>
								News
							</a>
						</li>
						<li>
							<a>
								Schedule
							</a>
						</li>
					</ul>
					<Logo />
					<ul>
						<li>
							<a>
								Recordings
							</a>
						</li>
						<li>
							<a>
								Media
							</a>
						</li>
						<li>
							<a>
								Press
							</a>
						</li>
						<li>
							<a>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
