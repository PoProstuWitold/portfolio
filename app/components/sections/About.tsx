import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'

export const About: React.FC = () => {
	return (
		<section
			id='about'
			className='flex min-h-screen cursor-default flex-col items-center justify-center bg-base-100 py-24'
		>
			<div className='w-full max-w-6xl px-6 lg:px-12 xl:px-0'>
				<div className='mb-16 flex items-center gap-6'>
					<h2 className='whitespace-nowrap text-4xl font-extrabold tracking-tight text-base-content md:text-5xl'>
						About Me
					</h2>
					<div className='h-px flex-1 bg-base-content/10' />
				</div>

				<div className='grid grid-cols-1 items-start gap-16 lg:grid-cols-12'>
					<div className='col-span-1 flex flex-col gap-8 text-lg leading-relaxed text-base-content/80 lg:col-span-7'>
						<p>
							I am a software engineer focused on backend systems,
							APIs, and full-stack web applications. I enjoy
							designing solutions that are secure, maintainable,
							and built to scale.
						</p>

						<div className='flex gap-5 rounded-2xl border border-base-content/10 bg-base-200/50 p-6 shadow-sm'>
							<div className='mt-1 shrink-0 text-primary'>
								<FaGraduationCap className='h-8 w-8' />
							</div>

							<div className='flex flex-col gap-2'>
								<h3 className='text-lg font-bold text-base-content'>
									Computer Science Engineering
								</h3>

								<p className='text-base leading-relaxed text-base-content/80'>
									I hold an Engineer's degree (B.Eng.) from{' '}
									<strong>
										Lublin University of Technology
									</strong>{' '}
									and I am currently continuing my education
									there with a Master's degree in Computer
									Science.
								</p>
							</div>
						</div>

						<p>
							My main technologies are <strong>TypeScript</strong>
							, <strong>Node.js</strong>, and <strong>Go</strong>.
							I work with tools such as Next.js, Hono, PostgreSQL,
							and Docker, and I am especially interested in
							selfhosting, infrastructure, and building software I
							can fully control and deploy myself.
						</p>

						<p>
							Outside of IT, I enjoy skiing, cooking, history,
							karaoke, and spending time with animals.
						</p>
					</div>

					<div className='col-span-1 mt-4 flex flex-col items-center gap-10 lg:col-span-5 lg:mt-0'>
						<div className='group relative'>
							<div className='absolute inset-0 rounded-[2.5rem] bg-primary/20 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100' />

							<Image
								src='/images/witold-512.png'
								alt='Witold Zawada'
								width={400}
								height={400}
								className='relative z-10 h-72 w-72 rounded-4xl object-cover shadow-2xl ring-1 ring-base-content/10 transition-transform duration-500 group-hover:-translate-y-2 md:h-80 md:w-80'
							/>
						</div>

						<div className='flex w-full max-w-[320px] flex-col gap-3'>
							<div className='mb-3 flex items-center gap-4'>
								<div className='h-px flex-1 bg-base-content/10' />
								<span className='text-[10px] font-bold uppercase tracking-widest text-base-content/90'>
									Download Resume
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
									CV (English)
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
									CV (Polish)
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
