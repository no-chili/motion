import { AnimatePresence, motion } from 'framer-motion'
import Menu from './Menu'
import SliderCard from './SliderCard'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
export default function Home() {
	const isShow = useSelector((state: RootState) => state.cover.isShow)
	return (
		<div className='flex bg-#f7f7f7 h-full'>
			<Menu />
			<div className='overflow-auto overflow-x-hidden flex-1 h-full'>
				<Outlet />
				{/* 黄色遮罩 */}
				<AnimatePresence>
					{isShow && (
						<motion.div
							transition={{
								type: 'spring',
								duration: 0.8,
							}}
							key='modal'
							initial={{ borderWidth: 0 }}
							animate={{ borderWidth: 3000 }}
							exit={{ width: 3000, height: 3000, borderWidth: 0 }}
							className='border-yellow border-solid rounded-1/2 abscenter'
						></motion.div>
					)}
				</AnimatePresence>
			</div>
			<div className='hidden fs:block fs:w-100'>
				<SliderCard />
			</div>
			<div id='confit' className='config'></div>
		</div>
	)
}
