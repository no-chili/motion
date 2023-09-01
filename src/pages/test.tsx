import { LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import Accordion from '../component/Accordion'

export default function Test() {
	// 变量动画
	const list = {
		hidden: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	}
	const item = { hidden: { x: 10, opacity: 1 } }

	// layoutid动画
	const [arr] = useState([1, 2, 3])
	const [current, setCurrent] = useState(1)
	return (
		<>
			<div>
				<motion.div className='w-20 h-20 rounded bg-amber' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} drag='x' dragConstraints={{ left: 0, right: 100 }} />
				<motion.ul initial={{ opacity: 0 }} animate='hidden' variants={list}>
					<motion.li initial={{ opacity: 0 }} variants={item}>
						123
					</motion.li>
					<motion.li initial={{ opacity: 0 }} variants={item}>
						123
					</motion.li>
					<motion.li initial={{ opacity: 0 }} variants={item}>
						123
					</motion.li>
				</motion.ul>
				<motion.ul>
					{arr.map((item) => (
						<motion.div onClick={() => setCurrent(item)} key={item}>
							{item}
							{current === item ? <motion.li style={{ height: 0, borderBottom: '1px solid #000' }} layout layoutId='layout'></motion.li> : null}
						</motion.div>
					))}
				</motion.ul>

				{/* 共享布局动画 */}
				<LayoutGroup>
					<Accordion />
					<Accordion />
				</LayoutGroup>
			</div>
		</>
	)
}
