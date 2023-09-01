import { motion } from 'framer-motion'

export default function SliderCard() {
	const config = [
		{
			title: '在这里你能看到!',
			list: ['响应式布局', 'motion动效', '页面过渡动画', '文件路由', 'SQL模拟', '视差滚动'],
		},
		{
			title: '我使用到了',
			list: ['TypeScript', 'React', 'React-Router', 'Redux', 'UnoCSS', 'Frame-motion', 'Vite'],
		},
		{
			title: '此外，我还会!',
			list: ['Vue2', 'Vue3', 'Vuex', 'Pinia', 'Uniapp', 'Webpack', 'Rollup'],
		},
	]
	return (
		<motion.div
			initial={{
				x: 100,
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
			}}
			className='hidden fs:block overflow-hidden h-full rounded-1 w-100 max-w-150 bg-#1f1f21'
		>
			<h1 className='text-blue text-center m-4'>Hello!</h1>
			<motion.div layout drag='y' dragConstraints={{ top: 0, bottom: 0 }} className=' m-4 rounded h-40 bg-white' />
			<h2 className='text-green  m-4'>
				<div>借此项目，让您更了解我</div>
				<div>你可以到处点点</div>
			</h2>
			{config.map((item) => (
				<div className='text-white m-4 mb-10' key={item.title}>
					<h2 className='text-red'>{item.title}</h2>
					<div className='gap-3 mt-5 flex flex-wrap '>
						{item.list.map((item) => (
							<h3 key={item}>{item}</h3>
						))}
					</div>
				</div>
			))}
		</motion.div>
	)
}
