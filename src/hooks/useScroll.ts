export default function useScroll() {
	const scrollToTop = (ref: React.MutableRefObject<null>) => {
		const target = (ref.current as unknown as HTMLDivElement) || window
		target.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return {
		scrollToTop,
	}
}
