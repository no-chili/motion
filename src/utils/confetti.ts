import { confetti } from 'dom-confetti'

export function confit() {
	const app = document.getElementById('confit')
	confetti(app!, {
		height: '20px',
		spread: 300,
		elementCount: 100,
	})
}
