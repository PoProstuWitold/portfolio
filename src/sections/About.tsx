/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Skill from '@/components/Skill'
import { mySkills } from '@/utils/constans'

const { dbsAndDevOps, libsAndFrameworks, languages, learning, others } = mySkills

const About: React.FC = () => {
	return (
		<section id="about" className="min-h-screen pb-10 bg-base-100">
			<br />
			<br />
			<h1 className="text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary">About me</h1>
			<br />
			<div className="flex flex-col justify-start mx-6 lg:mx-20 lg:flex-row">
				<div className="flex-grow lg:max-w-[50%] lg:mr-10">
					<h2 className="text-3xl font-bold text-left">
						Short story
					</h2>
					<br />
					<p className="text-2xl text-justify">
						I'm Witold Zawada. Self-taught web developer. I started
						my coding journey in 2020 in high school. I realised I wanna dive deeper into it. 
						After short time trying different
						languages and different fields of coding I fell in love
						with web dev, especially Node.js and TypeScript and that's
						why I'm here today.
					</p>
					<p className="my-5 text-2xl text-justify">
						Want to see more? Be sure to visit my{' '}
						<a
							className="underline"
							href="https://github.com/PoProstuWitold"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</p>
					<p className="my-5 text-2xl text-justify">
						Besides programming, I also like video games, skiing,
						history and playing with my pets.
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
				<div className="flex-grow mt-10 lg:mt-0 lg:max-w-[50%] mx-0">
					<h2 className="mx-1 text-3xl font-bold text-left">Skills</h2>
					<br />
					<h2 className="mx-1 text-2xl font-bold text-left">Languages & Runtimes</h2>
					<div className="flex flex-wrap mb-4">
						{languages.map((skill, index) => {
							return <Skill key={index} title={skill} />
						})}
					</div>
					<h2 className="mx-1 text-2xl font-bold text-left">
						Frameworks & Libraries
					</h2>
					<div className="flex flex-wrap mb-4">
						{libsAndFrameworks.map((skill, index) => {
							return <Skill key={index} title={skill} />
						})}
					</div>
					<h2 className="mx-1 text-2xl font-bold text-left">
						Databases & DevOps
					</h2>
					<div className="flex flex-wrap mb-4">
						{dbsAndDevOps.map((skill, index) => {
							return <Skill key={index} title={skill} />
						})}
					</div>
					<h2 className="mx-1 text-2xl font-bold text-left">
						Others
					</h2>
					<div className="flex flex-wrap mb-4">
						{others.map((skill, index) => {
							return <Skill key={index} title={skill} />
						})}
					</div>
					<h2 className="mx-1 text-2xl font-bold text-left">
						Currently learning
					</h2>
					<div className="flex flex-wrap mb-4">
						{learning.map((skill, index) => {
							return <Skill key={index} title={skill} />
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
