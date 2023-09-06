import { useState } from 'react'
import Button from '../../../component/Button'
import useMyNavigate from '../../../hooks/useMyNavigate'

export default function Photos() {
	const { goHome } = useMyNavigate()
	const [imageArray, setImageArray] = useState(new Array(6).fill(0))
	function loadMore() {
		setImageArray([...imageArray, ...new Array(6).fill(0)])
	}

	return (
		<div className='m-auto h-full relative p-3 lg:w-800px fs:w-640px'>
			<div className='mb-5'>
				<Button onClick={goHome}>Back</Button>
			</div>
			<div className='grid gap-2 justify-center items-center md:grid-cols-3 grid-cols-4'>
				{imageArray.map((_, index) => (
					<img key={index} className='image' src={`https://picsum.photos/id/${index}/300`} />
				))}
			</div>
			<div className='mt-5 flex justify-center'>
				<Button onClick={loadMore}>load more ...</Button>
			</div>
		</div>
	)
}
