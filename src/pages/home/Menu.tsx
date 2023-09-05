import { Reorder, motion } from 'framer-motion'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { confit } from '../../utils/confetti'
export default function Menu() {
	const nav = useNavigate()
	const [menuIcons, setMenuIcons] = useState([
		'i-fluent-emoji-flat:house',
		'i-fluent-emoji-flat:bell',
		'i-fluent-emoji-flat:cat-face',
		'i-fluent-emoji-flat:beaming-face-with-smiling-eyes',
		'i-fluent-emoji-flat:flexed-biceps',
	])
	function goHome() {
		nav('/pages/home/content')
	}
	return (
		<div className='hidden fs:flex transition h-full min-h-3xl color-white flex-nowrap flex-col items-center fs:w-50 bg-#0559fa'>
			<motion.div
				initial={{
					x: -100,
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				className='hidden fs:flex transition h-full min-h-3xl color-white flex-nowrap flex-col items-center fs:w-50 bg-#0559fa'
			>
				{/* logo */}
				<motion.div
					whileTap={{
						y: 10,
					}}
					onClick={goHome}
					className='iconbtn text-5xl i-ic:baseline-code text-white'
				/>
				{/* 菜单 */}
				<ul className='flex-1 w-40'>
					<Reorder.Group axis='y' values={menuIcons} onReorder={setMenuIcons}>
						{menuIcons.map((item, index) => (
							<Reorder.Item key={item} value={item}>
								<motion.div
									layout
									key={item}
									whileTap={{
										scale: 1.1,
									}}
									whileHover={{
										paddingLeft: 20 + 'px',
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
									className='flex justify-center rounded my-5 p-1 bg-#367bfa'
								>
									<div className={`h-15 text-white text-5xl ${item}`} />
								</motion.div>
							</Reorder.Item>
						))}
					</Reorder.Group>
				</ul>
				{/* 返回 */}
				<motion.div
					whileHover={{
						scale: 1.1,
						color: '#f2f2f2',
						transition: {
							type: 'tween',
							duration: 0.03,
						},
					}}
					whileTap={{
						rotateZ: 180,
					}}
					className='iconbtn text-5xl i-ic:baseline-exit-to-app transition text-black'
				/>
			</motion.div>
		</div>
	)
}
