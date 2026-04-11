import { myInfo } from 'app/utils/constans'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

export const Contact: React.FC = () => {
	return (
		<section id='contact' className='bg-base-100 px-6 py-24 md:py-32'>
			<div className='mx-auto flex max-w-4xl flex-col items-center text-center'>
				<div className='mb-8 inline-flex items-center gap-3 rounded-full border border-success/20 bg-success/10 px-4 py-2 text-success shadow-sm'>
					<span className='relative flex h-2.5 w-2.5'>
						<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60' />
						<span className='relative inline-flex h-full w-full rounded-full bg-success' />
					</span>
					<span className='text-xs font-bold uppercase tracking-[0.2em]'>
						Open to work
					</span>
				</div>

				<h2 className='mb-6 text-4xl font-extrabold text-base-content md:text-6xl'>
					Get In Touch
				</h2>

				<p className='mb-10 max-w-3xl text-lg leading-relaxed text-base-content/75 md:text-xl'>
					I'm currently exploring full-stack, systems, and software
					engineering opportunities.
					<br />
					If you have an open role, an interesting project, or want to
					connect, I'd be glad to hear from you.
				</p>

				<div className='flex w-full flex-col items-center justify-center gap-4 sm:flex-row'>
					<a
						href={`mailto:${myInfo.email}`}
						className='btn btn-primary btn-lg min-w-55 gap-2'
					>
						<AiOutlineMail className='h-6 w-6' />
						<span>Email me</span>
					</a>

					<a
						href='https://www.linkedin.com/in/witoldzawada/'
						target='_blank'
						rel='noreferrer'
						className='btn btn-outline btn-lg min-w-55 gap-2'
					>
						<AiFillLinkedin className='h-6 w-6' />
						<span>Connect on LinkedIn</span>
					</a>
				</div>

				<div className='mt-12 flex w-full flex-col items-center gap-6'>
					<div className='flex items-center gap-4 text-base-content/60'>
						<div className='h-px w-16 bg-base-content/20' />
						<span className='text-sm font-semibold uppercase tracking-wider'>
							Find me elsewhere
						</span>
						<div className='h-px w-16 bg-base-content/20' />
					</div>

					<div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
						<a
							href='https://github.com/PoProstuWitold'
							target='_blank'
							rel='noreferrer'
							className='btn btn-ghost btn-md gap-3'
						>
							<AiFillGithub className='h-7 w-7' />
							<span className='text-base'>GitHub</span>
						</a>

						<a
							href='https://discord.com/users/460167435471945748'
							target='_blank'
							rel='noreferrer'
							className='btn btn-ghost btn-md gap-3 hover:bg-[#5865F2]/10 hover:text-[#5865F2]'
						>
							<FaDiscord className='h-7 w-7' />
							<span className='text-base'>Discord</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
