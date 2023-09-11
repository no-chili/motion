import { Reorder, motion } from 'framer-motion'

import { useState } from 'react'
import { confit } from '../../utils/confetti'
export default function Menu() {
	const [menuIcons, setMenuIcons] = useState([
		'i-fluent-emoji-flat:house',
		'i-fluent-emoji-flat:bell',
		'i-fluent-emoji-flat:cat-face',
		'i-fluent-emoji-flat:beaming-face-with-smiling-eyes',
		'i-fluent-emoji-flat:flexed-biceps',
	])
	return (
		<div className='hidden md:flex w-full'>
			<Reorder.Group className='flex-1 flex justify-center gap-3' axis='x' values={menuIcons} onReorder={setMenuIcons}>
				{menuIcons.map((item, index) => (
					<Reorder.Item key={item} value={item}>
						<motion.div
							layout
							key={item}
							whileTap={{
								scale: 1.1,
							}}
							whileHover={{
								transition: {
									type: 'spring',
									duration: 0.3,
								},
							}}
							initial={{
								y: -100,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									type: 'spring',
									delay: 2 + 0.3 * index,
								},
							}}
							onClick={confit}
							className='flex justify-center rounded my-5 p-1 bg-#262626'
						>
							<div className={`h-15 w-15 text-white text-5xl ${item}`} />
						</motion.div>
					</Reorder.Item>
				))}
			</Reorder.Group>
		</div>
	)
}
