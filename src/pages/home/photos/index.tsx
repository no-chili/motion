import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hidden, show } from '../../../store/coverSlice'

export default function Photos() {
	const nav = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(hidden())
	}, [])
	function geBack() {
		dispatch(show())
		setTimeout(() => {
			nav('/pages/home/content')
		}, 1000)
	}
	return (
		<div className='m-auto h-full relative md:py-10 lg:w-800px fs:w-640px'>
			<button onClick={geBack}>back</button>
			<div className='grid gap-2 justify-center items-center md:grid-cols-3 grid-cols-4'>
				<img
					className='image'
					src='https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
				/>
				<img
					className='image'
					src='https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
				/>
				<img
					className='image'
					src='https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
				/>
				<img
					className='image'
					src='https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
				/>
				<img
					className='image'
					src='https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
				/>
				<img
					className='image'
					src='https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
				/>
				<img
					className='image'
					src='https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
				/>
			</div>
		</div>
	)
}
