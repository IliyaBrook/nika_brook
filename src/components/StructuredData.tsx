'use client'
import Script, { type ScriptProps } from 'next/script'

interface StructuredDataProps {
	data: Record<string, any>;
	strategy?: ScriptProps['strategy'];
}

export function StructuredData({ data, strategy = 'afterInteractive' }: StructuredDataProps) {
	return (
		<Script
			id={`ld-json-${data["@type"] || "default"}`}
			type="application/ld+json"
			strategy={strategy}
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}