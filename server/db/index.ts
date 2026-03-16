import BetterSqlite3 from "better-sqlite3"
import type { Database } from "better-sqlite3"

let db: Database | null = null

export default function getDatabase() {
	if (!db) {
		db = new BetterSqlite3(process.env.DATABASE_FILENAME)
	}

	return db
}
