import { MotionConfig, motion } from 'framer-motion'
import hello from '../../assets/hello.png'

export default function SliderCard() {
	const config = [
		{
			title: '在这里你能看到!',
			list: ['响应式布局', 'motion动效', '页面过渡动画', 'SQL模拟', '路由传参', '...'],
		},
		{
			title: '我使用到了这些!',
			list: ['TypeScript', 'React', 'React-Router', 'Redux', 'UnoCSS', 'Frame-motion', 'Vite', 'Sql.js', 'Monaco-Editor', '...'],
		},
		{
			title: '此外，我还会!',
			list: ['Vue2', 'Vue3', 'Vuex', 'Pinia', 'Uniapp', 'Webpack', 'Rollup', '...'],
		},
	]
	return (
		<div className='h-full rounded-1'>
			<motion.div
				initial={{
					x: 100,
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				className='overflow-hidden h-full rounded-1 bg-#1f1f21'
			>
				<h1 className='text-blue text-center m-4'>Hello!</h1>
				<motion.div className='m-4 rounded h-40 bg-white'>
					<img className='w-100 h-full object-cover' src={hello} alt='hello' />
				</motion.div>
				<h2 className='text-green  m-4'>
					<div className='flex justify-between'>
						借此项目，让你更了解我
						<a href='https://github.com/no-chili/motion'>
							<svg className='w-10 h-10' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='4006' width='200' height='200'>
								<path
									d='M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z'
									fill='#444444'
									p-id='4007'
								></path>
							</svg>
						</a>
					</div>
				</h2>
				<MotionConfig>
					{config.map((item, index) => (
						<motion.li
							initial={{
								x: 100,
								opacity: 0,
							}}
							animate={{
								x: 0,
								opacity: 1,
								transition: {
									type: 'spring',
									delay: 1 + 0.5 * index,
								},
							}}
							layout
							drag='y'
							dragConstraints={{ top: 0, bottom: 0 }}
							className='text-white m-4 mb-10'
							key={item.title}
						>
							<h2 className='text-red '>
								<span className='border-solid border-transparent border-b-red'>{item.title}</span>
							</h2>
							<div className='gap-3 mt-5 flex flex-wrap '>
								{item.list.map((item) => (
									<h3 key={item}>{item}</h3>
								))}
							</div>
						</motion.li>
					))}
				</MotionConfig>
			</motion.div>
		</div>
	)
}
