import { useEffect } from 'react'
import Photos from '../Photos'
import Search from '../Search'
import { hidden } from '../../../store/coverSlice'
import { useDispatch } from 'react-redux'
import Ingredients from '../Ingredients'
import CodeEdit from '../CodeEdit'
import { LayoutGroup, motion } from 'framer-motion'
import Words from '../Words'

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
			<LayoutGroup>
				<motion.div className='m-5 md:mx-0 lg:mt-30'>
					<CodeEdit />
				</motion.div>
				<motion.div className='flex m-5 md:mx-0 flex-wrap sm:my-5 justify-center md:justify-between'>
					<div className='w-full md:w-26/53'>
						<div className='mb-3'>
							<Ingredients />
						</div>
						<div className='mb-3'>
							<Words />
						</div>
					</div>
					<div className='w-full md:w-26/53'>
						<Photos />
					</div>
				</motion.div>
			</LayoutGroup>
		</div>
	)
}
