import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Accordion() {
	const [isOpen, setOpen] = useState(false)

	return <motion.div className='bg-blue' layout style={{ height: isOpen ? '100px' : '500px' }} onClick={() => setOpen(!isOpen)} />
}
