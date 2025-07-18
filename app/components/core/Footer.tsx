import { Socials } from './Socials'

interface FooterProps {
	children?: React.ReactNode
}

export const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className='p-10 bg-neutral text-neutral-content'>
			<div className='footer grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='mb-6'>
					<span className='mb-1 font-bold uppercase'>
						Witold Zawada
					</span>
					<p>Junior TypeScript & Go developer</p>
				</div>
				<div>
					<span className='mb-1 font-bold uppercase'>Social</span>
					<div className='grid grid-flow-col'>
						<Socials size='big' text />
					</div>
				</div>
			</div>
			<div className='my-10 border-t border-neutral-content' />
			<div className='justify-center mx-auto md:text-center'>
				<p>
					Copyright © {new Date().getFullYear()} Witold Zawada - All
					rights reserved. Check the website
					<a
						href='https://github.com/PoProstuWitold/portfolio'
						target='_blank'
						rel='noreferrer'
						className='mx-1 link'
					>
						source code
					</a>
				</p>
			</div>
		</footer>
	)
}
