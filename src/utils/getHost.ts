import { headers } from 'next/headers'

export default async function getHost(): Promise<string> {
	'use server'
	const headerList = headers()
	return headerList.get('host')
}
