/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Project from '@/components/Project'
import { projects } from '@/utils/constans'

const Projects: React.FC = () => {
	return (
		<section id="projects" className="min-h-screen py-8 text-2xl cursor-default bg-base-200">
			<br />
			<br />
			<h1 className="text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary">Projects</h1>
			<p className="lg:mx-[5rem] text-justify my-5 mx-6">
				There are some of my projects. I created each of them with passion and certain goals behind each of them. 
				In each of them I tried to understand the technologies behind them by reading documentation, articles, 
				watching videos or doing courses.
			</p>
			<div className="flex flex-col flex-wrap justify-around mx-5 my-10 lg:flex-row lg:mt-0 lg:mx-20">
				{projects.map((project, index) => {
					return (
						<Project
							key={index}
							project={project}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Projects
