export default function throttle(callback: { (last: any): void; call?: any }, time: number | undefined) {
	let flag = true
	return (args: any) => {
		if (flag) {
			flag = false
			callback.call(this, ...args)
			setTimeout(() => {
				flag = true
			}, time)
		}
	}
}
