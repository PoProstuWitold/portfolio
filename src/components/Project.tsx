import React from 'react'

import Skill from './Skill'

interface ProjectProps {
	name: string
	description: string
	repo: string
	skills: Array<string>
}

const Project: React.FC<ProjectProps> = ({
	name,
	description,
	repo,
	skills
}) => {
	return (
		<>
			<div className="flex flex-col my-10 lg:flex-row">
				<div className="flex flex-col flex-grow lg:max-w-[50%]">
					<h2 className="mx-auto my-4 text-3xl font-bold">
						<a
							className="underline"
							target="_blank"
							rel="noreferrer"
							href={repo}
						>
							{name}
						</a>
					</h2>
				</div>
				<div className="flex-grow lg:max-w-[50%]">
					<br />
					<p className="mx-1 text-2xl text-justify">{description}</p>
					<div className="flex flex-wrap">
						{skills.map((skill, index) => {
							return <Skill key={index} title={skill} />
						})}
					</div>
					<div className="flex"></div>
				</div>
			</div>
		</>
	)
}

export default Project
