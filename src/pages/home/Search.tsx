import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
	postion?: string
}

export default function Search(props: Props) {
	const { postion } = props
	return (
		<div className={`h-20 px-3 flex text-#ababab items-center rounded-2 leading-20 text-lg overflow-hidden bg-#ffffff shadow-md  w-full ${postion}`}>
			<div className='w-10 h-10 i-ic:baseline-search'></div>
			<input className='border-none pl-5 font-bold flex-1 text-#ababab focus:text-#232323 outline-none text-2xl' type='text' />
			<div className='w-20  text-2xl font-800'>搜索</div>
		</div>
	)
}
