import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import SliderCard from './SliderCard'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useRef } from 'react'
import { show, hidden } from '../../store/scrollSlice'
let lastY = 0
let flag = true
export default function Home() {
	const isShow = useSelector((state: RootState) => state.cover.isShow)
	const visibility = useSelector((state: RootState) => state.scroll.isShow)

	// 记录滚动
	const ref = useRef(null)
	const { scrollY } = useScroll({ container: ref })
	const dispatch = useDispatch()
	const checkScrolYChange = (last: number) => {
		if (last - lastY > 0) {
			if (visibility) {
				dispatch(hidden())
			}
		} else {
			if (!visibility) {
				dispatch(show())
			}
		}
		lastY = last
	}
	useMotionValueEvent(scrollY, 'change', (last) => {
		if (flag) {
			flag = false
			checkScrolYChange(last)
		}
		setTimeout(() => {
			flag = true
		}, 500)
	})

	return (
		<div className='flex  bg-#0c0e12 h-full'>
			<div ref={ref} className='overflow-auto  overflow-x-hidden flex-1 h-full'>
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
							className='border-red border-solid rounded-1/2 abscenter'
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
