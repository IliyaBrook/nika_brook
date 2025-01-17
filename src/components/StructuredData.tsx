'use client'

import Script from 'next/script'

export function StructuredData() {
	const schemaOrgJson = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Veronika Brook',
		voiceType: 'Soprano',
		jobTitle: 'Opera Singer',
		birthPlace: 'Estonia',
		description: 'An accomplished soprano with a rich operatic repertoire...',
		url: 'https://veronikabrook.com',
		sameAs: [
			'https://instagram.com/veronikabrook',
			'https://youtube.com/veronikabrook'
		]
	}
	
	return (
		<Script
			id="ld-json"
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJson) }}
		/>
	)
}
