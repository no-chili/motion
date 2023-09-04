import { useNavigate } from 'react-router-dom'

export default function useGoHome() {
	const nav = useNavigate()
	return {
		goHome: () => nav('/pages/home/content'),
	}
}
