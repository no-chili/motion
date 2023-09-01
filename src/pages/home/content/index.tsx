import { useEffect } from 'react'
import Article from '../Article'
import Photos from '../Photos'
import Search from '../Search'
import { hidden } from '../../../store/coverSlice'
import { useDispatch } from 'react-redux'

export default function Content() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(hidden())
	}, [])
	return (
		<div className='m-auto md:py-10 lg:w-800px fs:w-640px'>
			<div className='fixed hidden w-800px lg:block fs:w-640px'>
				<Search />
			</div>
			<div className='flex m-5 md:m-0 flex-wrap lg:mt-30 justify-center md:justify-between'>
				<div className='w-full md:w-26/53'>
					<Article />
					<div>滚动</div>
					<div>骰子</div>
				</div>
				<div className='w-full md:w-26/53'>
					<Photos />
					<div>sql</div>
				</div>
			</div>
		</div>
	)
}
