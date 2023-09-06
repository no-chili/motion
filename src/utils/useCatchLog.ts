import { useEffect, useState } from 'react'
const consolelog = console.log

export default function useCatchLog(language: string) {
	const [log, setLog] = useState<any[]>([])
	const mylog = (...args: any[]) => {
		setLog((state) => [...state, ...args])
		consolelog.apply(window, args)
	}

	useEffect(() => {
		if (language.toLowerCase() === 'javascript') {
			console.log = mylog
		}
		return () => {
			console.log = consolelog
		}
	}, [])

	function clearLog() {
		setLog([])
	}
	return {
		log,
		setLog,
		clearLog,
	}
}
