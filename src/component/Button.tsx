import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
type Props = PropsWithChildren & {
	[k: string]: any
}
export default function Button(props: Props) {
	const { children, ...attrs } = props
	return (
		<motion.div {...attrs} className='border-solid flex w-fit items-center p-1 rounded-4 px-2 border-red bg-red hover:bg-red-5 hover:border-red-5  transition'>
			{children}
		</motion.div>
	)
}
