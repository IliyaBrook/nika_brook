import { NextRequest, NextResponse } from 'next/server'
import { openDb } from '@/utils/sqLiteDb'
import { getCountryByIp } from '@/utils/getCountryByIp'

export async function POST(req: NextRequest) {
	const { pageName } = await req.json()
	let ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || ''
	if (ip.includes('::ffff:')) {
		ip = ip.replace('::ffff:', '')
	}

	let country = ''
	try {
		country = await getCountryByIp(ip)
	} catch (error) {
		console.error('Error getting country by IP:', error)
		return new NextResponse(
			JSON.stringify({ message: 'Error getting country by IP' }),
			{ status: 500 }
		)
	}

	try {
		const db = await openDb()
		const isVisitLoggedTodayWithSamePage = await db.get(
			`SELECT *
       FROM visits
       WHERE ip = ?
         AND date(visitTime) = date('now')
         AND pageName = ?`,
			[ip, pageName]
		)
		if (ip.includes('192.168')) {
			country = 'Local'
		}
		if (!isVisitLoggedTodayWithSamePage) {
			await db.run(
				'INSERT INTO visits (ip, country, visitTime, pageName) VALUES (?, ?, ?, ?)',
				[ip, country, new Date().toISOString(), pageName]
			)
			return new NextResponse(
				JSON.stringify({ message: 'Visit logged', country: country }),
				{ status: 200 }
			)
		} else {
			return new NextResponse(
				JSON.stringify({
					message: 'Visit already logged today with this page',
					country: country
				}),
				{ status: 200 }
			)
		}
	} catch (error) {
		console.error('Error inserting visit data:', error)
		return new NextResponse(
			JSON.stringify({ message: 'Error logging visit' }),
			{ status: 500 }
		)
	}
}
