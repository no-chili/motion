import Menu from './Menu'

export default function Avatar() {
	return (
		<div className='w-full bg-#f7f7f7 h-70 relative'>
			<img src='/bg.jpg' alt='no-chili' className='w-full h-full object-cover' />
			<div className='w-full transition rounded absolute top-40 md:top-10 left-5 flex-col flex md:items-center'>
				<div className='h-35 w-35 rounded overflow-hidden '>
					<img src='/avatar.jpg' alt='no-chili' className='w-full h-full object-cover' />
				</div>
				<Menu />
			</div>
		</div>
	)
}
