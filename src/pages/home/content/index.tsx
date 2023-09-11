import Photos from '../Photos'
import Search from '../Search'
import { useSelector } from 'react-redux'
import Ingredients from '../Ingredients'
import CodeEdit from '../CodeEdit'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import Words from '../Words'
import SliderCard from '../SliderCard'
import { confit } from '../../../utils/confetti'
import { RootState } from '../../../store/index'
import { useNavigate } from 'react-router-dom'
import Avatar from '../Avatar'

export default function Content() {
	const nav = useNavigate()
	function gift() {
		confit()
		nav('/pages/home/content')
	}

	// 控制nav是否显示
	const visibility = useSelector((state: RootState) => state.scroll.isShow)

	return (
		<>
			<Avatar />
			<div className='m-auto py-10 lg:w-800px '>
				<AnimatePresence>
					{visibility && (
						<motion.h2
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
							}}
							onClick={gift}
							className='navlogo'
						>
							no-chili
						</motion.h2>
					)}
				</AnimatePresence>
				<div className='m-5 lg:m-0'>
					<Search />
				</div>
				<div className='m-5 lg:mx-0 fs:hidden fs:w-100'>
					<SliderCard />
				</div>
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
		</>
	)
}
