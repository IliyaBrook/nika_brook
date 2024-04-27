import DatabaseWrapper from '@/utils/databaseUtils/dbWrapper'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

const databaseUrl = process.env.DATABASE_URL
const isProduction = process.env.NODE_ENV === 'production'

export async function openDb() {
	if (isProduction) {
		const dbWrapper = new DatabaseWrapper(databaseUrl)
		await dbWrapper.open()
		return dbWrapper
	} else {
		return open({
			filename: databaseUrl,
			driver: sqlite3.Database
		})
	}
}
