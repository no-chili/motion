import Card from '../../component/Card'
import words from '../../assets/json/1.json'
import { useState } from 'react'
import { motion } from 'framer-motion'
export default function Words() {
	const [currentWords, setCurrentWorlds] = useState(words[Math.floor(Math.random() * words.length)])
	const [inputWorld, setInputWorld] = useState('')
	const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setInputWorld(value)
		if (value === currentWords.word) {
			setCurrentWorlds(words[Math.floor(Math.random() * words.length)])
			setInputWorld('')
		}
	}
	return (
		<div>
			<Card title='单词拼写'>
				{currentWords.translations.map((item) => (
					<h4 key={item.translation}>
						{item.translation}-{item.type!}
					</h4>
				))}
				<input value={inputWorld} onChange={(e) => changeInput(e)} className='w-full outline-none text-xl border-transparent border-b-red border-3' type='text' />
				<motion.div initial={{ opacity: 0 }} className='text-red text-2xl' whileHover={{ opacity: 1 }}>
					<h3 className='mt-3'>{currentWords.word}</h3>
				</motion.div>
			</Card>
		</div>
	)
}
