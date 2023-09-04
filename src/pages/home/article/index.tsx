import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import useGoHome from '../../../hooks/useGoHome'
import useMyScroll from '../../../hooks/useScroll'

export default function Index() {
	const { state } = useLocation()
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({ container: containerRef })
	const scrollX = useSpring(scrollYProgress)
	const { goHome } = useGoHome()
	const { scrollToTop } = useMyScroll()

	return (
		<div className='relative overflow-hidden h-full text-center'>
			<motion.div style={{ scaleX: scrollX }} className='scroll'></motion.div>
			<div ref={containerRef} className='h-full overflow-auto'>
				<h1 className='m-20'>路由传参-搜索词：{state}</h1>
				<span onClick={goHome} className='border-solid  border-transparent border-b-red'>
					点此返回
				</span>
				<h3 className='m-10'>以下内容与搜索无关，仅用于展示滚动效果</h3>
				<Content />
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
	return (
		<div className='m-auto text-left p-5 max-w-150'>
			<h2 className='text-center m-10'>踩坑</h2>
			<h5 className='indent'>
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
			<h2 className='text-center m-10'>
				<p className='text-center'>
					<s>无意义内容</s>
				</p>
				Gestures
			</h2>

			<h5 className='indent'>
				A powerful gesture recognition system for the browser. 强大的浏览器手势识别系统。 Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture
				recognisers. Motion{' '}
			</h5>
			<h5 className='indent'>It currently has support for hover, tap, pan and drag gesture detection. Each gesture has a series of event listeners that you can attach to your motion component.</h5>
			<h2 className='text-center m-10'>Animation helpers</h2>
			<h5 className='indent'>
				motion components provide multiple gesture animation props: whileHover, whileTap, whileFocus, whileDrag and whileInView. These can define animation targets to temporarily animate to while a
				gesture is active. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga pariatur culpa repudiandae magni impedit minima in.
			</h5>
			<h5 className='indent'>
				All props can be set either as a target of values to animate to, or the name of any variants defined via the variants prop. Variants will flow down through children as normal. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Repellendus doloremque fuga magni quos cum deserunt perferendis error cumque esse. Minima culpa alias quaerat, assumenda quibusdam nihil ullam
			</h5>
			<h5 className='indent'>
				motion components automatically manage the interplay between these while props. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority
				and any properties defined on both will remain in their tapped state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam debitis magnam doloribus optio quam soluta porro
				distinctio voluptatum. Sequi natus ut dolorem! Explicabo nam saepe dolorum beatae eius porro.
			</h5>
			<h2 className='text-center m-10'>Propagation</h2>
			<h5 className='indent'>
				Children can stop pointer events propagating to parent motion components using the Capture React props. For instance, a child can stop drag and tap gestures and their related while animations
				from firing on parents by passing e.stopPropagation() to onPointerDownCapture. veniam dolore tempore. Nisi cumque velit quaerat. Incidunt deleniti recusandae autem corporis reprehenderit sequi
				nam. Aliquid facere odit minus exercitationem natus ea fuga perferendis dicta neque, optio magni accusantium pariatur nemo debitis cum!
			</h5>
			<h2 className='text-center m-10'>A note on SVG filters</h2>
			<h5 className='indent'>
				The while helper properties won't work on SVG filter components, as these elements don't have a physical presence and therefore don't receive events. To respond to gestures, you need to
				introduce React state to the component and attach listeners to the physical element. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque officiis dignissimos vitae inventore
				modi sapiente facilis debitis veniam sit distinctio deserunt, quam numquam iste a. Eius modi nostrum laborum?
			</h5>
			<h2 className='text-center m-10'>Hover</h2>
			<h5 className='indent'>
				The hover gesture detects when a pointer hovers over or leaves a component. It differs from onMouseEnter and onMouseLeave in that hover is guaranteed to only fire as a result of actual mouse
				events (as opposed to browser-generated mice events emulated from touch input). Sapiente, quas quis minus rem odio suscipit, repellat nisi unde fugit tempora inventore!
			</h5>
			<h2 className='text-center m-10'>Focus</h2>
			<h5 className='indent'>
				The focus gesture detects when a component gains or loses focus by the same rules as the CSS :focus-visible selector. Typically, this is when an input receives focus by any means, and when
				other elements receive focus by accessible means (like via keyboard navigation).
			</h5>
			<h2 className='text-center m-10'>Tap</h2>
			<h5 className='indent'>
				The tap gesture detects when the primary pointer (like a left click or first touch point) presses down and releases on the same component. It fires a tap event when tapping successfully
				completes on a component, and a tapCancel event when tapping ends outside the component. If the tappable component is a child of a draggable component, it'll automatically cancel the tap
				gesture if the pointer moves further than 3 pixels during the gesture.
			</h5>
			<h2 className='text-center m-10'>some rem</h2>
			<h5 className='indent'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, voluptatem repellat? Consequatur accusantium quis voluptate facere totam vel, sapiente dignissimos tempora magnam quas.
				Numquam itaque delectus incidunt porro, provident deleniti. Reiciendis voluptas dolores a, esse odit iure voluptatum quos magni error maiores ex nobis laborum culpa, deserunt quas corrupti
				consectetur optio tenetur mollitia. Fugiat necessitatibus est minima ipsam animi! Culpa. Sint blanditiis rem cum quas ratione excepturi recusandae debitis, atque aspernatur itaque pariatur
				quidem, dolore iusto voluptate, harum voluptatem ut accusamus magni sunt dignissimos facere incidunt! Totam recusandae pariatur voluptatum.
			</h5>
		</div>
	)
}
