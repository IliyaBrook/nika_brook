import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function openDb() {
	return open({
		// filename: path.join(path.resolve('./'), 'tmp/database.sqlite'),
		filename: 'tmp/database.sqlite',
		driver: sqlite3.Database
	})
}
