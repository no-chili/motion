import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hidden, show } from '../../../store/coverSlice'
import Button from '../../../component/Button'

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
		}, 800)
	}
	return (
		<div className='m-auto h-full relative md:py-10 lg:w-800px fs:w-640px'>
			<div className='mb-5'>
				<Button onClick={geBack}>Back</Button>
			</div>
			<div className='grid gap-2 justify-center items-center md:grid-cols-3 grid-cols-4'>
				<img className='image' src='https://picsum.photos/200/300' />
			</div>
		</div>
	)
}
