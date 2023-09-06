import { useDispatch } from 'react-redux'
import { NavigateOptions, useNavigate } from 'react-router-dom'
import { hidden, show } from '../store/coverSlice'

export default function useMyNavigate() {
	const nav = useNavigate()
	const dispatch = useDispatch()
	return {
		goHome: () => {
			dispatch(show())
			setTimeout(() => {
				nav('/pages/home/content')
				dispatch(hidden())
			}, 800)
		},
		navgation: (path: string, option?: NavigateOptions) => {
			dispatch(show())
			setTimeout(() => {
				nav(path, option)
				dispatch(hidden())
			}, 800)
		},
	}
}
