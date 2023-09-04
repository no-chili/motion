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
				<h3 className='m-10'>以下内容与搜索无关，仅用于展示滚动效果</h3>
				<span onClick={goHome} className='border-solid  border-transparent border-b-red'>
					点此返回
				</span>
				<Content />
				<div className='m-10'>
					<span onClick={() => scrollToTop(containerRef)} className='border-solid border-transparent border-b-red'>
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
			<h2 className='text-center m-10'>Gestures</h2>
			<h5 className='indent'>
				A powerful gesture recognition system for the browser. 强大的浏览器手势识别系统。 Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture
				recognisers. Motion{' '}
			</h5>
			<h5 className='indent'>It currently has support for hover, tap, pan and drag gesture detection. Each gesture has a series of event listeners that you can attach to your motion component.</h5>
			<h2 className='text-center m-10'>Animation helpers</h2>
			<h5 className='indent'>
				motion components provide multiple gesture animation props: whileHover, whileTap, whileFocus, whileDrag and whileInView. These can define animation targets to temporarily animate to while a
				gesture is active.
			</h5>
			<h5 className='indent'>
				All props can be set either as a target of values to animate to, or the name of any variants defined via the variants prop. Variants will flow down through children as normal.
			</h5>
			<h5 className='indent'>
				motion components automatically manage the interplay between these while props. So for instance, if hovering starts and stops while the tap gesture is active, the tap gesture receives priority
				and any properties defined on both will remain in their tapped state.
			</h5>
			<h2 className='text-center m-10'>Propagation</h2>
			<h5 className='indent'>
				Children can stop pointer events propagating to parent motion components using the Capture React props. For instance, a child can stop drag and tap gestures and their related while animations
				from firing on parents by passing e.stopPropagation() to onPointerDownCapture.
			</h5>
			<h2 className='text-center m-10'>A note on SVG filters</h2>
			<h5 className='indent'>
				The while helper properties won't work on SVG filter components, as these elements don't have a physical presence and therefore don't receive events. To respond to gestures, you need to
				introduce React state to the component and attach listeners to the physical element.
			</h5>
			<h2 className='text-center m-10'>Hover</h2>
			<h5 className='indent'>
				The hover gesture detects when a pointer hovers over or leaves a component. It differs from onMouseEnter and onMouseLeave in that hover is guaranteed to only fire as a result of actual mouse
				events (as opposed to browser-generated mice events emulated from touch input).
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
		</div>
	)
}
