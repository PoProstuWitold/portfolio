import React from 'react'

import Skill from './Skill'

interface ProjectProps {
	project: {
		name: string
		description: string
		application: string
		repo: string
		skills: Array<string>
	}
}

const Project: React.FC<ProjectProps> = ({
	project
}) => {
	return (
		<>
			<div className="flex flex-col my-10 bg-base-300 p-6 lg:w-[40%] rounded-2xl hover:shadow-2xl hover:cursor-pointer transition-all">
				<div className="flex flex-col">
					<h2 className="my-3 text-3xl font-bold text-center">
						<a
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
							href={project.repo}
						>
							{project.name}
						</a>
					</h2>
					<span className="pl-2 mx-1 my-3 font-mono font-bold border-l-4 text-secondary border-secondary">{project.application}</span>
				</div>
				<div>
					<p className="mx-1 my-3 text-xl text-justify">{project.description}</p>
					<div className="flex flex-wrap">
						{project.skills.map((skill, index) => {
							return <Skill key={index} title={skill} />
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Project
