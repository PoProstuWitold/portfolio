import { NextSeo } from 'next-seo'
import Link from 'next/link'

const ThanksPage: React.FC = () => {
	return (
		<>
			<NextSeo
				title="Thanks"
				description="I have received your email"
			/>
			<main className="flex flex-col items-center justify-center w-full h-screen gap-2">
				<h1 className="font-extrabold tracking-widest text-5xl text-primary">Thanks!</h1>
				<p>I received your message and I will respond as fast as possible.</p>
				<div className="flex justify-center">
					<Link
						className="btn btn-secondary btn-md btn-outline md:w-full my-10 px-14"
						href="/"
					>
						Back to home page
					</Link>
				</div>
			</main>
		</>
	)
}

export default ThanksPage