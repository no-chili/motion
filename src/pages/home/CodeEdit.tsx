import Editor from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import { loader } from '@monaco-editor/react'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import Card from '../../component/Card'
import { useState } from 'react'
import { getDB } from '../../utils/db'
import createTableSQL from '../../assets/table.sql?raw'
import useCatchLog from '../../utils/useCatchLog'
import { motion } from 'framer-motion'

type SQLResult = { columns: any[]; values: any[] }

self.MonacoEnvironment = {
	getWorker(_, label) {
		if (label === 'json') {
			return new jsonWorker()
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return new cssWorker()
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return new htmlWorker()
		}
		if (label === 'typescript' || label === 'javascript') {
			return new tsWorker()
		}
		return new editorWorker()
	},
}

loader.config({ monaco })
const db = await getDB()
db.exec(createTableSQL)
export default function CodeEdit() {
	const [language, setLanguage] = useState('sql')
	const [execResult, setExecResult] = useState<SQLResult>({ columns: [], values: [] })
	const [error, setError] = useState<string>()
	const { log, setLog, clearLog } = useCatchLog('javascript')

	// 当前代码
	const [code, setCode] = useState('select * from "student"')
	const codeChange = (newCode?: string) => {
		setCode(newCode || '')
	}
	// 切换语言
	const changeLanguage = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
		const newLanguage = e.currentTarget.value
		clearLog()
		setError('')
		setExecResult({ columns: [], values: [] })
		const resultNode = document.getElementById('exec_result')
		resultNode!.innerHTML = ''
		setLanguage(newLanguage)
	}
	// 执行SQL
	const execSQL = () => {
		let res: SQLResult[]
		try {
			res = db.exec(code) as SQLResult[]
			setError('')
		} catch (error: any) {
			res = []
			setError('SQL语句不合法')
		}
		if (res.length > 0) {
			setExecResult(res[0])
		}
	}

	// 执行HTML
	const execHTML = () => {
		const resultNode = document.getElementById('exec_result')
		resultNode!.innerHTML = code
	}

	// 执行js
	const execJS = () => {
		try {
			eval(code)
		} catch (error) {
			setLog((state) => [...state, String(error)])
		}
	}

	// 可执行的语言
	const execable: {
		[key: string]: any
	} = {
		sql: execSQL,
		html: execHTML,
		javascript: execJS,
	}

	// 点击执行
	const clickExec = () => {
		const exe = execable[language.toLowerCase()]
		if (typeof exe === 'function') {
			exe()
		}
	}
	return (
		<div>
			<Card padding={0}>
				<div className='mx-5'>
					<h2>代码编辑器</h2>
					<select className='p-1 ' name='language' onChange={(e) => changeLanguage(e)} id='language'>
						<option value='sql'>sql</option>
						<option value='json'>json</option>
						<option value='css'>css</option>
						<option value='html'>html</option>
						<option value='typescript'>typescript</option>
						<option value='javascript'>javascript</option>
					</select>
					<button className='h-25px px-2 m-3' disabled={!Object.keys(execable).includes(language)} onClick={clickExec}>
						执行
					</button>
					<button className='h-25px px-2' disabled={language !== 'javascript'} onClick={clearLog}>
						清空控制台
					</button>
				</div>
				<Editor height='300px' theme='vs-dark' onChange={(code) => codeChange(code)} language={language} defaultLanguage='javascript' defaultValue={code} />
				<h3 className='m-5'>执行结果</h3>
				<div className='m-5'>
					{log.map((item, index) => (
						<motion.p whileHover={{ padding: 10 }} className='hover:bg-gray' key={index}>
							{item}
						</motion.p>
					))}
				</div>
				<div id='exec_result' className='px-5'></div>
				{error ? (
					<motion.p whileHover={{ padding: 10 }} className='px-5'>
						{error}
					</motion.p>
				) : (
					<table className='w-full px-5 text-left'>
						<thead>
							<tr className='flex justify-between'>
								{execResult.columns &&
									execResult.columns.map((item) => (
										<th className='flex-1' key={item}>
											{item}
										</th>
									))}
							</tr>
						</thead>
						<tbody>
							{execResult.values &&
								execResult.values.map((items, index) => {
									return (
										<motion.tr whileHover={{ padding: 10 }} className='flex my-3 justify-between hover:bg-gray' key={index}>
											{items &&
												items.map((item: string, sindex: number) => (
													<td className='flex-1' key={index + '' + sindex}>
														{item}
													</td>
												))}
										</motion.tr>
									)
								})}
						</tbody>
					</table>
				)}
			</Card>
		</div>
	)
}
