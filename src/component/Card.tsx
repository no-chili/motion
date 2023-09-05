import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
type Props = PropsWithChildren & { title?: string; message?: string; padding?: number }
export default function Card(props: Props) {
	const { title, message, children, padding } = props
	return (
		<motion.div
			viewport={{
				once: true,
				margin: '30px',
			}}
			className={`bg-white w-full py-5 rounded-1 px-${padding ?? 5}`}
		>
			{title && <h2 className='my-3'>{title}</h2>}
			{message && <p className='mb-3 font-600'>{message}</p>}
			{children}
		</motion.div>
	)
}
