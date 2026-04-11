'use client'

import { m } from 'motion/react'
import { BsArrowDown } from 'react-icons/bs'
import { Socials } from '@/components/core/Socials'

export const Main: React.FC = () => {
	return (
		<section
			id='main'
			className='relative flex min-h-screen cursor-default flex-col items-center overflow-hidden bg-base-200 px-4 pt-20'
		>
			<div className='pointer-events-none absolute inset-0 z-0 flex justify-center'>
				<div className='mt-24 h-80 w-140 rounded-full bg-primary/10 blur-[110px]' />
			</div>

			<div className='flex-1' />

			<div className='relative z-10 flex w-full max-w-4xl flex-col items-center px-2 text-center sm:px-6'>
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='flex flex-col items-center'
				>
					<div className='mb-8 inline-flex items-center gap-3 rounded-full border border-base-content/10 bg-base-200/70 px-5 py-2 shadow-sm backdrop-blur-sm'>
						<span className='relative flex h-2.5 w-2.5'>
							<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75' />
							<span className='relative inline-flex h-full w-full rounded-full bg-success' />
						</span>

						<span className='text-xs font-bold uppercase tracking-[0.15em] text-base-content/90'>
							Available for new roles
						</span>
					</div>

					<h1 className='md:text-6xl text-5xl font-bold flex md:flex-row flex-col'>
						<span className='mr-3'>Hello, I'm </span>
						<span>
							<span className='text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>
								Witold Zawada
							</span>
							.
						</span>
					</h1>

					<h2 className='mt-5 text-xl font-semibold tracking-wide sm:text-2xl'>
						Software Engineer
					</h2>

					<p className='mt-6 max-w-2xl text-lg leading-relaxed text-base-content/90 sm:text-xl'>
						I build backend systems and fullstack applications with{' '}
						<span className='font-semibold text-base-content'>
							TypeScript
						</span>{' '}
						and{' '}
						<span className='font-semibold text-base-content'>
							Go
						</span>
						, focusing on scalable architectures and{' '}
						<span className='font-semibold text-base-content'>
							selfhosted infrastructure
						</span>
						.
					</p>

					<div className='mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row'>
						<a
							href='/#featured'
							className='btn btn-primary btn-lg w-full px-8 sm:w-auto sm:min-w-55'
						>
							View Projects
						</a>

						<a
							href='/#contact'
							className='btn btn-outline btn-lg w-full bg-base-100/80 px-8 sm:w-auto sm:min-w-55'
						>
							Get in Touch
						</a>
					</div>
				</m.div>

				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className='mt-12 flex w-full justify-center'
				>
					<Socials size='big' />
				</m.div>
			</div>

			<div className='relative z-10 mt-10 flex min-h-25 w-full flex-1 flex-col justify-end pb-10'>
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 1 }}
					className='mx-auto'
				>
					<a
						href='/#featured'
						className='flex animate-bounce flex-col items-center gap-2 text-base-content/80 transition-colors hover:text-base-content'
						aria-label='Scroll to projects'
					>
						<span className='text-xs font-semibold uppercase tracking-[0.2em]'>
							Scroll
						</span>
						<BsArrowDown className='h-5 w-5' />
					</a>
				</m.div>
			</div>
		</section>
	)
}
