import { AnimatePresence, motion } from 'framer-motion'
import Card from '../../component/Card'
import { useDispatch } from 'react-redux'
import { show } from '../../store/coverSlice'
import { AppDispatch } from '../../store'
import { useNavigate } from 'react-router-dom'
export default function Photos() {
	const dispatch: AppDispatch = useDispatch()
	const nav = useNavigate()
	function gotoPhotos() {
		dispatch(show())
		setTimeout(() => {
			nav('/pages/home/photos')
		}, 1000)
	}

	return (
		<div className='mt-5 shadow-md'>
			<Card title='Photos' message='这有一些图片,点击试试'>
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
				<div className='mt-5'>
					<motion.div className='relative border-solid flex w-fit items-center p-1 rounded border-red bg-red hover:bg-yellow hover:border-yellow transition'>
						<span onClick={gotoPhotos}>see more</span>
						<div className='text-lg i-ic:baseline-keyboard-arrow-right'></div>
						<AnimatePresence>
							<motion.div
								transition={{
									type: 'spring',
									duration: 1,
								}}
								exit={{ width: 3000, height: 3000 }}
								className='bg-yellow rounded-1/2 abscenter'
							></motion.div>
						</AnimatePresence>
					</motion.div>
				</div>
			</Card>
		</div>
	)
}
