import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
type Props = PropsWithChildren & {
	[k: string]: any
}
export default function Button(props: Props) {
	const { children, ...attrs } = props
	return (
		<motion.div {...attrs} className='border-solid flex w-fit items-center p-1 rounded border-red bg-red hover:bg-yellow hover:border-yellow transition'>
			{children}
		</motion.div>
	)
}
