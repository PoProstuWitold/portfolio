import type { Metadata } from 'next'
import Link from 'next/link'
import {
	FiArrowUpRight,
	FiFileText,
	FiFolder,
	FiHome,
	FiMapPin
} from 'react-icons/fi'

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist.'
}

const NotFoundPage = () => {
	return (
		<main className='relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20'>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[32px_32px]'
			/>

			<div
				aria-hidden='true'
				className='pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(12rem,35vw,32rem)] font-black leading-none tracking-tighter text-base-content/2.5'
			>
				404
			</div>

			<div className='relative w-full max-w-3xl'>
				<div className='mb-5 flex items-center gap-3'>
					<span className='flex h-10 w-10 items-center justify-center rounded-lg border border-base-content/10 bg-base-200/60'>
						<FiMapPin
							aria-hidden='true'
							className='text-lg text-error'
						/>
					</span>

					<div>
						<p className='text-xs font-semibold uppercase tracking-[0.2em] text-base-content/40'>
							Error 404
						</p>

						<p className='text-sm font-medium text-base-content/65'>
							Page not found
						</p>
					</div>
				</div>

				<h1 className='max-w-2xl text-5xl font-bold tracking-tight text-base-content sm:text-6xl'>
					This page doesn&apos;t exist.
				</h1>

				<p className='mt-5 text-lg leading-relaxed text-base-content/65'>
					The URL may be incorrect, the page may have moved, or
					something got lost during a perfectly harmless refactor.
				</p>

				<div className='mt-10 rounded-xl border border-base-content/10 bg-base-200/40 p-5 sm:p-6'>
					<div className='flex gap-4'>
						<div className='mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-base-content/6'>
							<span className='font-mono text-sm font-bold text-base-content/60'>
								?
							</span>
						</div>

						<div>
							<p className='font-semibold text-base-content'>
								Looking for something?
							</p>

							<p className='mt-1 text-sm leading-relaxed text-base-content/60'>
								You can return home, browse my projects, or
								check out the latest articles.
							</p>
						</div>
					</div>
				</div>

				<div className='mt-8 flex flex-wrap gap-3'>
					<Link
						href='/'
						className='group inline-flex items-center gap-2 rounded-lg bg-base-content px-5 py-3 text-sm font-semibold text-base-100 transition-transform hover:-translate-y-0.5'
					>
						<FiHome aria-hidden='true' />
						Go home
					</Link>

					<Link
						href='/projects'
						className='group inline-flex items-center gap-2 rounded-lg border border-base-content/15 px-5 py-3 text-sm font-semibold text-base-content transition-colors hover:bg-base-200'
					>
						<FiFolder aria-hidden='true' />
						Projects
						<FiArrowUpRight
							aria-hidden='true'
							className='text-base-content/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
						/>
					</Link>

					<Link
						href='/blog'
						className='group inline-flex items-center gap-2 rounded-lg border border-base-content/15 px-5 py-3 text-sm font-semibold text-base-content transition-colors hover:bg-base-200'
					>
						<FiFileText aria-hidden='true' />
						Blog
						<FiArrowUpRight
							aria-hidden='true'
							className='text-base-content/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
						/>
					</Link>
				</div>
			</div>
		</main>
	)
}

export default NotFoundPage
