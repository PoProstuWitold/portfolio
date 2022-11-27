import React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<>
			<main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
				<h1 className="font-extrabold tracking-widest text-white text-9xl">404</h1>
				<div className="absolute px-2 text-sm rounded bg-error rotate-12">
				Page Not Found
				</div>
				<button className="mt-5">
					<a className="relative inline-block text-sm font-medium text-error group active:text-error-500 focus:outline-none focus:ring">
						<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-error group-hover:translate-y-0 group-hover:translate-x-0" />
						<span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
							<a href="/">Go home</a>
						</span>
					</a>
				</button>
			</main>
		</>
	)
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
