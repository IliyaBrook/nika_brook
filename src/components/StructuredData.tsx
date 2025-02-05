'use client'
import Script from 'next/script'

export function StructuredData({ data }: { data: Record<string, any> }) {
	return (
		<Script
			id={`ld-json-${data["@type"] || "default"}`}
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}