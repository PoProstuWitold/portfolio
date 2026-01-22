import Image from 'next/image'
import Link from 'next/link'

export const About: React.FC = () => {
	return (
		<section
			id='about'
			className='min-h-screen pt-20 flex flex-col gap-8 py-10 cursor-default bg-base-100'
		>
			<h1 className='text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary'>
				About me
			</h1>
			<div className='flex flex-col justify-start mx-6 lg:mx-20 lg:flex-row'>
				<div className='flex-grow lg:max-w-[50%] lg:mr-10 text-xl flex flex-col justify-between'>
					<div className='flex flex-col gap-6'>
						<h2 className='text-3xl font-bold text-left'>
							Who am I?
						</h2>
						<p className='text-justify'>
							I'm a computer science engineer and self-taught
							software developer from Poland, steadily growing
							into a full-stack role. I build modern web
							applications with a strong focus on security, clean,
							maintainable code and a great user experience. I
							mainly work with Node.js, TypeScript and Go, using
							technologies such as Next.js, Hono and PostgreSQL.
						</p>
						<p className='text-justify'>
							I'm passionate about self-hosting, programming,
							exploring new technologies and staying up to date
							with tech news. Outside of IT, I enjoy skiing,
							history, karaoke, video games, cooking and spending
							time with animals.
						</p>
						<p className='gap-2 text-justify'>
							Want to see more? Be sure to visit my{' '}
							<a
								className='underline font-semibold'
								href='https://github.com/PoProstuWitold'
								target='_blank'
								rel='noreferrer'
							>
								GitHub
							</a>
							<span> & </span>
							<a
								className='underline font-semibold'
								href='https://www.linkedin.com/in/witoldzawada/'
								target='_blank'
								rel='noreferrer'
							>
								LinkedIn
							</a>
						</p>
					</div>
					<div className='flex'>
						<a
							href='/#contact'
							className='lg:mx-[1px] btn btn-lg btn-outline w-60 mx-auto mt-10 xl:mt-0'
						>
							Contact
						</a>
					</div>
				</div>
				<div className='flex flex-col flex-grow mt-10 lg:mt-0 lg:max-w-[50%] mx-0 items-center gap-6'>
					<Image
						src={'/images/witold-512.png'}
						alt=''
						width={512}
						height={512}
						className='w-[22rem] mask mask-squircle m-0'
					/>
					<div className='flex flex-col items-center gap-2'>
						<span className='gap-4 font-bold text-3xl'>
							Witold Zawada
						</span>
						<span className='italic flex flex-row items-center gap-1 text-lg'>
							Download my CV in
							<Link
								href='/resources/Witold_Zawada_CV-en-public.pdf'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button
									className='btn btn-lg btn-link p-0 m-0'
									type='button'
								>
									English
								</button>
							</Link>
							or
							<Link
								href='/resources/Witold_Zawada_CV-pl-public.pdf'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button
									className='btn btn-lg btn-link p-0 m-0'
									type='button'
								>
									Polish
								</button>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
