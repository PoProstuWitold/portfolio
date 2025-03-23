import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist.',
	robots: {
		index: false,
		follow: false
	}
}

const NotFoundPage = () => {
	return (
		<main className='flex flex-col items-center justify-center w-full h-screen'>
			<h1 className='font-extrabold tracking-widest text-9xl'>404</h1>
			<div className='absolute px-2 text-sm rounded bg-error rotate-12'>
				Page Not Found
			</div>
			<button className='mt-5' type='button'>
				<span className='relative inline-block text-sm font-medium text-error group active:text-error-500 focus:outline-none focus:ring'>
					<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0' />
					<span className='relative block px-8 py-3 border border-current'>
						<Link href='/'>Go home</Link>
					</span>
				</span>
			</button>
		</main>
	)
}

export default NotFoundPage
