import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineFilePdf } from 'react-icons/ai'

export const About: React.FC = () => {
	return (
		<section
			id='about'
			className='flex min-h-screen cursor-default flex-col items-center justify-center bg-base-100 py-24'
		>
			<div className='w-full max-w-6xl px-6 lg:px-12 xl:px-0'>
				<div className='mb-6 flex items-center justify-between'>
					<h2 className='whitespace-nowrap text-4xl font-extrabold tracking-tight text-base-content md:text-6xl'>
						About
					</h2>

					<div className='ml-8 h-px w-full bg-base-content/10 sm:block' />
				</div>

				<div className='grid grid-cols-1 items-start gap-16 lg:grid-cols-12'>
					<div className='col-span-1 flex flex-col gap-7 leading-relaxed lg:col-span-7'>
						<p className='text-xl text-base-content/85'>
							I&apos;m a software engineer from Poland. I work
							primarily with{' '}
							<strong className='font-semibold text-base-content'>
								TypeScript, Node.js, Go, React, Next.js, Hono,
								and PostgreSQL
							</strong>
							.
						</p>

						<p className='text-lg text-base-content/75'>
							I build backend systems and web applications with an
							emphasis on{' '}
							<strong className='font-semibold text-base-content'>
								clear architecture
							</strong>
							,{' '}
							<strong className='font-semibold text-base-content'>
								maintainability
							</strong>{' '}
							and{' '}
							<strong className='font-semibold text-base-content'>
								security
							</strong>
							. I enjoy working across the stack, from APIs and
							application logic to deployment and infrastructure.
						</p>

						<p className='text-lg text-base-content/75'>
							I design and operate my own{' '}
							<strong className='font-semibold text-base-content'>
								selfhosted infrastructure
							</strong>
							, giving me practical experience with{' '}
							<strong className='font-semibold text-base-content'>
								Linux, Docker, networking, reverse proxies, DNS,
								monitoring, and service administration
							</strong>
							.
						</p>

						<p className='border-l-2 border-pollub pl-5 text-lg text-base-content/75'>
							I hold a{' '}
							<strong className='font-semibold text-base-content'>
								Bachelor of Engineering in Computer Science
							</strong>{' '}
							from{' '}
							<a
								href='https://pollub.pl/'
								target='_blank'
								rel='noopener noreferrer'
								className='font-semibold text-pollub underline decoration-pollub/35 underline-offset-4 transition-[text-decoration-color] hover:decoration-pollub'
							>
								Lublin University of Technology
							</a>{' '}
							and I am currently pursuing a{' '}
							<strong className='font-semibold text-base-content'>
								Master of Engineering in Computer Science
							</strong>{' '}
							at the same university.
						</p>

						<p className='text-lg text-base-content/75'>
							Outside of IT, I enjoy skiing, cooking, history,
							karaoke, video games, and spending time with
							animals.
						</p>
					</div>

					<div className='col-span-1 mt-4 flex flex-col items-center gap-10 lg:col-span-5 lg:mt-0'>
						<div className='group relative'>
							<div
								aria-hidden='true'
								className='absolute inset-0 rounded-[2.5rem] bg-primary/20 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100'
							/>

							<Image
								src='/images/witold-512.png'
								alt='Portrait of Witold Zawada'
								width={400}
								height={400}
								className='relative z-10 h-72 w-72 rounded-4xl object-cover shadow-2xl ring-1 ring-base-content/10 transition-transform duration-500 group-hover:-translate-y-2 md:h-80 md:w-80'
							/>
						</div>

						<div className='flex w-full max-w-[320px] flex-col gap-3'>
							<div className='mb-3 flex items-center gap-4'>
								<div className='h-px flex-1 bg-base-content/10' />

								<span className='text-[10px] font-bold uppercase tracking-widest text-base-content/90'>
									Download CV
								</span>

								<div className='h-px flex-1 bg-base-content/10' />
							</div>

							<Link
								href='/resources/Witold_Zawada_CV-en-public.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='btn btn-outline flex w-full items-center justify-center gap-3 border-base-content/20 bg-base-100 hover:bg-base-content/5'
							>
								<AiOutlineFilePdf className='h-5 w-5 text-error' />

								<span className='font-semibold'>
									CV in English
								</span>
							</Link>

							<Link
								href='/resources/Witold_Zawada_CV-pl-public.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='btn btn-outline flex w-full items-center justify-center gap-3 border-base-content/20 bg-base-100 hover:bg-base-content/5'
							>
								<AiOutlineFilePdf className='h-5 w-5 text-error' />

								<span className='font-semibold'>
									CV in Polish
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
