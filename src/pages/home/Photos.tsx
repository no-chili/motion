import { motion } from 'framer-motion'
import Card from '../../component/Card'
import Button from '../../component/Button'
import useMyNavigate from '../../hooks/useMyNavigate'
export default function Photos() {
	const { navgation } = useMyNavigate()
	return (
		<div className='shadow-md'>
			<Card title='随机图片' message='国外接口可能有点慢'>
				<motion.div className='grid gap-2 justify-center items-center md:grid-cols-3 grid-cols-4'>
					{new Array(9).fill(0).map((_, index) => (
						<img key={index} className='image' src={`https://picsum.photos/id/${Math.floor(Math.random() * 50)}/200`} />
					))}
				</motion.div>
				<div className='mt-5'>
					<Button onClick={() => navgation('/pages/home/photos')}>
						<span>more</span>
						<div className='text-lg i-ic:baseline-keyboard-arrow-right'></div>
					</Button>
				</div>
			</Card>
		</div>
	)
}
