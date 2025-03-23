'use client'

import { m, useScroll } from 'framer-motion'

export const ScrollProgress: React.FC = () => {
	const { scrollYProgress } = useScroll()

	return (
		<m.div
			className='fixed z-[99] top-0 left-0 right-0 h-1 bg-primary'
			style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
		/>
	)
}
