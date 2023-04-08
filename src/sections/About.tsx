/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Skill from '@/components/Skill'
import { mySkills } from '@/utils/constans'
import Image from 'next/image'
import Link from 'next/link'

const { dbsAndDevOps, libsAndFrameworks, languages, learning, others } = mySkills

const About: React.FC = () => {
	return (
		<section id="about" className="min-h-screen pt-20 flex flex-col gap-8 py-10 cursor-default bg-base-100">
			<h1 className="text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary">About me</h1>
			<div className="flex flex-col justify-start mx-6 lg:mx-20 lg:flex-row">
				<div className="flex-grow lg:max-w-[50%] lg:mr-10">
					<div className='flex flex-col'>
					<h2 className="text-3xl font-bold text-left">
						Short story
					</h2>
					<br />
					<p className="text-2xl text-justify">
						I'm Witold Zawada. Self-taught web developer. I'm constantly expanding my skills in both backend and frontend development to understand both domains and create complete, secure, and user-friendly applications using technologies such as TypeScript, Node.js and React.
					</p>
					<p className="gap-2 my-5 text-2xl text-justify">
						Want to see more? Be sure to visit my{" "}
						<a
							className="underline"
							href="https://github.com/PoProstuWitold"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<span> & </span>
						<a
							className="underline"
							href="https://www.linkedin.com/in/witoldzawada/"
							target="_blank"
							rel="noreferrer"
						>
							Linkedin
						</a>
					</p>
					<p className="my-5 text-2xl text-justify">
						In addition to programming, I enjoy video games, skiing, history, 
						and spending time with my beloved pets.
					</p>
					<div className="flex">
						<a
							href="/#contact"
							className="lg:mx-[1px] btn btn-lg btn-outline w-60 mx-auto"
						>
							Contact
						</a>
					</div>
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
				<div className="flex flex-col flex-grow mt-10 lg:mt-0 lg:max-w-[50%] mx-0 items-center gap-6">
					<Image 
						src={`/images/witold-512.png`} alt="" width={512} height={512}  
						className="w-[22rem] mask mask-squircle m-0"
					/> 
					<div className='flex flex-col items-center gap-2'>
						<span className='gap-4 font-bold text-3xl'>Witold Zawada</span>
						<span className='gap-4 italic'>
							Download my CV in 
							<Link href="/resources/Witold_Zawada_CV-en-public.pdf" target="_blank" rel="noopener noreferrer" >
								<button className='underline mx-1 font-semibold italic'>English</button>
							</Link>
							or 
							<Link href="/resources/Witold_Zawada_CV-pl-public.pdf" target="_blank" rel="noopener noreferrer" >
								<button className='underline mx-1 font-semibold italic'>Polish</button>
							</Link> 
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
