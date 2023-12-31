import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import useMyNavigate from '../../hooks/useMyNavigate'

export default function Search() {
	const [needFouse, setNeedFouse] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const { navgation } = useMyNavigate()

	const toggleSearch = () => {
		setTimeout(() => {
			inputRef.current?.focus()
		}, 1000)
		setNeedFouse(true)
	}
	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = String(e.target.value)
		setSearchValue(value)
	}
	const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const key = e.key
		if (key === 'Enter') {
			search()
		}
	}
	const search = () => {
		const words = searchValue.trim()
		if (words.length > 0) {
			navgation('/pages/home/article', {
				state: searchValue,
			})
		}
	}

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`searchcontainer bg-#262626 color-white`}>
			<LayoutGroup id='search'>
				<AnimatePresence>
					{!needFouse && (
						<motion.div
							layout
							layoutId='search'
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							onClick={toggleSearch}
							className='text-center leading-20 text-lg  h-full font-bold w-full'
						>
							Click Me！！！
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					whileTap={{
						scale: 1.05,
					}}
					layout
					layoutId='search'
					className='px-3 h-full flex items-center leading-20 text-lg '
				>
					<div className='w-10 h-10 i-ic:baseline-search'></div>
					<input
						ref={inputRef}
						onKeyDownCapture={(e) => keyDown(e)}
						onChange={(e) => inputChange(e)}
						className='border-none px-5 font-bold w-full bg-transparent text-#ababab focus:text-#fcfcfc outline-none text-2xl'
						type='text'
					/>
					<div onClick={search} className='w-20 text-2xl font-800'>
						搜索
					</div>
				</motion.div>
			</LayoutGroup>
		</motion.div>
	)
}
