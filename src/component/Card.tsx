import { PropsWithChildren } from 'react'
type Props = PropsWithChildren & { title?: string; message?: string }
export default function Card(props: Props) {
	const { title, message, children } = props
	return (
		<div className='bg-white w-full p-5 rounded-1'>
			{title && <h2 className='my-3'>{title}</h2>}
			{message && <p className='mb-3 font-600'>{message}</p>}
			{children}
		</div>
	)
}
