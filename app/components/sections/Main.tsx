'use client'

import { m } from 'motion/react'
import { BsArrowDownCircleFill } from 'react-icons/bs'
import { Socials } from '@/components/core/Socials'

export const Main: React.FC = () => {
	return (
		<section
			id='main'
			className='min-h-screen text-3xl text-center cursor-default bg-base-200'
		>
			<div className='pt-4 lg:pt-20 hero'>
				<div className='justify-between my-auto mt-40 hero-content'>
					<div className='flex flex-col gap-4'>
						<h1 className='md:text-6xl text-5xl font-bold flex md:flex-row flex-col'>
							<span className='mr-3'>Hello, I'm </span>
							<span>
								<span className='text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>
									Witold Zawada
								</span>
								.
							</span>
						</h1>
						<p className='font-semibold md:text-2xl text-xl'>
							Software Engineer (TypeScript & Go)
						</p>
						<span className='flex flex-row items-center justify-center ml-2 gap-2 mb-10'>
							<Socials size='big' />
						</span>
						<span className='flex items-center self-center justify-center text-center'>
							<a
								className='animate-bounce'
								href='/#featured'
								title='scroll to projects'
							>
								<m.div
									initial={{
										opacity: 0,
										scale: 0,
										rotate: -180
									}}
									animate={{
										opacity: 1,
										scale: 1,
										rotate: 0
									}}
									transition={{
										duration: 0.5,
										ease: 'easeOut'
									}}
								>
									<BsArrowDownCircleFill className='w-14 h-14 text-secondary' />
								</m.div>
							</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
