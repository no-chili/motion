import { useEffect, useState } from 'react'
const consolelog = console.log

export default function useCatchLog() {
	const [log, setLog] = useState<any[]>([])
	const mylog = (...args: any[]) => {
		setLog((state) => [...state, ...args])
		consolelog.apply(window, args)
	}

	useEffect(() => {
		console.log = mylog
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
