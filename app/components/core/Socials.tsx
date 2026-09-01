import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { siteConfig } from '@/config/site'

interface SocialsProps {
	size: 'small' | 'big'
	text?: boolean
}

export const Socials: React.FC<SocialsProps> = ({ size, text }) => {
	return (
		<ul aria-label='Social links' className='flex items-center gap-2'>
			<li className='flex'>
				<a
					aria-label='Witold Zawada on GitHub'
					href={siteConfig.links.github}
					target='_blank'
					rel='noopener noreferrer'
					className='flex flex-row group'
				>
					<div className='flex flex-col items-center mr-2'>
						<AiFillGithub
							aria-hidden='true'
							className={`transition-all group-active:scale-90 group-hover:scale-125 duration-300 group-hover:text-primary ease-in-out ${size === 'big' ? 'w-10 h-10' : 'w-8 h-8'}`}
						/>
						{text && (
							<span className='transition-all duration-300 group-hover:text-primary ease-in-out self-center mx-auto mt-1 text-xs font-semibold'>
								GitHub
							</span>
						)}
					</div>
				</a>
			</li>
			<li className='flex'>
				<a
					aria-label='Witold Zawada on LinkedIn'
					href={siteConfig.links.linkedin}
					target='_blank'
					rel='noopener noreferrer'
					className='flex flex-row group'
				>
					<div className='flex flex-col items-center mx-2'>
						<AiFillLinkedin
							aria-hidden='true'
							className={`transition-all group-active:scale-90 group-hover:scale-125 duration-300 group-hover:text-primary ease-in-out ${size === 'big' ? 'w-10 h-10' : 'w-8 h-8'}`}
						/>
						{text && (
							<span className='transition-all duration-300 group-hover:text-primary ease-in-out self-center mx-auto mt-1 text-xs font-semibold'>
								LinkedIn
							</span>
						)}
					</div>
				</a>
			</li>
			<li className='flex'>
				<a
					aria-label='Witold Zawada on Discord'
					href={siteConfig.links.discord}
					target='_blank'
					rel='noopener noreferrer'
					className='flex flex-row group'
				>
					<div className='flex flex-col items-center mx-2'>
						<FaDiscord
							aria-hidden='true'
							className={`transition-all group-active:scale-90 group-hover:scale-125 duration-300 group-hover:text-primary ease-in-out ${size === 'big' ? 'w-10 h-10' : 'w-8 h-8'}`}
						/>
						{text && (
							<span className='transition-all duration-300 group-hover:text-primary ease-in-out self-center mx-auto mt-1 text-xs font-semibold'>
								Discord
							</span>
						)}
					</div>
				</a>
			</li>
		</ul>
	)
}
