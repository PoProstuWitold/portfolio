import { siteConfig } from '@/config/site'
import { Socials } from './Socials'

export const Footer: React.FC = () => {
	return (
		<footer className='p-10 bg-base-300'>
			<div className='footer grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='mb-6'>
					<p className='mb-1 font-bold uppercase'>
						{siteConfig.name}
					</p>
					<p>Software Engineer</p>
				</div>
				<div>
					<p className='mb-1 font-bold uppercase'>Social</p>
					<div className='grid grid-flow-col'>
						<Socials size='big' text />
					</div>
				</div>
			</div>
			<div className='my-10 border-t' />
			<div className='justify-center mx-auto md:text-center'>
				<p>
					Copyright © {new Date().getFullYear()} {siteConfig.name}.
					All rights reserved. View the website&apos;s{' '}
					<a
						href={siteConfig.links.repository}
						target='_blank'
						rel='noopener noreferrer'
						className='link'
					>
						source code
					</a>
				</p>
			</div>
		</footer>
	)
}
