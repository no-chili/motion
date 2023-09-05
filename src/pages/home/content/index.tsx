import { useEffect } from 'react'
import Photos from '../Photos'
import Search from '../Search'
import { hidden } from '../../../store/coverSlice'
import { useDispatch } from 'react-redux'
import Ingredients from '../Ingredients'
import CodeEdit from '../CodeEdit'
import { LayoutGroup, motion } from 'framer-motion'
import Words from '../Words'
import useGoHome from '../../../hooks/useGoHome'
import SliderCard from '../SliderCard'
import { confit } from '../../../utils/confetti'

export default function Content() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(hidden())
	}, [])
	const { goHome } = useGoHome()
	function gift() {
		confit()
		goHome()
	}
	return (
		<div className='m-auto py-10 lg:w-800px fs:w-640px'>
			<div className='m-5 lg:m-0'>
				<Search />
			</div>
			<div className='m-5 lg:mx-0 fs:hidden fs:w-100'>
				<SliderCard />
			</div>
			<h2 onClick={gift} className='navlogo'>
				no-chili
			</h2>
			<LayoutGroup>
				<motion.div className='m-5 fs:mt-10 lg:mx-0'>
					<CodeEdit />
				</motion.div>
				<motion.div className='flex m-5 lg:mx-0 flex-wrap sm:my-5 justify-center md:justify-between'>
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
