import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import useMyNavigate from '../../../hooks/useMyNavigate'
import useMyScroll from '../../../hooks/useScroll'

export default function Index() {
	const { state } = useLocation()
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({ container: containerRef })
	const scrollX = useSpring(scrollYProgress)
	const { goHome } = useMyNavigate()
	const { scrollToTop } = useMyScroll()

	return (
		<div className='relative overflow-hidden h-full text-center'>
			<motion.div style={{ scaleX: scrollX }} className='scroll'></motion.div>
			<div ref={containerRef} className='h-full overflow-auto'>
				<h5 className='mt-20 mb-10'>路由传参-搜索词：{state}</h5>
				<Content />
				<span onClick={goHome} className='border-solid  border-transparent border-b-red'>
					点此返回
				</span>
				<div className='m-10'>
					<span onClick={() => scrollToTop(containerRef)} className='border-solid text-red font-900 my-5 border-transparent border-b-red'>
						TOP
					</span>
				</div>
			</div>
		</div>
	)
}

// 复制的内容，不重要
function Content() {
	const articleContents = [
		{
			tips: 'Gestures',
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dicta velit, necessitatibus repudiandae id sint! Tempora iure omnis exercitationem animi? Quod iure rem delectus neque deserunt natus itaque nesciunt veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae nam, id asperiores accusantium eligendi, pariatur itaque, sit commodi ipsum ipsa praesentium necessitatibus tempore delectus unde! Quis numquam sequi reiciendis!A powerful gesture recognition system for the browser. Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers. Motion.It currently has support for hover, tap, pan and drag gesture detection. Each gesture has a series of event listeners that you can attach to your motion component.',
		},
		{
			tips: 'Animation helpers',
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis reiciendis sapiente accusamus deleniti nihil iste eius exercitationem repellendus laudantium, culpa est. Eos, delectus. Illo architecto ipsa sit nihil magnam?motion components provide multiple gesture animation props: whileHover, whileTap, whileFocus, whileDrag and whileInView. These can define animation targets to temporarily animate to while a gesture is active. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga pariatur culpa repudiandae magni impedit minima in.',
		},
		{
			tips: 'Gestures',
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, eaque est? Inventore, quasi aspernatur. At vero soluta accusantium rem consequatur. Fuga, perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi aliquam, ab adipisci nihil ratione corporis qui in inventore doloribus voluptatibus quis neque, repellendus iure minus tempora perspiciatis error velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ipsa enim, doloremque dignissimos veritatis architecto expedita facere laborum, incidunt, quis sunt nisi odit quibusdam qui! Perferendis quibusdam quaerat unde ab. maiores consectetur libero veniam voluptas nesciunt nisi similique.All props can be set either as a target of values to animate to, or the name of any variants defined via the variants prop. Variants will flow down through children as normal. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque fuga magni quos cum deserunt perferendis error cumque esse. Minima culpa alias quaerat, assumenda quibusdam nihil ullam',
		},
		{
			tips: 'Interplay',
			content:
				'motion components automatically manage the interplay between these while props. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro.',
		},
		{
			tips: 'A note on SVG filters',
			content:
				'The while helper properties won t work on SVG filter components, as these elements don t have a physical presence and therefore receive The tap gesture detects when the primary pointer (like a left click or first touch point) presses down and releases on the same component. It fires a tap event when tapping successfully completes on a component, and a tapCancel event when tapping ends outside the component. If the tappable component is a child of a draggable ',
		},
		{
			tips: 'Interplay',
			content:
				'motion components automatically manage the interplay between these while props. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro.',
		},
		{
			tips: 'Quibusdam',
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta necessitatibus aspernatur est, saepe iusto animi excepturi deleniti ipsa natus deserunt quod voluptate vel doloribus dolores dolore repudiandae, culpa esse repellat?motion components automatically manage the interplay between these while props. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro.',
		},
		{
			tips: 'Manage',
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem rerum doloribus magni impedit enim sapiente assumenda! Sint expedita explicabo porro modi quam? Perferendis accusamus quae asperiores quia voluptate sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem vel placeat nesciunt fugiat consequatur quasi provident cumque voluptas, enim exercitationem, eos eligendi tempora debitis dolores, tempore veniam eaque magnam? motion components automatically manage the interplay between these while props. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro.',
		},
		{
			tips: 'Lorem',
			content:
				'voluptas, enim exercitationem, eos eligendi tempora debitis dolores, tempore veniam eaque magnam? motion components automatically manage the interplay between these while props. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro.',
		},
	]
	return (
		<div className='article_content'>
			<h2>踩坑</h2>
			<h5>
				<ul className='trouble'>
					<a target='_blank' href='https://stackoverflow.com/questions/71571129/how-to-use-embedded-webassembly-in-vite'>
						<li>Vite导入.wasm文件失败，import时使用?url获取路径，Json文件使用?raw获取内容</li>
					</a>
					<a target='_blank' href='https://www.framer.com/motion/use-scroll/##element-scroll'>
						<li>Frame-motion的useScroll默认监听window，需要手动使用ref获取dom</li>
					</a>
					<a target='_blank' href='https://www.npmjs.com/package/sql.js'>
						<li>Sql.js默认导入路径和pnpm冲突，需要vite手动导入，或者使用CDN导入</li>
					</a>
					<a target='_blank' href='https://unocss.dev/config/theme#usage-in-rules'>
						<li>UnoCSS配置theme的breakpoints是覆盖操作不是合并，会导致原有查询失效</li>
					</a>
				</ul>
			</h5>
			<h2 className='my-2 border-yellow inline-block border-3 border-b-solid '>
				<p className='text-center'>
					<s>无意义内容</s>
				</p>
			</h2>

			{articleContents.map((item, index) => (
				<AnimatePresence key={index}>
					<motion.div initial={{ opacity: 0 }} transition={{ type: 'spring', duration: 1 }} whileInView={{ opacity: 1 }}>
						<h2 className='my-2 border-yellow inline-block border-3 border-b-solid '>{item.tips}</h2>
						<h5 className='indent'>{item.content}</h5>
					</motion.div>
				</AnimatePresence>
			))}
		</div>
	)
}
