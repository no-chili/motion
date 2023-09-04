import initSqlJs, { SqlJsStatic } from 'sql.js'
import wasm from 'sql.js/dist/sql-wasm.wasm?url'
let SQL: SqlJsStatic
export async function getDB() {
	if (!SQL) {
		SQL = await initSqlJs({
			// CDN导入
			// locateFile: () => 'https://cdn.bootcdn.net/ajax/libs/sql.js/1.8.0/sql-wasm.wasm',
			// 本地导入
			locateFile: () => wasm,
		})
	}
	const db = new SQL.Database()
	return db
}
