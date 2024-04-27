// noinspection JSValidateTypes

import { Database as SQLiteCloudDatabase } from '@sqlitecloud/drivers'

class DatabaseWrapper {
	constructor(databaseUrl) {
		this.db = new SQLiteCloudDatabase(databaseUrl)
		this.isCloud = true
	}

	async open() {
		await this.db.sql`USE DATABASE nika-brook-db`
	}

	async get(sql, ...params) {
		if (this.isCloud) {
			try {
				const results = await this.db.sql(sql, ...params)
				return results[0] || null
			} catch (error) {
				console.error('Error executing query:', error)
				throw error
			}
		} else {
			return new Promise((resolve, reject) => {
				this.db.get(sql, params, function (err, row) {
					if (err) reject(err)
					resolve(row)
				})
			})
		}
	}

	async run(sql, ...params) {
		if (this.isCloud) {
			try {
				await this.db.sql(sql, ...params)
			} catch (error) {
				console.error('Error running query:', error)
				throw error
			}
		} else {
			return new Promise((resolve, reject) => {
				this.db.run(sql, params, function (err) {
					if (err) {
						reject(err)
					} else {
						resolve({ lastID: this.lastID, changes: this.changes })
					}
				})
			})
		}
	}

	async all(sql, ...params) {
		if (this.isCloud) {
			try {
				return await this.db.sql(sql, ...params)
			} catch (error) {
				console.error('Error executing query:', error)
				throw error
			}
		} else {
			return new Promise((resolve, reject) => {
				this.db.all(sql, params, function (err, rows) {
					if (err) {
						reject(err)
					} else {
						resolve(rows)
					}
				})
			})
		}
	}
}

export default DatabaseWrapper
