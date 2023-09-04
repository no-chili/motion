import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = PropsWithChildren & {
	postion?: string
}

export default function Search(props: Props) {
	const { postion } = props
	const [needFouse, setNeedFouse] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const nav = useNavigate()
	const [isvVisibility, setIsvVisibility] = useState(true)
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
			nav('/pages/home/article', {
				state: searchValue,
			})
		}
	}

	// 监听滚动，控制搜索是否显示
	useEffect(() => {
		const scroll = (e: any) => {
			if (e.wheelDelta > 0) {
				setIsvVisibility(true)
			} else {
				setIsvVisibility(false)
			}
		}
		window.addEventListener('mousewheel', scroll)
		return window.removeEventListener('scroll', scroll)
	}, [])

	return (
		<AnimatePresence>
			{isvVisibility && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`h-20 rounded-2 overflow-hidden bg-#ffffff shadow-md w-full ${postion}`}>
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
						<motion.div layout layoutId='search' className='px-3 h-full flex flex-wrap items-center leading-20 text-lg '>
							<div className='w-10 h-10 i-ic:baseline-search'></div>
							<input
								ref={inputRef}
								onKeyDownCapture={(e) => keyDown(e)}
								onChange={(e) => inputChange(e)}
								className='border-none pl-5 font-bold flex-1 text-#ababab focus:text-#232323 outline-none text-2xl'
								type='text'
							/>
							<div onClick={search} className='w-20  text-2xl font-800'>
								搜索
							</div>
						</motion.div>
					</LayoutGroup>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
