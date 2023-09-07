export default function throttle(callback: () => void, time: number | undefined) {
	let flag = true
	return function (this: any) {
		if (flag) {
			flag = false
			callback()
			setTimeout(() => {
				flag = true
			}, time)
		}
	}
}
