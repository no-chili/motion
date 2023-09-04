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
		setTimeout(() => {
			dispatch(show())
		}, 100)
		setTimeout(() => {
			nav('/pages/home/photos')
		}, 1000)
	}

	return (
		<div className='shadow-md'>
			<Card title='随机图片' message='国外接口可能有点慢'>
				<motion.div className='grid gap-2 justify-center items-center md:grid-cols-3 grid-cols-4'>
					{new Array(9).fill(0).map((_, index) => (
						<img key={index} className='image' src={`https://picsum.photos/id/${Math.floor(Math.random() * 50)}/200`} />
					))}
				</motion.div>
				<div className='mt-5'>
					<motion.div className='relative border-solid flex w-fit items-center p-1 rounded border-red bg-red hover:bg-yellow hover:border-yellow transition'>
						<span onClick={gotoPhotos}>more</span>
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
