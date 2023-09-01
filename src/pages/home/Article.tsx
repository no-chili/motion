import { useState } from 'react'
import Card from '../../component/Card'
import { motion } from 'framer-motion'

export default function Article() {
	const [like, setLike] = useState(false)
	return (
		<div className='mt-5'>
			<Card title='Article'>
				<h2 className='my-2'>渐进式 JavaScript 框架 易学易用，性能出色，适用场景丰富的 Web 前端框架。</h2>
				<img
					className='object-cover h-40 w-full'
					src='https://images.unsplash.com/photo-1693303215386-3601571845ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
				/>

				<p className='text-gray leading'>
					Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript
					构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
				</p>
				<motion.div whileTap={{ scale: 1.5 }} onClick={() => setLike(!like)} className={`${like ? 'text-red' : 'text-gray'} w-fit mt-3 text-3xl`}>
					❤
				</motion.div>
			</Card>
		</div>
	)
}
