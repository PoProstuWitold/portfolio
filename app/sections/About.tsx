/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

const About: React.FC = () => {
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
							I'm a self-taught developer from Poland,
							consistently growing toward a fullstack role. I
							build modern web applications with a focus on
							security, clean code and great user experience. I
							primarily work with Node.js, TypeScript and Go,
							using technologies such as Next.js, Hono and
							PostgreSQL.
						</p>
						<p className='text-justify'>
							I'm interested in selfhosting, programming,
							exploring new technologies and tech news. Outside of
							IT, I enjoy skiing, history, karaoke, video games,
							cooking and spending time with animals.
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
								Linkedin
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
				{/* SKILLS */}
				{/* <div className="flex-grow mt-10 lg:mt-0 lg:max-w-[50%] mx-0">
					<h2 className="mx-1 text-3xl font-bold text-left">Skills</h2>
					<br />
					{languages && languages.length > 0 && <>
						<h2 className="mx-1 text-2xl font-bold text-left">Languages & Runtimes</h2>
						<div className="flex flex-wrap mb-4">
							{languages.map((skill, index) => {
								return <Skill key={index} title={skill} />
							})}
						</div>
					</>}
					{libsAndFrameworks && libsAndFrameworks.length > 0 && <>
						<h2 className="mx-1 text-2xl font-bold text-left">
							Frameworks & Libraries
						</h2>
						<div className="flex flex-wrap mb-4">
							{libsAndFrameworks.map((skill, index) => {
								return <Skill key={index} title={skill} />
							})}
						</div>
					</>}
					{dbsAndDevOps && dbsAndDevOps.length > 0 && <>
						<h2 className="mx-1 text-2xl font-bold text-left">
							Databases & DevOps
						</h2>
						<div className="flex flex-wrap mb-4">
							{dbsAndDevOps.map((skill, index) => {
								return <Skill key={index} title={skill} />
							})}
						</div>
					</>}
					{others && others.length > 0 && <>
						<h2 className="mx-1 text-2xl font-bold text-left">
							Others
						</h2>
						<div className="flex flex-wrap mb-4">
							{others.map((skill, index) => {
								return <Skill key={index} title={skill} />
							})}
						</div>
					</>}
					{learning && learning.length > 0 && <>
						<h2 className="mx-1 text-2xl font-bold text-left">
							Currently learning
						</h2>
						<div className="flex flex-wrap mb-4">
							{learning.map((skill, index) => {
								return <Skill key={index} title={skill} />
							})}
						</div>
					</>}
				</div> */}
				{/* MY PHOTO & CVs */}
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
						<span className='italic flex flex-row items-center gap-2 text-lg'>
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

export default About
