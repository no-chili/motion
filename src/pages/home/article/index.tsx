import { useLocation } from 'react-router-dom'

export default function Index() {
	const { state } = useLocation()
	return <div>{state}</div>
}
