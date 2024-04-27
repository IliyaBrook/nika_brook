import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function openDb() {
	return open({
		// filename: path.join(path.resolve('./'), 'tmp/database.sqlite'),
		filename: process.env.DATABASE_URL,
		driver: sqlite3.Database
	})
}
