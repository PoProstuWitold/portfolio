import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Thanks',
	description:
		'I received your message and I will respond as fast as possible.',
	robots: {
		index: false,
		follow: false
	}
}

const ThanksPage = () => {
	return (
		<main className='flex flex-col items-center justify-center w-full h-screen gap-2'>
			<h1 className='font-extrabold tracking-widest text-5xl text-primary'>
				Thanks!
			</h1>
			<p className='mx-auto text-center'>
				I received your message and I will respond as fast as possible.
			</p>
			<div className='flex justify-center'>
				<Link
					className='btn btn-secondary btn-md btn-outline md:w-full my-10 px-14'
					href='/'
				>
					Back to home page
				</Link>
			</div>
		</main>
	)
}

export default ThanksPage
