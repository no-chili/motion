import { AnimatePresence, motion } from 'framer-motion'
import Card from '../../component/Card'
import { useState } from 'react'

export default function Ingredients() {
	const allIngredients = [
		{ icon: '🍌', label: 'Banana' },
		{ icon: '🫐', label: 'Blueberries' },
		{ icon: '🥂', label: 'Champers?' },
	]
	const [selectedTab, setSelectedTab] = useState(allIngredients[0])

	return (
		<Card title='Tab切换'>
			<div className='overflow-hidden'>
				<nav>
					<motion.ul className='flex justify-between'>
						{allIngredients.map((item) => (
							<li key={item.label} className={item === selectedTab ? 'selected' : ''} onClick={() => setSelectedTab(item)}>
								{`${item.label}`}
								{item.label === selectedTab.label ? <motion.div style={{ height: 0, borderBottom: '3px solid #000' }} layout layoutId='underline' /> : null}
							</li>
						))}
					</motion.ul>
				</nav>
				<main className='h-25 text-6xl'>
					<AnimatePresence>
						<motion.div
							className='w-auto text-center p-5'
							key={selectedTab ? selectedTab.label : 'empty'}
							initial={{ y: 10, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
							}}
							exit={{ y: -10, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							{selectedTab ? selectedTab.icon : '😋'}
						</motion.div>
					</AnimatePresence>
				</main>
			</div>
		</Card>
	)
}
